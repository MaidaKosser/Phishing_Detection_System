import { AlertTriangle, Info } from 'lucide-react';

export default function AboutUs() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease', backgroundColor: '#0a0f1d', border: '1px solid #161f38', padding: '30px', borderRadius: '16px' }}>
      <h2 style={{ fontSize: '1.3rem', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Info size={20} color="#38bdf8" /> Architectural Document Specifications</h2>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
        The system pulls a balanced sample slice of <strong>80,000 rows</strong> from the primary Kaggle collection dataset to prevent matrix processing memory bottlenecks during training on local environments.
      </p>
      <div style={{ padding: '16px', backgroundColor: '#eab30805', borderLeft: '4px solid #eab308', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5' }}>
        <AlertTriangle size={18} color="#eab308" style={{ display: 'inline', marginRight: '6px' }} /> <strong>Addressing Data Drift:</strong> Web domain records modify exponentially over time. Whitelist cache blocks enforce rapid bypass calculations for modern safe systems before evaluating complex neural weights.
      </div>
    </div>
  );
}