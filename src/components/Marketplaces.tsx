import React from 'react';
import Image from 'next/image';

export default function Marketplaces() {
  return (
    <section className="marketplaces-section">
      <div className="keller-container">
        <div className="marketplace-badge-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-bg)', border: '2px solid #F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>
              🎖️
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#B45309', background: '#FEF3C7', padding: '3px 10px', borderRadius: '9999px' }}>
                  VERIFIED BADGE
                </span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)' }}>
                  ★★★★★ 5.0 Star Seller
                </span>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#0071CE', background: '#E0F2FE', padding: '3px 10px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <span>Walmart Invitation to Sell</span>
                  <span>✓</span>
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-main)', marginTop: '4px' }}>
                Trusted Globally. Available on Leading Marketplaces.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Our products maintain 100% 5-star ratings across international therapy shipments.
              </p>
            </div>
          </div>

          <div className="marketplaces-links">
            {/* Etsy Star Seller */}
            <a
              href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-logo-pill"
              title="Etsy Star Seller - Sensory Compression Hammock"
              style={{ borderColor: 'rgba(249, 115, 22, 0.4)' }}
            >
              <div style={{ position: 'relative', width: '64px', height: '26px' }}>
                <Image
                  src="/assets/logo/Etsy_logo_lg_rgb.png"
                  alt="Etsy"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '11px', color: '#7E22CE', fontWeight: 800, background: '#F3E8FF', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '2px 8px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Image src="/assets/logo/etsy-star-seller-badge.png" alt="Star Seller" width={14} height={14} />
                <span>Verified Star Seller</span>
              </span>
            </a>

            {/* Walmart Invitation to Sell */}
            <div
              className="marketplace-logo-pill"
              title="Walmart Marketplace - Official Invitation to Sell"
              style={{ borderColor: 'rgba(0, 113, 206, 0.4)' }}
            >
              <div style={{ position: 'relative', width: '88px', height: '26px' }}>
                <Image
                  src="/assets/logo/Walmart-Logo-2008.png"
                  alt="Walmart"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '11px', color: '#0071CE', fontWeight: 800, background: '#E0F2FE', padding: '2px 8px', borderRadius: '9999px' }}>
                Invitation to Sell ✓
              </span>
            </div>

            {/* Amazon */}
            <a
              href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-logo-pill"
              title="Amazon Store - Occupational Therapy Equipment"
            >
              <div style={{ position: 'relative', width: '84px', height: '26px' }}>
                <Image
                  src="/assets/logo/Amazon-Logo.png"
                  alt="Amazon"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '11px', color: '#334155', fontWeight: 700, background: '#F1F5F9', padding: '2px 8px', borderRadius: '9999px' }}>
                Prime & Express
              </span>
            </a>

            {/* Flipkart */}
            <a
              href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-logo-pill"
              title="Flipkart Store - Deep Pressure Sensory Therapy Aid"
            >
              <div style={{ position: 'relative', width: '84px', height: '26px' }}>
                <Image
                  src="/assets/logo/Flipkart-Logo.png"
                  alt="Flipkart"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '11px', color: '#334155', fontWeight: 700, background: '#F1F5F9', padding: '2px 8px', borderRadius: '9999px' }}>
                India Verified
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
