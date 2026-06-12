import { useState } from 'react';
import { Cpu, Menu, X, Globe, BarChart3, ShieldCheck, HelpCircle, FileText } from 'lucide-react';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Scan Dashboard', icon: <Globe size={16} /> },
    { id: 'analytics', label: 'Neural Metrics', icon: <BarChart3 size={16} /> },
    { id: 'cyberlaws', label: 'Cyber Laws', icon: <ShieldCheck size={16} /> },
    { id: 'support', label: 'Support & Help', icon: <HelpCircle size={16} /> },
    { id: 'AboutUs', label: 'AboutUs', icon: <FileText size={16} /> }
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.navBrand} onClick={() => setCurrentTab('home')}>
        <div style={styles.logoIconContainer}><Cpu size={20} color="#38bdf8" /></div>
        <span style={styles.logoText}>SECURITY<span style={{ color: '#38bdf8' }}>VAULT</span></span>
      </div>

      {/* Desktop and Laptop Fluent Links Grid */}
      <div className="desktop-only" style={styles.desktopNavLinks}>
        {navItems.map((item) => (
          <button
            key={item.id}
            style={{ ...styles.navLinkButton, ...(currentTab === item.id ? styles.navLinkActive : {}) }}
            onClick={() => setCurrentTab(item.id)}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* Mobile-Only Interactive Trigger Button */}
      <button className="mobile-toggle" style={styles.mobileMenuToggleButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Drawer Menu Layer overlay */}
      {mobileMenuOpen && (
        <div className="mobile-only" style={styles.mobileDrawerContainer}>
          {navItems.map((item) => (
            <button
              key={item.id}
              style={{ ...styles.mobileDrawerLink, ...(currentTab === item.id ? styles.mobileDrawerLinkActive : {}) }}
              onClick={() => { setCurrentTab(item.id); setMobileMenuOpen(false); }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles = {
  navbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', maxWidth: '1200px', margin: '0 auto', borderBottom: '1px solid #1e293b', position: 'relative', zIndex: 100 },
  navBrand: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' },
  logoIconContainer: { backgroundColor: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' },
  logoText: { fontWeight: '800', fontSize: '1.15rem', letterSpacing: '0.03em', color: '#ffffff' },
  desktopNavLinks: { display: 'flex', gap: '4px', alignItems: 'center' },
  navLinkButton: { display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'transparent', border: '1px solid transparent', color: '#94a3b8', padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.15s ease' },
  navLinkActive: { backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#38bdf8' },
  mobileMenuToggleButton: { display: 'none', backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#f8fafc', padding: '8px', borderRadius: '8px', cursor: 'pointer' },
  mobileDrawerContainer: { position: 'absolute', top: '70px', left: 0, width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#070a12', borderBottom: '1px solid #1e293b', padding: '12px 20px', gap: '6px', zIndex: 99, boxSizing: 'border-box' },
  mobileDrawerLink: { display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'transparent', border: 'none', color: '#94a3b8', padding: '12px', borderRadius: '8px', fontSize: '0.9rem', width: '100%', textAlign: 'left', cursor: 'pointer' },
  mobileDrawerLinkActive: { backgroundColor: 'rgba(14,165,233,0.1)', color: '#38bdf8', fontWeight: 'bold' }
};