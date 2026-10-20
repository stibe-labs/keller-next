import React from 'react';
import { EARLY_BUYERS } from '@/data/kellerData';

export default function ClinicalImpact() {
  return (
    <section id="impact" className="clinical-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">Clinical Champions</span>
          <h2 className="section-title">Real People. Real Impact.</h2>
          <p className="section-subtitle">
            See how pediatric occupational therapists, physicians, and neurodiversity advocates integrate Keller Adapt into their daily clinical practice.
          </p>
        </div>

        <div className="clinical-grid">
          {EARLY_BUYERS.map((buyer, idx) => (
            <div key={idx} className="clinical-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-mint-subtle)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '18px' }}>
                  {buyer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="clinical-author">{buyer.name}</h3>
                  <div className="clinical-credentials">{buyer.credentials}</div>
                </div>
              </div>

              <div className="clinical-org">
                {buyer.organization} • <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{buyer.location}</span>
              </div>

              <blockquote className="clinical-quote">
                &ldquo;{buyer.quoteSnippet}&rdquo;
              </blockquote>

              <p className="clinical-bio">
                {buyer.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
