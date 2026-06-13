export default function Card({ title, value, subtext, status }) {
  let accent = 'var(--panel-border)';
  if (status === 'safe') accent = 'var(--matrix-green)';
  if (status === 'danger') accent = 'var(--matrix-red)';

  return (
    <div style={{ ...styles.card, borderTop: `2px solid ${accent}` }}>
      <div style={styles.title}>{title}</div>
      <div style={styles.value}>{value}</div>
      {subtext && <div style={styles.subtext}>{subtext}</div>}
    </div>
  );
}

const styles = {
  card: { backgroundColor: 'var(--bg-slate)', border: '1px solid var(--panel-border)', borderRadius: '8px', padding: '20px' },
  title: { fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '6px', fontWeight: '600' },
  value: { fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-main)', margin: '0 0 4px 0' },
  subtext: { fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }
};