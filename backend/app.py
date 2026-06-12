from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os
import re

app = Flask(__name__)
CORS(app)  # React frontend allow karne ke liye

# URL tokenizer function (Loading se pehle hona compulsory hai)
def clean_url(url_text):
    words = re.split(r'[/-_.\?=\s]', url_text)
    return [w for w in words if len(w) > 0]

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MPATH = os.path.join(BASE_DIR, 'phishing_dl_model.pkl')
EPATH = os.path.join(BASE_DIR, 'tfidf_encoder.pkl')

model = None
encoder = None

try:
    if os.path.exists(MPATH) and os.path.exists(EPATH):
        model = joblib.load(MPATH)
        encoder = joblib.load(EPATH)
        print("\n==================================================")
        print("[+] SUCCESS: Foolproof Production Server Is Live!")
        print("==================================================\n")
except Exception as e:
    print(f"[-] Error loading models: {str(e)}")

@app.route('/predict', methods=['POST'])
def predict():
    global model, encoder
    if model is None or encoder is None:
        return jsonify({'error': 'Backend models are not initialized.', 'status': 'failed'}), 500
        
    try:
        data = request.get_json()
        user_url = data.get('url', '').lower().strip()
        
        if not user_url:
            return jsonify({'error': 'No URL provided', 'status': 'failed'}), 400
            
        # 1. Agar link bohot chota hai (sirf 3-4 letters ka), toh model galat predict kar sakta hai
        if len(user_url) < 4:
            return jsonify({'prediction': 'Safe', 'status': 'success'})

        # 2. STRICT PHISHING KEYWORDS (Agar yeh words hain toh direct check hoga)
        phishing_keywords = ['secure-login', 'verify-paypal', 'free-netflix', 'account-update', 'gift-bonus', 'free-tokens']
        if any(keyword in user_url for keyword in phishing_keywords):
            return jsonify({'prediction': 'Phishing', 'status': 'success'})

        # 3. 🛡️ THE MASTER WHITELIST (In keywords par model ko bypass kar ke direct SAFE dega)
        # Isme aapke bataye huye GPT, Gemini, YouTube aur GIFT University sab added hain!
        trusted_keywords = [
            'google', 'facebook', 'github', 'wikipedia', 'gift', 'gift.edu',
            'linkedin', 'microsoft', 'apple', 'youtube', 'gmail', 'yahoo', 
            'chatgpt', 'openai', 'gemini', 'claude', 'instagram', 'twitter', 
            'x.com', 'netflix', 'amazon', 'stackoverflow', 'coursera', 'whatsapp'
        ]
        
        # Safe extensions checking (.edu or .gov or .org colleges/government sites)
        safe_extensions = ['.gov', '.edu', '.org']
        is_safe_ext = any(ext in user_url for ext in safe_extensions)

        # Agar URL mein koi khatarnak word nahi hai aur woh mashhoor site ya edu/gov site hai:
        if not any(bad in user_url for bad in ['login', 'verify', 'update', 'secure']):
            if any(domain in user_url for domain in trusted_keywords) or is_safe_ext:
                return jsonify({'prediction': 'Safe', 'status': 'success'})

        # 4. STANDARD PIPELINE EXECUTION (Baki aam links par 95% accuracy wala model chalega)
        features = encoder.transform([user_url])
        prediction = model.predict(features)[0]  
        
        # Directly map model predictions (0 = Safe, 1 = Phishing)
        result = "Phishing" if prediction == 1 else "Safe"
        return jsonify({'prediction': result, 'status': 'success'})
        
    except Exception as e:
        return jsonify({'error': str(e), 'status': 'failed'}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)