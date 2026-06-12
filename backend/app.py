from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import re

app = Flask(__name__)

# CORS lagana zaroori hai taake local React app isse connect ho sake
CORS(app)

# Model aur Vectorizer load karein
try:
    model = joblib.load('phishing_dl_model.pkl')
    encoder = joblib.load('tfidf_encoder.pkl')
    print("[+] Models loaded successfully!")
except Exception as e:
    print(f"[-] Error loading models: {e}")

# URL tokenizer function (jo aapke notebook me tha)
def clean_url(url_text):
    words = re.split(r'[/-_.\?=\s]', url_text)
    return [w for w in words if len(w) > 0]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_url = data.get('url', '')
        
        if not user_url:
            return jsonify({'error': 'No URL provided', 'status': 'failed'}), 400
            
        # URL ko numeric features me convert karein
        features = encoder.transform([user_url])
        
        # Deep Learning model se prediction lein
        prediction = model.predict(features)[0]  # 0 = Safe, 1 = Phishing
        
        result = "Phishing" if prediction == 1 else "Safe"
        return jsonify({'prediction': result, 'status': 'success'})
        
    except Exception as e:
        return jsonify({'error': str(e), 'status': 'failed'}), 500

if __name__ == '__main__':
    # Yeh app local port 5000 par chalegi
    app.run(host='127.0.0.1', port=5000, debug=True)