import React from 'react';
import Image from 'next/image';

export default function ProblemWeSolve() {
  return (
    <section className="problem-section">
      <div className="keller-container">
        <div className="problem-grid">
          <div>
            <span className="section-tag">The Healthcare Gap</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Accessibility Should Be Part of Every Space.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
              Globally, over 1 in 36 children are diagnosed with developmental, motor, or sensory processing differences. Yet pediatric therapy equipment remains dominated by expensive imports that cost 5 to 10 times more than necessary, leaving schools, public spaces, and Tier-2/Tier-3 cities severely underserved.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-mint-subtle)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>More Inclusive Environment for Every Child</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-mint-subtle)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>Targeted Sensory & Proprioceptive Support</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-mint-subtle)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>Greater Daily Independence and Confidence</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-mint-subtle)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>A Radically More Accessible & Affordable Future</span>
              </div>
            </div>

            <a href="#what-we-create" className="btn btn-primary">
              Discover How We Bridge This Gap
            </a>
          </div>

          <div className="problem-stat-list">
            <div className="problem-stat-card">
              <div className="problem-stat-num">1 in 36</div>
              <div className="problem-stat-label">Children diagnosed with autism or sensory processing needs globally</div>
            </div>

            <div className="problem-stat-card">
              <div className="problem-stat-num">5–10x</div>
              <div className="problem-stat-label">Price markup on imported therapy equipment shipped from Europe/US</div>
            </div>

            <div className="problem-stat-card">
              <div className="problem-stat-num" style={{ color: 'var(--color-primary)' }}>&lt; 10</div>
              <div className="problem-stat-label">Domestic pediatric assistive manufacturers in India before Keller Adapt</div>
            </div>

            <div className="problem-stat-card">
              <div className="problem-stat-num" style={{ color: 'var(--color-primary)' }}>60–80%</div>
              <div className="problem-stat-label">Average savings achieved by manufacturing locally in Kerala with ISO standards</div>
            </div>

            <div style={{ gridColumn: 'span 2', position: 'relative', height: '220px', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--color-border)', marginTop: '8px' }}>
              <Image
                src="/assets/sensory_rooms/18 (1).jpg"
                alt="Keller Adapt Pediatric Solution in Action"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
