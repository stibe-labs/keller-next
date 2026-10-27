import React from 'react';
import Image from 'next/image';

interface CraftPillar {
  index: string;
  category: string;
  title: string;
  description: string;
  specLabel: string;
  specValue: string;
}

const PILLARS: CraftPillar[] = [
  {
    index: '01',
    category: 'Custom Engineering',
    title: 'Precision Customisation',
    description:
      'Dimensions, fabric resistance, acoustic dampening, and switch sensitivity calibrated to individual therapy targets or specific room footprints.',
    specLabel: 'Calibration',
    specValue: 'Tailored dimensions · Custom resistance',
  },
  {
    index: '02',
    category: 'Clinical OT',
    title: 'Purpose-Led Clinical Design',
    description:
      'Shaped alongside pediatric occupational therapists to deliver verified vestibular balance, proprioceptive input, and daily emotional regulation.',
    specLabel: 'Clinical Standard',
    specValue: 'Therapist co-designed · Evidence-based',
  },
  {
    index: '03',
    category: 'Kerala Workshop',
    title: 'Handcrafted in Kerala, India',
    description:
      'Cut, stitched, assembled, and safety-tested at our Kochi workshop, shipped to clinics, schools, and families worldwide at 60–80% below imported alternatives.',
    specLabel: 'Fabrication',
    specValue: '100% domestic craft · Worldwide shipping',
  },
];

export default function WhyKeller() {
  return (
    <section id="why-keller" className="why-section board-section board-rule">
      <div className="keller-container why-container-relative">
        {/* Dynamic Graffitos Canvas: Moved UP, extending under titles and down to gallery cards */}
        <div className="why-graffitos-extended" aria-hidden="true">
          <Image
            src="/assets/bg/why-craft-graffitos.svg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
            priority
            className="why-graffitos-extended-img"
          />
        </div>

        {/* Section Header */}
        <div className="why-header">
          <p className="board-kicker">Craft & Clinical Purpose</p>
          <h2 className="board-title">More than products. Engineered for a better future.</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Sensory differences call for more than one-size-fits-all furniture. At our workshop in Kochi,
            industrial designers and pediatric occupational therapists co-create adaptable therapy tools
            calibrated to individual regulation needs — making clinical-grade care accessible to every
            school, clinic, and home.
          </p>
        </div>

        {/* Editorial Visual Craft Story */}
        <div className="why-gallery-grid">
          {/* Main Hero Card (Left) */}
          <article className="why-gallery-card why-card-primary">
            <div className="why-gallery-frame">
              <Image
                src="/assets/create/inclusive-spaces.jpg"
                alt="Therapist and child in a Keller Adapt sensory therapy room"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                className="why-gallery-img"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="why-gallery-gradient" />
              <div className="why-gallery-badge">
                <span>Clinical Environment</span>
              </div>
              <div className="why-gallery-caption">
                <span className="why-gallery-meta">Turnkey Sensory Architecture</span>
                <h3>Classrooms and therapy rooms engineered for self-regulation</h3>
              </div>
            </div>
          </article>

          {/* Center Column: 2 Stacked Visuals */}
          <div className="why-gallery-col">
            <article className="why-gallery-card why-card-interactive">
              <div className="why-gallery-frame">
                <Image
                  src="/assets/create/gallery/bubble-switches.jpg"
                  alt="Child interacting with multi-sensory switch buttons and bubble tube"
                  fill
                  sizes="(max-width: 900px) 100vw, 380px"
                  className="why-gallery-img"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="why-gallery-gradient" />
                <div className="why-gallery-badge">
                  <span>Sensory Engagement</span>
                </div>
                <div className="why-gallery-caption">
                  <span className="why-gallery-meta">Switch-Adapted Agency</span>
                  <h4>Interactive multi-sensory feedback</h4>
                </div>
              </div>
            </article>

            <article className="why-gallery-card why-card-product">
              <div className="why-gallery-frame">
                <Image
                  src="/assets/create/movement-balance-bench.jpg"
                  alt="Keller Adapt custom balance bench handcrafted in solid birch wood"
                  fill
                  sizes="(max-width: 900px) 100vw, 380px"
                  className="why-gallery-img"
                  style={{ objectPosition: 'center 40%' }}
                />
                <div className="why-gallery-gradient" />
                <div className="why-gallery-badge">
                  <span>Pediatric Ergonomics</span>
                </div>
                <div className="why-gallery-caption">
                  <span className="why-gallery-meta">Therapeutic Seating</span>
                  <h4>Solid wood craft with child-safe curves</h4>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: Fiber-Optic & De-escalation Card */}
          <article className="why-gallery-card why-card-ambient">
            <div className="why-gallery-frame">
              <Image
                src="/assets/sensory_rooms/22 (1).jpg"
                alt="Fiber optic calming sensory installation"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                className="why-gallery-img"
                style={{ objectPosition: 'center 25%' }}
              />
              <div className="why-gallery-gradient" />
              <div className="why-gallery-badge">
                <span>De-escalation Pods</span>
              </div>
              <div className="why-gallery-caption">
                <span className="why-gallery-meta">Fiber-Optic Zoning</span>
                <h3>Calibrated ambient lighting for deep sensory de-escalation</h3>
              </div>
            </div>
          </article>
        </div>

        {/* 3 Bespoke Craft Pillars */}
        <div className="why-pillars-grid">
          {PILLARS.map((pillar) => (
            <article key={pillar.index} className="why-pillar-card">
              <div className="why-pillar-meta">
                <span className="why-pillar-num">{pillar.index}</span>
                <span className="why-pillar-cat">{pillar.category}</span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="why-pillar-foot">
                <span className="why-pillar-foot-label">{pillar.specLabel}</span>
                <span className="why-pillar-foot-val">{pillar.specValue}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
