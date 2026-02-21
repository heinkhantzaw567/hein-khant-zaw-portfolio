import React from 'react';

const skillCategories = [
  { name: 'Languages', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Shell', 'C/C++', 'Haskell', 'Rust', 'Prolog', 'Elixir'], color: '#f97351' },
  { name: 'Frameworks & Libraries', skills: ['React.js', 'React Native', 'Django', 'Bootstrap', 'Tailwind CSS', 'Pandas', 'NumPy', 'OpenCV', 'Playwright'], color: '#2dd4bf' },
  { name: 'Databases & Infrastructure', skills: ['MongoDB', 'Firebase', 'Supabase', 'Postgres', 'SQLite', 'IndexedDB', 'Nginx', 'Tailscale', 'WireGuard', "Let's Encrypt"], color: '#fbbf24' },
  { name: 'Concepts & Tools', skills: ['Git', 'Linux (Ubuntu)', 'API integration', 'Responsive design', 'Test case creation', 'Data visualization', 'AI-powered applications', 'Offline-first systems', 'Role-based Access Control', 'Data Analysis'], color: '#a78bfa' }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="fade-in">
        <h2 className="section-title">Technical Skills<span className="accent-dot">.</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {skillCategories.map((cat, i) => (
          <div key={cat.name} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }} className={"fade-in fade-in-delay-" + (i + 1)}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>{cat.name}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill) => (
                <span key={skill} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 500, background: cat.color + '12', color: cat.color, border: '1px solid ' + cat.color + '25' }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}