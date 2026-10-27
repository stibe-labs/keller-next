import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="keller-footer">
      <div className="keller-container">
        {/* Large Brand Logo replacing old giant text */}
        <div className="footer-logo-wrapper">
          <Image
            src="/assets/logo/keller-logo.png"
            alt="Keller Adapt - Affectionately Assisting"
            width={420}
            height={135}
            className="footer-logo-img"
          />
        </div>

        <div className="footer-grid">
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
              <li><a href="#contact" className="footer-link">Request a quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Kochi studio</h4>
            <p className="footer-desc">
              Keller Adapt is a brand by SenseAbility Innovations Pvt Ltd. Pediatric assistive technology, made in Kerala and shipped worldwide.
            </p>
            <ul className="footer-links">
              <li><a href="mailto:hello@kelleradapt.com" className="footer-link">hello@kelleradapt.com</a></li>
              <li><a href="tel:+917736630683" className="footer-link">+91 77366 30683</a></li>
              <li><span className="footer-link">Kochi, Kerala, India — 682021</span></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Buy</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Etsy · Star Seller
                </a>
              </li>
              <li>
                <a href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Amazon
                </a>
              </li>
              <li>
                <a href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Flipkart
                </a>
              </li>
              <li><span className="footer-link">Direct store · launching soon</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Keller Adapt · SenseAbility Innovations Pvt Ltd</div>
          <div className="footer-legal">
            <a href="/privacy" className="footer-link">Privacy</a>
            <a href="/terms" className="footer-link">Terms</a>
            <span>Made in Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
