import { useState } from 'react';

export default function Footer({ setCurrentTab }) {
  const [activeLink, setActiveLink] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Threat Intelligence newsletters active for your sequence.");
  };

  const handleTabChange = (tabName) => {
    setActiveLink(tabName);
    setCurrentTab(tabName);
    // Visual feedback temporary state timeout
    setTimeout(() => setActiveLink(''), 400);
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerGrid}>
        
        {/* Column 1: Brand Pitch & Directly Bound Contacts */}
        <div style={styles.column}>
          <h3 style={styles.brandTitle}>Anti<span style={{ color: 'var(--brand-accent, #3b82f6)' }}>Phish</span></h3>
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
            <li>
              <button 
                onClick={() => handleTabChange('home')} 
                style={{ 
                  ...styles.inlineLink, 
                  ...(activeLink === 'home' ? styles.activeGlowLink : {}) 
                }}
              >
                Scan Engine
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleTabChange('analytics')} 
                style={{ 
                  ...styles.inlineLink, 
                  ...(activeLink === 'analytics' ? styles.activeGlowLink : {}) 
                }}
              >
                Analytics Matrix
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleTabChange('about')} 
                style={{ 
                  ...styles.inlineLink, 
                  ...(activeLink === 'about' ? styles.activeGlowLink : {}) 
                }}
              >
                About Us
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Global Institutional Framework Links */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Resources & Legal</h3>
          <ul style={styles.linkList}>
            <li>
              <button 
                onClick={() => handleTabChange('cyberlaws')} 
                style={{ 
                  ...styles.inlineLink, 
                  ...(activeLink === 'cyberlaws' ? styles.activeGlowLink : {}) 
                }}
              >
                Compliance Laws
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleTabChange('support')} 
                style={{ 
                  ...styles.inlineLink, 
                  ...(activeLink === 'support' ? styles.activeGlowLink : {}) 
                }}
              >
                Help Center Terminal
              </button>
            </li>
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

      <div style={styles.bottomRibbon}>
        All rights reserved. © {new Date().getFullYear()} AntiPhish Engine Matrix by MK & MM
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: { width: '100%', backgroundColor: 'var(--bg-panel, #ffffff)', borderTop: '2px solid var(--panel-border, #e2e8f0)', padding: '50px 24px 24px 24px', position: 'relative', zIndex: 10, marginTop: '40px' },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto', width: '100%', paddingBottom: '30px' },
  column: { display: 'flex', flexDirection: 'column', gap: '12px' },
  
  brandTitle: { fontWeight: '800', fontSize: '1.4rem', margin: 0, color: 'var(--brand-primary, #1e3a8a)', letterSpacing: '-0.025em' },
  columnTitle: { fontWeight: '700', fontSize: '1.05rem', margin: 0, color: 'var(--text-main, #0f172a)', letterSpacing: '-0.01em', textTransform: 'uppercase' },
  subHeading: { fontWeight: '700', fontSize: '0.88rem', color: 'var(--text-main, #0f172a)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' },
  description: { fontSize: '0.94rem', color: 'var(--text-muted, #475569)', lineHeight: '1.6', margin: 0, fontWeight: '500' },
  
  contactBlock: { marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' },
  contactText: { fontSize: '0.9rem', color: 'var(--text-muted, #475569)', margin: 0, lineHeight: '1.4', fontWeight: '500' },
  linkList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  
  inlineLink: { 
    backgroundColor: 'transparent', 
    border: 'none', 
    padding: '2px 0', 
    color: 'var(--text-muted, #475569)', 
    fontSize: '0.96rem', 
    fontWeight: '500', 
    textAlign: 'left', 
    cursor: 'pointer', 
    transition: 'all 0.15s ease-in-out',
    outline: 'none',
    display: 'inline-block'
  },
  
  activeGlowLink: { 
    color: '#2563eb',
    fontWeight: '700',
    transform: 'scale(1.03)', 
    textShadow: '0px 0px 8px rgba(37, 99, 235, 0.3)'
  },

  deadLink: { color: 'var(--text-muted, #94a3b8)', fontSize: '0.96rem', fontWeight: '500', padding: '2px 0', display: 'inline-block' },
  subscribeForm: { display: 'flex', gap: '10px', width: '100%', flexWrap: 'wrap', marginTop: '4px' },
  emailField: { flex: '1 1 180px', padding: '12px 14px', backgroundColor: 'var(--bg-canvas, #f8fafc)', border: '1px solid var(--panel-border, #e2e8f0)', borderRadius: '6px', fontSize: '0.94rem', color: 'var(--text-main, #0f172a)', outline: 'none' },
  subscribeBtn: { padding: '12px 20px', backgroundColor: 'var(--brand-primary, #2563eb)', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '0.94rem', fontWeight: '700', cursor: 'pointer' },
  
  bottomRibbon: { width: '100%', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--panel-border, #e2e8f0)', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted, #475569)', fontWeight: '500' }
};