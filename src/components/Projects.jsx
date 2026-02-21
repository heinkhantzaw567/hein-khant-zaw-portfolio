import React from 'react';
import { resume } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="fade-in">
        <h2 className="section-title">Projects<span className="accent-dot">.</span></h2>
        <p className="section-subtitle">Things I've built</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        {resume.projects.map((project, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }} className={"fade-in fade-in-delay-" + (i + 1)}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>{project.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t) => (
                <span key={t} style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: 500, background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}