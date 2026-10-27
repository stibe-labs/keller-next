import React from 'react';
import Image from 'next/image';

interface Marketplace {
  name: string;
  logo: string;
  href: string;
  logoWidth: number;
  logoHeight: number;
  tag: string;
  tagColor: 'coral' | 'amber' | 'blue' | 'teal';
  focus: string;
  shipping: string;
  rating?: string;
  ctaText: string;
}

const MARKETPLACES: Marketplace[] = [
  {
    name: 'Amazon',
    logo: '/assets/logo/norm-Amazon-Logo.png',
    href: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    logoWidth: 120,
    logoHeight: 38,
    tag: 'Verified Brand Store',
    tagColor: 'amber',
    focus: 'Sensory Hammocks, Calming Accessories & Therapy Gear',
    shipping: 'Prime Fast Dispatch & Easy Returns',
    rating: '4.9 ★ (100+ Reviews)',
    ctaText: 'Visit Amazon Store'
  },
  {
    name: 'Etsy',
    logo: '/assets/logo/norm-Etsy_logo_lg_rgb.png',
    href: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    logoWidth: 96,
    logoHeight: 38,
    tag: 'Star Seller Partner',
    tagColor: 'coral',
    focus: 'ProprioTex Compression Swings & Custom Textiles',
    shipping: 'Handcrafted & Custom Workshop Orders',
    rating: '5.0 ★ (Star Seller)',
    ctaText: 'Shop on Etsy'
  },
  {
    name: 'Walmart',
    logo: '/assets/logo/norm-Walmart-Logo-2008.png',
    href: '#contact',
    logoWidth: 130,
    logoHeight: 38,
    tag: 'US Institutional Partner',
    tagColor: 'blue',
    focus: 'Direct Hospital, Clinic & Special School Procurement',
    shipping: 'Invitation to Sell · US Fulfillment',
    rating: 'Launching in US',
    ctaText: 'Inquire for USA Orders'
  },
  {
    name: 'Flipkart',
    logo: '/assets/logo/norm-Flipkart-Logo.png',
    href: 'https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753',
    logoWidth: 126,
    logoHeight: 38,
    tag: 'Pan-India Fulfillment',
    tagColor: 'teal',
    focus: 'Deep Pressure Sleeping Bags & Vestibular Aids',
    shipping: 'Fast Nationwide Delivery Across India',
    rating: '4.8 ★ Rated',
    ctaText: 'View on Flipkart'
  },
];

export default function Marketplaces() {
  return (
    <section id="shop" className="marketplaces-section board-section board-rule">
      <div className="keller-container">
        {/* Section Header */}
        <div className="marketplaces-header-wrapper section-graffitos-header">
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
          <h2 className="board-title">Available Across Verified Marketplaces</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Explore authentic Keller Adapt equipment through verified global retail channels, official storefronts, and direct institutional distributors.
          </p>
        </div>

        {/* 4 Professional Retail Partner Cards */}
        <div className="marketplace-cards-grid">
          {MARKETPLACES.map((shop) => (
            <article key={shop.name} className={`marketplace-card is-${shop.tagColor}`}>
              {/* Partner Logo Frame & Trust Badge */}
              <div className="marketplace-card-header">
                <div className="marketplace-logo-frame">
                  <Image
                    src={shop.logo}
                    alt={shop.name}
                    width={shop.logoWidth}
                    height={shop.logoHeight}
                    className="marketplace-logo-img"
                  />
                </div>
                <span className={`marketplace-trust-pill is-${shop.tagColor}`}>
                  {shop.tag}
                </span>
              </div>

              {/* Card Divider */}
              <div className="marketplace-card-divider" aria-hidden="true" />

              {/* Product Focus & Description */}
              <div className="marketplace-card-body">
                <h3 className="marketplace-focus-title">{shop.focus}</h3>
                <div className="marketplace-meta-row">
                  <span className="marketplace-shipping-text">✓ {shop.shipping}</span>
                  {shop.rating && (
                    <span className="marketplace-rating-tag">{shop.rating}</span>
                  )}
                </div>
              </div>

              {/* Action Link / Button */}
              <div className="marketplace-card-footer">
                <a
                  href={shop.href}
                  target={shop.href.startsWith('http') ? '_blank' : undefined}
                  rel={shop.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="marketplace-cta-btn"
                >
                  <span>{shop.ctaText}</span>
                  <span className="marketplace-cta-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
