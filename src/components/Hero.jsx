import React, { useState, useEffect, useRef } from 'react';
import { resume } from '../data/resume';

export default function Hero() {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);
  const fullTitle = resume.title;
  const indexRef = useRef(0);

  useEffect(() => {
    setTimeout(() => setNameVisible(true), 200);
    const typeTimer = setInterval(() => {
      if (indexRef.current < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typeTimer);
      }
    }, 80);
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => {
      clearInterval(typeTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }} id="hero">
      <div style={{ maxWidth: 'var(--max-width)', width: '100%', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--accent)', marginBottom: '16px', opacity: nameVisible ? 1 : 0, transform: nameVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Hello, I'm</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '20px', opacity: nameVisible ? 1 : 0, transform: nameVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s', letterSpacing: '-0.03em' }}>
          {resume.name}
        </h1>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '28px', minHeight: '2.4em' }}>
          {displayedTitle}
          <span style={{ display: 'inline-block', width: '3px', height: '1.1em', background: 'var(--accent)', marginLeft: '4px', verticalAlign: 'text-bottom', opacity: showCursor ? 1 : 0 }} />
        </div>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '40px' }}>{resume.summary}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#contact" style={{ padding: '14px 32px', background: 'var(--accent)', color: '#0a0a0f', borderRadius: '8px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', border: 'none', cursor: 'pointer' }}>Get In Touch</a>
          <a href="#projects" style={{ padding: '14px 32px', background: 'transparent', color: 'var(--text-primary)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', border: '2px solid var(--border)', cursor: 'pointer' }}>View Projects</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '32px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {resume.location}
        </div>
      </div>
    </section>
  );
}