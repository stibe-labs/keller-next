import React from 'react';
import Image from 'next/image';

const PILLARS = [
  {
    num: '01',
    title: 'Customisation',
    subtitle: 'Engineered for Unique Needs',
    desc: 'Every child’s sensory profile and facility space is unique. We provide bespoke dimensional adjustments, fabric resistance ratings, and switch interfaces tailored to individual therapy plans.',
    image: '/assets/products/SafeSpace.png'
  },
  {
    num: '02',
    title: 'Purpose-Led Design',
    subtitle: 'Co-Developed with Clinicians',
    desc: 'Every product is co-designed with certified pediatric occupational therapists. We prioritize clinical sensory integration thresholds, non-toxic organic materials, and intuitive ergonomics.',
    image: '/assets/sensory_rooms/19 (1).jpg'
  },
  {
    num: '03',
    title: '100% Made in India',
    subtitle: 'Crafted in Kerala, Shipped Worldwide',
    desc: 'From FSC-certified sustainable timber to medical-grade precision stitching, our end-to-end manufacturing in Kochi delivers world-class quality at 60–80% lower cost than imported equivalents.',
    image: '/assets/unboxing/layernest.jpg'
  }
];

export default function WhyKeller() {
  return (
    <section className="why-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">Competitive Differentiation</span>
          <h2 className="section-title">More Than Products. A Considered Approach to Inclusion.</h2>
          <p className="section-subtitle">
            Three foundational pillars define why institutions and families choose Keller Adapt over generic or imported equipment.
          </p>
        </div>

        <div className="why-bento-grid">
          {PILLARS.map((pillar) => (
            <div key={pillar.num} className="why-pillar-card">
              <div className="why-pillar-num">{pillar.num}</div>
              <h3 className="why-pillar-title">{pillar.title}</h3>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '14px' }}>
                {pillar.subtitle}
              </div>
              <p className="why-pillar-desc" style={{ marginBottom: '24px' }}>
                {pillar.desc}
              </p>
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', marginTop: 'auto' }}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
