import React from 'react';
import Image from 'next/image';

const KIDS = [
  {
    src: '/assets/products/Joyful Girl Playing Musical Sensory Panels.png',
    alt: 'A child smiling at musical sensory panels',
  },
  {
    src: '/assets/sensory_rooms/13 (1).jpg',
    alt: 'A child exploring a sensory room',
  },
  {
    src: '/assets/sensory_rooms/15 (1).jpg',
    alt: 'Children in a multi-sensory space',
  },
];

export default function GlobalReach() {
  return (
    <section id="global" className="global-reach-section board-section board-rule">
      <div className="keller-container">
        <div className="board-map">
          <Image
            src="/assets/banners/shipping-worldwide.png"
            alt="Keller Adapt shipping worldwide to the US, Europe, and Australia"
            fill
            sizes="(max-width: 800px) 100vw, 720px"
          />
        </div>
        <div className="board-arrows" aria-hidden="true">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
        <div className="board-kids">
          {KIDS.map((kid) => (
            <figure key={kid.src} className="board-frame">
              <Image src={kid.src} alt={kid.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
            </figure>
          ))}
        </div>
        <p className="board-map-note">Made in Kochi. Nine-day express to the USA, Europe, and Australia.</p>
      </div>
    </section>
  );
}
