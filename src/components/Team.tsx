import React from 'react';
import Image from 'next/image';
import { TEAM } from '@/data/kellerData';

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">Leadership & Craftsmanship</span>
          <h2 className="section-title">Built with a Purpose. Growing with a Vision.</h2>
          <p className="section-subtitle">
            Founded by <strong>SenseAbility Innovations Pvt Ltd</strong> in Kochi, Kerala. Meet the engineers, designers, and clinicians dedicated to pediatric accessibility.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((member, idx) => (
            <div key={idx} className="team-card">
              <div style={{ position: 'relative', width: '100%', height: '260px', background: '#E2E8F0' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="team-card-body">
                <h3 className="team-member-name">{member.name}</h3>
                <div className="team-member-role">{member.role}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  {member.department}
                </div>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
