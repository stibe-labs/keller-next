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
        <p className="board-shop-soon">Store opening soon</p>
        <h2 className="board-title board-shop-title">Currently available on these</h2>
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
