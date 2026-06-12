import joblib
import re

# 1. Custom function ko PEHLE define karna zaroori hai
def clean_url(url_text):
    words = re.split(r'[/-_.\?=\s]', url_text)
    return [w for w in words if len(w) > 0]

# 2. Loading ab BAAD mein hogi (Ab crash nahi karega)
print("Loading saved models...")
model = joblib.load('phishing_dl_model.pkl')
encoder = joblib.load('tfidf_encoder.pkl')

# Test karne ke liye sample links
test_urls = [
    "google.com",
    "facebook.com",
    "paypal-secure-update-login-verify.com",
    "free-netflix-premium.tk"
]

print("\n--- Running Internal Model Test ---")
for url in test_urls:
    features = encoder.transform([url])
    pred = model.predict(features)[0]
    result = "Phishing" if pred == 1 else "Safe"
    print(f"URL: {url} ---> Prediction: {result}")