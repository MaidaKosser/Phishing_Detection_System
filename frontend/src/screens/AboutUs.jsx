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

      {/* --- CORE OBJECTIVE BLOCK (FULL WIDTH) --- */}
      <section style={{ marginBottom: '32px' }}>
        <div className="clean-shadow" style={styles.largeBlock}>
          <div style={styles.blockTitle}>System Core Objective</div>
          <p style={styles.paraText}>
            AntiPhish is engineered to deliver enterprise-grade defense against evolving social engineering threats. 
            By parsing URL tokens directly into a high-dimensional feature space, our validation gateway flags dangerous, 
            uncatalogued deceptive lookalikes in real-time before they can impact remote network entities.
          </p>
        </div>
      </section>

      {/* --- DUAL GRID INFRASTRUCTURE BLUEPRINTS --- */}
      <section style={styles.dualLayout}>
        
        {/* Machine Learning Pipeline Node */}
        <div className="clean-shadow" style={styles.gridBlock}>
          <div style={styles.blockTitle}>Feature Tokenization Model</div>
          <p style={styles.paraText}>
            The system deploys highly customized Regular Expression (Regex) tokenizers to slice string components (punctuation, top-level subdomains, and semantic patterns). These tokens are instantly mapped into a <strong>20,000-dimensional matrix</strong> via advanced TF-IDF space vectors.
          </p>
        </div>

        {/* Deep Learning Layer Node */}
        <div className="clean-shadow" style={styles.gridBlock}>
          <div style={styles.blockTitle}>Dual-Core Deep Learning Layer</div>
          <p style={styles.paraText}>
            The architecture runs a serialized <strong>Multi-Layer Perceptron (MLP) Artificial Neural Network</strong> backend. 
            Utilizing dense backpropagation paths, a sequence of hidden nodes, and non-linear <code style={styles.inlineCode}>ReLU</code> activations, it extracts deep character weights that easily bypass standard linear hyperplanes.
          </p>
        </div>

      </section>

    </div>
  );
}

const styles = {
  container: { paddingBottom: '40px', textAlign: 'left' },
  headerBlock: { marginBottom: '36px' },
  
  // Fluid typography setup matching the production web standards
  mainTitle: { fontSize: 'calc(1.6rem + 1.2vw)', fontWeight: '800', color: 'var(--text-main, #0f172a)', margin: '0 0 12px 0', letterSpacing: '-0.025em' },
  subTitle: { color: 'var(--text-muted, #475569)', margin: 0, fontSize: 'calc(0.96rem + 0.1vw)', lineHeight: '1.65', maxWidth: '850px', fontWeight: '500' },
  
  // Layout block enhancements
  largeBlock: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', borderLeft: '5px solid var(--brand-accent, #3b82f6)', padding: '32px', borderRadius: '12px' },
  
  // Side-by-Side Professional Infrastructure Grid
  dualLayout: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '28px' },
  gridBlock: { backgroundColor: 'var(--bg-panel, #ffffff)', border: '1px solid var(--panel-border, #e2e8f0)', padding: '28px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' },
  
  blockTitle: { fontSize: 'calc(1.05rem + 0.1vw)', fontWeight: '800', color: 'var(--brand-primary, #1e3a8a)', margin: 0, letterSpacing: '-0.01em' },
  paraText: { margin: 0, fontSize: 'calc(0.94rem + 0.05vw)', color: 'var(--text-muted, #475569)', lineHeight: '1.7', fontWeight: '500' },
  
  // Technical code badge styling inside description texts
  inlineCode: { fontFamily: 'monospace', backgroundColor: 'var(--bg-canvas, #f8fafc)', padding: '2px 6px', borderRadius: '4px', border: '1px solid #e2e8f0', color: 'var(--matrix-red, #ef4444)', fontSize: 'calc(0.85rem + 0.05vw)', fontWeight: '700' }
};