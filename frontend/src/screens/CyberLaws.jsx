export default function CyberLaws() {
  const legalData = [
    { title: "Electronic Forgery Regulation (PECA Sec. 13)", text: "Fabricating visual identities or spoofing layout domains for deceptive authentication vectors falls directly under structural judicial parameters." },
    { title: "Compliance Data Privacy Protocols", description: "All input matrix payloads run local evaluations without storing or archiving identifying search tags, maintaining data isolation mandates." },
    { title: "Data Protection Directives", text: "AntiPhish architecture avoids using tracking cookies or analytics pixels to maintain compliance with data privacy standards." }
  ];

  return (
    <div className="animated-node">
      <header style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: '800', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>Compliance & Legal Mapping</h1>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>Statutory definitions mapping out malicious web activity and spoofing rules.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {legalData.map((item, index) => (
          <div key={index} className="clean-shadow" style={styles.card}>
            <div style={styles.title}>{item.title}</div>
            <p style={styles.text}>{item.text || item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', padding: '20px', borderRadius: '8px' },
  title: { fontSize: '0.95rem', fontWeight: '700', color: 'var(--brand-primary)', marginBottom: '6px' },
  text: { margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }
};