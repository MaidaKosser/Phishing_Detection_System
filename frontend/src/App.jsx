import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Analytics from './screens/Analytics';
import CyberLaws from './screens/CyberLaws';
import SupportHelp from './screens/SupportHelp';
import AboutUs from './screens/AboutUs';
import Footer from './components/Footer';
export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div style={appStyles.layoutWrapper}>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      {/* Dynamic Main App Canvas */}
      <main style={appStyles.mainCanvas}>
        {currentTab === 'home' && <Home />}
        {currentTab === 'analytics' && <Analytics />}
        {currentTab === 'cyberlaws' && <CyberLaws />}
        {currentTab === 'support' && <SupportHelp />}
        {currentTab === 'about' && <AboutUs />}
      </main>
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

const appStyles = {
  layoutWrapper: { minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)', width: '100%' },
  mainCanvas: { width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', flex: '1 0 auto' },
  footer: { textAlign: 'center', padding: '24px', borderTop: '1px solid var(--panel-border)', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500', backgroundColor: 'var(--bg-panel)' }
};