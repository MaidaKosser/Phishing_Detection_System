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
MODELS_DIR = os.path.join(BASE_DIR, 'models')
EPATH = os.path.join(MODELS_DIR, 'tfidf_encoder.pkl')

# Dictionary to manage all trained binary weights seamlessly
model_paths = {
    'mlp': os.path.join(MODELS_DIR, 'phishing_dl_model.pkl'),
    'logistic_reg': os.path.join(MODELS_DIR, 'logistic_reg_model.pkl'),
    'linearsvc': os.path.join(MODELS_DIR, 'linearsvc_model.pkl'),
    'random_forest': os.path.join(MODELS_DIR, 'random_forest_model.pkl')
}

loaded_models = {}
encoder = None

try:
    # 1. Load Global Master Feature Extractor
    if os.path.exists(EPATH):
        encoder = joblib.load(EPATH)
        print("\n=======================================================")
        print("[+] SUCCESS: Master TF-IDF Encoder Parsed Successfully.")
    else:
        print("\n[-] CRITICAL ERROR: tfidf_encoder.pkl is missing!")

    # 2. Load All Available Models into RAM Memory
    print("🔄 Initializing Multi-Model Engine Suite...")
    for model_key, path in model_paths.items():
        if os.path.exists(path):
            loaded_models[model_key] = joblib.load(path)
            print(f"    -> [LOADED]: {model_key} model mapped successfully.")
        else:
            print(f"    -> [MISSING]: {model_key} model binary wrapper not found.")
            
    print("[+] SUCCESS: Multi-Model AI Routing Server Is Live!")
    print("=======================================================\n")

except Exception as e:
    print(f"[-] Error loading system binaries: {str(e)}")


@app.route('/predict', methods=['POST'])
def predict():
    global loaded_models, encoder
    
    try:
        data = request.get_json() or {}
        user_url = str(data.get('url', '')).lower().strip()
        
        # Frontend selection capability (Falls back to 'mlp' as production standard)
        selected_model = str(data.get('model_type', 'mlp')).lower().strip()
        
        # Guard rails for empty payloads
        if not user_url:
            return jsonify({'error': 'No URL provided', 'status': 'failed'}), 400
            
        if len(user_url) < 4:
            return jsonify({'prediction': 'Safe', 'status': 'success', 'model_used': selected_model})

        # Ensure encoder and at least the fallback model exist
        if encoder is None or not loaded_models:
            return jsonify({'error': 'Backend models are not initialized or missing.', 'status': 'failed'}), 500

        # Dynamic fallback if requested model isn't compiled yet
        if selected_model not in loaded_models:
            selected_model = list(loaded_models.keys())[0] # Picks whatever is available

        # PURE AI CHARACTER-LEVEL PREDICTION BOUNDARY LAYER
        features = encoder.transform([user_url])
        prediction = loaded_models[selected_model].predict(features)[0]  
        
        # Binary target decoding (1 = Phishing, 0 = Safe)
        result = "Phishing" if prediction == 1 else "Safe"
        
        return jsonify({
            'prediction': result, 
            'status': 'success',
            'model_used': selected_model
        })
        
    except Exception as e:
        return jsonify({'error': f"Runtime internal error: {str(e)}", 'status': 'failed'}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)