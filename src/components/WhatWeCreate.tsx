import React from 'react';
import Image from 'next/image';

const PILLARS = [
  {
    num: '01',
    category: 'Therapeutic Hardware',
    title: 'Sensory Products',
    desc: 'Proprietary compression hammocks, tactile musical walls, and interactive glow swings engineered for deep pressure and vestibular regulation.',
    tags: ['Compression Hammocks', 'Tactile Walls', 'Glow Swings'],
    image: '/assets/products/solonest_1.png',
    link: '#products',
    cta: 'Explore Products'
  },
  {
    num: '02',
    category: 'Clinical Environments',
    title: 'Sensory Rooms',
    desc: 'Turnkey multi-sensory installations for special education schools, therapy centers, and clinics with ambient fiber optics, acoustic padding, and interactive projection.',
    tags: ['Turnkey Rooms', 'Fiber Optics', 'Bubble Columns'],
    image: '/assets/sensory_rooms/12 (1).jpg',
    link: '#products',
    cta: 'View Installations'
  },
  {
    num: '03',
    category: 'Precision Fabrication',
    title: 'Custom Manufacturing',
    desc: 'In-house engineering, adaptive woodcraft, and rapid prototyping in Kerala, fabricating custom balance benches, positioning aids, and switch-adapted devices.',
    tags: ['Kerala Facility', 'Adaptive Woodcraft', 'Custom Prototyping'],
    image: '/assets/products/balance-bench-clean.png',
    link: '#contact',
    cta: 'Custom Requests'
  },
  {
    num: '04',
    category: 'Universal Architecture',
    title: 'Inclusive Spaces',
    desc: 'Designing and consulting on sensory-friendly architecture for airports, transit hubs, and public institutions to ensure universal cognitive accessibility.',
    tags: ['Airport Lounges', 'Transit Hubs', 'Accessibility Consulting'],
    image: '/assets/sensory_rooms/20 (1).jpg',
    link: '#contact',
    cta: 'Consult With Us'
  }
];

export default function WhatWeCreate() {
  return (
    <section id="what-we-create" className="what-we-create-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">Core Offerings</span>
          <h2 className="section-title">
            Designed Around <span style={{ color: 'var(--color-primary)' }}>Different Needs.</span>
          </h2>
          <p className="section-subtitle">
            We introduce four distinct solution pillars engineered to make therapy engaging, spaces accessible, and families supported.
          </p>
        </div>

        <div className="create-grid">
          {PILLARS.map((pillar) => (
            <a key={pillar.num} href={pillar.link} className="create-card">
              <div className="create-card-image-wrap">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="create-card-number-badge">{pillar.num}</div>
              </div>

              <div className="create-card-body">
                <div className="create-card-category">{pillar.category}</div>
                <h3 className="create-card-title">{pillar.title}</h3>
                <p className="create-card-desc">{pillar.desc}</p>

                <div className="create-card-tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="create-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="create-card-footer">
                  <span className="create-card-cta">
                    {pillar.cta} <span className="create-arrow">→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
