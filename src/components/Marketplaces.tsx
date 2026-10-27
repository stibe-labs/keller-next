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

const LOGISTICS_PILLARS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E24B32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
    title: '9-Day Express Global Air',
    text: 'Direct international air dispatch from our Kochi workshop to USA, UK, Europe, & Australia.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E24B32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Customs & Duties Pre-Cleared',
    text: 'Hassle-free international delivery with prepaid customs clearance for clinics, schools, and families.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E24B32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Drop-Tested Clinic Packaging',
    text: 'Engineered protective crating built to safeguard precision therapy electronics and structural rigs.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E24B32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Hospital & Institutional Tenders',
    text: 'Turnkey sensory room projects, direct hospital purchase orders, and global institutional fulfillment.'
  }
];

export default function Marketplaces() {
  return (
    <section id="shop" className="marketplaces-section board-section">
      {/* Anchor for global logistics nav links */}
      <div id="global" className="scroll-anchor" />

      <div className="keller-container">
        {/* Combined Section Header with Express Transport Vector Graffito */}
        <div className="marketplaces-header-layout">
          <div className="marketplaces-minimal-header">
            <p className="board-kicker">Where To Buy & Global Logistics</p>
            <h2 className="board-title">Worldwide Express Delivery & Verified Stores</h2>
            <div className="mission-title-bar" aria-hidden="true" />
            <p className="board-lead">
              Handcrafted in our Kochi workshop with 9-day express dispatch to the USA, Europe, and Australia. Available through verified global retailers or direct via our upcoming flagship store.
            </p>
          </div>

          {/* Express Logistics Vector Graffito (Flight, Van, Kochi Workshop, Global Routes) */}
          <div className="marketplaces-logistics-graffito" aria-hidden="true">
            <Image
              src="/assets/bg/marketplaces-logistics-graffitos.svg"
              alt=""
              width={540}
              height={220}
              className="marketplaces-graffito-svg"
              priority
            />
          </div>
        </div>

        {/* Flagship Store: Launching Soon Banner */}
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

        {/* Integrated Global Logistics Capability Band */}
        <div className="marketplaces-logistics-band">
          <div className="logistics-band-head">
            <span className="logistics-kicker">Kochi To The World</span>
            <h3 className="logistics-title">Global Air Freight & Doorstep Logistics</h3>
            <p className="logistics-subtitle">
              Seamless international distribution network delivering clinical-grade pediatric equipment to homes, therapy practices, and hospitals in over 18 countries.
            </p>
          </div>

          <div className="logistics-grid">
            {LOGISTICS_PILLARS.map((pillar, i) => (
              <div key={i} className="logistics-item">
                <div className="logistics-icon" aria-hidden="true">
                  {pillar.icon}
                </div>
                <div className="logistics-item-content">
                  <h4 className="logistics-item-title">{pillar.title}</h4>
                  <p className="logistics-item-text">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="logistics-band-footer">
            <span className="logistics-footer-text">
              Looking for hospital tenders, institutional import quotes, or school sensory room installations?
            </span>
            <a href="#contact" className="logistics-footer-btn">
              <span>Request International Quote</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
