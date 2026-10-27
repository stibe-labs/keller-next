import React from 'react';
import Image from 'next/image';

interface MissionPillar {
  index: string;
  category: string;
  title: string;
  description: string;
  deliverable: string;
}

const MISSION_PILLARS: MissionPillar[] = [
  {
    index: '01',
    category: 'Universal Design',
    title: 'More inclusive environments',
    description:
      'Sensory-adapted design for classrooms, airports, and civic spaces so every child can actively participate, not just pass through.',
    deliverable: 'Architecture engineered for every sensory profile',
  },
  {
    index: '02',
    category: 'Pediatric OT',
    title: 'Clinical-grade sensory support',
    description:
      'Proprioceptive compression, calibrated resistance, and vestibular tools developed with pediatric therapists for daily emotional regulation.',
    deliverable: 'Deep-pressure calming & vestibular balance',
  },
  {
    index: '03',
    category: 'Assistive Tech',
    title: 'Greater childhood independence',
    description:
      'Switch-adapted sensory panels and ergonomic therapeutic seating enabling children with motor differences to learn and play on their own terms.',
    deliverable: 'Adaptive agency & self-directed exploration',
  },
  {
    index: '04',
    category: 'Affordability',
    title: 'A radically accessible future',
    description:
      '100% designed and manufactured in Kerala, India. Priced 60–80% below imported alternatives to make pediatric therapy tools accessible to every family.',
    deliverable: 'Domestic engineering & equitable pricing',
  },
];

export default function ProblemWeSolve() {
  return (
    <section id="mission" className="problem-section board-section board-rule">
      <div className="keller-container mission-container-relative">
        {/* Dynamic Graffitos Canvas: Moved UP, extending under titles and down to images */}
        <div className="mission-graffitos-extended" aria-hidden="true">
          <Image
            src="/assets/bg/mission-graffitos.svg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
            priority
            className="mission-graffitos-extended-img"
          />
        </div>

        {/* Section Header */}
        <div className="mission-header">
          <p className="board-kicker">Our Mission</p>
          <h2 className="board-title">Accessibility should be a part of every space</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            More than one in thirty-six children grow up with developmental, motor, or sensory differences.
            Imported therapy equipment still costs five to ten times what a school or a family can spend.
            Keller Adapt builds the same clinical care in Kerala, so the classroom, the airport, and the living
            room can all make room for them.
          </p>
        </div>

        {/* Bento Showcase Grid */}
        <div className="mission-bento-grid">
          {/* Left: Documentary Field Photography & Mission Quote */}
          <div className="mission-visual-card">
            <div className="mission-visual-frame">
              <Image
                src="/assets/rough/we believe every child deserves.webp"
                alt="A joyful child immersed in an illuminated Keller Adapt sensory ball pool"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                className="mission-visual-img"
              />
              <div className="mission-visual-gradient" />
              
              <div className="mission-visual-stamp">
                <span className="mission-visual-stamp-dot" aria-hidden="true" />
                <span>Kerala MedTech Initiative · Field Deployment</span>
              </div>

              <div className="mission-visual-caption">
                <blockquote className="mission-visual-quote">
                  “We believe every child deserves access to tools that help them grow, learn, and belong.”
                </blockquote>
                <div className="mission-visual-meta">
                  <div className="mission-stat-badge">1 in 36</div>
                  <p className="mission-stat-text">
                    Children diagnosed globally with developmental, motor, or sensory differences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Editorial Dossier Cards */}
          <div className="mission-pillars-grid">
            {MISSION_PILLARS.map((pillar) => (
              <article key={pillar.index} className="mission-card">
                <div className="mission-card-meta">
                  <span className="mission-card-num">{pillar.index}</span>
                  <span className="mission-card-cat">{pillar.category}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="mission-card-foot">
                  <span className="mission-card-foot-label">Clinical Deliverable</span>
                  <span className="mission-card-highlight">{pillar.deliverable}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Impact Ledger */}
        <div className="mission-proof-bar">
          <div className="mission-proof-metrics">
            <div className="mission-proof-item">
              <span className="mission-proof-val">60–80%</span>
              <span className="mission-proof-label">Cost reduction versus imported alternatives</span>
            </div>
            <div className="mission-proof-divider" />
            <div className="mission-proof-item">
              <span className="mission-proof-val">100%</span>
              <span className="mission-proof-label">Domestic Kerala manufacturing & craft</span>
            </div>
            <div className="mission-proof-divider" />
            <div className="mission-proof-item">
              <span className="mission-proof-val">Clinical-Grade</span>
              <span className="mission-proof-label">Pediatric OT certified safety standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
