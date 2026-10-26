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
    <section id="investor" className="metrics-section board-section board-rule">
      <div className="keller-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <p className="board-kicker board-kicker-center">Verified proof</p>
          <h2 className="board-title">From proven products to scalable solutions.</h2>
          <p className="board-lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Commercial traction, clinical use, and the institutions already putting these rooms to work.
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
        <div className="board-roadmap">
          <h3>Milestones</h3>
          <div className="board-roadmap-grid">
            {ROADMAP_STEPS.map((step) => (
              <article key={step.year}>
                <div className="board-roadmap-year">{step.year}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
