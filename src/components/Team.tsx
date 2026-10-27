import React from 'react';
import Image from 'next/image';
import { TEAM } from '@/data/kellerData';

export default function Team() {
  return (
    <section id="team" className="team-section board-section board-rule">
      <div className="keller-container">
        <div className="section-header section-graffitos-header" style={{ marginBottom: '32px' }}>
          <div className="section-graffitos-bg" aria-hidden="true">
            <Image
              src="/assets/bg/team-graffitos.svg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              className="section-graffitos-img"
            />
          </div>
          <p className="board-kicker">Our Team</p>
          <h2 className="board-title">The People Behind Keller Adapt</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">Industrial designers, pediatric occupational therapists, and craftspeople working together in Kochi.</p>
        </div>
        <div className="board-team">
          {TEAM.map((member, index) => (
            <article key={member.name} className={`board-team-row${index % 2 === 1 ? ' is-flip' : ''}`}>
              <div className="board-team-photo">
                <Image
                  src={member.image}
                  alt=""
                  fill
                  sizes="180px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <span className="board-team-arrow" aria-hidden="true">
                {index % 2 === 1 ? '←' : '→'}
              </span>
              <div className="board-team-story">
                <h3>{member.name}</h3>
                <p className="board-story-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
