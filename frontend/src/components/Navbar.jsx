import { useState, useEffect } from 'react';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 'home', label: 'Scan Engine' },
    { id: 'analytics', label: 'Analytics Matrix' },
    { id: 'cyberlaws', label: 'Compliance Laws' },
    { id: 'support', label: 'Support Nodes' },
    { id: 'about', label: 'About Us' }
  ];

  // Screen resize detect karne ke liye tracker window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false); // Scale back up hony pr layout lock reset ho jaye
      }
    };
    
    handleResize(); // Initial setup load execution
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (id) => {
    setCurrentTab(id);
    setIsOpen(false); // Selection hote hi mobile menu overlay auto close ho jaye
  };

  return (
    <nav style={styles.navWrapper}>
      <div style={styles.navInner}>
        
        {/* Extreme Left Side: Clean Brand Title */}
        <div style={styles.brand} onClick={() => handleTabClick('home')}>
          Anti<span style={{ color: 'var(--brand-accent)' }}>Phish</span>
        </div>
        
        {/* Extreme Right Side: Hamburger Button (Sirf mobile width par render hoga) */}
        {isMobile && (
          <button style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <div style={{ ...styles.bar, transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
            <div style={{ ...styles.bar, opacity: isOpen ? 0 : 1 }}></div>
            <div style={{ ...styles.bar, transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
          </button>
        )}

        {/* Dynamic Nav Container: Desktop par continuous right line, Mobile par discrete down panel */}
        {(!isMobile || isOpen) && (
          <div style={{
            ...styles.linksContainer,
            ...(isMobile ? styles.mobileOverlay : styles.desktopLayout)
          }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                style={{ 
                  ...styles.linkBtn, 
                  ...(currentTab === item.id ? styles.active : {}),
                  ...(isMobile ? styles.mobileBtn : {})
                }}
                onClick={() => handleTabClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}

const styles = {
  navWrapper: { width: '100%', backgroundColor: 'var(--bg-panel)', borderBottom: '1px solid var(--panel-border)', position: 'sticky', top: 0, zIndex: 1000 },
  navInner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' },
  brand: { fontWeight: '800', fontSize: '1.4rem', letterSpacing: '-0.01em', cursor: 'pointer', color: 'var(--brand-primary)', userSelect: 'none' },
  
  // Base Layout Structure
  linksContainer: { display: 'flex', gap: '6px' },
  desktopLayout: { flexDirection: 'row', alignItems: 'center' },
  
  // Active state trigger overlays for minimizing screens
  mobileOverlay: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    flexDirection: 'column',
    backgroundColor: 'var(--bg-panel)',
    borderBottom: '1px solid var(--panel-border)',
    padding: '16px 24px',
    gap: '10px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)'
  },
  
  linkBtn: { backgroundColor: 'transparent', border: 'none', color: 'var(--text-muted)', padding: '8px 14px', borderRadius: '6px', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.15s ease' },
  mobileBtn: { width: '100%', textAlign: 'left', padding: '12px 16px' },
  active: { backgroundColor: 'var(--bg-canvas)', color: 'var(--brand-primary)' },
  
  // Custom Smooth Mechanical Hamburger UI Setup
  hamburger: { display: 'flex', flexDirection: 'column', gap: '5px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '6px', zIndex: 1001 },
  bar: { width: '22px', height: '2px', backgroundColor: 'var(--text-main)', transition: 'all 0.2s ease', transformOrigin: 'center' }
};