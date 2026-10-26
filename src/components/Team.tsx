import React from 'react';
import Image from 'next/image';
import { TEAM } from '@/data/kellerData';

export default function Team() {
  return (
    <section id="team" className="team-section board-section board-rule">
      <div className="keller-container">
        <h2 className="board-title">The Team.</h2>
        <p className="board-lead">The people behind Keller Adapt.</p>
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
