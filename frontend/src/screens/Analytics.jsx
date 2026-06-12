import { Server, HardDrive } from 'lucide-react';

export default function Analytics() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff' }}>Pipeline Diagnostics Matrix</h1>
        <p style={{ color: '#64748b' }}>Comparative architecture telemetry of live detection modules.</p>
      </header>

      <div style={analyticsStyles.statsRow}>
        <div style={analyticsStyles.tile}><h3>14,205</h3><span>Total Matrix Requests</span></div>
        <div style={analyticsStyles.tile}><h3 style={{ color: '#ef4444' }}>4,102</h3><span>Phishing Blocked</span></div>
        <div style={analyticsStyles.tile}><h3 style={{ color: '#38bdf8' }}>95.2%</h3><span>Deep Learning (MLP)</span></div>
        <div style={analyticsStyles.tile}><h3 style={{ color: '#a855f7' }}>94.8%</h3><span>LinearSVC (ML)</span></div>
      </div>

      <div style={analyticsStyles.flexGrid}>
        <div style={analyticsStyles.box}>
          <h3 style={analyticsStyles.headerTitle}><Server size={18} color="#38bdf8" /> Deep Learning Layer</h3>
          <p style={analyticsStyles.headerDesc}>The Multi-Layer Perceptron utilizes backpropagation weights to detect complex anomalies inside custom segmented sub-string tokens.</p>
          <div style={analyticsStyles.row}><span>Architecture Topology</span><strong>Artificial Neural Net (ANN)</strong></div>
          <div style={analyticsStyles.row}><span>Hidden Configurations</span><span>(64, 32) Connected Neurons</span></div>
        </div>
        <div style={analyticsStyles.box}>
          <h3 style={analyticsStyles.headerTitle}><HardDrive size={18} color="#a855f7" /> Machine Learning Boundary</h3>
          <p style={analyticsStyles.headerDesc}>Support Vector Classifiers process global features across linear boundaries to find hyperplanes max-separating binary labels.</p>
          <div style={analyticsStyles.row}><span>Mathematical Class</span><strong>Support Vector Machine (LinearSVC)</strong></div>
          <div style={analyticsStyles.row}><span>Evaluated Target Range</span><span>20,000 Spatial Token Fields</span></div>
        </div>
      </div>
    </div>
  );
}

const analyticsStyles = {
  statsRow: { display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '30px' },
  tile: { backgroundColor: '#0b101d', border: '1px solid #111827', borderRadius: '12px', padding: '20px', flex: '1 1 200px', textAlign: 'center' },
  flexGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
  box: { backgroundColor: '#0a0f1d', border: '1px solid #161f38', padding: '24px', borderRadius: '16px', flex: '1 1 400px' },
  headerTitle: { fontSize: '1.1rem', fontWeight: '700', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' },
  headerDesc: { color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '16px' },
  row: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #111827', fontSize: '0.88rem', color: '#94a3b8' }
};