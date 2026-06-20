import Card from '../components/Card';

export default function Analytics() {
  const modelMetricsGroup1 = [
    {
      modelName: 'Logistic Regression',
      metrics: [
        { label: 'Accuracy', value: 0.955, percent: '95.5%', color: '#7dd3fc' },
        { label: 'Precision', value: 0.951, percent: '95.1%', color: '#a7f3d0' },
        { label: 'Recall', value: 0.895, percent: '89.5%', color: '#ff7a45' }
      ]
    },
    {
      modelName: 'LinearSVC',
      metrics: [
        { label: 'Accuracy', value: 0.964, percent: '96.4%', color: '#7dd3fc' },
        { label: 'Precision', value: 0.952, percent: '95.2%', color: '#a7f3d0' },
        { label: 'Recall', value: 0.927, percent: '92.7%', color: '#ff7a45' }
      ]
    }
  ];

  const modelMetricsGroup2 = [
    {
      modelName: 'Random Forest',
      metrics: [
        { label: 'Accuracy', value: 0.848, percent: '84.8%', color: '#7dd3fc' },
        { label: 'Precision', value: 0.982, percent: '98.2%', color: '#a7f3d0' },
        { label: 'Recall', value: 0.503, percent: '50.3%', color: '#ff7a45' }
      ]
    },
    {
      modelName: 'MLP ANN (Deep Learning)',
      metrics: [
        { label: 'Accuracy', value: 0.970, percent: '97.0%', color: '#7dd3fc' },
        { label: 'Precision', value: 0.949, percent: '94.9%', color: '#a7f3d0' },
        { label: 'Recall', value: 0.950, percent: '95.0%', color: '#ff7a45' }
      ],
      isActive: true
    }
  ];

  const renderGraphGroup = (groupData) => (
    <div style={styles.graphCanvas}>
      {groupData.map((framework, idx) => (
        <div key={idx} style={styles.frameworkGroupContainer}>
          <div style={styles.barsCluster}>
            {framework.metrics.map((metric, mIdx) => (
              <div key={mIdx} style={styles.barWrapper}>
                <div 
                  style={{ 
                    ...styles.baseBar, 
                    height: `${metric.value * 100}%`, 
                    backgroundColor: metric.color,
                    boxShadow: framework.isActive ? `0 6px 16px ${metric.color}50` : 'none'
                  }}
                  title={`${framework.modelName} ${metric.label}: ${metric.percent}`}
                >
                  <span style={styles.barValueLabel}>{metric.percent}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            ...styles.xAxisLabel, 
            color: framework.isActive ? '#ea580c' : 'var(--text-main, #0f172a)',
            fontWeight: framework.isActive ? '900' : '700'
          }}>
            {framework.modelName}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- PROFESSIONAL HEADING --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>Model Analytics & Performance Telemetry</h1>
        <p style={styles.subTitle}>
          Comparative evaluation logs showcasing traditional machine learning vs Deep MLP Neural Network architecture on processed feature spaces.
        </p>
      </header>

      {/* --- EXTENDED 6-BOX PRODUCTION INFRASTRUCTURE --- */}
      <section style={styles.sectionGap}>
        <div style={styles.sixGridOverride}>
          <Card title="Total Dataset Rows" value="56,000" subtext="Stratified 80/20 test split support rows." />
          <Card title="LinearSVC Accuracy" value="96.4%" subtext="Support Vector Hyperplane validation." status="safe" />
          <Card title="MLP ANN Accuracy" value="97.0%" subtext="Deep Backpropagation Node validation." status="safe" />
          <Card title="Feature Space" value="20,000" subtext="Extracted TF-IDF token dimensions." />
          <Card title="Testing Samples" value="16,000" subtext="Total evaluation support log size." />
          <Card title="Peak Precision" value="98.2%" subtext="Random Forest decision boundary match." status="safe" />
        </div>
      </section>

      {/* --- 4-FRAMEWORK PERFORMANCE COMPARISON CHART --- */}
      <section style={{ marginBottom: '32px' }}>
        <div className="clean-shadow" style={styles.chartPanel}>
          <div style={styles.chartHeaderBlock}>
            <div style={styles.badgeLabel}>Performance Matrix</div>
            <h2 style={styles.chartTitle}>4-Framework Model Performance Comparison</h2>
            <p style={styles.chartDesc}>
              Empirical metrics extracted from the test partition matrix. Score range validation values mapped from 0.0 to 1.0.
            </p>
          </div>

          <div style={styles.splitGridSystem}>
            <div style={styles.graphBlock}>
              <h4 style={styles.groupTitle}>Baseline Linear Classifiers</h4>
              {renderGraphGroup(modelMetricsGroup1)}
            </div>
            <div style={styles.graphBlock}>
              <h4 style={styles.groupTitle}>Ensemble & Deep Learning Core</h4>
              {renderGraphGroup(modelMetricsGroup2)}
            </div>
          </div>

          <div style={styles.legendWrapper}>
            <div style={styles.legendItem}>
              <div style={{ ...styles.colorIndicator, backgroundColor: '#7dd3fc' }}></div>
              <span style={styles.legendText}>Accuracy</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{ ...styles.colorIndicator, backgroundColor: '#a7f3d0' }}></div>
              <span style={styles.legendText}>Precision</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{ ...styles.colorIndicator, backgroundColor: '#ff7a45' }}></div>
              <span style={styles.legendText}>Recall (Phishing Caught)</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- OVERALL BEST MODEL VERDICT BLOCK --- */}
      <section style={{ marginBottom: '40px' }}>
        <div className="clean-shadow" style={styles.verdictPanel}>
          <div style={styles.verdictHeader}>
            <span style={styles.verdictBadge}>Production Verdict</span>
            <h3 style={styles.verdictTitle}>Overall Better Architecture: MLP ANN (Deep Learning)</h3>
          </div>
          
          <p style={styles.verdictText}>
            Comparative analysis metrics ke mutabiq <strong>MLP ANN (Deep Learning)</strong> framework core deployment ke liye sabse behtar aur overall winner hai. Iski wajah darj-zail hain:
          </p>

          <ul style={styles.verdictList}>
            <li>
              <strong>Highest Operational Accuracy (97.0%):</strong> Traditional linear models aur random forests ke muqable me deep neural layers zero-day domains ko sabse behtar classify karti hain.
            </li>
            <li>
              <strong>Critical Recall Balance (95.0%):</strong> Cybersecurity aur phishing detection me sabse badi priority <strong>False Negatives (FN)</strong> ko rokna hota hai (yani kisi phishing link ko safe keh dena). MLP ka Recall score 95.0% hai, jo baqi architectures ke muqable me unsafe domains ko sabse kam leak hone deta hai.
            </li>
            <li>
              <strong>Complex High-Dimensional Generalization:</strong> Kyonke feature space 20,000 dimensions par mustamil hai, linear hyperplanes patterns ko cleanly slice nahi kar paate. Deep learning ke hidden weights aur non-linear activations text semantics ko extract karne me zada responsive sabit hue hain.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '60px', maxWidth: '1650px', margin: '0 auto', padding: '0 24px', textAlign: 'left' },
  headerBlock: { marginBottom: '44px', marginTop: '36px' },
  mainTitle: { fontSize: 'calc(2.2rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 14px 0', letterSpacing: '-0.025em', lineHeight: '1.2' },
  subTitle: { color: 'var(--text-muted, #475569)', margin: 0, fontSize: 'calc(1.15rem + 0.1vw)', lineHeight: '1.7', maxWidth: '1050px', fontWeight: '500' },
  
  sectionGap: { marginBottom: '52px' },
  sixGridOverride: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' },
  
  chartPanel: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', borderRadius: '16px', padding: '40px' },
  chartHeaderBlock: { marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px' },
  badgeLabel: { display: 'inline-block', alignSelf: 'flex-start', padding: '4px 12px', backgroundColor: 'var(--bg-canvas, #f8fafc)', border: '1px solid var(--panel-border, #e2e8f0)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted, #475569)' },
  chartTitle: { fontSize: '24px', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: 0, letterSpacing: '-0.01em' },
  chartDesc: { fontSize: '16px', color: 'var(--text-muted, #475569)', margin: 0, lineHeight: '1.6', fontWeight: '500' },
  
  splitGridSystem: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '40px', marginTop: '30px' },
  graphBlock: { border: '1px solid #f1f5f9', backgroundColor: '#fafafa', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' },
  groupTitle: { fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', margin: '0 0 10px 0' },

  graphCanvas: { display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '360px', borderBottom: '2px solid var(--panel-border, #e2e8f0)', paddingBottom: '10px' },
  frameworkGroupContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%', height: '100%', justifyContent: 'flex-end' },
  barsCluster: { display: 'flex', alignItems: 'flex-end', gap: '12px', height: '290px', width: '100%', justifyContent: 'center' },
  barWrapper: { height: '100%', display: 'flex', alignItems: 'flex-end', width: '50px' },
  baseBar: { width: '100%', borderRadius: '6px 6px 0 0', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' },
  barValueLabel: { position: 'absolute', top: '-28px', fontSize: '13px', fontWeight: '800', color: 'var(--text-main, #0f172a)' },
  xAxisLabel: { fontSize: '15px', marginTop: '20px', letterSpacing: '-0.01em', textAlign: 'center' },
  
  legendWrapper: { display: 'flex', gap: '40px', marginTop: '44px', justifyContent: 'center', flexWrap: 'wrap' },
  legendItem: { display: 'flex', alignItems: 'center', gap: '12px' },
  colorIndicator: { width: '24px', height: '14px', borderRadius: '4px' },
  legendText: { fontSize: '15px', color: 'var(--text-muted, #475569)', fontWeight: '600' },

  // VERDICT ANALYSIS STYLING BLOCK
  verdictPanel: { backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderLeft: '6px solid #ea580c', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' },
  verdictHeader: { display: 'flex', flexDirection: 'column', gap: '10px' },
  verdictBadge: { display: 'inline-block', alignSelf: 'flex-start', padding: '4px 12px', backgroundColor: '#ea580c', borderRadius: '6px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#ffffff' },
  verdictTitle: { fontSize: '22px', fontWeight: '800', color: '#c2410c', margin: 0 },
  verdictText: { fontSize: '16.5px', color: '#475569', lineHeight: '1.7', margin: 0 },
  verdictList: { margin: '8px 0 0 0', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px', color: '#334155', lineHeight: '1.65' }
};