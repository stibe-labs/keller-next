import React from 'react';
import Image from 'next/image';

const UNBOXING_ITEMS = [
  {
    name: 'LayerNest Unboxing',
    desc: 'Custom Keller Adapt Canvas Bag & Heavy-Duty Carabiners',
    image: '/assets/unboxing/layernest.jpg'
  },
  {
    name: 'CalmCave Pod',
    desc: 'Compact Circular Storage Case & Blackout Shell',
    image: '/assets/unboxing/calmcave.jpg'
  },
  {
    name: 'FlowSwing Tri-Set',
    desc: 'High-Tensile Hardware, Ropes & OT Guidebook',
    image: '/assets/unboxing/flowswing unbox.jpg'
  },
  {
    name: 'SoloNest Cocoon',
    desc: 'Inflatable Base, Dual-Layer Lycra & Air Pump',
    image: '/assets/unboxing/solonest.jpg'
  }
];

export default function GlobalReach() {
  return (
    <section className="global-reach-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">International Fulfillment</span>
          <h2 className="section-title">Made in India. Reaching Customers Worldwide.</h2>
          <p className="section-subtitle">
            Engineered and crafted in Kochi, Kerala. Delivered straight to homes, therapy centers, and schools across the globe with guaranteed express transit.
          </p>
        </div>

        {/* Authentic Global Shipping Showcase Banner */}
        <div style={{
          position: 'relative',
          width: '100%',
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '36px',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: '#0D091D'
        }}>
          <div style={{ position: 'relative', width: '100%', height: '420px' }}>
            <Image
              src="/assets/banners/shipping-worldwide.png"
              alt="Keller Adapt Now Available - Shipping Worldwide to US, EU & Australia on Etsy and Amazon"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              priority
            />
          </div>
          {/* Banner bottom details bar */}
          <div style={{
            background: 'rgba(13, 9, 29, 0.96)',
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#EA5338', background: 'rgba(234, 83, 56, 0.15)', padding: '4px 12px', borderRadius: '9999px', letterSpacing: '0.6px' }}>
                NOW AVAILABLE WORLDWIDE
              </span>
              <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#FFFFFF' }}>
                Active on Etsy & Amazon Global
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F8FAFC', fontSize: '13.5px', fontWeight: 700 }}>
                <span style={{ fontSize: '18px' }}>🇺🇸</span>
                <span>United States (US)</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F8FAFC', fontSize: '13.5px', fontWeight: 700 }}>
                <span style={{ fontSize: '18px' }}>🇪🇺</span>
                <span>European Union (EU)</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F8FAFC', fontSize: '13.5px', fontWeight: 700 }}>
                <span style={{ fontSize: '18px' }}>🇦🇺</span>
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Dispatch Map Card */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid var(--color-border)', padding: '40px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ borderRight: '1px solid var(--color-border)', paddingRight: '20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>9 Days</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>Guaranteed Express Delivery</div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>To USA, Canada, United Kingdom & Europe</div>
            </div>

            <div style={{ borderRight: '1px solid var(--color-border)', paddingRight: '20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>100%</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>Customs Assistance Guarantee</div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Dedicated support for swift international clearance</div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>Kochi</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-main)' }}>Central Manufacturing Hub</div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Kerala, India (PIN: 682021)</div>
            </div>
          </div>

          <div style={{ background: 'var(--color-bg-light)', padding: '24px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>📦</span>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>
                  Intentionally Packaged with Premium Guidebooks
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Every item arrives safely boxed with branded fabric storage bags and clinical instruction manuals.
                </div>
              </div>
            </div>
            <a href="#products" className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '13px' }}>
              View Product Packaging Details
            </a>
          </div>
        </div>

        {/* Real Unboxing Gallery */}
        <div className="unboxing-grid">
          {UNBOXING_ITEMS.map((item, idx) => (
            <div key={idx} className="unboxing-card">
              <div style={{ position: 'relative', width: '100%', height: '190px' }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="unboxing-label">
                <div>{item.name}</div>
                <div style={{ fontSize: '11.5px', fontWeight: 500, color: 'var(--color-text-light)', marginTop: '4px' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
