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
  brandColor: string;
  heroProduct: string;
  rating: string;
  reviewsCount: string;
  perks: string[];
  ctaText: string;
}

const CHANNELS: ShopChannel[] = [
  {
    name: 'Amazon',
    logo: '/assets/logo/norm-Amazon-Logo.png',
    logoWidth: 120,
    logoHeight: 36,
    href: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    badge: 'Verified Brand Store',
    brandColor: '#FF9900',
    heroProduct: 'Vestibular Swings & Sensory Aids',
    rating: '4.9',
    reviewsCount: '120+ verified parent reviews',
    perks: ['Prime Fast Dispatch', 'Hassle-Free Direct Returns', 'Pan-India Delivery'],
    ctaText: 'Visit Amazon Store'
  },
  {
    name: 'Etsy',
    logo: '/assets/logo/norm-Etsy_logo_lg_rgb.png',
    logoWidth: 92,
    logoHeight: 36,
    href: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    badge: 'Star Seller Partner',
    brandColor: '#F1641E',
    heroProduct: 'ProprioTex™ Compression Swings',
    rating: '5.0',
    reviewsCount: 'Star Seller Rating',
    perks: ['Handcrafted in Kochi', 'Custom Size Calibration', 'Worldwide Express Shipping'],
    ctaText: 'Shop on Etsy'
  },
  {
    name: 'Walmart',
    logo: '/assets/logo/norm-Walmart-Logo-2008.png',
    logoWidth: 128,
    logoHeight: 36,
    href: '#contact',
    badge: 'US Institutional Partner',
    brandColor: '#0071DC',
    heroProduct: 'Clinical & School Fit-outs',
    rating: 'US Partner',
    reviewsCount: 'Invitation to Sell Partner',
    perks: ['Hospital & Clinic POs', 'Direct US Logistics', 'Authorized Warranty'],
    ctaText: 'Inquire for USA Orders'
  },
  {
    name: 'Flipkart',
    logo: '/assets/logo/norm-Flipkart-Logo.png',
    logoWidth: 122,
    logoHeight: 36,
    href: 'https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753',
    badge: 'Pan-India Direct',
    brandColor: '#2874F0',
    heroProduct: 'Deep Pressure Sleep Bags',
    rating: '4.8',
    reviewsCount: 'Express Dispatch Across India',
    perks: ['Nationwide Express', 'Doorstep Delivery', 'Clinical Grade Foam'],
    ctaText: 'View on Flipkart'
  }
];

export default function Marketplaces() {
  return (
    <section id="shop" className="marketplaces-section board-section">
      <div className="keller-container">
        {/* Variety Header: Left Title + Right Floating Trust Badges */}
        <div className="marketplaces-hero-header">
          <div className="marketplaces-header-left section-graffitos-header">
            <div className="section-graffitos-bg" aria-hidden="true">
              <Image
                src="/assets/bg/marketplaces-graffitos.svg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 1100px"
                className="section-graffitos-img"
              />
            </div>
            <p className="board-kicker">Where To Buy</p>
            <h2 className="board-title">Official Stores & Global Partners</h2>
            <div className="mission-title-bar" aria-hidden="true" />
            <p className="board-lead">
              Every authentic Keller Adapt sensory tool and pediatric therapy piece is available through verified marketplaces with guaranteed manufacturer authenticity and worldwide delivery.
            </p>
          </div>

          {/* Right: Boutique Trust Stamp */}
          <div className="marketplaces-trust-stamp">
            <div className="trust-stamp-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F46255" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="trust-stamp-text">
              <strong>100% Genuine Hardware</strong>
              <span>Direct from Kochi workshop · Serial numbered warranty</span>
            </div>
          </div>
        </div>

        {/* 4 Distinct Boutique Storefront Cards */}
        <div className="marketplaces-boutique-grid">
          {CHANNELS.map((channel) => (
            <article
              key={channel.name}
              className="boutique-store-card"
              style={{ '--brand-color': channel.brandColor } as React.CSSProperties}
            >
              {/* Top Color Accent Line */}
              <div className="store-card-stripe" style={{ backgroundColor: channel.brandColor }} aria-hidden="true" />

              {/* Header: Partner Logo & Trust Pill */}
              <div className="store-card-head">
                <div className="store-logo-wrapper">
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    width={channel.logoWidth}
                    height={channel.logoHeight}
                    className="store-logo-image"
                  />
                </div>
                <span className="store-badge-pill" style={{ color: channel.brandColor, borderColor: `${channel.brandColor}33`, backgroundColor: `${channel.brandColor}12` }}>
                  {channel.badge}
                </span>
              </div>

              {/* Star Rating & Review snippet */}
              <div className="store-rating-bar">
                <span className="store-star-badge">★ {channel.rating}</span>
                <span className="store-review-meta">{channel.reviewsCount}</span>
              </div>

              {/* Hero Product Focus Tag */}
              <div className="store-product-highlight">
                <span className="store-product-label">Featured Catalog</span>
                <h4 className="store-product-name">{channel.heroProduct}</h4>
              </div>

              {/* Perks Checklist */}
              <ul className="store-perks-list">
                {channel.perks.map((perk, i) => (
                  <li key={i}>
                    <span className="perk-check" aria-hidden="true">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom CTA Button */}
              <div className="store-card-action">
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="store-action-btn"
                >
                  <span>{channel.ctaText}</span>
                  <span className="store-action-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Variety Element: Direct Workshop Order Strip */}
        <div className="marketplaces-direct-strip">
          <div className="direct-strip-content">
            <span className="direct-strip-badge">Direct From Kochi Workshop</span>
            <p className="direct-strip-text">
              Looking for turnkey sensory room projects, hospital tenders, or custom dimension orders?
            </p>
          </div>
          <a href="#contact" className="direct-strip-cta">
            <span>Request Institutional Quote</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
