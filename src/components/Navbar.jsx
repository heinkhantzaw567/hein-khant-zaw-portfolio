import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '0 24px',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10, 10, 15, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    },
    inner: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '72px',
    },
    logo: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 800,
      color: 'var(--accent)',
      letterSpacing: '-0.02em',
      cursor: 'pointer',
    },
    links: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
    },
    link: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: '4px',
    },
    bar: {
      width: '24px',
      height: '2px',
      background: 'var(--text-primary)',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed',
      top: '72px',
      left: 0,
      right: 0,
      background: 'rgba(10, 10, 15, 0.98)',
      backdropFilter: 'blur(20px)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      borderBottom: '1px solid var(--border)',
      transform: menuOpen ? 'translateY(0)' : 'translateY(-120%)',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.inner}>
          <a href="#" style={styles.logo}>HKZ</a>
          <div style={styles.links} className="nav-links">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            style={styles.hamburger}
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ ...styles.bar, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...styles.bar, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>
      <div style={styles.mobileMenu} className="mobile-menu">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ ...styles.link, fontSize: '1.1rem', color: 'var(--text-primary)' }}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}