'use client';

import React from 'react';
import Image from 'next/image';

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  category: string;
  accent: 'coral' | 'terracotta' | 'teal' | 'emerald' | 'blue';
}

interface RoadmapStep {
  year: string;
  step: string;
  phase: string;
  location: string;
  title: string;
  desc: string;
  isCurrent?: boolean;
}

const METRICS: MetricItem[] = [
  {
    value: '8+ Years',
    label: 'R&D & Prototyping',
    sublabel: 'Dedicated research in assistive pediatric hardware since 2018',
    category: 'Clinical Heritage',
    accent: 'coral'
  },
  {
    value: '500+',
    label: 'Children Empowered',
    sublabel: 'Active participants using our solutions worldwide',
    category: 'Direct Impact',
    accent: 'terracotta'
  },
  {
    value: '100+',
    label: 'Institutions & Centers',
    sublabel: 'Adopted in therapy clinics, special schools, and hospitals',
    category: 'Clinical Trust',
    accent: 'teal'
  },
  {
    value: '60–80%',
    label: 'Cost Savings vs Imports',
    sublabel: 'World-class pediatric tools at radically accessible domestic pricing',
    category: 'Radical Access',
    accent: 'emerald'
  },
  {
    value: '9 Days',
    label: 'Guaranteed Global Delivery',
    sublabel: 'Express international fulfillment to USA, Europe, and Australia',
    category: 'Worldwide Express',
    accent: 'blue'
  }
];

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    year: '2018',
    step: '01',
    phase: 'Foundations',
    location: 'Kochi, Kerala',
    title: 'Clinical Co-Design',
    desc: 'Collaborative clinical trials with pediatric occupational therapists in Kerala to replace expensive imported tools.'
  },
  {
    year: '2021',
    step: '02',
    phase: 'First Launch',
    location: 'Amazon & Etsy',
    title: 'ProprioTex & Swings',
    desc: 'Debuted sensory compression hammocks and calming deep-pressure aids directly to families and therapy clinics.'
  },
  {
    year: '2023',
    step: '03',
    phase: 'Sensory Spaces',
    location: 'Turnkey Rooms',
    title: 'Turnkey Sensory Architecture',
    desc: 'Installed turnkey multi-sensory environments for clinics, special schools, and early intervention centers.'
  },
  {
    year: '2024',
    step: '04',
    phase: 'Incorporation & ISO',
    location: 'SenseAbility Scale',
    title: 'SenseAbility Innovations',
    desc: 'Formal incorporation with expanded manufacturing, ISO quality workflows, and proprietary sensory controllers.'
  },
  {
    year: '2026 & Beyond',
    step: '05',
    phase: 'Global Scale',
    location: 'Worldwide Hub',
    title: 'Worldwide Institutional Scaling',
    desc: 'Direct institutional distribution scaling worldwide from Kochi with 9-day express delivery and dedicated clinical support.',
    isCurrent: true
  }
];

export default function InvestorMetrics() {
  return (
    <section id="investor" className="metrics-section board-section board-rule">
      <div className="keller-container investor-container-relative">
        {/* Extended Background Graffitos Canvas */}
        <div className="investor-graffitos-extended" aria-hidden="true">
          <Image
            src="/assets/bg/investor-extended-graffitos.svg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
            priority
            className="investor-graffitos-extended-img"
          />
        </div>

        {/* Section Header */}
        <div className="investor-header">
          <p className="board-kicker">Verified Proof</p>
          <h2 className="board-title">From proven products to scalable solutions.</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Commercial traction, clinical adoption, and the institutions already putting our sensory rooms and therapeutic pieces to work.
          </p>
        </div>

        {/* PART 1: Spacious, Professional High-Impact Metrics */}
        <div className="metrics-grid">
          {METRICS.map((metric, idx) => (
            <article key={idx} className={`metric-pro-card is-accent-${metric.accent}`}>
              <div className="metric-pro-category">
                <span className="metric-pro-dot" aria-hidden="true" />
                <span>{metric.category}</span>
              </div>
              <div className="metric-pro-value">{metric.value}</div>
              <div className="metric-pro-divider" aria-hidden="true" />
              <h3 className="metric-pro-label">{metric.label}</h3>
              <p className="metric-pro-sub">{metric.sublabel}</p>
            </article>
          ))}
        </div>

        {/* PART 2: Separated, Minimal Connected System Roadmap */}
        <div className="timeline-system-wrapper">
          <div className="timeline-system-header">
            <div className="timeline-header-left">
              <span className="board-roadmap-kicker">Connected System</span>
              <h3 className="timeline-system-title">Execution Milestones & Scaling Path</h3>
            </div>
            <p className="timeline-system-subtitle">
              An 8-year continuous trajectory: from founding therapy trials in Kochi to worldwide institutional installations.
            </p>
          </div>

          {/* Minimal Connected Track */}
          <div className="timeline-connected-track">
            {/* Guide Rail spanning exactly from first milestone to final active horizon */}
            <div className="timeline-guide-rail" aria-hidden="true">
              <span className="timeline-rail-arrow" aria-hidden="true">→</span>
            </div>

            <div className="timeline-nodes-grid">
              {ROADMAP_STEPS.map((step, idx) => (
                <div
                  key={step.year}
                  className={`timeline-node-column ${step.isCurrent ? 'is-current-stage' : ''}`}
                >
                  {/* Clean Milestone Node Pin on Rail */}
                  <div className="timeline-node-pin">
                    {step.isCurrent ? (
                      <div className="timeline-live-beacon" title="Active Horizon">
                        <span className="timeline-beacon-dot" />
                        <span className="timeline-beacon-pulse" />
                      </div>
                    ) : (
                      <div className="timeline-check-node" title={`Phase 0${idx + 1} completed`}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Year & Phase Pill */}
                  <div className="timeline-pill-row">
                    <span className="timeline-year-text">{step.year}</span>
                    <span className="timeline-phase-tag">{step.phase}</span>
                  </div>

                  {/* Spacious, Legible Milestone Card */}
                  <div className="timeline-detail-card">
                    <div className="timeline-card-kicker-row">
                      <span className="timeline-stage-badge">Phase 0{idx + 1}</span>
                      <span className="timeline-location-tag">{step.location}</span>
                    </div>
                    <h4 className="timeline-card-title">{step.title}</h4>
                    <p className="timeline-card-desc">{step.desc}</p>
                    {step.isCurrent ? (
                      <div className="timeline-current-pill">
                        <span className="timeline-current-pulse" aria-hidden="true" />
                        <span>Active Global Expansion</span>
                      </div>
                    ) : (
                      <div className="timeline-achieved-pill">
                        <span className="timeline-achieved-check">✓</span>
                        <span>Clinical Milestone Delivered</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
