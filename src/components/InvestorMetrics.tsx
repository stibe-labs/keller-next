'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface JourneyStep {
  id: string;
  year: string;
  phase: string;
  badge: string;
  tagline: string;
  metricValue: string;
  metricLabel: string;
  metricSub: string;
  title: string;
  description: string;
  theme: 'coral' | 'terracotta' | 'teal' | 'emerald' | 'blue';
  illustration: React.ReactNode;
  doodleLabel: string;
  isActive?: boolean;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'step-2018',
    year: '2018',
    phase: 'Chapter 01',
    badge: 'Heritage & R&D',
    tagline: 'Kerala Roots',
    metricValue: '8+ Years',
    metricLabel: 'Clinical Heritage',
    metricSub: 'Collaborative clinical trials since 2018',
    title: 'Clinical Co-Design & Workshop Prototyping',
    description: 'Began in a Kochi occupational therapy clinic, working directly with pediatric therapists to replace prohibitive imported tools with handcrafted local care.',
    theme: 'coral',
    doodleLabel: 'Crafted in Kochi',
    illustration: (
      <svg viewBox="0 0 140 120" className="journey-cartoon-svg" aria-hidden="true">
        {/* Soft Warm Halo Background */}
        <circle cx="70" cy="60" r="50" fill="#FFF3EE" />
        
        {/* Kerala Coconut Palm Doodle */}
        <g stroke="#087F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 38 95 C 40 70 48 50 56 42" />
          <path d="M 56 42 C 45 36 32 38 25 44" />
          <path d="M 56 42 C 50 30 42 22 30 22" />
          <path d="M 56 42 C 64 30 76 25 86 28" />
          <path d="M 56 42 C 68 40 78 48 82 56" />
          <circle cx="52" cy="45" r="3" fill="#087F7F" />
          <circle cx="58" cy="46" r="3" fill="#087F7F" />
        </g>
        
        {/* Rocker Balance Board in Coral & Wood Grain */}
        <g stroke="#F46255" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Curved Rocker Arc */}
          <path d="M 35 90 Q 70 108 105 90" fill="#FFE2DC" />
          <path d="M 35 86 Q 70 104 105 86" />
          {/* Hand grip slot */}
          <rect x="60" y="91" width="20" height="4" rx="2" fill="#FFFFFF" stroke="#F46255" strokeWidth="1.6" />
        </g>

        {/* Drafting Pencil & Clinical Ruler */}
        <g stroke="#1c1410" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Tilted pencil */}
          <path d="M 85 45 L 110 70 L 105 75 L 80 50 Z" fill="#FBBF24" />
          <polygon points="110,70 118,78 105,75" fill="#1c1410" />
        </g>

        {/* Whimsical Heart & Sparkle */}
        <path d="M 96 32 C 96 28 100 24 104 26 C 108 28 106 34 100 38 C 94 34 92 28 96 26 Z" fill="#F46255" opacity="0.85" />
        <circle cx="32" cy="78" r="2" fill="#F46255" />
        <circle cx="112" cy="50" r="2.5" fill="#087F7F" />
      </svg>
    )
  },
  {
    id: 'step-2021',
    year: '2021',
    phase: 'Chapter 02',
    badge: 'Direct Launch',
    tagline: 'Amazon & Etsy',
    metricValue: '500+',
    metricLabel: 'Children Empowered',
    metricSub: 'Active sensory users across 14 states',
    title: 'First Direct Launch & Sensory Swings',
    description: 'Released our signature ProprioTex compression hammocks and sensory sleep bags directly to families and clinics across Amazon, Etsy, and Flipkart.',
    theme: 'terracotta',
    doodleLabel: 'Deep Pressure Care',
    illustration: (
      <svg viewBox="0 0 140 120" className="journey-cartoon-svg" aria-hidden="true">
        {/* Soft Warm Halo */}
        <circle cx="70" cy="60" r="50" fill="#FFF7ED" />
        
        {/* Suspension Straps & Ceiling Mount */}
        <g stroke="#1c1410" strokeWidth="2" strokeLinecap="round">
          <line x1="70" y1="12" x2="70" y2="28" />
          <circle cx="70" cy="12" r="3.5" fill="#EA580C" />
          {/* Swivel Carabiner */}
          <rect x="66" y="24" width="8" height="12" rx="4" fill="none" stroke="#EA580C" strokeWidth="2" />
        </g>

        {/* Compression Hammock Pod */}
        <g stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 70 36 C 45 48 36 78 48 94 C 58 104 82 104 92 94 C 104 78 95 48 70 36 Z" fill="#FED7AA" />
          {/* Fabric contour folds */}
          <path d="M 50 78 Q 70 92 90 78" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* Happy Smiling Cartoon Child Face peeking out */}
        <g stroke="#1c1410" strokeWidth="1.8" strokeLinecap="round">
          {/* Cute head */}
          <circle cx="70" cy="64" r="14" fill="#FFFFFF" />
          {/* Rosy cheeks */}
          <circle cx="63" cy="67" r="2.5" fill="#F46255" opacity="0.6" />
          <circle cx="77" cy="67" r="2.5" fill="#F46255" opacity="0.6" />
          {/* Eyes & Smile */}
          <path d="M 64 62 Q 66 60 68 62" fill="none" />
          <path d="M 72 62 Q 74 60 76 62" fill="none" />
          <path d="M 67 69 Q 70 73 73 69" fill="none" stroke="#EA580C" strokeWidth="2" />
          {/* Little hair tuft */}
          <path d="M 68 50 Q 70 46 72 50" fill="none" stroke="#1c1410" />
        </g>

        {/* Whimsical Nighttime Stars & Sleep Twinkles */}
        <path d="M 32 38 L 33.5 42 L 37.5 43.5 L 33.5 45 L 32 49 L 30.5 45 L 26.5 43.5 L 30.5 42 Z" fill="#EA580C" />
        <path d="M 108 42 L 109.5 45 L 113 46 L 109.5 47 L 108 50 L 106.5 47 L 103 46 L 106.5 45 Z" fill="#087F7F" />
        <circle cx="112" cy="75" r="2.5" fill="#EA580C" />
      </svg>
    )
  },
  {
    id: 'step-2023',
    year: '2023',
    phase: 'Chapter 03',
    badge: 'Sensory Spaces',
    tagline: 'Turnkey Design',
    metricValue: '100+',
    metricLabel: 'Institutions & Rooms',
    metricSub: 'Sensory rooms in hospitals & special schools',
    title: 'Turnkey Multi-Sensory Architecture',
    description: 'Expanded from portable tools into full architectural sensory environments — designing sensory projection rooms, interactive light walls, and calming spaces.',
    theme: 'teal',
    doodleLabel: 'Light & Regulation',
    illustration: (
      <svg viewBox="0 0 140 120" className="journey-cartoon-svg" aria-hidden="true">
        {/* Soft Cool Halo */}
        <circle cx="70" cy="60" r="50" fill="#F0FDFA" />
        
        {/* Sensory Bubble Tube Cylinder */}
        <g stroke="#087F7F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Base pedestal */}
          <rect x="52" y="88" width="36" height="14" rx="4" fill="#087F7F" />
          {/* Clear transparent acrylic cylinder */}
          <rect x="58" y="24" width="24" height="66" rx="6" fill="#CCFBF1" opacity="0.8" />
          {/* Rising bubbles */}
          <circle cx="68" cy="74" r="3" fill="#FFFFFF" stroke="#087F7F" strokeWidth="1.5" />
          <circle cx="73" cy="60" r="4" fill="#FFFFFF" stroke="#087F7F" strokeWidth="1.5" />
          <circle cx="67" cy="46" r="3.5" fill="#FFFFFF" stroke="#087F7F" strokeWidth="1.5" />
          <circle cx="72" cy="34" r="2.5" fill="#FFFFFF" stroke="#087F7F" strokeWidth="1.5" />
        </g>

        {/* Stepping Soft Sensory Stones (Foreground) */}
        <g stroke="#087F7F" strokeWidth="1.8" strokeLinecap="round">
          <ellipse cx="36" cy="94" rx="14" ry="7" fill="#99F6E4" />
          <ellipse cx="104" cy="94" rx="14" ry="7" fill="#F46255" opacity="0.4" stroke="#F46255" />
        </g>

        {/* Glowing Sensory Fiber Optic Spray & Rays */}
        <g stroke="#087F7F" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2">
          <path d="M 82 35 C 95 32 108 40 115 50" />
          <path d="M 82 50 C 98 48 112 58 118 68" />
          <path d="M 58 35 C 45 32 32 40 25 50" />
        </g>
        <circle cx="115" cy="50" r="3" fill="#F46255" />
        <circle cx="118" cy="68" r="2.5" fill="#087F7F" />
        <circle cx="25" cy="50" r="3" fill="#087F7F" />
      </svg>
    )
  },
  {
    id: 'step-2024',
    year: '2024',
    phase: 'Chapter 04',
    badge: 'Industrial Scale',
    tagline: 'ISO Certified',
    metricValue: '60–80%',
    metricLabel: 'Radical Cost Advantage',
    metricSub: 'Clinical-grade care at fractional price points',
    title: 'SenseAbility Incorporation & Quality Scale',
    description: 'Incorporated SenseAbility Innovations Pvt. Ltd., formalized clinical testing protocols, ISO quality certifications, and proprietary sensory controller electronics.',
    theme: 'emerald',
    doodleLabel: 'Radical Access',
    illustration: (
      <svg viewBox="0 0 140 120" className="journey-cartoon-svg" aria-hidden="true">
        {/* Soft Emerald Halo */}
        <circle cx="70" cy="60" r="50" fill="#ECFDF5" />
        
        {/* Interactive Sensory Switch Controller Panel */}
        <g stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="36" y="38" width="68" height="48" rx="12" fill="#D1FAE5" />
          {/* Inner display bezel */}
          <rect x="42" y="44" width="56" height="24" rx="6" fill="#FFFFFF" stroke="#059669" strokeWidth="1.6" />
          {/* 3 tactile push buttons with friendly colors */}
          <circle cx="50" cy="74" r="5" fill="#F46255" stroke="#F46255" strokeWidth="1.5" />
          <circle cx="70" cy="74" r="5" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="90" cy="74" r="5" fill="#10B981" stroke="#10B981" strokeWidth="1.5" />
        </g>

        {/* Pulse Waves & Sound Signals */}
        <g stroke="#059669" strokeWidth="1.8" strokeLinecap="round">
          <path d="M 52 56 L 58 56 L 62 49 L 66 61 L 70 52 L 74 58 L 86 58" fill="none" />
        </g>

        {/* ISO Quality Badge Seal (Bottom Right) */}
        <g stroke="#059669" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="106" cy="88" r="14" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
          <path d="M 100 88 L 104 92 L 112 84" fill="none" stroke="#059669" strokeWidth="2.4" />
        </g>

        {/* Growth Sprout & Savings Spark */}
        <g stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 32 86 C 30 76 34 68 40 64" fill="none" />
          <path d="M 40 64 C 44 60 50 63 46 70 Z" fill="#10B981" />
        </g>
      </svg>
    )
  },
  {
    id: 'step-2026',
    year: '2026',
    phase: 'Chapter 05',
    badge: 'Global Scale',
    tagline: 'Worldwide Express',
    metricValue: '9 Days',
    metricLabel: 'Guaranteed Worldwide',
    metricSub: 'Direct express to USA, UK, EU, Australia',
    title: 'Global Distribution & Institutional Scaling',
    description: 'Scaling direct institutional distribution across the United States, Europe, GCC, and pan-India with 9-day express global delivery and dedicated support.',
    theme: 'blue',
    doodleLabel: 'Taking Flight',
    isActive: true,
    illustration: (
      <svg viewBox="0 0 140 120" className="journey-cartoon-svg" aria-hidden="true">
        {/* Soft Sky Halo */}
        <circle cx="70" cy="60" r="50" fill="#EFF6FF" />
        
        {/* Friendly Cartoon Globe */}
        <g stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="68" cy="65" r="32" fill="#DBEAFE" />
          {/* Continents doodle */}
          <path d="M 54 50 C 60 46 64 52 70 48 C 76 52 78 58 74 64 C 68 68 58 66 54 58 Z" fill="#93C5FD" stroke="#2563EB" strokeWidth="1.5" />
          <path d="M 72 72 C 78 70 86 74 88 80 C 82 86 76 84 72 78 Z" fill="#93C5FD" stroke="#2563EB" strokeWidth="1.5" />
          {/* Latitude & Longitude curves */}
          <ellipse cx="68" cy="65" rx="32" ry="12" fill="none" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        </g>

        {/* Upward Soaring Cartoon Paper Airplane */}
        <g stroke="#F46255" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 78 30 L 118 20 L 98 52 L 95 38 Z" fill="#FFFFFF" />
          <path d="M 95 38 L 118 20" stroke="#F46255" strokeWidth="1.8" />
        </g>

        {/* Flight Loop-de-loop Trail (From Kerala to Sky) */}
        <path
          d="M 40 85 C 28 65 35 45 52 42 C 68 38 72 52 64 62 C 56 70 45 62 55 48 C 65 38 82 32 95 38"
          fill="none"
          stroke="#F46255"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Mini Care Parcel with Parachute */}
        <g stroke="#1c1410" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="22" y="32" width="12" height="10" rx="2" fill="#FDE047" stroke="#EA580C" />
          <path d="M 22 36 L 34 36" stroke="#EA580C" />
          <path d="M 28 32 L 28 42" stroke="#EA580C" />
        </g>
        <circle cx="118" cy="45" r="2.5" fill="#2563EB" />
        <circle cx="106" cy="75" r="2" fill="#F46255" />
      </svg>
    )
  }
];

