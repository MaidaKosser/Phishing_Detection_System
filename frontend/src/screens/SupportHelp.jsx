import { Mail, PhoneCall, AlertTriangle } from 'lucide-react';

export default function SupportHelp() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Incident Support Desk</h1>
        <p style={{ color: '#64748b' }}>Report suspicious signatures or discover pipeline protection metrics instantly.</p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        <div style={{ backgroundColor: '#0a0f1d', border: '1px solid #161f38', padding: '24px', borderRadius: '16px', flex: '1 1 300px' }}>
          <h3 style={{ margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><AlertTriangle color="#eab308" size={20} /> Report Compromised Links</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>Found a domain that bypassed our neural layers? Send it straight to our data labeling team to patch the training pool weights.</p>
          <div style={{ color: '#38bdf8', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> triage@securityvault.edu</div>
        </div>
        <div style={{ backgroundColor: '#0a0f1d', border: '1px solid #161f38', padding: '24px', borderRadius: '16px', flex: '1 1 300px' }}>
          <h3 style={{ margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><PhoneCall color="#22c55e" size={20} /> Emergency Escalation</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>For immediate forensic network lockouts or local server validation issues, contact our university infrastructure help desk.</p>
          <div style={{ color: '#22c55e', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><PhoneCall size={16} /> +92-GIFT-CYBER-LABS</div>
        </div>
      </div>
    </div>
  );
}