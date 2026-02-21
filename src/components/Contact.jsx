import React from 'react';
import { resume } from '../data/resume';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Get In Touch<span className="accent-dot">.</span></h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>Feel free to reach out</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <a href={"mailto:" + resume.email} style={{ padding: '14px 32px', background: 'var(--accent)', color: '#0a0a0f', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem' }}>{resume.email}</a>
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 32px', background: 'transparent', color: 'var(--text-primary)', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', border: '2px solid var(--border)' }}>LinkedIn</a>
          <a href={resume.github} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 32px', background: 'transparent', color: 'var(--text-primary)', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', border: '2px solid var(--border)' }}>GitHub</a>
        </div>
      </div>
    </section>
  );
}