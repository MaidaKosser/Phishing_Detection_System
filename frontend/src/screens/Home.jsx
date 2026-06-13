import { useState } from 'react';
import Card from '../components/Card';
import ScanInput from '../components/ScanInput';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url.trim()) return alert("Vector signature empty.");
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await response.json();
      if (data.status === 'success') setResult(data.prediction);
    } catch {
      alert("Local Engine Gateway connection timeout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- HERO HEADER SECTION --- */}
      <header style={styles.headerBlock}>
        <div style={styles.badge}>REAL-TIME DETECTION SYSTEM</div>
        <h1 style={styles.mainTitle}>
          Deceptive URL Detection Gateway
        </h1>
        <p style={styles.subTitle}>
          Analyze domain structures instantly using our dual-engine machine learning and deep learning architecture to filter out phishing hubs before they compromise user data.
        </p>
      </header>

      {/* --- LIVE UTILITY SCANNING TERMINAL --- */}
      <section style={styles.sectionGap}>
        <ScanInput 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          onSubmit={handleScan} 
          loading={loading} 
          label="Neural Network Query Routing Gateway" 
          placeholder="Paste targeted URL here (e.g., secure-login-verification.com)..." 
        />

        {result && (
          <div className="premium-shadow" style={{ 
            ...styles.verdictPanel, 
            borderColor: result.toLowerCase() === 'safe' ? 'var(--matrix-green)' : 'var(--matrix-red)', 
            backgroundColor: result.toLowerCase() === 'safe' ? '#f0fdf4' : '#fef2f2' 
          }}>
            <div style={styles.verdictMeta}>CLASSIFICATION MATRIX VERDICT</div>
            <h2 style={{ 
              ...styles.verdictStatus, 
              color: result.toLowerCase() === 'safe' ? 'var(--matrix-green)' : 'var(--matrix-red)' 
            }}>
              SYSTEM STATUS: {result.toUpperCase()}
            </h2>
            <p style={styles.verdictDesc}>
              {result.toLowerCase() === 'safe' 
                ? "Token features cleared the neural classification threshold safely. This domain does not match any known malicious distribution layouts." 
                : "Critical Anomaly: The lexical pattern and token distribution array strongly correlate with active deceptive blueprints."
              }
            </p>
          </div>
        )}
      </section>

      {/* --- PERFORMANCE ARCHITECTURE CARDS --- */}
      <section style={styles.sectionGap}>
        <div style={styles.sectionHeading}>DEPLOYED SYSTEM PERFORMANCE</div>
        <div className="fluid-grid">
          <Card title="LinearSVC Core Layer" value="94.8% Accuracy" subtext="Hyperplane margin mapping via high-dimensional token space." status="safe" />
          <Card title="MLPClassifier ANN" value="95.2% Accuracy" subtext="Multi-Layer Perceptron deploying dynamic ReLU hidden nodes." status="safe" />
          <Card title="Vector Grid Features" value="20,000 Dimensions" subtext="Calculated string weights via TF-IDF Vectorizer configuration." />
          <Card title="Hybrid Core Layer" value="Whitelist Active" subtext="Production fallback system protecting verified trusted nodes." status="safe" />
        </div>
      </section>

      {/* --- BRIEF PLATFORM OVERVIEW (CLEAN & MINIMAL) --- */}
      <section className="clean-shadow" style={styles.overviewBlock}>
        <h3 style={styles.blockTitle}>How Deception Analysis Works</h3>
        <p style={styles.blockText}>
          Unlike traditional static blacklists that fail against zero-day phishing setups, <strong>AntiPhish parses the raw lexical DNA of a website link</strong>. By transforming character sequences into high-dimensional numerical feature blocks, our synchronized classification layers capture subtle mathematical red flags—such as token abnormalities and high-entropy subdomains—in milliseconds.
        </p>
      </section>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '40px' },
  headerBlock: { marginBottom: '32px', textAlign: 'left' },
  badge: { display: 'inline-block', backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.06em', color: 'var(--brand-accent)', marginBottom: '14px' },
  mainTitle: { fontSize: 'calc(1.6rem + 1vw)', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 12px 0', letterSpacing: '-0.025em', lineHeight: '1.2' },
  subTitle: { color: 'var(--text-muted)', margin: 0, fontSize: '0.98rem', maxWidth: '750px', lineHeight: '1.6', fontWeight: '500' },
  
  sectionGap: { marginBottom: '36px' },
  sectionHeading: { fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '14px' },
  
  verdictPanel: { marginTop: '24px', padding: '24px', borderRadius: '12px', borderLeft: '6px solid', transition: 'all 0.2s ease' },
  verdictMeta: { fontSize: '0.72rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' },
  verdictStatus: { margin: '6px 0', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.01em' },
  verdictDesc: { margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.55', fontWeight: '500' },

  overviewBlock: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', borderRadius: '12px', padding: '28px', textAlign: 'left' },
  blockTitle: { fontSize: '1.1rem', fontWeight: '800', color: 'var(--brand-primary)', margin: '0 0 10px 0', letterSpacing: '-0.01em' },
  blockText: { fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.65', margin: 0, fontWeight: '500' }
};