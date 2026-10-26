import React from 'react';
import Image from 'next/image';

const PILLARS = [
  {
    title: 'Sensory Technology',
    image: '/assets/rough/sensory product webp.webp',
    link: '/create/sensory-technology',
    layout: 'is-tech',
  },
  {
    title: 'Movement & Balance',
    image: '/assets/rough/Movement & Balance.webp',
    link: '/create/movement-balance',
    layout: 'is-move',
  },
  {
    title: 'Therapy Textiles',
    image: '/assets/rough/therapy textiles webp.webp',
    link: '/create/therapy-textiles',
    layout: 'is-textile',
  },
  {
    title: 'Sensory Rooms',
    image: '/assets/rough/Sensory Rooms.webp',
    link: '/create/sensory-rooms',
    layout: 'is-rooms',
  },
  {
    title: 'Custom manufacture',
    image: '/assets/rough/Custom Manufacture webp.webp',
    link: '/create/custom-manufacture',
    layout: 'is-custom',
  },
];

export default function WhatWeCreate() {
  return (
    <section id="what-we-create" className="what-we-create-section board-section">
      <div className="keller-container">
        <p className="board-kicker">What we create</p>
        <h2 className="board-title">Designed Around Different Needs</h2>
        <p className="board-lead">
          Sensory technology, movement pieces, therapy textiles, sensory rooms, and custom workshop pieces.
        </p>

        <div className="board-tiles">
          <div className="board-collage-row is-lead">
            {[PILLARS[0], PILLARS[4]].map((pillar) => (
              <article key={pillar.title} className={`board-tile ${pillar.layout}`}>
                <a className="board-tile-media" href={pillar.link} aria-label={pillar.title}>
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(max-width: 680px) 100vw, 40vw"
                  />
                </a>
                <div className="board-tile-bar">
                  <h3>{pillar.title}</h3>
                  <a className="board-tile-more" href={pillar.link}>See more</a>
                </div>
              </article>
            ))}
          </div>
          <div className="board-collage-row is-rest">
            {[PILLARS[2], PILLARS[3], PILLARS[1]].map((pillar) => (
              <article key={pillar.title} className={`board-tile ${pillar.layout}`}>
                <a className="board-tile-media" href={pillar.link} aria-label={pillar.title}>
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(max-width: 680px) 100vw, 30vw"
                  />
                </a>
                <div className="board-tile-bar">
                  <h3>{pillar.title}</h3>
                  <a className="board-tile-more" href={pillar.link}>See more</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="proof-bar">
          <div className="proof-lead">
            <Image
              src="/assets/logo/laurel-wreath-brand.png"
              alt=""
              width={64}
              height={52}
            />
            <div>
              <h3>Top-Rated Pediatric Solutions</h3>
              <p>Recognized for clinical-grade quality, verified safety, and 5-star ratings across independent global marketplaces.</p>
            </div>
          </div>

          <div className="proof-marks">
            <a
              className="proof-etsy"
              href="https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/logo/etsy-logo-cropped.png" alt="Etsy" width={92} height={40} />
              <span>
                <strong>Star Seller</strong>
                <em>Rating: 5.0 <span className="proof-stars">★★★★★</span></em>
              </span>
              <Image src="/assets/logo/etsy-star-seller-badge.png" alt="" width={52} height={52} />
            </a>
            <a
              className="proof-rate"
              href="https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Rating: 4.9</span>
              <span className="proof-stars" aria-hidden="true">★★★★★</span>
              <Image src="/assets/logo/norm-Amazon-Logo.png" alt="Amazon" width={88} height={28} />
            </a>
            <a
              className="proof-rate"
              href="https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Rating: 4.8</span>
              <span className="proof-stars" aria-hidden="true">★★★★★</span>
              <Image src="/assets/logo/norm-Flipkart-Logo.png" alt="Flipkart" width={88} height={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
