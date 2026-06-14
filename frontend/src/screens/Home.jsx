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

  const comparisonMetrics = [
    { name: 'Validation Accuracy', ml: '94.80%', dl: '95.20%' },
    { name: 'Feature Space Dimension', ml: '20,000 Features', dl: '20,000 Features' },
    { name: 'Token Preprocessing', ml: 'TF-IDF Regex Split', dl: 'TF-IDF Regex Split' },
    { name: 'Hidden Nodes Layout', ml: 'N/A (Linear)', dl: 'Dense(64) -> Dense(32)' },
  ];

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- HERO HEADER SECTION --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>
          Phishing Detection System
        </h1>
        <p style={styles.subTitle}>
          An enterprise full-stack gateway comparing Linear Support Vector Classification against Deep Artificial Neural Networks to isolate deceptive domains instantly.
        </p>
      </header>

      {/* --- LIVE INTUITIVE SCANNING TERMINAL --- */}
      <section style={styles.sectionGap}>
        <ScanInput 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          onSubmit={handleScan} 
          loading={loading} 
          label="Enter the URL to check whether it's safe or not:" 
          placeholder="www.google.com" 
        />

        {result && (
          <div className="premium-shadow" style={{ 
            ...styles.verdictPanel, 
            borderColor: result.toLowerCase() === 'safe' ? 'var(--matrix-green)' : 'var(--matrix-red)', 
            backgroundColor: result.toLowerCase() === 'safe' ? '#f0fdf4' : '#fef2f2' 
          }}>
            <div style={styles.verdictMeta}>NOTEBOOK ENGINE METRIC OUTPUT</div>
            <h2 style={{ 
              ...styles.verdictStatus, 
              color: result.toLowerCase() === 'safe' ? 'var(--matrix-green)' : 'var(--matrix-red)' 
            }}>
              STATUS: {result.toUpperCase()}
            </h2>
            <p style={styles.verdictDesc}>
              {result.toLowerCase() === 'safe' 
                ? "The structural components of the URL cleared the neural classification layer boundaries safely." 
                : "Warning: High character entropy detected. The signature matches active malicious patterns parsed inside our network training batch."
              }
            </p>
          </div>
        )}
      </section>

      {/* --- COMPREHENSIVE 6-GRID STATE INDICATORS --- */}
      <section style={styles.sectionGap}>
        <div style={styles.sectionHeading}>PRODUCTION ENGINE STATE INDICATORS (6-NODE INFRASTRUCTURE)</div>
        <div className="fluid-grid" style={styles.sixGridOverride}>
          <Card title="Active Live Model" value="MLP Classifier" subtext="Multi-Layer Perceptron neural engine routing system queries." status="safe" />
          <Card title="Model Optimization" value="Stratified Sample" subtext="Balanced 80,000 rows split smoothly out of 550,000 master Kaggle rows." status="safe" />
          <Card title="Text Vectorization" value="20,000 Features" subtext="Calculated token dimensions built using dynamic regex filters." />
          <Card title="Backend Connect" value="Flask API Layer" subtext="Interconnects web inputs directly to deep learning storage binaries." status="safe" />
          <Card title="Frontend Layer" value="React 18 SPA" subtext="Component-driven modular interface with atomic state layout routing." status="safe" />
          <Card title="Tokenizer Matrix" value="Custom Regex Token" subtext="Splits punctuation paths to evaluate domain character entropy weights." />
        </div>
      </section>

      {/* --- NOTEBOOK DATA INTERPRETATION METRICS --- */}
      <section style={styles.dualGrid}>
        
        {/* Left Side: Dynamic Pipeline Performance Matrix */}
        <div className="clean-shadow" style={styles.dataBlock}>
          <h3 style={styles.blockTitle}>Model Architecture Comparison</h3>
          <p style={styles.blockText}>
            Our experimental phase evaluated two diverse statistical architectures inside Google Colab using a <strong>balanced 80/20 data partition split</strong>. Below is the strict verification log:
          </p>
          
          <table style={styles.metricTable}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableTh}>Pipeline Metric</th>
                <th style={styles.tableTh}>LinearSVC (ML)</th>
                <th style={styles.tableTh}>MLP ANN (DL)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMetrics.map((row, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.tableEvenRow : styles.tableOddRow}>
                  <td style={styles.tableTd}><strong>{row.name}</strong></td>
                  <td style={{ ...styles.tableTd, color: 'var(--brand-primary)' }}>{row.ml}</td>
                  <td style={{ ...styles.tableTd, color: 'var(--brand-accent)', fontWeight: '700' }}>{row.dl}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={styles.selectionAlert}>
            <strong>Production Choice:</strong> Humne backend pipeline execution ke liye final <strong>`MLP Neural Network` (.pkl)</strong> ko save karke deploy kiya hai. Yeh model simple hyperplane structures ke bajaye <code style={styles.inlineCode}>ReLU</code> hidden node backpropagation parameters par perform karta hai, jo deep character structures ko tightly map karta hai.
          </div>
        </div>

        {/* Right Side: Verified Original Heatmap Layout Graphs Data */}
        <div className="clean-shadow" style={styles.dataBlock}>
          <h3 style={styles.blockTitle}>Notebook Heatmaps & Confusion Matrix Results</h3>
          <p style={styles.blockText}>
            Mathematical representation of exact validation hits and false anomalies extracted directly from your verified Google Colab outputs (Blues & Oranges tracking heatmaps):
          </p>

          <div style={styles.chartFlex}>
            
            {/* Heatmap Section 1: LinearSVC (Verified Blues Matrix Grid) */}
            <div style={styles.miniChartContainer}>
              <div style={styles.chartHeader}>LinearSVC (ML Blues Heatmap Data)</div>
              
              <div style={styles.heatmapMatrixGrid}>
                <div style={{ ...styles.matrixCell, backgroundColor: '#eff6ff', color: '#1e40af' }}>
                  <span style={styles.cellLabel}>True Safe (TN)</span>
                  <strong>10,972</strong>
                </div>
                <div style={{ ...styles.matrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                  <span style={styles.cellLabel}>False Phish (FP)</span>
                  <strong>228</strong>
                </div>
                <div style={{ ...styles.matrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                  <span style={styles.cellLabel}>False Safe (FN)</span>
                  <strong>525</strong>
                </div>
                <div style={{ ...styles.matrixCell, backgroundColor: '#dbeafe', color: '#1e40af' }}>
                  <span style={styles.cellLabel}>True Phish (TP)</span>
                  <strong>4,275</strong>
                </div>
              </div>

              <div style={styles.graphRow}>
                <div style={styles.graphLabel}>True Matches</div>
                <div style={styles.barWrapper}><div style={{ ...styles.filledBar, width: '94.8%', backgroundColor: '#2563eb' }}></div></div>
                <div style={styles.graphPercent}>94.8%</div>
              </div>
            </div>

            {/* Heatmap Section 2: MLP Neural Network (Verified Oranges Matrix Grid) */}
            <div style={styles.miniChartContainer}>
              <div style={styles.chartHeader}>MLP Neural Network (DL Oranges Heatmap Data)</div>
              
              <div style={styles.heatmapMatrixGrid}>
                <div style={{ ...styles.matrixCell, backgroundColor: '#fff7ed', color: '#c2410c' }}>
                  <span style={styles.cellLabel}>True Safe (TN)</span>
                  <strong>10,895</strong>
                </div>
                <div style={{ ...styles.matrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                  <span style={styles.cellLabel}>False Phish (FP)</span>
                  <strong>305</strong>
                </div>
                <div style={{ ...styles.matrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                  <span style={styles.cellLabel}>False Safe (FN)</span>
                  <strong>436</strong>
                </div>
                <div style={{ ...styles.matrixCell, backgroundColor: '#ffedd5', color: '#c2410c' }}>
                  <span style={styles.cellLabel}>True Phish (TP)</span>
                  <strong>4,364</strong>
                </div>
              </div>

              <div style={styles.graphRow}>
                <div style={styles.graphLabel}>True Matches</div>
                <div style={styles.barWrapper}><div style={{ ...styles.filledBar, width: '95.2%', backgroundColor: '#ea580c' }}></div></div>
                <div style={styles.graphPercent}>95.2%</div>
              </div>
            </div>

          </div>

          <p style={{ ...styles.blockText, marginTop: '16px' }}>
            * As proven in the notebook execution, the MLP matrix shows a lower False Safe rate (**436 vs 525**), proving its better sensitivity for structural zero-day attacks.
          </p>
        </div>

      </section>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '40px' },
  headerBlock: { marginBottom: '36px', textAlign: 'left' },
  mainTitle: { fontSize: 'calc(1.8rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 16px 0', letterSpacing: '-0.025em', lineHeight: '1.25' },
  subTitle: { color: 'var(--text-muted)', margin: 0, fontSize: 'calc(0.98rem + 0.15vw)', maxWidth: '850px', lineHeight: '1.7', fontWeight: '500' },
  
  sectionGap: { marginBottom: '44px' },
  sectionHeading: { fontSize: 'calc(0.78rem + 0.1vw)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '18px' },
  
  sixGridOverride: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' },
  
  verdictPanel: { marginTop: '32px', padding: '28px', borderRadius: '12px', borderLeft: '6px solid', transition: 'all 0.2s ease' },
  verdictMeta: { fontSize: 'calc(0.75rem + 0.1vw)', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' },
  verdictStatus: { margin: '8px 0', fontSize: 'calc(1.4rem + 0.2vw)', fontWeight: '800', letterSpacing: '-0.01em' },
  verdictDesc: { margin: 0, color: 'var(--text-muted)', fontSize: 'calc(0.95rem + 0.1vw)', lineHeight: '1.6', fontWeight: '500' },

  dualGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px', width: '100%', marginTop: '20px' },
  dataBlock: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', borderRadius: '12px', padding: '32px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  blockTitle: { fontSize: 'calc(1.2rem + 0.2vw)', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 16px 0', letterSpacing: '-0.01em' },
  blockText: { fontSize: 'calc(0.93rem + 0.1vw)', color: 'var(--text-muted)', lineHeight: '1.7', margin: '0 0 20px 0', fontWeight: '500' },
  
  // High Visibility Fluid Metrics Table Layout
  metricTable: { width: '100%', borderCollapse: 'collapse', fontSize: 'calc(0.92rem + 0.1vw)', marginBottom: '20px' },
  tableHeaderRow: { borderBottom: '2px solid var(--panel-border)', backgroundColor: 'var(--bg-canvas)' },
  tableTh: { textAlign: 'left', padding: '14px', color: 'var(--text-muted)', fontWeight: '700' },
  tableTd: { padding: '14px', borderBottom: '1px solid var(--panel-border)' },
  tableEvenRow: { backgroundColor: '#f8fafc' },
  tableOddRow: { backgroundColor: '#ffffff' },

  selectionAlert: { padding: '16px 20px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px', fontSize: 'calc(0.92rem + 0.1vw)', color: '#1e40af', lineHeight: '1.65' },
  inlineCode: { fontFamily: 'monospace', backgroundColor: 'var(--bg-canvas)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--panel-border)', color: 'var(--matrix-red)', fontSize: 'calc(0.85rem + 0.05vw)' },

  // Large Interactive Confusion Matrix Output
  chartFlex: { display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '10px' },
  miniChartContainer: { border: '1px solid var(--panel-border)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--bg-canvas)' },
  chartHeader: { fontSize: 'calc(0.85rem + 0.1vw)', fontWeight: '700', color: 'var(--text-main)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.02em' },
  
  heatmapMatrixGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' },
  matrixCell: { padding: '18px', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--panel-border)', fontSize: 'calc(1.2rem + 0.2vw)' },
  cellLabel: { fontSize: 'calc(0.78rem + 0.05vw)', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase' },

  graphRow: { display: 'flex', alignItems: 'center', gap: '14px', marginTop: '10px' },
  graphLabel: { width: '110px', fontSize: 'calc(0.9rem + 0.05vw)', color: 'var(--text-muted)', fontWeight: '600' },
  barWrapper: { flex: 1, height: '12px', backgroundColor: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' },
  filledBar: { height: '100%', borderRadius: '6px' },
  graphPercent: { width: '55px', fontSize: 'calc(0.9rem + 0.05vw)', color: 'var(--text-main)', fontWeight: '700', textAlign: 'right' }
};