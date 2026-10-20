import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="keller-footer">
      <div className="keller-container">
        <div className="footer-grid">
          <div>
            <div style={{ position: 'relative', width: '160px', height: '42px', marginBottom: '16px', background: '#FFFFFF', padding: '6px 12px', borderRadius: '8px' }}>
              <Image
                src="/assets/logo/keller-logo.png"
                alt="Keller Adapt Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="footer-desc">
              <strong>Keller Adapt</strong> is a brand by <strong>SenseAbility Innovations Pvt Ltd</strong>. We design, manufacture, and distribute pediatric assistive technology and sensory integration solutions that empower children to learn, play, and live with dignity.
            </p>
            <div style={{ fontSize: '13px', color: '#38BDF8', fontWeight: 700 }}>
              Affectionately Assisting • Kochi, Kerala, India
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-links">
              <li><a href="#products" className="footer-link">Sensory Technology</a></li>
              <li><a href="#products" className="footer-link">Movement & Balance</a></li>
              <li><a href="#products" className="footer-link">Therapy Textiles</a></li>
              <li><a href="#products" className="footer-link">Sensory Rooms</a></li>
              <li><a href="#deep-dive" className="footer-link">LumaSwing™ System</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Keller Adapt</a></li>
              <li><a href="#impact" className="footer-link">Clinical Impact</a></li>
              <li><a href="#reviews" className="footer-link">Customer Reviews</a></li>
              <li><a href="#team" className="footer-link">Our Leadership</a></li>
              <li><a href="#contact" className="footer-link">Inquire / Partner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Global Channels</h4>
            <ul className="footer-links" style={{ marginBottom: '18px' }}>
              <li>
                <a href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Etsy Shop (Star Seller ★★★★★)
                </a>
              </li>
              <li>
                <a href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Amazon Storefront (Keller ADAPT)
                </a>
              </li>
              <li>
                <a href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Flipkart Store (Deep Pressure Therapy)
                </a>
              </li>
              <li>
                <span className="footer-link" style={{ color: '#64748B' }}>
                  Direct Online Store (Launching Soon)
                </span>
              </li>
            </ul>

            <div style={{ fontSize: '12px', color: '#94A3B8', lineHeight: '1.6' }}>
              <strong>Kochi Office:</strong><br />
              SenseAbility Innovations Pvt Ltd<br />
              Kochi, Kerala, India — 682021<br />
              Phone: +91 77366 30683
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Keller Adapt • SenseAbility Innovations Pvt Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>ISO Quality Standards</span>
            <span>Made in Kerala, India</span>
            <span>9-Day Global Express Fulfillment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
