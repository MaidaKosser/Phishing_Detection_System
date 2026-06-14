import { useState } from 'react';

export default function SupportHelp() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support ticket logged successfully. Network operation gateway will respond within 24 hours.");
    setForm({ name: '', email: '', message: '' });
  };

  const faqs = [
    { q: "Model False Positive ko kaise handle karein?", a: "Agar koi secure corporate ya official link galat classify (Misclassified) ho jaye, toh aap domain signature ko form ke zariye whitelisting ke liye submit kar sakte hain." },
    { q: "Vector features kaise update hote hain?", a: "Backend validation database har 24 ghante baad fresh Kaggle repository splits aur active threat signatures ke sath synchronize hota hai." }
  ];

  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- PROFESSIONAL HEADING --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>System Support Nodes</h1>
        <p style={styles.subTitle}>
          Submit architecture pipeline feedback, report misclassification anomalies, or query systemic network infrastructure nodes.
        </p>
      </header>

      {/* --- TWO COLUMN SUPPORT INFRASTRUCTURE --- */}
      <div style={styles.dualLayout}>
        
        {/* Left Side: FAQs and Operational Meta */}
        <div style={styles.leftColumn}>
          <div className="clean-shadow" style={styles.panel}>
            <h3 style={styles.heading}>Report Misclassification Vectors</h3>
            <p style={styles.bodyText}>
              If a secure corporate internal login hub triggers an erroneous status classification inside our neural layer, forward the raw target configuration parameters directly to network ops.
            </p>
            <div style={styles.contact}>
              Systems Operations Email: <span style={styles.accentText}>integrity@antiphish-security.org</span>
            </div>
          </div>

          <div style={styles.faqSection}>
            <h3 style={styles.sectionHeading}>Knowledge Base Terminal</h3>
            {faqs.map((faq, i) => (
              <div key={i} style={styles.faqItem}>
                <div style={styles.faqQuestion}>⚙️ {faq.q}</div>
                <div style={styles.faqAnswer}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Operational Support Form */}
        <div className="clean-shadow" style={styles.formPanel}>
          <h3 style={styles.heading}>Open a Support Ticket</h3>
          <p style={styles.bodyText}>Bridge communication channels directly with our system telemetry supervisors.</p>
          
          <form onSubmit={handleSubmit} style={styles.formBlock}>
            <div style={styles.inputGroup}>
              <label style={styles.labelField}>Operator Identity Name</label>
              <input 
                type="text" 
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g., Mohammad Khan" 
                style={styles.inputField} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.labelField}>Secure Node Email</label>
              <input 
                type="email" 
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="operator@domain.com" 
                style={styles.inputField} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.labelField}>Anomalous URL Signature / Message</label>
              <textarea 
                rows="4" 
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Paste the misclassified URL signature weights here..." 
                style={styles.textAreaField}
              ></textarea>
            </div>

            <button type="submit" style={styles.submitBtn}>
              Dispatch Gateway Ticket
            </button>
          </form>
        </div>

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
  
  // Split responsive structure for modern dashboard look
  dualLayout: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '32px', marginTop: '24px' },
  leftColumn: { display: 'flex', flexDirection: 'column', gap: '28px' },
  
  panel: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', padding: '28px', borderRadius: '12px' },
  formPanel: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', padding: '32px', borderRadius: '12px' },
  
  heading: { fontSize: 'calc(1.1rem + 0.1vw)', fontWeight: '800', margin: '0 0 12px 0', color: 'var(--text-main, #0f172a)', letterSpacing: '-0.01em' },
  bodyText: { fontSize: 'calc(0.93rem + 0.05vw)', color: 'var(--text-muted, #475569)', lineHeight: '1.65', margin: '0 0 20px 0', fontWeight: '500' },
  contact: { fontSize: 'calc(0.9rem + 0.05vw)', color: 'var(--text-main, #0f172a)', fontWeight: '700', borderTop: '1px solid var(--panel-border, #e2e8f0)', paddingTop: '16px' },
  accentText: { color: 'var(--brand-primary, #2563eb)' },
  
  // Knowledge Base styling links
  faqSection: { display: 'flex', flexDirection: 'column', gap: '16px' },
  sectionHeading: { fontSize: 'calc(0.85rem + 0.05vw)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted, #475569)', margin: '0 0 4px 0' },
  faqItem: { backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' },
  faqQuestion: { fontSize: 'calc(0.93rem + 0.05vw)', fontWeight: '700', color: 'var(--text-main, #0f172a)', marginBottom: '6px' },
  faqAnswer: { fontSize: 'calc(0.9rem + 0.05vw)', color: 'var(--text-muted, #475569)', lineHeight: '1.5', fontWeight: '500' },
  
  // Interactive Support Input Forms Setup
  formBlock: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  labelField: { fontSize: 'calc(0.86rem + 0.05vw)', fontWeight: '700', color: 'var(--text-main, #0f172a)' },
  inputField: { padding: '12px 16px', backgroundColor: 'var(--bg-canvas, #f8fafc)', border: '1px solid var(--panel-border, #e2e8f0)', borderRadius: '6px', fontSize: 'calc(0.93rem + 0.05vw)', color: 'var(--text-main, #0f172a)', outline: 'none' },
  textAreaField: { padding: '12px 16px', backgroundColor: 'var(--bg-canvas, #f8fafc)', border: '1px solid var(--panel-border, #e2e8f0)', borderRadius: '6px', fontSize: 'calc(0.93rem + 0.05vw)', color: 'var(--text-main, #0f172a)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' },
  submitBtn: { padding: '14px 24px', backgroundColor: 'var(--brand-primary, #2563eb)', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: 'calc(0.94rem + 0.05vw)', fontWeight: '700', cursor: 'pointer', transition: 'background-color 0.2s', marginTop: '6px' }
};