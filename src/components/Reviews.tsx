import React from 'react';
import { REVIEWS } from '@/data/kellerData';

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">Authentic Feedback</span>
          <h2 className="section-title">Trusted by Customers. Shaped by Their Experiences.</h2>
          <p className="section-subtitle">
            Genuine verified feedback from parents and therapists around the world who use our sensory products every day.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="review-stars">★★★★★</div>
              <h3 className="review-highlight">
                &ldquo;{review.highlight}&rdquo;
              </h3>
              <p className="review-body">
                {review.content}
              </p>
              <div className="review-meta">
                <div>
                  <span style={{ fontWeight: 800, color: 'var(--color-text-main)' }}>{review.reviewer}</span>
                  <span style={{ color: 'var(--color-text-light)' }}> • {review.location}</span>
                </div>
                <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '11px' }}>
                  {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
