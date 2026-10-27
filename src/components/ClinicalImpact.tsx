import React from 'react';
import Image from 'next/image';
import { EARLY_BUYERS } from '@/data/kellerData';

export default function ClinicalImpact() {
  return (
    <section id="impact" className="clinical-section board-section board-rule">
      <div className="keller-container">
        <div className="section-header section-graffitos-header" style={{ marginBottom: '32px' }}>
          <div className="section-graffitos-bg" aria-hidden="true">
            <Image
              src="/assets/bg/clinical-graffitos.svg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              className="section-graffitos-img"
            />
          </div>
          <p className="board-kicker">Clinical Adoption</p>
          <h2 className="board-title">Real People, Real Impact</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Early clinical feedback from the occupational therapists, child development specialists, and institutions testing Keller Adapt tools.
          </p>
        </div>
        <div className="board-stories">
          {EARLY_BUYERS.map((buyer) => (
            <article key={buyer.name} className="board-story">
              <span className="board-avatar" aria-hidden="true">
                {buyer.image ? (
                  <Image
                    src={buyer.image}
                    alt={buyer.name}
                    width={56}
                    height={56}
                    className="board-avatar-img"
                  />
                ) : (
                  buyer.name.charAt(0)
                )}
              </span>
              <div>
                <h3>{buyer.name}</h3>
                <p className="board-story-role">{buyer.credentials}</p>
                <p className="board-story-quote">&ldquo;{buyer.quoteSnippet}&rdquo;</p>
                <p>{buyer.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
