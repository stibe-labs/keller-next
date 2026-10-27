'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/data/kellerData';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash.startsWith('products-')) return;
      const category = hash.slice('products-'.length);
      const known = ['sensory-tech', 'movement', 'textiles', 'sensory-rooms'];
      if (!known.includes(category)) return;
      setSelectedCategory(category);
      document.getElementById('products')?.scrollIntoView();
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="catalog-section board-section board-rule">
      <div className="keller-container catalog-container-relative">
        {/* Dynamic Graffitos Canvas: Moved UP, extending under titles and down to catalog cards */}
        <div className="catalog-graffitos-extended" aria-hidden="true">
          <Image
            src="/assets/bg/catalog-extended-graffitos.svg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
            priority
            className="catalog-graffitos-extended-img"
          />
        </div>

        <div className="catalog-header">
          <p className="board-kicker">The catalog</p>
          <h2 className="board-title">Explore our products.</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Hammocks, glow swings, balance benches, and rooms. Co-developed with occupational therapists and made in Kerala.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="catalog-filters">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Products ({PRODUCTS.length})
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'sensory-tech' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('sensory-tech')}
          >
            Sensory Technology
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'movement' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('movement')}
          >
            Movement & Balance
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'textiles' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('textiles')}
          >
            Therapy Textiles
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'sensory-rooms' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('sensory-rooms')}
          >
            Sensory Rooms
          </button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-img-wrap">
                <span className={product.status === 'marketplace' ? 'product-badge-available' : 'product-badge-coming'}>
                  {product.status === 'marketplace' ? 'Available on Marketplaces' : 'Online Shop: Coming Soon'}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain', padding: '16px' }}
                />
              </div>

              <div className="product-card-body">
                <div className="product-category-tag">{product.categoryLabel}</div>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-subtitle">{product.subtitle}</div>
                <p className="product-desc">{product.description}</p>

                <ul className="product-ot-list">
                  {product.otBenefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="product-ot-item">
                      <span className="product-ot-bullet">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="product-card-footer">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="btn btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    Clinical Specs
                  </button>

                  {product.status === 'marketplace' ? (
                    <a
                      href={product.marketplaceUrl || 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '8px 16px', fontSize: '13px' }}
                    >
                      Buy on {product.marketplaceName?.includes('Flipkart') ? 'Flipkart' : product.marketplaceName?.includes('Etsy') ? 'Etsy' : 'Amazon'} →
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="btn btn-accent"
                      style={{ padding: '8px 16px', fontSize: '13px' }}
                    >
                      Enquire Now →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details & Specifications */}
        {activeModalProduct && (
          <div className="modal-overlay" onClick={() => setActiveModalProduct(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProduct(null)}
                aria-label="Close"
              >
                ✕
              </button>

              <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '140px', height: '140px', background: '#F8FAFC', borderRadius: '14px', border: '1px solid var(--color-border)', flexShrink: 0 }}>
                  <Image
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    fill
                    style={{ objectFit: 'contain', padding: '10px' }}
                  />
                </div>
                <div>
                  <div className="product-category-tag">{activeModalProduct.categoryLabel}</div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '4px' }}>
                    {activeModalProduct.name}
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
                    {activeModalProduct.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-main)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Therapeutic & Occupational Therapy Purpose
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {activeModalProduct.description}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-main)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Key Developmental Benefits
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeModalProduct.otBenefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeModalProduct.materials && (
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-main)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Materials & Compliance
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                    {activeModalProduct.materials}
                  </p>
                </div>
              )}

              <div style={{ background: 'var(--color-bg-light)', padding: '18px', borderRadius: '12px', border: '1px solid var(--color-border)', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Technical Specifications
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {Object.entries(activeModalProduct.specs).map(([key, val]) => (
                    <div key={key}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-light)', display: 'block' }}>{key}</span>
                      <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-text-main)' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 20px', fontSize: '14px' }}
                >
                  Close
                </button>
                {activeModalProduct.status === 'marketplace' ? (
                  <a
                    href={activeModalProduct.marketplaceUrl || 'https://www.etsy.com/listing/4519472296/sensory-compression-hammock-propriotex'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '14px' }}
                  >
                    View on {activeModalProduct.marketplaceName || 'Marketplace'}
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '14px' }}
                  >
                    Request Custom Project Consultation
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
