import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Localhost Flask Backend URL (Aapki python app.py is port par chal rahi hogi)
  const LOCAL_BACKEND_URL = "http://127.0.0.1:5000/predict";

  const handleCheckUrl = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a web URL first.");
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await fetch(LOCAL_BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        setResult(data.prediction);
      } else {
        setError(data.error || "An error occurred during detection.");
      }
    } catch (err) {
      setError("Cannot connect to Python server. Make sure 'python app.py' terminal me chal raha hai!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🛡️ Phishing Website Detection (Vite App)</h1>
        <p style={styles.subtitle}>React Frontend connected locally to Flask Deep Learning Pipeline.</p>

        <form onSubmit={handleCheckUrl} style={styles.form}>
          <input
            type="text"
            placeholder="Enter URL (e.g., secure-paypal-login.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={styles.input}
            disabled={loading}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Scanning...' : 'Scan URL'}
          </button>
        </form>

        {error && <div style={styles.errorAlert}>{error}</div>}

        {result && (
          <div style={result === 'Phishing' ? styles.phishingResult : styles.safeResult}>
            <h3 style={{ margin: '0 0 5px 0' }}>Analysis Result: {result.toUpperCase()}</h3>
            <p style={{ margin: 0 }}>
              {result === 'Phishing' 
                ? '⚠️ Malicious link detected! This matches known phishing token structures.' 
                : '✅ Structural layout looks benign. Website is safe to visit.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Clean Styles for Presentation
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'Arial, sans-serif' },
  card: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '600px', width: '100%', textAlign: 'center' },
  title: { fontSize: '24px', color: '#1f2937', marginBottom: '10px' },
  subtitle: { fontSize: '14px', color: '#6b7280', marginBottom: '25px' },
  form: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { flex: 1, padding: '12px', borderRadius: '5px', border: '1px solid #d1d5db', fontSize: '15px' },
  button: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' },
  errorAlert: { backgroundColor: '#fee2e2', color: '#b91c1c', padding: '12px', borderRadius: '5px', marginBottom: '20px', fontSize: '14px' },
  phishingResult: { backgroundColor: '#fef2f2', border: '2px solid #f87171', borderRadius: '6px', padding: '15px', color: '#991b1b', textAlign: 'left' },
  safeResult: { backgroundColor: '#f0fdf4', border: '2px solid #4ade80', borderRadius: '6px', padding: '15px', color: '#166534', textAlign: 'left' }
};

export default App;