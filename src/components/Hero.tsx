import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-stage">
        <div className="hero-fade">
          <Image
            src="/assets/sensory/sai-sensory-orbs.jpg"
            alt="A child smiling among glowing sensory orbs in a Keller Adapt sensory room"
            fill
            priority
            sizes="100vw"
            className="hero-fade-img"
          />
        </div>
        <div className="keller-container hero-stage-inner">
          <div className="hero-content">
            <p className="hero-tagline">
              For children who feel<br className="tagline-break" /> the world deeply
            </p>

            <h1 className="hero-heading">
              <span>Making every</span>
              <span>space more</span>
              <span>inclusive.</span>
            </h1>

            <blockquote className="hero-description">
              <span className="hero-mark" aria-hidden="true">“</span>
              Keller Adapt designs and manufactures innovative assistive technology and pediatric therapy solutions that empower children with physical, developmental, and cognitive special needs to learn, play, and thrive with greater <span className="hero-end">independence.<span className="hero-mark" aria-hidden="true">”</span></span>
            </blockquote>

            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                Browse the catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
