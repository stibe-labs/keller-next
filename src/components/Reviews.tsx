'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { REVIEWS } from '@/data/kellerData';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartXRef = useRef<number | null>(null);

  // Responsive columns calculation: 3 cols on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 680) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 980) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-slide every 4.5 seconds unless user hovers or touches
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, nextSlide]);

  // Touch swipe handling for mobile / tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      touchStartXRef.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  return (
    <section id="reviews" className="reviews-section board-section board-rule">
      <div className="keller-container">
        <div className="board-trusted">
          <div className="board-trusted-map-bg" aria-hidden="true" />
          <div className="board-trusted-content section-graffitos-header">
            <div className="section-graffitos-bg" aria-hidden="true">
              <Image
                src="/assets/bg/reviews-graffitos.svg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 1100px"
                className="section-graffitos-img"
              />
            </div>
            <p className="board-kicker">Verified Reviews</p>
            <h2 className="board-title board-title-stack">
              <span>Trusted</span>
              <span>Globally.</span>
            </h2>
            <div className="mission-title-bar" aria-hidden="true" />
            <p className="board-lead">
              Parents and therapists in the United States, India, Portugal, and beyond, writing about the first afternoon a child found their own way to use the piece.
            </p>
          </div>
          <div className="board-frame">
            <Image
              src="/assets/sensory_rooms/14.jpg"
              alt="A child stepping across a projected lily pond in a Keller Adapt sensory room"
              fill
              sizes="(max-width: 800px) 100vw, 560px"
            />
          </div>
        </div>

        <div
          className="reviews-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Customer Reviews"
        >
          <div className="reviews-carousel-viewport">
            <div
              className="reviews-carousel-track"
              style={{
                transform: `translateX(calc(-${safeIndex} * (100% + 16px) / ${visibleCount}))`,
              }}
            >
              {REVIEWS.map((review) => (
                <article key={`${review.reviewer}-${review.date}`} className="board-review">
                  <div className="board-review-header">
                    <div className="board-review-platform">
                      {review.source?.toLowerCase().includes('etsy') ? (
                        <span className="platform-tag etsy" title="Verified Etsy Review">
                          <Image
                            src="/assets/logo/mark-etsy.png"
                            alt="Etsy"
                            width={44}
                            height={22}
                            style={{ objectFit: 'contain' }}
                          />
                          <span className="platform-label">Verified</span>
                        </span>
                      ) : review.source?.toLowerCase().includes('amazon') ? (
                        <span className="platform-tag amazon" title="Verified Amazon Review">
                          <Image
                            src="/assets/logo/mark-amazon.png"
                            alt="Amazon"
                            width={58}
                            height={20}
                            style={{ objectFit: 'contain' }}
                          />
                          <span className="platform-label">Verified</span>
                        </span>
                      ) : (
                        <span className="platform-tag" title={review.source || 'Verified Clinical Message'}>
                          <span className="platform-label">{review.source || 'Verified Purchase'}</span>
                        </span>
                      )}
                    </div>

                    <div className="board-stars" aria-label={`${review.rating} out of 5 stars`}>
                      {'★'.repeat(review.rating)}
                      <span className="is-empty">{'★'.repeat(5 - review.rating)}</span>
                    </div>
                  </div>

                  <h3>&ldquo;{review.highlight}&rdquo;</h3>
                  {review.detail ? <p className="board-review-detail">{review.detail}</p> : null}
                  <p className="board-review-body">{review.content}</p>
                  <footer>
                    <div className="board-review-author">
                      <strong>{review.reviewer}</strong>
                      <span>{review.location}</span>
                    </div>

                    {review.images?.length ? (
                      <div className="board-review-bottom-photos" aria-label="Customer product photos">
                        {review.images.map((src) => (
                          <Image
                            key={src}
                            src={src}
                            alt={`Product photo from ${review.reviewer}'s review`}
                            width={52}
                            height={52}
                            className="board-review-photo-thumb"
                          />
                        ))}
                      </div>
                    ) : null}
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <div className="reviews-controls">
            <button
              type="button"
              className="reviews-nav-btn prev"
              onClick={prevSlide}
              aria-label="Previous review slide"
              title="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="reviews-dots" role="tablist" aria-label="Review slide navigation">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === safeIndex}
                  aria-label={`Go to slide ${idx + 1} of ${maxIndex + 1}`}
                  className={`reviews-dot ${idx === safeIndex ? 'is-active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="reviews-nav-btn next"
              onClick={nextSlide}
              aria-label="Next review slide"
              title="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <p className="reviews-status-hint">
            {isPaused ? '⏸ Auto-slide paused' : 'Hover over reviews to pause reading'}
          </p>
        </div>
      </div>
    </section>
  );
}
