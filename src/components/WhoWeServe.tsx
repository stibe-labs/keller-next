import React from 'react';
import Image from 'next/image';

const ECOSYSTEM_NODES = [
  {
    icon: '🏥',
    tag: 'Clinical Infrastructure',
    title: 'Therapy Centres',
    desc: 'Millions of pediatric centres worldwide adopting our sensory integration equipment, vestibular swings, and motor development systems for daily patient sessions.',
    stat: '100+ Centres Adopting Keller Hardware'
  },
  {
    icon: '🏡',
    tag: 'Direct-to-Consumer',
    title: 'Parents & Families',
    desc: 'Direct-to-home online delivery empowering parents with affordable, therapist-approved sensory regulation tools, calming compression wraps, and sensory hammocks.',
    stat: '9-Day Delivery to USA, Europe & Australia'
  },
  {
    icon: '🩺',
    tag: 'Specialized Care',
    title: 'Hospitals & Clinics',
    desc: 'Pediatric occupational therapy (OT), physiotherapy departments, and child development units requiring certified, durable clinical-grade therapy solutions.',
    stat: 'Medical-Grade Compliance & Ergonomics'
  },
  {
    icon: '🏫',
    tag: 'Inclusive Classrooms',
    title: 'Schools & NGOs',
    desc: 'Inclusive education programs, sensory breakout corners, and NGO initiatives that help neurodivergent students regulate sensory overstimulation and thrive.',
    stat: 'Sensory Tools for Mainstream Classrooms'
  },
  {
    icon: '🏛️',
    tag: 'Institutional Tenders',
    title: 'Government Institutions',
    desc: 'Public healthcare infrastructure, state-level disability welfare initiatives, and institutional procurement via GeM (Government e-Marketplace).',
    stat: 'GeM Registered & Make-In-India Champion'
  },
  {
    icon: '🌐',
    tag: 'Global Expansion',
    title: 'Export Markets',
    desc: 'Rapidly expanding international footprint across Europe, the USA, and Australia with high compliance, verified 5-star feedback, and global retail channels.',
    stat: 'International Express Logistics'
  }
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="serve-section">
      <div className="keller-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">PEDIATRIC THERAPY ECOSYSTEM • D2C & INSTITUTIONAL</span>
          <h2 className="section-title">Who We Serve: Powering Every Node in Care</h2>
          <p className="section-subtitle">
            From direct-to-home therapy tools to turnkey hospital sensory rooms and global retail networks, Keller Adapt empowers every stakeholder delivering everyday therapy.
          </p>
        </div>

        {/* 6 Ecosystem Nodes */}
        <div className="serve-nodes-grid">
          {ECOSYSTEM_NODES.map((node, idx) => (
            <div key={idx} className="serve-node-card">
              <div className="serve-node-header">
                <div className="serve-node-icon">{node.icon}</div>
                <span className="serve-node-tag">{node.tag}</span>
              </div>
              <h3 className="serve-node-title">{node.title}</h3>
              <p className="serve-node-desc">{node.desc}</p>
              <div className="serve-node-stat">
                <span>✓</span>
                <span>{node.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach & Verified Channels Banner */}
        <div className="serve-global-box">
          <div className="serve-global-header">
            <div>
              <div className="serve-global-badge">
                <span style={{ fontSize: '8px' }}>●</span>
                <span>NOW AVAILABLE WORLDWIDE</span>
              </div>
              <h3 className="serve-global-title">Shipping Worldwide • 9-Day Guaranteed Delivery</h3>
              <p className="serve-global-sub">
                Guaranteed fast express air logistics to the USA, Europe & Australia with verified retailer channels and therapist-approved packaging.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#F8FAFC', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                  🇺🇸 United States (US)
                </span>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#F8FAFC', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                  🇪🇺 European Union (EU)
                </span>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#F8FAFC', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                  🇦🇺 Australia
                </span>
              </div>
            </div>

            <div className="serve-guarantee-pill">
              <span style={{ fontSize: '28px' }}>✈️</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#EA5338' }}>
                  GLOBAL AIR EXPRESS
                </div>
                <div style={{ fontSize: '11px', color: '#CBD5E1' }}>
                  Full Customs Clearance & Tracking
                </div>
              </div>
            </div>
          </div>

          {/* 4 Platform Recognition Cards */}
          <div className="serve-channels-grid">
            {/* Etsy Star Seller */}
            <a
              href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
              target="_blank"
              rel="noopener noreferrer"
              className="serve-channel-card"
            >
              <div className="serve-channel-top">
                <div className="serve-channel-logo-wrap">
                  <div style={{ position: 'relative', width: '64px', height: '24px' }}>
                    <Image
                      src="/assets/logo/Etsy_logo_lg_rgb.png"
                      alt="Etsy"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <span className="serve-channel-status" style={{ background: 'rgba(149, 96, 185, 0.15)', color: '#C084FC', border: '1px solid rgba(168, 85, 247, 0.35)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Image src="/assets/logo/etsy-star-seller-badge.png" alt="Star Seller" width={14} height={14} />
                  <span>Verified Star Seller</span>
                </span>
              </div>
              <h4 className="serve-channel-name">Etsy Star Seller</h4>
              <p className="serve-channel-detail">
                100% 5-star ratings across international therapy shipments. Recognized for rapid dispatch and customer care.
              </p>
            </a>

            {/* Walmart Invitation to Sell */}
            <div className="serve-channel-card" style={{ borderColor: 'rgba(0, 113, 206, 0.35)' }}>
              <div className="serve-channel-top">
                <div className="serve-channel-logo-wrap">
                  <div style={{ position: 'relative', width: '84px', height: '24px' }}>
                    <Image
                      src="/assets/logo/Walmart-Logo-2008.png"
                      alt="Walmart"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <span className="serve-channel-status" style={{ background: '#E0F2FE', color: '#0071CE' }}>
                  Invitation to Sell ✓
                </span>
              </div>
              <h4 className="serve-channel-name">Walmart Marketplace</h4>
              <p className="serve-channel-detail">
                Official retail invitation to onboard Keller Adapt pediatric sensory hardware into the Walmart US catalog.
              </p>
            </div>

            {/* Amazon Global */}
            <a
              href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1"
              target="_blank"
              rel="noopener noreferrer"
              className="serve-channel-card"
            >
              <div className="serve-channel-top">
                <div className="serve-channel-logo-wrap">
                  <div style={{ position: 'relative', width: '82px', height: '24px' }}>
                    <Image
                      src="/assets/logo/Amazon-Logo.png"
                      alt="Amazon"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <span className="serve-channel-status" style={{ background: '#F1F5F9', color: '#0F172A' }}>
                  Prime & Express
                </span>
              </div>
              <h4 className="serve-channel-name">Amazon Storefront</h4>
              <p className="serve-channel-detail">
                Live occupational therapy & sensory processing collection with international and domestic logistics.
              </p>
            </a>

            {/* Flipkart India */}
            <a
              href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753"
              target="_blank"
              rel="noopener noreferrer"
              className="serve-channel-card"
            >
              <div className="serve-channel-top">
                <div className="serve-channel-logo-wrap">
                  <div style={{ position: 'relative', width: '82px', height: '24px' }}>
                    <Image
                      src="/assets/logo/Flipkart-Logo.png"
                      alt="Flipkart"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <span className="serve-channel-status" style={{ background: '#F1F5F9', color: '#0F172A' }}>
                  India Verified
                </span>
              </div>
              <h4 className="serve-channel-name">Flipkart India</h4>
              <p className="serve-channel-detail">
                Deep pressure memory foam sensory therapy aid and sleeping bags dispatched across all Indian pincodes.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
