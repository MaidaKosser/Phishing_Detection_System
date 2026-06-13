export default function AboutUs() {
  return (
    <div className="animated-node">
      <header style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: '800', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>About AntiPhish</h1>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>System objective, engineering blueprints, and deployment goals.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="clean-shadow" style={styles.block}>
          <div style={styles.title}>System Objective</div>
          <p style={styles.para}>
            AntiPhish is dedicated to providing real-time defense against complex digital engineering vectors. By shifting analysis focus from database logs to multi-layer character weights and string patterns, the framework can analyze new, uncatalogued deceptive layouts instantly.
          </p>
        </div>
        <div className="clean-shadow" style={styles.block}>
          <div style={styles.title}>Dual-Core Classification</div>
          <p style={styles.para}>
            The software pairs deep-learning Multi-Layer Perceptron neural frameworks with linear classification boundaries. This dual structure yields rapid classifications without heavy memory footprints, optimizing execution across various deployment terminals.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  block: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', padding: '24px', borderRadius: '8px' },
  title: { fontSize: '1rem', fontWeight: '700', color: 'var(--brand-primary)', marginBottom: '8px' },
  para: { margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }
};