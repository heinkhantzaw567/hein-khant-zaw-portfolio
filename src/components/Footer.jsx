import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '32px 24px', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
      <p>© {new Date().getFullYear()} Hein Khant Zaw. All rights reserved.</p>
    </footer>
  );
}