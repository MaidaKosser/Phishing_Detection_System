import { useState } from 'react';
import { Radio, Cpu, Layers, Globe, ArrowRight, Loader2, ShieldCheck, ShieldAlert } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url.trim()) return alert("Please enter a URL first!");
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        setResult(data.prediction);
      } else {
        alert("Server Error: " + data.error);
      }
    } catch {
      alert("API Error: Ensure Flask backend is running on Port 5000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.viewWrapper}>
      <header style={styles.header}>
        <div style={styles.badge}><Radio size={12} className="animate-pulse" /> Live Hybrid Detection Active</div>
        <h1 style={styles.title}>Phishing Protection Ecosystem</h1>
        <p style={styles.sub}>Analyze domain signatures in real-time using localized multi-layer matrix weights.</p>
      </header>

      <div style={styles.grid}>
        <div style={styles.card}><Cpu color="#38bdf8" size={20} style={{ flexShrink: 0 }} /><div><strong>Primary Engine:</strong> MLP Neural Net Architecture</div></div>
        <div style={styles.card}><Layers color="#a855f7" size={20} style={{ flexShrink: 0 }} /><div><strong>Security Filter:</strong> Adaptive Master Whitelist Layer</div></div>
      </div>

      <div style={styles.panel}>
        <form onSubmit={handleScan}>
          <label style={styles.label}>Analyze Cyber Payload Signature</label>
          <div style={styles.inputWrapper}>
            <div style={styles.icon}><Globe size={18} /></div>
            <input type="text" placeholder="Input URL pattern signature (e.g., login-secure-paypal.com)..." value={url} onChange={(e) => setUrl(e.target.value)} style={styles.field} />
          </div>
          {!loading ? (
            <button type="submit" style={styles.btn}>Execute Integrity Scan Pipeline <ArrowRight size={16} /></button>
          ) : (
            <div style={styles.loader}><Loader2 className="animate-spin" size={18} /> Deploying structural vector arrays...</div>
          )}
        </form>

        {result && (
          <div style={{ ...styles.res, borderColor: result.toLowerCase() === 'safe' ? '#22c55e40' : '#ef444440', backgroundColor: result.toLowerCase() === 'safe' ? '#064e3b15' : '#7f1d1d15' }}>
            <div style={styles.resFlex}>
              {result.toLowerCase() === 'safe' ? <ShieldCheck size={28} color="#22c55e" style={{ flexShrink: 0 }} /> : <ShieldAlert size={28} color="#ef4444" style={{ flexShrink: 0 }} />}
              <div>
                <div style={styles.resLabel}>Assessment Classification Verdict</div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', color: result.toLowerCase() === 'safe' ? '#22c55e' : '#ef4444' }}>STATUS: {result.toUpperCase()}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.4' }}>
                  {result.toLowerCase() === 'safe' ? "Structural integrity check cleared. Secure target signature." : "Dangerous sub-tokens caught. Malicious pattern matched inside pipeline weights."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  viewWrapper: { animation: 'fadeIn 0.3s ease-out', width: '100%', boxSizing: 'border-box' },
  header: { textAlign: 'center', marginBottom: '32px' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#16a5e912', border: '1px solid #16a5e920', borderRadius: '20px', color: '#38bdf8', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '14px' },
  title: { fontSize: 'calc(1.6rem + 1vw)', fontWeight: '800', color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '-0.02em', lineHeight: '1.2' },
  sub: { color: '#64748b', fontSize: '0.95rem', margin: '0 auto', maxWidth: '550px', lineHeight: '1.5' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '24px', width: '100%' },
  card: { display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', backgroundColor: '#0b101d', border: '1px solid #1e293b', borderRadius: '10px', flex: '1 1 240px', color: '#e2e8f0', fontSize: '0.85rem', boxSizing: 'border-box' },
  panel: { backgroundColor: '#0a0f1d', border: '1px solid #161f38', padding: '24px', borderRadius: '14px', boxSizing: 'border-box' },
  label: { display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.02em' },
  inputWrapper: { display: 'flex', position: 'relative', alignItems: 'center', width: '100%' },
  icon: { position: 'absolute', left: '14px', color: '#475569', display: 'flex', alignItems: 'center' },
  field: { width: '100%', padding: '14px 14px 14px 42px', backgroundColor: '#02040a', border: '1px solid #22314d', borderRadius: '8px', color: '#ffffff', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', fontFamily: 'inherit' },
  btn: { width: '100%', marginTop: '14px', padding: '14px', backgroundColor: '#38bdf8', color: '#05070f', border: 'none', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'opacity 0.2s' },
  loader: { width: '100%', marginTop: '14px', padding: '14px', backgroundColor: '#111827', color: '#38bdf8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px solid #1f2937', fontSize: '0.95rem' },
  res: { marginTop: '20px', padding: '16px', borderRadius: '10px', border: '1px solid', boxSizing: 'border-box' },
  resFlex: { display: 'flex', gap: '14px', alignItems: 'flex-start' },
  resLabel: { fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', marginBottom: '2px', letterSpacing: '0.02em' }
};