export default function InvestorMetrics() {
  const [activeStepId, setActiveStepId] = useState<string>('step-2026');

  return (
    <section id="investor" className="metrics-section board-section board-rule">
      <div className="keller-container investor-container-relative">
        {/* Dynamic Background Graffitos Canvas */}
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
            The 8-year evolution of Keller Adapt: a continuous clinical journey from local prototyping in Kerala to turnkey sensory architecture and worldwide express fulfillment.
          </p>
        </div>

        {/* Grand Connected Journey Timeline */}
        <div className="journey-timeline-wrapper">
          {/* Journey Header Bar */}
          <div className="journey-header-bar">
            <div className="journey-badge-pill">
              <span className="journey-badge-dot" aria-hidden="true" />
              <span>Evolution Map · 2018 to 2026</span>
            </div>
            <p className="journey-hint-text">Hover over any stage to follow our continuous journey</p>
          </div>

          {/* Desktop Connected S-Curve SVG Rail */}
          <div className="journey-rail-svg-container" aria-hidden="true">
            <svg viewBox="0 0 1100 120" preserveAspectRatio="none" className="journey-rail-svg">
              <defs>
                <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F46255" />
                  <stop offset="35%" stopColor="#EA580C" />
                  <stop offset="65%" stopColor="#087F7F" />
                  <stop offset="85%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              {/* Flowing Connected Guideway */}
              <path
                d="M 60 60 C 180 35, 240 85, 340 60 C 440 35, 520 85, 620 60 C 720 35, 800 85, 900 60 C 970 42, 1010 60, 1040 60"
                fill="none"
                stroke="url(#railGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="8 6"
                className="journey-rail-path"
              />
              {/* Milestone Connection Pins */}
              <circle cx="110" cy="54" r="6" fill="#F46255" />
              <circle cx="330" cy="62" r="6" fill="#EA580C" />
              <circle cx="550" cy="54" r="6" fill="#087F7F" />
              <circle cx="770" cy="62" r="6" fill="#059669" />
              <circle cx="990" cy="58" r="7" fill="#2563EB" />
            </svg>
          </div>

          {/* 5 Connected Journey Stations Grid */}
          <div className="journey-stations-grid">
            {JOURNEY_STEPS.map((step, idx) => {
              const isSelected = activeStepId === step.id;
              return (
                <article
                  key={step.id}
                  className={`journey-station-card is-theme-${step.theme} ${isSelected ? 'is-selected-station' : ''} ${step.isActive ? 'is-active-frontier' : ''}`}
                  onMouseEnter={() => setActiveStepId(step.id)}
                  tabIndex={0}
                  aria-label={`${step.year} ${step.title}`}
                >
                  {/* Top Connector Pin & Number */}
                  <div className="journey-station-pin-row">
                    <span className="journey-pin-node">
                      <span className="journey-pin-inner" />
                    </span>
                    <span className="journey-year-pill">{step.year}</span>
                    <span className="journey-stage-doodle">{step.doodleLabel}</span>
                  </div>

                  {/* Cartoon Mascot Illustration Pod */}
                  <div className="journey-illustration-frame">
                    {step.illustration}
                  </div>

                  {/* Big Hero Proof Metric Badge */}
                  <div className="journey-metric-pod">
                    <div className="journey-metric-val">{step.metricValue}</div>
                    <div className="journey-metric-lbl">{step.metricLabel}</div>
                  </div>

                  {/* Milestone Narrative */}
                  <div className="journey-narrative">
                    <div className="journey-phase-tag">{step.phase}</div>
                    <h3 className="journey-step-title">{step.title}</h3>
                    <p className="journey-step-desc">{step.description}</p>
                  </div>

                  {/* Flow Arrow Indicator (for desktop continuity) */}
                  {idx < JOURNEY_STEPS.length - 1 && (
                    <div className="journey-step-trail-arrow" aria-hidden="true">
                      <span>→</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Connected Journey Footer Strip */}
          <div className="journey-bottom-summary">
            <div className="journey-summary-left">
              <span className="journey-pulse-dot" aria-hidden="true" />
              <strong>Continuous Care Delivery:</strong> From our founding clinical workshop in Kochi to classrooms, pediatric clinics, and international hubs.
            </div>
            <div className="journey-summary-badges">
              <span className="journey-mini-badge">✓ ISO Certified</span>
              <span className="journey-mini-badge">✓ 100% Made in Kerala</span>
              <span className="journey-mini-badge">✓ Global Express Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
