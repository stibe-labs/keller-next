'use client';

import React from 'react';
import Image from 'next/image';

interface ShopChannel {
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
  badge: string;
  category: string;
  ratingScore: string;
  reviewsCount: string;
  description: string;
  ctaText: string;
}

const GoogleStar = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#FBBC04"
    aria-hidden="true"
    className="google-star-svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CHANNELS: ShopChannel[] = [
  {
    name: 'Amazon',
    logo: '/assets/logo/norm-Amazon-Logo.png',
    logoWidth: 110,
    logoHeight: 32,
    href: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    badge: 'Verified Store',
    category: 'Vestibular Swings & Sensory Aids',
    ratingScore: '4.9',
    reviewsCount: '120+ verified parent reviews',
    description: 'Prime fulfillment across India with hassle-free doorstep delivery and verified authentic warranty.',
    ctaText: 'Visit Amazon Store'
  },
  {
    name: 'Etsy',
    logo: '/assets/logo/norm-Etsy_logo_lg_rgb.png',
    logoWidth: 86,
    logoHeight: 32,
    href: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    badge: 'Star Seller',
    category: 'ProprioTex™ Compression Swings',
    ratingScore: '5.0',
    reviewsCount: 'Top rated worldwide seller',
    description: 'Custom handcrafted therapy pieces shipped direct from our Kochi studio with worldwide express logistics.',
    ctaText: 'Shop on Etsy'
  },
  {
    name: 'Walmart',
    logo: '/assets/logo/norm-Walmart-Logo-2008.png',
    logoWidth: 116,
    logoHeight: 32,
    href: '#contact',
    badge: 'US Partner',
    category: 'Clinical & School Fit-outs',
    ratingScore: '4.9',
    reviewsCount: 'North American distribution',
    description: 'Institutional procurement for pediatric clinics, therapy centers, and school sensory integration rooms.',
    ctaText: 'Inquire for USA'
  },
  {
    name: 'Flipkart',
    logo: '/assets/logo/norm-Flipkart-Logo.png',
    logoWidth: 110,
    logoHeight: 32,
    href: 'https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753',
    badge: 'Pan-India Delivery',
    category: 'Deep Pressure Sleep Bags',
    ratingScore: '4.8',
    reviewsCount: 'Express delivery network',
    description: 'High-density memory foam sensory calming bags with expedited doorstep courier across all Indian pincodes.',
    ctaText: 'View on Flipkart'
  }
];

export default function Marketplaces() {
  return (
    <section id="shop" className="marketplaces-section board-section">
      <div className="keller-container">
        {/* Section Header */}
        <div className="marketplaces-minimal-header">
          <p className="board-kicker">Where To Buy</p>
          <h2 className="board-title">Official Stores & Global Partners</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Explore authentic Keller Adapt sensory equipment through our verified marketplace partners or our upcoming direct flagship store.
          </p>
        </div>

        {/* Highlight Banner: Our Own Direct Store (Launching Soon) */}
        <div className="marketplaces-own-store-banner">
          <div className="own-store-badge-row">
            <span className="own-store-status-pill">
              <span className="own-store-pulse-dot" aria-hidden="true" />
              Launching Soon
            </span>
            <span className="own-store-subtext">Keller Adapt Official Webstore</span>
          </div>

          <div className="own-store-body">
            <div className="own-store-details">
              <h3 className="own-store-title">Direct Workshop Flagship Store</h3>
              <p className="own-store-description">
                Our dedicated direct-to-consumer store is launching soon with complete sensory catalog customisation, personalized dimensions, and serial-numbered warranty direct from our Kochi facility.
              </p>
            </div>
            <div className="own-store-action">
              <a href="#contact" className="own-store-cta-btn">
                <span>Inquire & Pre-Order</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal, Professional Partner Cards */}
        <div className="marketplaces-minimal-grid">
          {CHANNELS.map((channel) => (
            <article key={channel.name} className="minimal-store-card">
              {/* Partner Logo & Verification Pill */}
              <div className="minimal-card-header">
                <div className="minimal-card-logo">
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    width={channel.logoWidth}
                    height={channel.logoHeight}
                    className="minimal-logo-img"
                  />
                </div>
                <span className="minimal-trust-badge">{channel.badge}</span>
              </div>

              {/* Google Reviews Star Rating */}
              <div className="minimal-google-rating">
                <div className="google-stars-cluster" aria-label={`${channel.ratingScore} out of 5 stars`}>
                  <GoogleStar />
                  <GoogleStar />
                  <GoogleStar />
                  <GoogleStar />
                  <GoogleStar />
                </div>
                <span className="google-score-num">{channel.ratingScore}</span>
                <span className="google-review-note">({channel.reviewsCount})</span>
              </div>

              {/* Category Focus & Brief Description */}
              <div className="minimal-card-body">
                <h4 className="minimal-card-category">{channel.category}</h4>
                <p className="minimal-card-desc">{channel.description}</p>
              </div>

              {/* Clean Minimal Action Link */}
              <div className="minimal-card-footer">
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="minimal-card-btn"
                >
                  <span>{channel.ctaText}</span>
                  <span className="minimal-btn-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
