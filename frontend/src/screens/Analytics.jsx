import Card from '../components/Card';

export default function Analytics() {
  // Actual performance metrics parsed exactly from the uploaded comparison chart
  const modelMetrics = [
    { metric: 'Accuracy', ml: 0.948, dl: 0.952, percentageML: '94.8%', percentageDL: '95.2%' },
    { metric: 'Precision', ml: 0.951, dl: 0.936, percentageML: '95.1%', percentageDL: '93.6%' },
    { metric: 'Recall', ml: 0.891, dl: 0.909, percentageML: '89.1%', percentageDL: '90.9%' }
  ];

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- PROFESSIONAL HEADING --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>Model Analytics & Performance Telemetry</h1>
        <p style={styles.subTitle}>
          Comparative evaluation logs showcasing Linear Support Vector Machine validation vs Deep MLP Neural Network architecture on 20,000 processed feature spaces.
        </p>
      </header>

      {/* --- EXTENDED 6-BOX PRODUCTION INFRASTRUCTURE --- */}
      <section style={styles.sectionGap}>
        <div style={styles.sixGridOverride}>
          <Card title="Total Dataset Rows" value="80,000" subtext="Stratified 80/20 partition rows split." />
          <Card title="LinearSVC Accuracy" value="94.8%" subtext="Support Vector Hyperplane validation." status="safe" />
          <Card title="MLP ANN Accuracy" value="95.2%" subtext="Deep Backpropagation Node validation." status="safe" />
          <Card title="Feature Space" value="20,000" subtext="Extracted TF-IDF token dimensions." />
          <Card title="MLP False Safes" value="436 Flags" subtext="Minimon anomaly escape vectors caught." status="danger" />
          <Card title="Peak Precision" value="95.1%" subtext="Linear engine matrix signature match." status="safe" />
        </div>
      </section>

      {/* --- FRAMEWORK PERFORMANCE COMPARISON CHART --- */}
      <div className="clean-shadow" style={styles.chartPanel}>
        <div style={styles.chartHeaderBlock}>
          <h2 style={styles.chartTitle}>Framework Performance Metric Comparison Chart</h2>
          <p style={styles.chartDesc}>
            Empirical metrics extracted from the test partition matrix. Score validation values mapped from range 0.0 to 1.0.
          </p>
        </div>

        {/* Dynamic Responsive Bar System Chart */}
        <div style={styles.graphCanvas}>
          
          {modelMetrics.map((node, i) => (
            <div key={i} style={styles.metricGroupContainer}>
              
              {/* Bars Cluster Side-by-Side */}
              <div style={styles.barsCluster}>
                
                {/* LinearSVC Bar */}
                <div style={styles.barWrapper}>
                  <div 
                    style={{ ...styles.barML, height: `${node.ml * 100}%` }}
                    title={`LinearSVC: ${node.percentageML}`}
                  >
                    <span style={styles.barValueLabel}>{node.percentageML}</span>
                  </div>
                </div>

                {/* MLP ANN Bar */}
                <div style={styles.barWrapper}>
                  <div 
                    style={{ ...styles.barDL, height: `${node.dl * 100}%` }}
                    title={`MLP ANN: ${node.percentageDL}`}
                  >
                    <span style={styles.barValueLabel}>{node.percentageDL}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Label Axis */}
              <div style={styles.xAxisLabel}>{node.metric}</div>
            </div>
          ))}

        </div>

        {/* Professional Controlled Legend Setup */}
        <div style={styles.legendWrapper}>
          <div style={styles.legendItem}>
            <div style={{ ...styles.colorIndicator, backgroundColor: '#7dd3fc' }}></div>
            <span style={styles.legendText}>LinearSVC (ML Model)</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{ ...styles.colorIndicator, backgroundColor: '#ff7a45' }}></div>
            <span style={styles.legendText}>MLP ANN (DL Model)</span>
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '40px', textAlign: 'left' },
  headerBlock: { marginBottom: '32px' },
  mainTitle: { fontSize: 'calc(1.6rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 12px 0', letterSpacing: '-0.025em' },
  subTitle: { color: 'var(--text-muted, #475569)', margin: 0, fontSize: 'calc(0.96rem + 0.1vw)', lineHeight: '1.65', maxWidth: '850px', fontWeight: '500' },
  
  sectionGap: { marginBottom: '40px' },
  // 6 Boxes dynamic layout distribution handling cleanly
  sixGridOverride: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' },
  
  // Chart Panel Structure
  chartPanel: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', borderRadius: '12px', padding: '32px' },
  chartHeaderBlock: { marginBottom: '32px' },
  chartTitle: { fontSize: 'calc(1.1rem + 0.15vw)', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 6px 0', letterSpacing: '-0.01em' },
  chartDesc: { fontSize: 'calc(0.9rem + 0.05vw)', color: 'var(--text-muted, #475569)', margin: 0, lineHeight: '1.5', fontWeight: '500' },
  
  // Custom Dynamic Graph Layout (Matching image_391521 dimensions closely)
  graphCanvas: { 
    display: 'flex', 
    justifyContent: 'space-around', 
    alignItems: 'flex-end', 
    height: '320px', 
    borderBottom: '2px solid var(--panel-border, #e2e8f0)', 
    paddingBottom: '4px',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '20px'
  },
  metricGroupContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', height: '100%', justifyContent: 'flex-end' },
  barsCluster: { display: 'flex', alignItems: 'flex-end', gap: '14px', height: '280px', width: '100%', justifyContent: 'center' },
  barWrapper: { height: '100%', display: 'flex', alignItems: 'flex-end', width: 'calc(35px + 1.5vw)' },
  
  // Bars Core Architecture with Premium Color Schemes
  barML: { 
    width: '100%', 
    backgroundColor: '#7dd3fc', // Sky Blue variant from your comparison logs
    borderRadius: '4px 4px 0 0', 
    position: 'relative',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  barDL: { 
    width: '100%', 
    backgroundColor: '#ff7a45', // Coral Orange variant from your comparison logs
    borderRadius: '4px 4px 0 0', 
    position: 'relative',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  
  // Text Labels Over the Bars
  barValueLabel: { position: 'absolute', top: '-26px', fontSize: 'calc(0.8rem + 0.05vw)', fontWeight: '700', color: 'var(--text-main, #0f172a)' },
  xAxisLabel: { fontSize: 'calc(0.94rem + 0.05vw)', color: 'var(--text-main, #0f172a)', marginTop: '14px', fontWeight: '700', letterSpacing: '-0.01em' },
  
  // Professional Legends System
  legendWrapper: { display: 'flex', gap: '32px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' },
  legendItem: { display: 'flex', alignItems: 'center', gap: '10px' },
  colorIndicator: { width: '20px', height: '12px', borderRadius: '3px' },
  legendText: { fontSize: 'calc(0.9rem + 0.05vw)', color: 'var(--text-muted, #475569)', fontWeight: '600' }
};