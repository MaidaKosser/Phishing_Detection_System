import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Analytics from './screens/Analytics';
import CyberLaws from './screens/CyberLaws';
import SupportHelp from './screens/SupportHelp';
import AboutUs from './screens/AboutUs';
import { useState } from 'react';
export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div style={appStyles.appContainer}>
      <div style={appStyles.radialGlowTop}></div>
      
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      {/* Container limits scaled to be fluid across fluid grids */}
      <main style={appStyles.mainContainer}>
        {currentTab === 'home' && <Home />}
        {currentTab === 'analytics' && <Analytics />}
        {currentTab === 'cyberlaws' && <CyberLaws />}
        {currentTab === 'support' && <SupportHelp />}
        {currentTab === 'AboutUs' && <AboutUs/>}
      </main>

      <Footer />
    </div>
  );
}

const appStyles = {
  appContainer: { backgroundColor: '#05070f', color: '#f8fafc', minHeight: '100vh', position: 'relative', overflowX: 'hidden', width: '100%' },
  radialGlowTop: { position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '800px', height: '300px', background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, rgba(0,0,0,0) 70%)', zIndex: 0, pointerEvents: 'none' },
  mainContainer: { maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '32px 20px', boxSizing: 'border-box', position: 'relative', zIndex: 10 }
};