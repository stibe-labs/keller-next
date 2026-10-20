import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="keller-container">
        <div className="hero-grid">
          <div className="hero-image-wrapper">
            <div style={{ position: 'relative', width: '100%', height: '460px' }}>
              <Image
                src="/assets/products/Joyful Girl Playing Musical Sensory Panels.png"
                alt="Joyful girl playing with Keller Adapt musical sensory therapy wall panels"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />

              {/* Official Etsy Star Seller Badge in the white space */}
              <a
                href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-star-seller-card"
                title="Keller Adapt - Official Etsy Star Seller"
              >
                <div className="hss-top-row">
                  <div className="hss-big-logo">
                    <Image
                      src="/assets/logo/etsy-logo-cropped.png"
                      alt="Etsy"
                      width={94}
                      height={42}
                      style={{ objectFit: 'contain', objectPosition: 'left center', display: 'block' }}
                      priority
                    />
                  </div>
                  <div className="hss-star-seller-pill">
                    <Image
                      src="/assets/logo/etsy-star-seller-badge.png"
                      alt="Star Seller"
                      width={18}
                      height={18}
                    />
                    <span>Star Seller</span>
                  </div>
                </div>

                <div className="hss-rating-row">
                  <span className="hss-stars">★★★★★</span>
                  <span className="hss-score">5.0</span>
                  <span className="hss-dot">•</span>
                  <span className="hss-reviews">100% 5-Star Reviews</span>
                </div>

                <div className="hss-subtext">
                  Rapid dispatch &amp; verified pediatric therapy quality
                </div>
              </a>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-tagline">Inclusive Spaces, Brighter Future</div>

            <h1 className="hero-heading">
              Making Every Space <br />
              <span style={{ color: 'var(--color-primary)' }}>More Inclusive.</span>
            </h1>

            <p className="hero-description">
              Keller Adapt designs and manufactures innovative assistive technology and pediatric therapy solutions that empower children with physical, developmental, and cognitive special needs to learn, play, and thrive with greater independence.
            </p>

            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                Explore Our Solutions
              </a>
              <a href="#team" className="btn btn-secondary">
                Our Story &amp; Vision
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full Line Trust & Marketplace Rating Card (Designed like reference) */}
      <div className="hero-trust-wrapper">
        <div className="keller-container">
          <div className="trust-card">
            {/* Left side: Laurel Wreath & Accolade */}
            <div className="trust-left">
              <div className="trust-wreath-wrap">
                <Image
                  src="/assets/logo/laurel-wreath-brand.png"
                  alt="Top Rated Pediatric Solutions"
                  width={64}
                  height={52}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="trust-narrative">
                <h3 className="trust-title">
                  Top-Rated Pediatric Solutions
                </h3>
                <p className="trust-subtitle">
                  Recognized for clinical-grade quality, verified safety, and 5-star ratings across independent global marketplaces.
                </p>
              </div>
            </div>

            {/* Right side: 3 Verified Marketplace Platforms (Etsy, Amazon, Flipkart) */}
            <div className="trust-platforms">
              {/* Etsy Star Seller */}
              <a
                href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
                target="_blank"
                rel="noopener noreferrer"
                className="trust-platform-col"
                title="Etsy - Star Seller (5.0 Rating)"
              >
                <span className="trust-platform-rating">Rating: 5.0</span>
                <span className="trust-platform-stars">★★★★★</span>
                <div className="trust-platform-logo-wrap">
                  <Image
                    src="/assets/logo/etsy-logo-cropped.png"
                    alt="Etsy"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  />
                </div>
              </a>

              {/* Amazon */}
              <a
                href="#products"
                className="trust-platform-col"
                title="Amazon Global (4.9 Rating)"
              >
                <span className="trust-platform-rating">Rating: 4.9</span>
                <span className="trust-platform-stars">★★★★★</span>
                <div className="trust-platform-logo-wrap">
                  <Image
                    src="/assets/logo/norm-Amazon-Logo.png"
                    alt="Amazon"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  />
                </div>
              </a>

              {/* Flipkart */}
              <a
                href="#products"
                className="trust-platform-col"
                title="Flipkart (4.8 Rating)"
              >
                <span className="trust-platform-rating">Rating: 4.8</span>
                <span className="trust-platform-stars">★★★★★</span>
                <div className="trust-platform-logo-wrap">
                  <Image
                    src="/assets/logo/norm-Flipkart-Logo.png"
                    alt="Flipkart"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
