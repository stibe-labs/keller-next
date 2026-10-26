'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LUMASWING_MODES } from '@/data/kellerData';

export default function ProductDeepDive() {
  const [activeModeIndex, setActiveModeIndex] = useState<number>(0);
  const activeMode = LUMASWING_MODES[activeModeIndex];

  return (
    <section id="deep-dive" className="deep-dive-section board-section board-rule">
      <div className="keller-container">
        <div className="section-header">
          <p className="board-kicker">Flagship</p>
          <h2 className="board-title">Solutions for different spaces.</h2>
          <p className="board-lead">
            LumaSwing, built with pediatric occupational therapists so a therapy protocol can still feel like play.
          </p>
        </div>

        {/* LumaSwing Interactive Simulator Box */}
        <div className="deep-dive-box">
          <div className="deep-dive-grid">
            <div>
              <div style={{ display: 'inline-block', background: 'var(--color-mint-subtle)', color: 'var(--color-primary-dark)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800, marginBottom: '14px' }}>
                OCCUPATIONAL THERAPY TOOL • PATENTED INTERACTION
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                LumaSwing™ Glow Ball Pit Swing
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                Combining vestibular rocking with ambient sensory illumination and adaptive switch access. The switch-adapted wireless controller allows therapists and children to cycle through 5 distinct clinical therapy modes.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>•</span>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-main)', fontWeight: 600 }}>
                    Sound Reactive Technology: Microphone responds to voice & non-verbal sounds
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>•</span>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-main)', fontWeight: 600 }}>
                    Switch-Adapted Interaction: Dual 3.5mm accessibility jacks
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>•</span>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-main)', fontWeight: 600 }}>
                    Vestibular, Tactile, and Proprioceptive stimulation simultaneously
                  </span>
                </div>
              </div>

              {/* Mode Selection Buttons */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-text-light)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  Select Controller Mode to Preview:
                </span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {LUMASWING_MODES.map((mode, index) => (
                    <button
                      key={mode.id}
                      onClick={() => setActiveModeIndex(index)}
                      className={`mode-chip ${activeModeIndex === index ? 'active' : ''}`}
                    >
                      Mode {mode.id}: {mode.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Controller / Lighting Simulator Screen */}
            <div className="simulator-screen">
              <div className="simulator-header">
                <div>
                  <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 800, textTransform: 'uppercase' }}>
                    Wireless Switch Controller State
                  </span>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                    Mode {activeMode.id} — {activeMode.name}
                  </div>
                </div>
                <div style={{ background: '#1E293B', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, color: '#38BDF8' }}>
                  ACTIVE PREVIEW
                </div>
              </div>

              {/* Glow Visual Representation */}
              <div
                className="simulator-glow-orb"
                style={{ background: activeMode.lightEffect }}
              >
                <span>{activeMode.name} Active</span>
              </div>

              <div style={{ background: '#1E293B', padding: '16px', borderRadius: '10px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Therapeutic Objective: {activeMode.badge}
                </div>
                <div style={{ fontSize: '13.5px', color: '#E2E8F0', lineHeight: '1.5' }}>
                  {activeMode.description}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#94A3B8' }}>
                <span>Handcrafted in Kerala, India</span>
                <a
                  href="#contact"
                  style={{ color: '#38BDF8', fontWeight: 700, textDecoration: 'underline' }}
                >
                  Order LumaSwing Package →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Trio: LightLoops, SymphonySense, Balance Bench */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px', marginTop: '36px' }}>
          <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '18px', border: '1px solid var(--color-border)' }}>
            <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '16px', borderRadius: '10px', overflow: 'hidden' }}>
              <Image
                src="/assets/products/Lightloops_eab16d2c-c331-4b5f-8917-8a1532cb227d.png"
                alt="LightLoops Interactive Wall"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '6px' }}>
              LightLoops Interactive Panel
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              Touch, hear, see. Every action produces rolling acoustic feedback (metal, wood, water sounds) with dynamic lighting for visual tracking.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '18px', border: '1px solid var(--color-border)' }}>
            <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '16px', borderRadius: '10px', overflow: 'hidden' }}>
              <Image
                src="/assets/banners/Musical tiles banner.png"
                alt="SymphonySense Wall"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '6px' }}>
              SymphonySense Acoustic Tiles
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              Zero screens or harsh glare. Hand-tuned Metallophone, Xylophone, and Percussion modules crafted from FSC teakwood and natural metals.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '18px', border: '1px solid var(--color-border)' }}>
            <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '16px', borderRadius: '10px', overflow: 'hidden' }}>
              <Image
                src="/assets/banners/balance bench 2.png"
                alt="Balance Bench Rehab Board"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '6px' }}>
              Balance Bench Adaptive Board
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              Sit. Balance. Thrive. A multi-height rehab board for children with physical mobility challenges, featuring tactile non-slip tread ridges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
