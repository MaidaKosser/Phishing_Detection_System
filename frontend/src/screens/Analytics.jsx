import Card from '../components/Card';

export default function Analytics() {
  const telemetryData = [
    { label: 'Mon', total: 70, threats: 15 },
    { label: 'Tue', total: 95, threats: 24 },
    { label: 'Wed', total: 120, threats: 12 },
    { label: 'Thu', total: 150, threats: 45 },
    { label: 'Fri', total: 110, threats: 18 }
  ];

  return (
    <div className="animated-node">
      <header style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: '800', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>Platform Telemetry</h1>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>Calculated statistical distribution logs of vector evaluations.</p>
      </header>

      <div className="fluid-grid" style={{ marginBottom: '32px' }}>
        <Card title="Total Scans Run" value="14,205" subtext="Aggregated interface strings" />
        <Card title="Threat Vectors Caught" value="4,102" subtext="Isolated fake hubs" status="danger" />
        <Card title="Neural Net Accuracy" value="95.2%" subtext="Validated model accuracy" status="safe" />
        <Card title="Support Vector Matrix" value="94.8%" subtext="Linear validation accuracy" status="safe" />
      </div>

      {/* Clean Premium Light Graph */}
      <div className="clean-shadow" style={styles.chartPanel}>
        <div style={styles.chartTitle}>Weekly Log Traffic Distribution</div>
        <div style={styles.graphCanvas}>
          {telemetryData.map((node, i) => (
            <div key={i} style={styles.graphCol}>
              <div style={styles.barStack}>
                <div style={{ ...styles.barScan, height: `${node.total * 1.2}px` }}></div>
                <div style={{ ...styles.barThreat, height: `${node.threats * 1.2}px` }}></div>
              </div>
              <div style={styles.label}>{node.label}</div>
            </div>
          ))}
        </div>
        <div style={styles.legendWrapper}>
          <div style={styles.legend}><div style={{ ...styles.dot, backgroundColor: 'var(--brand-accent)' }}></div> Total Inputs Scanned</div>
          <div style={styles.legend}><div style={{ ...styles.dot, backgroundColor: 'var(--matrix-red)' }}></div> Isolated Threat Strings</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  chartPanel: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', borderRadius: '12px', padding: '24px' },
  chartTitle: { fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '32px', letterSpacing: '0.05em' },
  graphCanvas: { display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '220px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '8px' },
  graphCol: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px' },
  barStack: { display: 'flex', alignItems: 'flex-end', gap: '8px', height: '180px' },
  barScan: { width: '16px', backgroundColor: 'var(--brand-accent)', borderRadius: '4px 4px 0 0' },
  barThreat: { width: '16px', backgroundColor: 'var(--matrix-red)', borderRadius: '4px 4px 0 0' },
  label: { fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: '600' },
  legendWrapper: { display: 'flex', gap: '24px', marginTop: '24px', justifyContent: 'center' },
  legend: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' },
  dot: { width: '8px', height: '8px', borderRadius: '50%' }
};