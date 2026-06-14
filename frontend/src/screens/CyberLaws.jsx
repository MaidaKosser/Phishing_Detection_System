export default function CyberLaws() {
  const legalData = [
    { 
      title: "Electronic Forgery Regulation (PECA 2016 - Section 13)", 
      text: "Fabricating visual identities, cloning source codes, or spoofing interface layouts for deceptive authentication vectors falls directly under criminal prosecution. AntiPhish acts as a structural validation layer to intercept such malicious attempts." 
    },
    { 
      title: "Electronic Fraud Compliance (PECA 2016 - Section 14)", 
      text: "The intentional deployment of spoofed web domains or phishing emails designed to capture biometric, financial, or credential data is strictly mapped as a federal offense. Our neural network tracks these deceptive parameters instantly." 
    },
    { 
      title: "Data Isolation Protocols & Privacy Mandates", 
      text: "To ensure alignment with international data framework directions, all incoming string inputs pass through temporary memory vectors. Real-time scanning avoids persistent logging or archiving of user-submitted URL payloads." 
    },
    { 
      title: "Zero-Tracking Data Protection Directives", 
      text: "The engine avoids injecting active user tracking cookies, identification pixels, or background session tracking telemetry. This maintains a complete sandboxed architecture in compliance with global digital isolation standards." 
    }
  ];

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- PROFESSIONAL HEADING --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>Compliance & Legal Mapping</h1>
        <p style={styles.subTitle}>
          Statutory frameworks, federal definitions, and data privacy compliance mappings under digital encryption and anti-spoofing enforcement acts.
        </p>
      </header>

      {/* --- LEGAL DISCLOSURES ROW --- */}
      <div style={styles.legalListLayout}>
        {legalData.map((item, index) => (
          <div key={index} className="clean-shadow" style={styles.card}>
            <div style={styles.title}>{item.title}</div>
            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '40px', textAlign: 'left' },
  headerBlock: { marginBottom: '36px' },
  
  // Fluid typography setup matching the production web standards
  mainTitle: { fontSize: 'calc(1.6rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 12px 0', letterSpacing: '-0.025em' },
  subTitle: { color: 'var(--text-muted, #475569)', margin: 0, fontSize: 'calc(0.96rem + 0.1vw)', lineHeight: '1.65', maxWidth: '850px', fontWeight: '500' },
  
  legalListLayout: { display: 'flex', flexDirection: 'column', gap: '20px' },
  
  // Professional Left Accent Border Card System
  card: { 
    backgroundColor: 'var(--bg-panel, #ffffff)', 
    border: '1px solid var(--panel-border, #e2e8f0)', 
    borderLeft: '5px solid var(--brand-primary, #2563eb)', // Dark Blue Accent indicator
    padding: '24px 28px', 
    borderRadius: '8px',
    transition: 'transform 0.2s ease'
  },
  
  title: { 
    fontSize: 'calc(1.02rem + 0.1vw)', 
    fontWeight: '700', 
    color: 'var(--brand-primary, #1e3a8a)', 
    marginBottom: '8px',
    letterSpacing: '-0.01em'
  },
  
  text: { 
    margin: 0, 
    fontSize: 'calc(0.93rem + 0.05vw)', 
    color: 'var(--text-muted, #475569)', 
    lineHeight: '1.65',
    fontWeight: '500' 
  }
};