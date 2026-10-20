import React from 'react';
import { METRICS } from '@/data/kellerData';

const ROADMAP_STEPS = [
  { year: '2018', title: 'R&D & Prototyping', desc: 'Collaborative clinical trials with occupational therapists in Kerala.' },
  { year: '2021', title: 'First Product Launch', desc: 'Debuted sensory hammocks and adaptive accessories on Amazon & Etsy.' },
  { year: '2023', title: 'Sensory Room Division', desc: 'Installed turnkey multi-sensory environments for clinics and special schools.' },
  { year: '2024', title: 'SenseAbility Innovations', desc: 'Formal incorporation with expanded manufacturing and ISO quality workflows.' },
  { year: '2026', title: 'Global Market Expansion', desc: 'Scaling direct institutional distribution across USA, Europe, GCC, and India.' }
];

export default function InvestorMetrics() {
  return (
    <section className="metrics-section">
      <div className="keller-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', padding: '4px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '0.05em' }}>
            Verified Proof Points
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px', letterSpacing: '-0.02em' }}>
            From Proven Products to Scalable Solutions.
          </h2>
          <p style={{ color: '#D1FAE5', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Data-backed commercial traction, clinically certified effectiveness, and rapid institutional adoption.
          </p>
        </div>

        {/* 5 High-Impact Metrics */}
        <div className="metrics-grid">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-val">{metric.value}</div>
              <div className="metric-lbl">{metric.label}</div>
              <div className="metric-sub">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Growth Roadmap */}
        <div style={{ marginTop: '70px', paddingTop: '50px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', textAlign: 'center', marginBottom: '36px' }}>
            Milestones of Purposeful Growth
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '18px' }}>
            {ROADMAP_STEPS.map((step, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#34D399', marginBottom: '6px' }}>
                  {step.year}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '12px', color: '#A7F3D0', lineHeight: '1.5' }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
