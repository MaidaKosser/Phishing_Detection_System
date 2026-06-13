export default function SupportHelp() {
  return (
    <div className="animated-node">
      <header style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: '800', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>System Support Nodes</h1>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>Submit architecture feedback or handle systemic network inquiries.</p>
      </header>

      <div className="clean-shadow" style={styles.panel}>
        <h3 style={styles.heading}>Report Misclassification Vectors</h3>
        <p style={styles.bodyText}>If a secure corporate internal login hub triggers an erroneous classification, forward the raw text configuration tag to network ops for manual whitelisting.</p>
        <div style={styles.contact}>Systems Operations Email: <span style={{ color: 'var(--brand-accent)' }}>integrity@antiphish-security.org</span></div>
      </div>
    </div>
  );
}

const styles = {
  panel: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', padding: '24px', borderRadius: '8px' },
  heading: { fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text-main)' },
  bodyText: { fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 20px 0' },
  contact: { fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }
};