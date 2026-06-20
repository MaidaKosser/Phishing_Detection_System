export default function AboutUs() {
  return (
    <div className="animated-node" style={styles.container}>
      
      {/* --- PROFESSIONAL HEADING --- */}
      <header style={styles.headerBlock}>
        <h1 style={styles.mainTitle}>About AntiPhish Gateway</h1>
        <p style={styles.subTitle}>
          System core objective, engineering pipelines, and architectural frameworks powering zero-day domain isolation.
        </p>
      </header>

      {/* --- CORE OBJECTIVE BLOCK (FULL WIDTH Premium Design) --- */}
      <section style={{ marginBottom: '40px' }}>
        <div className="clean-shadow" style={styles.largeBlock}>
          <div style={styles.badgeLabel}>Core Vision</div>
          <div style={styles.blockTitle}>System Core Objective</div>
          <p style={styles.paraText}>
            AntiPhish is engineered to deliver enterprise-grade defense against evolving social engineering threats. 
            By parsing URL tokens directly into a high-dimensional feature space, our validation gateway flags dangerous, 
            uncatalogued deceptive lookalikes in real-time before they can impact remote network entities.
          </p>
        </div>
      </section>

      {/* --- DUAL GRID INFRASTRUCTURE BLUEPRINTS (SIDE BY SIDE 2 BARE CARDS) --- */}
      <section style={styles.dualLayout}>
        
        {/* Machine Learning Pipeline Node */}
        <div className="clean-shadow" style={styles.gridBlock}>
          <div>
            <div style={styles.techBadge}>Data Pipeline</div>
            <div style={styles.blockTitle}>Feature Tokenization Model</div>
            <p style={styles.paraText}>
              The system deploys highly customized Regular Expression (Regex) tokenizers to slice string components (punctuation, top-level subdomains, and semantic patterns). These tokens are instantly mapped into a <strong style={{ color: 'var(--text-main, #0f172a)' }}>20,000-dimensional matrix</strong> via advanced TF-IDF space vectors.
            </p>
          </div>
        </div>

        {/* Deep Learning Layer Node */}
        <div className="clean-shadow" style={styles.gridBlock_Active}>
          <div>
            <div style={styles.activeTechBadge}>Neural Core</div>
            <div style={{ ...styles.blockTitle, color: '#c2410c' }}>Dual-Core Deep Learning Layer</div>
            <p style={styles.paraText}>
              The architecture runs a serialized <strong style={{ color: '#c2410c' }}>Multi-Layer Perceptron (MLP) Artificial Neural Network</strong> backend. 
              Utilizing dense backpropagation paths, a sequence of hidden nodes, and non-linear <code style={styles.inlineCode}>ReLU</code> activations, it extracts deep character weights that easily bypass standard linear hyperplanes.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '60px', maxWidth: '1650px', margin: '0 auto', padding: '0 24px', textAlign: 'left' },
  headerBlock: { marginBottom: '44px', marginTop: '36px' },
  
  // Fluid layout large text strategy
  mainTitle: { fontSize: 'calc(2.2rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 14px 0', letterSpacing: '-0.025em', lineHeight: '1.2' },
  subTitle: { color: 'var(--text-muted, #475569)', margin: 0, fontSize: 'calc(1.15rem)', lineHeight: '1.7', maxWidth: '1050px', fontWeight: '500' },
  
  // Premium Layout blocks
  largeBlock: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', borderLeft: '6px solid #3b82f6', padding: '40px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '14px' },
  badgeLabel: { display: 'inline-block', alignSelf: 'flex-start', padding: '4px 12px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: '#1e40af' },
  
  // Side-by-Side Professional Dual Row
  dualLayout: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(540px, 1fr))', gap: '32px' },
  gridBlock: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', padding: '36px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' },
  gridBlock_Active: { backgroundColor: '#ffffff', border: '2.5px solid #fdba74', padding: '36px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px', boxShadow: '0 10px 25px -5px rgb(234 88 12 / 0.08)' },
  
  techBadge: { display: 'inline-block', padding: '4px 10px', backgroundColor: 'var(--bg-canvas, #f8fafc)', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted, #475569)', marginBottom: '12px' },
  activeTechBadge: { display: 'inline-block', padding: '4px 10px', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '6px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#ea580c', marginBottom: '12px' },

  blockTitle: { fontSize: '24px', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 12px 0', letterSpacing: '-0.01em' },
  paraText: { margin: 0, fontSize: '17px', color: 'var(--text-muted, #475569)', lineHeight: '1.75', fontWeight: '500' },
  
  // Technical code elements badge
  inlineCode: { fontFamily: 'monospace', backgroundColor: '#fef2f2', padding: '3px 8px', borderRadius: '4px', border: '1px solid #fee2e2', color: '#ef4444', fontSize: '15px', fontWeight: '700' }
};