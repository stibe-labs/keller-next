'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ClayIcon from '@/components/ClayIcon';

interface DropdownItem {
  label: string;
  href: string;
}

interface MenuSection {
  id: string;
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  items: DropdownItem[];
}

const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'what-we-do',
    label: 'What we do',
    headline: 'Sensory Freedom to Clinical Independence',
    description:
      'Transforming pediatric rehabilitation with clinical-grade sensory environments, precision vestibular swings, and cause-and-effect learning panels designed for neurodivergent children.',
    ctaText: 'Unlock inclusive therapy solutions',
    ctaLink: '#products',
    items: [
      { label: 'Sensory Technology (LumaSwing™ & LightLoops)', href: '#products' },
      { label: 'Movement & Vestibular Integration (FlowSwing, Balance Seat)', href: '#products' },
      { label: 'Therapy Textiles & Calming Cocoon (LayerNest, CalmCave)', href: '#products' },
      { label: 'Sensory Room Installations & Gym Architecture', href: '#contact' },
      { label: 'Turnkey School & Clinic Fit-outs', href: '#who-we-serve' },
    ],
  },
  {
    id: 'who-we-are',
    label: 'Who we are',
    headline: 'Pioneering Kerala’s Assistive MedTech',
    description:
      'Keller Adapt combines deep clinical therapy insight with domestic precision engineering to create world-class assistive devices priced 60–80% below imports.',
    ctaText: 'Discover our founding journey',
    ctaLink: '#about',
    items: [
      { label: 'Our Mission & Clinical Purpose', href: '#mission' },
      { label: 'Who We Serve (Ecosystem & Global Reach)', href: '#who-we-serve' },
      { label: 'Leadership Team & OT Advisors', href: '#team' },
      { label: '100% Domestic Kerala Manufacturing', href: '#why-keller' },
      { label: '9-Day Express Global Delivery (USA, UK, EU)', href: '#global' },
      { label: 'Keller Adapt Headquarters & Workshop', href: '#location' },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    headline: 'Evidence-Based Pediatric Hardware',
    description:
      'Engineered in collaboration with leading Occupational Therapists to deliver calibrated proprioceptive, vestibular, and tactile input for children with autism, ADHD, and cerebral palsy.',
    ctaText: 'Explore complete hardware catalog (12 Systems)',
    ctaLink: '#products',
    items: [
      { label: 'LumaSwing™ Interactive Sensory Glow Swing', href: '#what-we-create' },
      { label: 'LIGHTLOOPS Sensory Cause & Effect Panel', href: '#products' },
      { label: 'SymphonySense II Acoustic Musical Wall Tiles', href: '#products' },
      { label: 'Balance Bench & Ergonomic Rocker Seat', href: '#products' },
      { label: 'LayerNest 5-Layer Lycra Compression Hammock', href: '#products' },
      { label: 'CalmCave Sensory De-escalation Pod', href: '#products' },
    ],
  },
  {
    id: 'clinical-impact',
    label: 'Clinical Impact',
    headline: 'Validated by Leading Therapists',
    description:
      'Endorsed by pediatric occupational therapists across New York, California, and top therapy centers in India. 8+ years of dedicated R&D supporting over 500+ neurodivergent children.',
    ctaText: 'Review clinical evidence & trial data',
    ctaLink: '#impact',
    items: [
      { label: 'Occupational Therapy Endorsements & NYC Insights', href: '#impact' },
      { label: 'Verified 5.0-Star Reviews (Etsy Star Seller)', href: '#reviews' },
      { label: 'Proprioceptive & Sensory Integration Outcomes', href: '#impact' },
      { label: 'Institutional Therapy Gym Deployments', href: '#who-we-serve' },
    ],
  },
  {
    id: 'investors',
    label: 'Investors',
    headline: 'A High-Growth MedTech Opportunity',
    description:
      'Disrupting the multi-billion dollar pediatric special needs hardware market with 70%+ gross margins, patent-pending sensory switches, and expanding global D2C + B2B institutional channels.',
    ctaText: 'Request investment memorandum',
    ctaLink: '#investor',
    items: [
      { label: 'Market Opportunity ($4.8B Assistive Tech)', href: '#investor' },
      { label: 'Unit Economics & 70%+ Gross Margins', href: '#investor' },
      { label: 'Global D2C Traction & US Export Momentum', href: '#investor' },
      { label: 'B2B Expansion & Government Procurement (GeM)', href: '#investor' },
      { label: 'Connect with Keller Adapt Leadership', href: '#contact' },
    ],
  },
  {
    id: 'store',
    label: 'Store',
    headline: 'Official Keller Store',
    description:
      'Our direct D2C clinical webstore with custom sensory dimensions, bulk clinic pricing, and institutional GeM invoicing is launching soon.',
    ctaText: 'Explore current product line',
    ctaLink: '#products',
    items: [],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let accum = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      setScrolled(y > 12);

      if (mobileMenuOpen) {
        setHidden(false);
        return;
      }

      if (y <= 16) {
        accum = 0;
        setHidden(false);
        return;
      }

      if ((accum > 0 && delta < 0) || (accum < 0 && delta > 0)) {
        accum = 0;
      }
      accum += delta;

      if (accum > 40) {
        accum = 0;
        setHidden(true);
        setActiveMenu(null);
      } else if (accum < -8) {
        accum = 0;
        setHidden(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [expandedSection, setExpandedSection] = useState<string | null>('products');

  const toggleSection = (id: string) => {
    setExpandedSection(prev => (prev === id ? null : id));
  };

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  const currentMenu = MENU_SECTIONS.find((m) => m.id === activeMenu);

  return (
    <header
      className={`tcs-header${scrolled || mobileMenuOpen ? ' is-solid' : ''}${hidden && !mobileMenuOpen ? ' is-hidden' : ''}`}
      ref={headerRef}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="tcs-nav">
        {/* Left: Brand Lockup */}
        <div className="tcs-brand-lockup">
          <a href="#" onClick={closeAll} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '160px', height: '44px' }}>
              <Image
                src="/assets/logo/keller-logo.png"
                alt="Keller Adapt"
                fill
                className="tcs-logo-img"
                priority
              />
            </div>
          </a>
          <span className="tcs-brand-sub">
            PEDIATRIC<br />ASSISTIVE TECH
          </span>
        </div>

        {/* Center: TCS Navigation Menu (All buttons share the exact same style & hover) */}
        <ul className="tcs-menu-list">
          {MENU_SECTIONS.map((section) => {
            const isActive = activeMenu === section.id;
            return (
              <li
                key={section.id}
                onMouseEnter={() => setActiveMenu(section.id)}
              >
                <button
                  type="button"
                  onClick={() => handleMenuClick(section.id)}
                  className={`tcs-menu-btn ${isActive ? 'active' : ''}`}
                  aria-expanded={isActive}
                >
                  <span>{section.label}</span>
                  <svg
                    className="tcs-caret"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: Contact Us & Mobile Hamburger */}
        <div className="tcs-right-group">
          {/* Contact us Direct Jump Link */}
          <a href="#contact" onClick={closeAll} className="tcs-quote-btn">
            Request a quote
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`tcs-hamburger ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* TCS Full-Width Dropdown Panel (Screenshot 2) */}
      {currentMenu && (
        <div className="tcs-dropdown-panel" onMouseEnter={() => setActiveMenu(currentMenu.id)}>
          {currentMenu.id === 'store' ? (
            /* Custom Store Mega-Panel Layout */
            <div className="tcs-store-container">
              <div className="tcs-store-columns">
                {/* Left Column: Direct Portal + Walmart North America Expansion */}
                <div className="tcs-store-left">
                  <div className="tcs-store-soon-badge">
                    <span className="tcs-soon-dot"></span>
                    <span>Store opening soon</span>
                  </div>

                  <h3 className="tcs-store-head">Official Keller Store</h3>
                  <p className="tcs-store-desc">
                    Direct institutional portal engineered for bespoke sensory room dimensions, therapy center volume tiers, and institutional GeM procurement.
                  </p>

                  <a href={currentMenu.ctaLink} onClick={closeAll} className="tcs-drop-cta" style={{ width: 'fit-content', marginBottom: '22px' }}>
                    <span>Explore hardware catalog & specs</span>
                    <span style={{ fontSize: '18px' }}>→</span>
                  </a>

                  {/* Walmart US Expansion Card */}
                  <div className="tcs-store-walmart-card">
                    <div className="tcs-store-market-logo">
                      <div className="tcs-store-market-logo-img tcs-logo-walmart">
                        <Image
                          src="/assets/logo/mark-walmart.png"
                          alt="Walmart"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                    <div className="tcs-store-market-meta">
                      <span className="tcs-store-market-title">Walmart US Marketplace</span>
                      <span className="tcs-store-market-desc">Invited Seller • North America Catalog Onboarding</span>
                    </div>
                    <span className="tcs-store-walmart-badge">
                      Invitation to Sell ✓
                    </span>
                  </div>
                </div>

                {/* Right Column: Active Marketplaces */}
                <div className="tcs-store-right">
                  <div className="tcs-store-subhead-bar">
                    <span>Currently available on these</span>
                  </div>

                  <div className="tcs-store-marketplaces-stack">
                    {/* Amazon */}
                    <a
                      href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tcs-store-market-card"
                      onClick={closeAll}
                    >
                      <div className="tcs-store-market-logo">
                        <div className="tcs-store-market-logo-img tcs-logo-amazon">
                          <Image
                            src="/assets/logo/mark-amazon.png"
                            alt="Amazon"
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                      <div className="tcs-store-market-meta">
                        <span className="tcs-store-market-title">Amazon Storefront</span>
                        <span className="tcs-store-market-desc">Official Verified Store • Prime Express Worldwide Fulfillment</span>
                      </div>
                      <span className="tcs-chevron">›</span>
                    </a>

                    {/* Etsy */}
                    <a
                      href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tcs-store-market-card"
                      onClick={closeAll}
                    >
                      <div className="tcs-store-market-logo">
                        <div className="tcs-store-market-logo-img tcs-logo-etsy">
                          <Image
                            src="/assets/logo/mark-etsy.png"
                            alt="Etsy"
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                      <div className="tcs-store-market-meta">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="tcs-store-market-title">Etsy Store</span>
                          <span className="tcs-store-etsy-badge">
                            <span style={{ position: 'relative', width: '15px', height: '15px', display: 'inline-flex', flexShrink: 0 }}>
                              <Image
                                src="/assets/logo/etsy-star-seller-badge.png"
                                alt="Star Seller Badge"
                                fill
                                style={{ objectFit: 'contain' }}
                              />
                            </span>
                            <span>Verified Star Seller</span>
                          </span>
                        </div>
                        <span className="tcs-store-market-desc">Certified Global Artisan Store • Direct International Dispatch</span>
                      </div>
                      <span className="tcs-chevron">›</span>
                    </a>

                    {/* Flipkart */}
                    <a
                      href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tcs-store-market-card"
                      onClick={closeAll}
                    >
                      <div className="tcs-store-market-logo">
                        <div className="tcs-store-market-logo-img tcs-logo-flipkart">
                          <Image
                            src="/assets/logo/mark-flipkart.png"
                            alt="Flipkart"
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                      <div className="tcs-store-market-meta">
                        <span className="tcs-store-market-title">Flipkart Store</span>
                        <span className="tcs-store-market-desc">Verified Assured Partner • Pan-India Express Delivery</span>
                      </div>
                      <span className="tcs-chevron">›</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Worldwide Shipping Strip */}
              <div className="tcs-store-shipping-bar">
                <div className="tcs-store-shipping-left">
                  <div className="tcs-store-shipping-icon"><ClayIcon name="plane" size={44} /></div>
                  <div>
                    <div className="tcs-store-shipping-text-title">
                      <span>NOW AVAILABLE • SHIPPING WORLDWIDE</span>
                      <span className="tcs-store-transit-badge">9-DAY TRANSIT</span>
                    </div>
                    <div className="tcs-store-shipping-text-sub">
                      Guaranteed express delivery with dedicated international customs clearance
                    </div>
                  </div>
                </div>

                <div className="tcs-store-shipping-flags">
                  <span className="tcs-store-flag-chip">🇺🇸 United States (US)</span>
                  <span className="tcs-store-flag-chip">🇪🇺 European Union (EU)</span>
                  <span className="tcs-store-flag-chip">🇦🇺 Australia</span>
                </div>
              </div>
            </div>
          ) : (
            /* Standard Menu Layout */
            <div className="tcs-dropdown-grid">
              {/* Left Column: Headline, Narrative & CTA */}
              <div className="tcs-drop-left">
                <h3>{currentMenu.headline}</h3>
                <p>{currentMenu.description}</p>
                <a href={currentMenu.ctaLink} onClick={closeAll} className="tcs-drop-cta">
                  <span>{currentMenu.ctaText}</span>
                  <span style={{ fontSize: '18px' }}>→</span>
                </a>
              </div>

              {/* Right Column: Stacked items with right arrow chevrons */}
              <ul className="tcs-drop-menu-items">
                {currentMenu.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} onClick={closeAll} className="tcs-drop-item-row">
                      <span>{item.label}</span>
                      <span className="tcs-chevron">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="tcs-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          {/* Quick-Jump Horizontal Pills */}
          <div className="tcs-mob-quickpills">
            <a href="#products" onClick={closeAll} className="tcs-mob-pill">
              Products
            </a>
            <a href="/create/sensory-rooms" onClick={closeAll} className="tcs-mob-pill tcs-mob-pill-featured">
              3D Rooms ✨
            </a>
            <a href="#about" onClick={closeAll} className="tcs-mob-pill">
              Who We Are
            </a>
            <a href="#impact" onClick={closeAll} className="tcs-mob-pill">
              Clinical Evidence
            </a>
            <a href="#faq" onClick={closeAll} className="tcs-mob-pill">
              FAQ
            </a>
            <a href="#location" onClick={closeAll} className="tcs-mob-pill">
              Workshop
            </a>
          </div>

          {/* Interactive 3D Sensory Room Spotlight Banner */}
          <a
            href="/create/sensory-rooms"
            onClick={closeAll}
            className="tcs-mob-spotlight-card"
          >
            <div className="tcs-mob-spotlight-badge">
              <span>Interactive 3D Builder</span>
              <span className="tcs-mob-sparkle">✨</span>
            </div>
            <div className="tcs-mob-spotlight-title">Sensory Room Configurator</div>
            <p className="tcs-mob-spotlight-desc">
              Custom clinic, school & pediatric hospital therapy architecture designed in Kerala.
            </p>
            <span className="tcs-mob-spotlight-link">Launch 3D Studio →</span>
          </a>

          {/* Expandable Accordion Menu Sections */}
          <div className="tcs-mob-accordion-list">
            {MENU_SECTIONS.filter((s) => s.id !== 'store').map((sec) => {
              const isOpen = expandedSection === sec.id;
              return (
                <div key={sec.id} className={`tcs-mob-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="tcs-mob-accordion-trigger"
                    onClick={() => toggleSection(sec.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="tcs-mob-sec-label">{sec.label}</span>
                    <span className={`tcs-mob-chevron ${isOpen ? 'is-rotated' : ''}`}>
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="tcs-mob-accordion-content">
                      <p className="tcs-mob-sec-desc">{sec.description}</p>
                      <div className="tcs-mob-subitems">
                        {sec.items.map((subItem, idx) => (
                          <a
                            key={idx}
                            href={subItem.href}
                            onClick={closeAll}
                            className="tcs-mob-sublink"
                          >
                            <span className="tcs-mob-sublink-bullet"></span>
                            <span>{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                      <a
                        href={sec.ctaLink}
                        onClick={closeAll}
                        className="tcs-mob-sec-cta"
                      >
                        {sec.ctaText} →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Official Stores Card */}
          <div className="tcs-mob-stores-card">
            <div className="tcs-mob-stores-header">
              <span className="tcs-mob-stores-title">Official Keller Stores</span>
              <span className="tcs-mob-stores-pill">Store opening soon</span>
            </div>
            <p className="tcs-mob-stores-sub">Currently available on verified marketplaces:</p>
            <div className="tcs-mob-stores-grid">
              <a
                href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1"
                target="_blank"
                rel="noopener noreferrer"
                className="tcs-mob-store-btn"
                aria-label="Shop on Amazon"
              >
                <div className="tcs-mob-store-img-wrap">
                  <Image src="/assets/logo/mark-amazon.png" alt="Amazon" fill style={{ objectFit: 'contain' }} />
                </div>
              </a>
              <a
                href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
                target="_blank"
                rel="noopener noreferrer"
                className="tcs-mob-store-btn"
                aria-label="Shop on Etsy"
              >
                <div className="tcs-mob-store-img-wrap">
                  <Image src="/assets/logo/mark-etsy.png" alt="Etsy Star Seller" fill style={{ objectFit: 'contain' }} />
                </div>
              </a>
              <a
                href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753"
                target="_blank"
                rel="noopener noreferrer"
                className="tcs-mob-store-btn"
                aria-label="Shop on Flipkart"
              >
                <div className="tcs-mob-store-img-wrap">
                  <Image src="/assets/logo/mark-flipkart.png" alt="Flipkart" fill style={{ objectFit: 'contain' }} />
                </div>
              </a>
              <div className="tcs-mob-store-btn tcs-mob-store-invite" aria-label="Walmart Partner by Invitation">
                <div className="tcs-mob-store-img-wrap">
                  <Image src="/assets/logo/mark-walmart.png" alt="Walmart" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="tcs-mob-walmart-badge">INVITE ONLY</span>
              </div>
            </div>
          </div>

          {/* Quick Contact & Quote Action Footer */}
          <div className="tcs-mob-drawer-footer">
            <a
              href="#contact"
              onClick={closeAll}
              className="btn btn-primary tcs-mob-cta-btn"
            >
              Request a Clinic Quote →
            </a>

            <div className="tcs-mob-direct-contact">
              <a href="tel:+917736630683" className="tcs-mob-contact-link">
                <span>📞 +91 77366 30683</span>
              </a>
              <a
                href="https://wa.me/917736630683?text=Hi%20Keller%20Adapt%2C%20I%20would%20like%20to%20inquire%20about%20sensory%20equipment"
                target="_blank"
                rel="noopener noreferrer"
                className="tcs-mob-contact-link tcs-mob-whatsapp-link"
              >
                <span>💬 WhatsApp Us</span>
              </a>
            </div>

            <a href="#location" onClick={closeAll} className="tcs-mob-location-tag">
              📍 Kakkanad, Kochi, Kerala — 682030 (Global Express Dispatch)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
