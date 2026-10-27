import React from 'react';
import Image from 'next/image';

const SHOPS = [
  {
    name: 'Amazon',
    logo: '/assets/logo/norm-Amazon-Logo.png',
    href: 'https://www.amazon.in/Keller-ADAPT-Processing-Occupational-Equipment/dp/B09TW84X2P?th=1',
    width: 132,
  },
  {
    name: 'Etsy',
    logo: '/assets/logo/norm-Etsy_logo_lg_rgb.png',
    href: 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex',
    width: 108,
  },
  {
    name: 'Walmart',
    logo: '/assets/logo/norm-Walmart-Logo-2008.png',
    href: '',
    width: 148,
  },
  {
    name: 'Flipkart',
    logo: '/assets/logo/norm-Flipkart-Logo.png',
    href: 'https://www.flipkart.com/keller-adapt-deep-pressure-memory-foam-sensory-input-occupational-therapy-aid-autism-sleeping-bag/p/itme587d611de753',
    width: 140,
  },
];

export default function Marketplaces() {
  return (
    <section id="shop" className="marketplaces-section board-section board-rule">
      <div className="keller-container">
        <div className="section-header section-graffitos-header" style={{ marginBottom: '28px' }}>
          <div className="section-graffitos-bg" aria-hidden="true">
            <Image
              src="/assets/bg/marketplaces-graffitos.svg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              className="section-graffitos-img"
            />
          </div>
          <p className="board-kicker">Where To Buy</p>
          <h2 className="board-title board-shop-title">Currently Available On These</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Explore official Keller Adapt equipment through verified global marketplace partners.
          </p>
        </div>
        <div className="board-shops">
          {SHOPS.map((shop) => {
            const mark = (
              <Image src={shop.logo} alt={shop.name} width={shop.width} height={48} />
            );
            if (!shop.href) {
              return (
                <div key={shop.name} className="board-shop" title="Walmart invitation to sell">
                  {mark}
                </div>
              );
            }
            return (
              <a key={shop.name} className="board-shop" href={shop.href} target="_blank" rel="noopener noreferrer">
                {mark}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
