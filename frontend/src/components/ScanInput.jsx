export default function ScanInput({ value, onChange, onSubmit, loading, placeholder, label }) {
  return (
    <div className="premium-shadow" style={styles.wrapper}>
      <form onSubmit={onSubmit}>
        {label && <label style={styles.label}>{label}</label>}
        <div style={styles.inputBox}>
          <input 
            type="text" 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            style={styles.input} 
          />
          <button type="submit" disabled={loading} style={styles.btn}>
            {loading ? "Analyzing Vectors..." : "Scan Domain"}
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  wrapper: { backgroundColor: 'var(--bg-panel)', border: '1px solid var(--panel-border)', padding: '24px', borderRadius: '12px', width: '100%' },
  label: { display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.05em' },
  inputBox: { display: 'flex', gap: '10px', width: '100%', flexWrap: 'wrap' },
  input: { flex: '1 1 450px', padding: '14px 18px', backgroundColor: 'var(--bg-canvas)', border: '1px solid var(--panel-border)', borderRadius: '8px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.15s' },
  btn: { padding: '14px 28px', backgroundColor: 'var(--brand-primary)', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer', transition: 'opacity 0.15s' }
};