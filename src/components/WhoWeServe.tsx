import React from 'react';
import Image from 'next/image';

interface EnvironmentItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  specScope: string;
  specImpact: string;
}

const ENVIRONMENTS: EnvironmentItem[] = [
  {
    id: 'env-edu',
    tag: '01 · Education',
    title: 'Schools & learning spaces',
    subtitle: 'Sensory integration within mainstream classrooms',
    image: '/assets/rough/school webp.webp',
    desc: 'Sensory corners and quiet breakout rooms installed directly inside classrooms, providing children with neurodiverse profiles a safe way to regulate and rejoin the lesson without leaving their peers.',
    specScope: 'Modular sensory corners · Quiet breakout pods',
    specImpact: '100+ Classrooms fitted across India',
  },
  {
    id: 'env-transit',
    tag: '02 · Transit & Aviation',
    title: 'Airport & travel hubs',
    subtitle: 'Acoustic buffering and de-escalation in terminals',
    image: '/assets/rough/airport.webp',
    desc: 'Dedicated sensory calming lounges designed for high-density airport gates and railway terminals, ensuring an unfamiliar journey does not escalate into sensory overload or a distressful meltdown.',
    specScope: 'Terminal de-escalation rooms · Acoustic privacy pods',
    specImpact: 'Autism-friendly certified transit environments',
  },
  {
    id: 'env-civic',
    tag: '03 · Civic Spaces',
    title: 'Public spaces & clinics',
    subtitle: 'Universal accessibility for civic infrastructure',
    image: '/assets/rough/public space.webp',
    desc: 'Public libraries, pediatric hospital waiting areas, and community buildings engineered with adaptable therapeutic furnishings so families of children with special needs can comfortably belong.',
    specScope: 'Pediatric waiting areas · Civic public libraries',
    specImpact: 'Turnkey universal accessibility retrofit',
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="serve-section board-section">
      <div className="keller-container">
        {/* Section Header */}
        <div className="serve-header section-graffitos-header">
          <div className="section-graffitos-bg" aria-hidden="true">
            <Image
              src="/assets/bg/environments-graffitos.svg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              className="section-graffitos-img"
            />
          </div>
          <p className="board-kicker">Environments & Deployment</p>
          <h2 className="board-title">One mission, multiple environments</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Sensory differences do not end at the therapy clinic door. Keller Adapt designs turnkey
            sensory architecture for everyday environments — so schools, transit hubs, and civic spaces
            can all be inclusive by design.
          </p>
        </div>

        {/* 3 Architectural Case Study Cards */}
        <div className="serve-cards-grid">
          {ENVIRONMENTS.map((env) => (
            <article key={env.id} className="mission-env-card">
              <div className="mission-env-media">
                <Image
                  src={env.image}
                  alt={env.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 380px"
                  className="mission-env-img"
                />
                <div className="mission-env-sector-tag">
                  <span className="mission-env-tag-dot" aria-hidden="true" />
                  <span>{env.tag}</span>
                </div>
              </div>

              <div className="mission-env-body">
                <h3>{env.title}</h3>
                <p className="mission-env-sub">{env.subtitle}</p>
                <p className="mission-env-desc">{env.desc}</p>
                
                <div className="mission-env-specs">
                  <div className="mission-env-spec-row">
                    <span className="mission-env-spec-label">Scope</span>
                    <span className="mission-env-spec-val">{env.specScope}</span>
                  </div>
                  <div className="mission-env-spec-row">
                    <span className="mission-env-spec-label">Impact</span>
                    <span className="mission-env-spec-val">{env.specImpact}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
