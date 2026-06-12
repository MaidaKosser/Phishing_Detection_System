

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 Security Vault Intelligence Pipeline. Built for Cyber Security Framework Evaluation.</p>
    </footer>
  );
}

const styles = {
  footer: { textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #111827', marginTop: '60px', position: 'relative', zIndex: 10 },
  text: { color: '#475569', fontSize: '0.85rem', margin: 0 }
};