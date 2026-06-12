import { Scale, ShieldAlert } from 'lucide-react';

export default function CyberLaws() {
  const laws = [
    { title: "PECA Act (Section 13) - Electronic Forgery", context: "Creates penal sentences for duplicating digital designs, layouts, or identity tokens explicitly mimicking trustworthy systems to deceive users.", penalty: "Up to 3 Years Imprisonment / 250,000 PKR fine." },
    { title: "PECA Act (Section 14) - Electronic Fraud", context: "Covers standard transmission of malicious payloads, links, emails, and spoofed channels structured to acquire user parameters under false pretexts.", penalty: "Up to 3 Years Imprisonment / 5 Million PKR fine." },
    { title: "Global Anti-Phishing Act Guidelines", context: "International standardization targeting bulk spear-phishing strategies, identity cloning domains, and un-notified structural look-alike interfaces.", penalty: "Extradition / Multi-million dollar institutional fines." }
  ];

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#f8fafc' }}><Scale style={{ display: 'inline', marginRight: '10px' }} color="#eab308" /> Legal Frameworks & Cyber Regulations</h1>
        <p style={{ color: '#64748b' }}>Statutory compliances and legal structures defining electronic fraud and identity cloning.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {laws.map((law, index) => (
          <div key={index} style={{ backgroundColor: '#0a0f1d', border: '1px solid #161f38', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#ffffff' }}>{law.title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 16px 0' }}>{law.context}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#7f1d1d20', borderRadius: '8px', border: '1px solid #ef444430', fontSize: '0.88rem', color: '#f87171' }}>
              <ShieldAlert size={16} /> <strong>Statutory Liability Penalty:</strong> {law.penalty}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}