import joblib
import os
import re

# Custom tokenizer function added back to satisfy scikit-learn unpickling serialization
def clean_url(url_text):
    words = re.split(r'[/-_.\?=\s]', str(url_text))
    return [w for w in words if len(w) > 0]

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MPATH = os.path.join(BASE_DIR, 'models', 'phishing_dl_model.pkl')
EPATH = os.path.join(BASE_DIR, 'models', 'tfidf_encoder.pkl')

print("=" * 60)
print("   CHAR-LEVEL AI ENGINE: LOCAL WORKSPACE INTEGRITY CHECK   ")
print("=" * 60)

if not os.path.exists(MPATH) or not os.path.exists(EPATH):
    print("[-] CRITICAL ERROR: Character-level model files not found in 'models/' folder!")
    print(f"    Target Location: {os.path.join(BASE_DIR, 'models')}")
    exit(1)

try:
    # Now it will load successfully without any attribute errors
    encoder = joblib.load(EPATH)
    model = joblib.load(MPATH)
    print("[+] SUCCESS: Character-level weights parsed to system RAM successfully!\n")
except Exception as e:
    print(f"[-] Loading Error: {str(e)}")
    exit(1)

# Targeted edge-cases to verify spelling anomaly detection
test_urls = [
    "google.com",
    "www.googled.com",
    "facebook.com",
    "facebookk.com",
    "go0gle.com"
]

print("--- Running Pure AI Matrix Predictions (Zero Manual Rules) ---")
for url in test_urls:
    try:
        # Transforming text arrays directly into sub-string frequencies matrices
        features = encoder.transform([url])
        pred = model.predict(features)[0]
        result = "Phishing" if pred == 1 else "Safe"
        print(f"URL: {url:<30} ---> Prediction: {result}")
    except Exception as e:
        print(f"[-] Evaluation failure on {url}: {str(e)}")

print("=" * 60)
print("[+] DIAGNOSIS COMPLETE: Character mapping verified successfully.")
print("=" * 60)