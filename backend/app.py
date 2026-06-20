from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os
import re

app = Flask(__name__)
# Enable Cross-Origin Resource Sharing for React Frontend integration
CORS(app)

# ====================================================================
# CUSTOM TOKENIZER (REQUIRED FOR UNPICKLING TF-IDF ENCODER)
# ====================================================================
def clean_url(url_text):
    words = re.split(r'[/-_.\?=\s]', str(url_text))
    return [w for w in words if len(w) > 0]

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MPATH = os.path.join(BASE_DIR, 'models', 'phishing_dl_model.pkl')
EPATH = os.path.join(BASE_DIR, 'models', 'tfidf_encoder.pkl')

model = None
encoder = None

try:
    if os.path.exists(MPATH) and os.path.exists(EPATH):
        # clean_url defined above ensures joblib deserializes seamlessly now
        encoder = joblib.load(EPATH)
        model = joblib.load(MPATH)
        print("\n=======================================================")
        print("[+] SUCCESS: Pure AI Character-Wise Server Is Live!")
        print("=======================================================\n")
    else:
        print("\n[-] ERROR: Models missing in 'models/' directory!\n")
except Exception as e:
    print(f"[-] Error loading character models: {str(e)}")

@app.route('/predict', methods=['POST'])
def predict():
    global model, encoder
    if model is None or encoder is None:
        return jsonify({'error': 'Backend models are not initialized.', 'status': 'failed'}), 500
        
    try:
        data = request.get_json()
        user_url = str(data.get('url', '')).lower().strip()
        
        # Guard rails for empty or incomplete payloads
        if not user_url:
            return jsonify({'error': 'No URL provided', 'status': 'failed'}), 400
            
        if len(user_url) < 4:
            return jsonify({'prediction': 'Safe', 'status': 'success'})

        # PURE CHARACTER-LEVEL PREDICTION BOUNDARY LAYER
        features = encoder.transform([user_url])
        prediction = model.predict(features)[0]  
        
        # Binary target decoding (1 = Phishing, 0 = Safe)
        result = "Phishing" if prediction == 1 else "Safe"
        return jsonify({'prediction': result, 'status': 'success'})
        
    except Exception as e:
        return jsonify({'error': f"Runtime internal error: {str(e)}", 'status': 'failed'}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)