import React from 'react';
import { resume } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="fade-in">
        <h2 className="section-title">Experience<span className="accent-dot">.</span></h2>
        <p className="section-subtitle">My professional journey</p>
      </div>
      <div style={{ position: 'relative', maxWidth: '800px' }}>
        <div style={{ position: 'absolute', left: '20px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom, var(--accent), var(--teal))', borderRadius: '2px' }} />
        {resume.experience.map((exp, i) => (
          <div key={i} style={{ position: 'relative', paddingLeft: '56px', paddingBottom: '48px' }} className={"fade-in fade-in-delay-" + (i + 1)}>
            <div style={{ position: 'absolute', left: '12px', top: '6px', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--bg-primary)', border: '3px solid var(--accent)', zIndex: 1 }} />
            <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>{exp.role}</h3>
                  <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.95rem' }}>{exp.company}</p>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{exp.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.highlights.map((h, j) => (
                  <li key={j} style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, paddingLeft: '16px', position: 'relative', marginBottom: '8px' }}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}