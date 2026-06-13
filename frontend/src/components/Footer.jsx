export default function Footer({ setCurrentTab }) {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Threat Intelligence newsletters active for your sequence.");
  };

  return (
    <footer style={styles.footerContainer}>
      {/* Upper Grid Layout matching the 4-column structure */}
      <div style={styles.footerGrid}>
        
        {/* Column 1: Brand Pitch & Directly Bound Contacts */}
        <div style={styles.column}>
          <h3 style={styles.brandTitle}>Anti<span style={{ color: 'var(--brand-accent)' }}>Phish</span></h3>
          <p style={styles.description}>
            Empowering digital infrastructure worldwide with real-time vector intelligence, deep path insights, and localized neural network analytics.
          </p>
          <div style={styles.contactBlock}>
            <span style={styles.subHeading}>Contact Node</span>
            <p style={styles.contactText}>Email: integrity@antiphish-security.org</p>
            <p style={styles.contactText}>Operations: +92 300 1234567</p>
          </div>
        </div>

        {/* Column 2: Interactive Application Routers */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li><button onClick={() => setCurrentTab('home')} style={styles.inlineLink}>Scan Engine</button></li>
            <li><button onClick={() => setCurrentTab('analytics')} style={styles.inlineLink}>Analytics Matrix</button></li>
            <li><button onClick={() => setCurrentTab('about')} style={styles.inlineLink}>About Us</button></li>
          </ul>
        </div>

        {/* Column 3: Global Institutional Framework Links */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Resources & Legal</h3>
          <ul style={styles.linkList}>
            <li><button onClick={() => setCurrentTab('cyberlaws')} style={styles.inlineLink}>Compliance Laws</button></li>
            <li><button onClick={() => setCurrentTab('support')} style={styles.inlineLink}>Help Center Terminal</button></li>
            <li><span style={styles.deadLink}>Privacy Protocol</span></li>
            <li><span style={styles.deadLink}>Terms of Vector Use</span></li>
          </ul>
        </div>

        {/* Column 4: Operational Stay Updated Subscription Box */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Stay Updated</h3>
          <p style={styles.description}>
            Subscribe to receive direct repository feeds, neural weight re-training alerts, and intelligence logs.
          </p>
          <form onSubmit={handleSubscribe} style={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Enter operational email..." 
              required 
              style={styles.emailField} 
            />
            <button type="submit" style={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Lower Copyright Ribbon Strip Line */}
      <div style={styles.bottomRibbon}>
        All rights reserved. © 2026 AntiPhish Engine Matrix by MK
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: { width: '100%', backgroundColor: 'var(--bg-panel)', borderTop: '1px solid var(--panel-border)', padding: '60px 24px 20px 24px', position: 'relative', zIndex: 10 },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto', width: '100%', paddingBottom: '40px' },
  column: { display: 'flex', flexDirection: 'column', gap: '14px' },
  brandTitle: { fontWeight: '800', fontSize: '1.4rem', margin: 0, color: 'var(--brand-primary)', letterSpacing: '-0.02em' },
  columnTitle: { fontWeight: '700', fontSize: '1rem', margin: 0, color: 'var(--text-main)', letterSpacing: '-0.01em' },
  subHeading: { fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' },
  description: { fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 },
  contactBlock: { marginTop: '8px' },
  contactText: { fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0', lineHeight: '1.4' },
  linkList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  inlineLink: { backgroundColor: 'transparent', border: 'none', padding: 0, color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: '500', textAlign: 'left', cursor: 'pointer', transition: 'color 0.15s' },
  deadLink: { color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: '500' },
  subscribeForm: { display: 'flex', gap: '8px', width: '100%', flexWrap: 'wrap', marginTop: '4px' },
  emailField: { flex: '1 1 160px', padding: '12px 14px', backgroundColor: 'var(--bg-canvas)', border: '1px solid var(--panel-border)', borderRadius: '6px', fontSize: '0.88rem', color: 'var(--text-main)', outline: 'none' },
  subscribeBtn: { padding: '12px 20px', backgroundColor: 'var(--brand-primary)', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '0.88rem', fontWeight: '700', cursor: 'pointer' },
  bottomRibbon: { width: '100%', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--panel-border)', paddingTop: '24px', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '500' }
};