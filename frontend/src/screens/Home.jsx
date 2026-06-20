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
    { name: 'Validation Accuracy', logReg: '95.5%', svc: '96.4%', rf: '84.8%', mlp: '97.0%' },
    { name: 'Precision Score', logReg: '95.1%', svc: '95.2%', rf: '98.2%', mlp: '94.9%' },
    { name: 'Recall (Catch Rate)', logReg: '89.5%', svc: '92.7%', rf: '50.3%', mlp: '95.0%' },
    { name: 'Feature Strategy', logReg: 'Char-Ngram', svc: 'Char-Ngram', rf: 'Char-Ngram', mlp: 'Char-Ngram' },
  ];

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- HERO HEADER SECTION --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>
          Phishing Website Detection System
        </h1>
        <p style={styles.subTitle}>
          An enterprise gateway benchmarking traditional Machine Learning classifiers against Deep Artificial Neural Networks using character sequence mutations.
        </p>
      </header>

      {/* --- LIVE INTUITIVE SCANNING TERMINAL --- */}
      <section style={styles.sectionGap}>
        <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>
          URL Scan Console
        </div>
        <ScanInput 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          onSubmit={handleScan} 
          loading={loading} 
          label="Enter the URL to verify connection safety boundaries:" 
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
                ? "The structural components cleared the character-level neural classification layer boundaries safely." 
                : "Warning: High token entropy anomaly detected. Sub-string slices match active domain spoofing footprints."
              }
            </p>
          </div>
        )}
      </section>

       {/* --- PRODUCTION ENGINE STATE INDICATORS --- */}
      <section style={styles.sectionGap}>
        <div style={styles.sectionHeading}>PRODUCTION ENGINE STATE INDICATORS</div>
        <div style={styles.sixGridOverride}>
          <Card title="Active Live Model" value="MLP Classifier" subtext="Multi-Layer Perceptron neural system routing queries." status="safe" />
          <Card title="Model Optimization" value="Stratified Sample" subtext="Balanced 280,000 dataset rows processed smoothly." status="safe" />
          <Card title="Text Vectorization" value="20,000 Features" subtext="Calculated vector dimensions built out of explicit character sub-string arrays." />
          <Card title="Backend Connect" value="Flask API Layer" subtext="Interconnects web inputs directly to deep learning storage binaries." status="safe" />
          <Card title="Frontend Layer" value="React 18 SPA" subtext="Component-driven modular interface with atomic state layout routing." status="safe" />
          <Card title="Tokenizer Matrix" value="Character Level N-Gram" subtext="Analyzes deep structural char clusters natively to expose spoofed brands." status="safe" />
        </div>
      </section>

       {/* --- BOTTOM FULL COMPARISON METRICS SUMMARY TABLE --- */}
      <section style={styles.sectionGap}>
        <div className="clean-shadow" style={styles.glassBlock}>
          <div>
            <div style={styles.badgeLabel}>Performance Summary</div>
            <h3 style={styles.blockTitle}>Core Pipeline Metrics Comparison</h3>
            <p style={styles.blockText}>
              Verification logs across standard data slices using an <strong>80/20 train-test partition scheme</strong> inside Google Colab environment:
            </p>
            
            <div style={styles.tableResponsiveWrapper}>
              <table style={styles.metricTable}>
                <thead>
                  <tr style={styles.tableHeaderRow}>
                    <th style={styles.tableTh}>Pipeline Metric</th>
                    <th style={styles.tableTh}>Logistic Regression</th>
                    <th style={styles.tableTh}>LinearSVC</th>
                    <th style={styles.tableTh}>Random Forest</th>
                    <th style={styles.tableTh_Active}>MLP Neural Net (DL)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonMetrics.map((row, index) => (
                    <tr key={index} style={index % 2 === 0 ? styles.tableEvenRow : styles.tableOddRow}>
                      <td style={styles.tableTd}><strong>{row.name}</strong></td>
                      <td style={styles.tableTd}>{row.logReg}</td>
                      <td style={styles.tableTd}>{row.svc}</td>
                      <td style={styles.tableTd}>{row.rf}</td>
                      <td style={styles.tableTd_ActiveContent}>{row.mlp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={styles.selectionAlert}>
            <strong>Active Production Selection:</strong> As proven above, the <code>MLP Neural Network (97.0% Accuracy)</code> controls risk margins safely, minimizing critical False Safe slips down to only 837 cases compared to traditional classifiers.
          </div>
        </div>
      </section>
      {/* --- CONFUSION MATRICES LEVEL 1: TWO SIDE-BY-SIDE CARDS --- */}
      <section style={styles.sectionGridGap}>
        <div style={styles.sectionHeading}>DETAILED VALIDATION MATRIX BREAKDOWN (PART 1)</div>
        <div style={styles.matrixSideBySideRow}>
          
          {/* MODEL 1: LOGISTIC REGRESSION */}
          <div className="clean-shadow" style={styles.largeMatrixContainer}>
            <div style={styles.matrixHeaderBlock}>
              <h3 style={styles.matrixTitle}>LOGISTIC REGRESSION (ML) MATRIX</h3>
              <p style={styles.matrixSubText}>Traditional linear statistical character vector mapping validation bounds.</p>
            </div>
            <div style={styles.largeMatrixHeatmapGrid}>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#1e3a8a', color: '#ffffff' }}>
                <span style={styles.largeCellLabel}>TRUE SAFE (TN)</span><strong>38,420</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#dbeafe', color: '#1e3a8a' }}>
                <span style={styles.largeCellLabel}>FALSE PHISH (FP)</span><strong>780</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                <span style={styles.largeCellLabel}>FALSE SAFE (FN)</span><strong>1,763</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#2563eb', color: '#ffffff' }}>
                <span style={styles.largeCellLabel}>TRUE PHISH (TP)</span><strong>15,037</strong>
              </div>
            </div>
            <div style={styles.progressionMatchRow}>
              <span style={styles.progressionLabel}>True Matches</span>
              <div style={styles.largeBarWrapper}>
                <div style={{ ...styles.largeFilledBar, width: '95.5%', backgroundColor: '#2563eb' }}></div>
              </div>
              <span style={styles.progressionPercent}>95.5%</span>
            </div>
          </div>

          {/* MODEL 2: LINEAR SVC */}
          <div className="clean-shadow" style={styles.largeMatrixContainer}>
            <div style={styles.matrixHeaderBlock}>
              <h3 style={styles.matrixTitle}>LINEAR SVC MATRIX</h3>
              <p style={styles.matrixSubText}>Support Vector Machine boundary maximizer processing sub-string coordinates.</p>
            </div>
            <div style={styles.largeMatrixHeatmapGrid}>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#581c87', color: '#ffffff' }}>
                <span style={styles.largeCellLabel}>TRUE SAFE (TN)</span><strong>38,412</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#f3e8ff', color: '#581c87' }}>
                <span style={styles.largeCellLabel}>FALSE PHISH (FP)</span><strong>788</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                <span style={styles.largeCellLabel}>FALSE SAFE (FN)</span><strong>1,225</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#7c3aed', color: '#ffffff' }}>
                <span style={styles.largeCellLabel}>TRUE PHISH (TP)</span><strong>15,575</strong>
              </div>
            </div>
            <div style={styles.progressionMatchRow}>
              <span style={styles.progressionLabel}>True Matches</span>
              <div style={styles.largeBarWrapper}>
                <div style={{ ...styles.largeFilledBar, width: '96.4%', backgroundColor: '#7c3aed' }}></div>
              </div>
              <span style={styles.progressionPercent}>96.4%</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONFUSION MATRICES LEVEL 2: NEXT TWO SIDE-BY-SIDE CARDS --- */}
      <section style={styles.sectionGridGap}>
        <div style={styles.sectionHeading}>DETAILED VALIDATION MATRIX BREAKDOWN (PART 2)</div>
        <div style={styles.matrixSideBySideRow}>
          
          {/* MODEL 3: RANDOM FOREST */}
          <div className="clean-shadow" style={styles.largeMatrixContainer}>
            <div style={styles.matrixHeaderBlock}>
              <h3 style={styles.matrixTitle}>RANDOM FOREST MATRIX</h3>
              <p style={styles.matrixSubText}>Ensemble decision trees analyzing complex layout parameter clusters.</p>
            </div>
            <div style={styles.largeMatrixHeatmapGrid}>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#14532d', color: '#ffffff' }}>
                <span style={styles.largeCellLabel}>TRUE SAFE (TN)</span><strong>39,049</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#dcfce7', color: '#14532d' }}>
                <span style={styles.largeCellLabel}>FALSE PHISH (FP)</span><strong>151</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                <span style={styles.largeCellLabel}>FALSE SAFE (FN)</span><strong>8,348</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#16a34a', color: '#ffffff' }}>
                <span style={styles.largeCellLabel}>TRUE PHISH (TP)</span><strong>8,452</strong>
              </div>
            </div>
            <div style={styles.progressionMatchRow}>
              <span style={styles.progressionLabel}>True Matches</span>
              <div style={styles.largeBarWrapper}>
                <div style={{ ...styles.largeFilledBar, width: '84.8%', backgroundColor: '#16a34a' }}></div>
              </div>
              <span style={styles.progressionPercent}>84.8%</span>
            </div>
          </div>

          {/* MODEL 4: ACTIVE MLP NEURAL NETWORK */}
          <div className="clean-shadow" style={styles.largeMatrixContainer_Active}>
            <div style={styles.matrixHeaderBlock}>
              <div style={styles.activeEngineBadge}>ACTIVE PRODUCTION ENGINE</div>
              <h3 style={{ ...styles.matrixTitle, color: '#c2410c' }}>MLP NEURAL NETWORK (DL) MATRIX</h3>
              <p style={styles.matrixSubText}>Multi-Layer Perceptron artificial neural network detecting structural anomalies.</p>
            </div>
            <div style={styles.largeMatrixHeatmapGrid}>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#7c2d12', color: '#ffffff' }}>
                <span style={styles.largeCellLabel_Active}>TRUE SAFE (TN)</span><strong>38,344</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#ffedd5', color: '#7c2d12' }}>
                <span style={styles.largeCellLabel_Active}>FALSE PHISH (FP)</span><strong>856</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#fef2f2', color: '#991b1b' }}>
                <span style={styles.largeCellLabel_Active}>FALSE SAFE (FN)</span><strong>837</strong>
              </div>
              <div style={{ ...styles.largeMatrixCell, backgroundColor: '#ea580c', color: '#ffffff' }}>
                <span style={styles.largeCellLabel_Active}>TRUE PHISH (TP)</span><strong>15,963</strong>
              </div>
            </div>
            <div style={styles.progressionMatchRow}>
              <span style={styles.progressionLabel}>True Matches</span>
              <div style={styles.largeBarWrapper}>
                <div style={{ ...styles.largeFilledBar, width: '97.0%', backgroundColor: '#ea580c' }}></div>
              </div>
              <span style={{ ...styles.progressionPercent, color: '#ea580c' }}>97.0%</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '60px', maxWidth: '1650px', margin: '0 auto', padding: '0 24px' },
  headerBlock: { marginBottom: '44px', textAlign: 'left', marginTop: '36px' },
  mainTitle: { fontSize: 'calc(2.2rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 14px 0', letterSpacing: '-0.025em', lineHeight: '1.2' },
  subTitle: { color: 'var(--text-muted)', margin: 0, fontSize: 'calc(1.15rem )', maxWidth: '1050px', lineHeight: '1.7', fontWeight: '400' },
  
  sectionGap: { marginBottom: '52px' },
  sectionGridGap: { marginBottom: '32px' }, // Symmetrical layout adjustment
  sectionHeading: { fontSize: '15px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '20px' },
  
  sixGridOverride: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' },
  
  verdictPanel: { marginTop: '32px', padding: '30px', borderRadius: '14px', borderLeft: '8px solid' },
  verdictMeta: { fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' },
  verdictStatus: { margin: '8px 0', fontSize: 'calc(1.8rem + 0.4vw)', fontWeight: '900', letterSpacing: '-0.01em' },
  verdictDesc: { margin: 0, color: 'var(--text-muted)', fontSize: '18px', lineHeight: '1.65', fontWeight: '500' },

  // TWO CARDS PER LINE (SIDE BY SIDE ROW)
  matrixSideBySideRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(540px, 1fr))', gap: '32px' },
  largeMatrixContainer: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' },
  largeMatrixContainer_Active: { backgroundColor: '#ffffff', border: '2.5px solid #fdba74', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px', boxShadow: '0 10px 25px -5px rgb(234 88 12 / 0.1)' },
  matrixHeaderBlock: { textAlign: 'left' },
  matrixTitle: { fontSize: '20px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 6px 0', letterSpacing: '-0.01em' },
  matrixSubText: { fontSize: '15px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' },
  activeEngineBadge: { display: 'inline-block', padding: '4px 10px', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: '#ea580c', marginBottom: '8px' },

  largeMatrixHeatmapGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' },
  largeMatrixCell: { padding: '26px 14px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '900', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)' },
  largeCellLabel: { fontSize: '12px', fontWeight: '700', opacity: 0.8, marginBottom: '6px', letterSpacing: '0.04em' },
  largeCellLabel_Active: { fontSize: '12px', fontWeight: '700', marginBottom: '6px', letterSpacing: '0.04em' },

  progressionMatchRow: { display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px' },
  progressionLabel: { fontSize: '15px', fontWeight: '700', color: 'var(--text-muted)' },
  largeBarWrapper: { flex: 1, height: '12px', backgroundColor: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' },
  largeFilledBar: { height: '100%', borderRadius: '6px' },
  progressionPercent: { fontSize: '17px', fontWeight: '900', color: 'var(--text-main)', width: '54px', textAlign: 'right' },

  // DATA SUMMARY RE-ALIGNED TABLE HOVER PANELS
  glassBlock: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', borderRadius: '16px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' },
  badgeLabel: { display: 'inline-block', alignSelf: 'flex-start', padding: '6px 14px', backgroundColor: 'var(--bg-canvas)', border: '1px solid var(--panel-border)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' },
  blockTitle: { fontSize: '26px', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 10px 0' },
  blockText: { fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', margin: '0 0 12px 0' },
  
  tableResponsiveWrapper: { width: '100%', overflowX: 'auto' },
  metricTable: { width: '100%', minWidth: '600px', borderCollapse: 'collapse', fontSize: '16px' },
  tableHeaderRow: { borderBottom: '3px solid var(--panel-border)', backgroundColor: 'var(--bg-canvas)' },
  tableTh: { textAlign: 'left', padding: '18px 16px', color: 'var(--text-muted)', fontWeight: '700' },
  tableTh_Active: { textAlign: 'left', padding: '18px 16px', color: '#ea580c', fontWeight: '800', backgroundColor: '#fff7ed' },
  tableTd: { padding: '20px 16px', borderBottom: '1px solid var(--panel-border)', color: 'var(--text-main)' },
  tableTd_ActiveContent: { padding: '20px 16px', borderBottom: '1px solid var(--panel-border)', color: '#ea580c', fontWeight: '700', backgroundColor: '#fff7ed' },
  tableEvenRow: { backgroundColor: '#f8fafc' },
  tableOddRow: { backgroundColor: '#ffffff' },
  selectionAlert: { padding: '20px 24px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', fontSize: '16.5px', color: '#1e40af', lineHeight: '1.6' }
};