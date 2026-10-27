'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  category: 'rooms' | 'safety' | 'tenders' | 'orders';
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'sensory-rooms',
    category: 'rooms',
    question: 'How do custom Sensory Room consultations and turnkey installations work?',
    answer: 'We begin with an architectural review of your room dimensions, ceiling height, and client profile (e.g. autism spectrum, sensory processing disorder, or neuro-rehab). Our spatial engineers produce a 3D equipment floor plan integrating vestibular swing beams, calm caves, acoustic padding, and interactive tactile/light modules. Once approved, our technical team completes turnkey on-site installation and therapist orientation within 2 to 4 weeks.',
    highlight: 'Turnkey 3D layout & on-site technical installation within 2–4 weeks'
  },
  {
    id: 'clinical-safety',
    category: 'safety',
    question: 'Are Keller Adapt products clinically certified and pediatric hospital-safe?',
    answer: 'Yes. Every therapy piece is designed alongside practicing pediatric occupational therapists and neuro-developmental pediatricians. We use medical-grade, anti-microbial cleanable vinyl, non-toxic water-based finishes, lead-free sensory beads, and heavy-duty steel rigging load-tested to over 200 kg with a certified 4x safety factor.',
    highlight: '200kg+ load certified, non-toxic & medical-grade cleanable materials'
  },
  {
    id: 'government-gem-tenders',
    category: 'tenders',
    question: 'Can government hospitals, special schools, and medical colleges buy via GeM Tenders?',
    answer: 'Yes, absolutely. Our parent entity SenseAbility Innovations Pvt Ltd is registered on the Government e-Marketplace (GeM) and regular state tender portals. We supply custom BOQs, technical compliance data sheets, GST invoices, and comprehensive warranty guarantees for institutional procurement.',
    highlight: 'Active vendor on Government e-Marketplace (GeM) & public tenders'
  },
  {
    id: 'worldwide-delivery',
    category: 'orders',
    question: 'Do you ship internationally, and what are the delivery timelines?',
    answer: 'Yes, we ship globally across the USA, UK, Europe, GCC countries, and Australia through DHL/FedEx Express and Etsy Global Logistics. Domestic pan-India equipment orders are delivered within 3 to 7 business days, while international express shipments typically arrive within 7 to 12 days with door-to-door tracking.',
    highlight: 'Pan-India shipping (3–7 days) & global express logistics (7–12 days)'
  },
  {
    id: 'home-use-parents',
    category: 'orders',
    question: 'Can parents purchase therapy pieces for home use without a clinic prescription?',
    answer: 'Yes! Flagship products like SoloNest (deep-pressure sensory lounger), HugMate (weighted calming wrap), and FlowSwing (vestibular compression swing) are engineered for home sensory diets, bedroom calm corners, and everyday emotional regulation. Our team assists parents in choosing appropriate sizing and resistance weights for their child.',
    highlight: 'Direct home delivery with personal sizing & sensory guidance'
  },
  {
    id: 'hardware-weights',
    category: 'safety',
    question: 'What weight capacity and mounting hardware are required for sensory swings?',
    answer: 'Our ceiling-mounted rotational and compression swings (including LumaSwing and FlowSwing) use heavy-duty forged steel swivel bearings, aircraft-grade carabiners, and climbing-rated daisy chain straps rated up to 150–200 kg. We provide detailed installation structural guides for RCC concrete ceilings, steel joists, and freestanding wooden A-frames.',
    highlight: 'Climbing-grade hardware & RCC structural mounting guides included'
  },
  {
    id: 'warranty-spares',
    category: 'orders',
    question: 'What warranty and after-sales support do you provide?',
    answer: 'All sensory equipment, textiles, and electronic modules carry a 1-year comprehensive replacement warranty against craftsmanship or component defects. We stock spare parts, replacement straps, and electronic controllers at our Kochi workshop and provide lifelong clinical and technical support.',
    highlight: '1-Year comprehensive warranty & lifelong spare parts availability'
  },
  {
    id: 'kochi-workshop-visit',
    category: 'rooms',
    question: 'Can we visit your R&D workshop and sensory demo facility in Kochi?',
    answer: 'We warmly welcome occupational therapists, clinic directors, hospital teams, architects, and parents to visit our R&D hub and sensory demo gym in Kochi, Kerala. You can test interactive equipment, feel textile resistances, and discuss bespoke room blueprints in person. Prior appointment is recommended.',
    highlight: 'Live demo gym visits welcome by appointment in Kochi, Kerala'
  }
];

type CategoryFilter = 'all' | 'rooms' | 'safety' | 'tenders' | 'orders';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [openId, setOpenId] = useState<string | null>('sensory-rooms');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(item => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-section board-section board-rule">
      <div className="keller-container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="faq-kicker-row">
            <p className="board-kicker">Frequently Asked Questions</p>
            <span className="faq-badge">Pediatric Tech & Procurement</span>
          </div>
          <h2 className="board-title">
            Everything You Need to Know About Keller Adapt
          </h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Transparent answers on custom sensory room design, clinical certification, government procurement tenders, worldwide delivery, and after-sales support.
          </p>
        </div>

        {/* Category Filters */}
        <div className="faq-category-tabs" role="tablist" aria-label="FAQ Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`faq-tab-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
          >
            All Questions ({FAQS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'rooms'}
            onClick={() => setActiveCategory('rooms')}
            className={`faq-tab-btn ${activeCategory === 'rooms' ? 'is-active' : ''}`}
          >
            🏛️ Sensory Rooms & Fit-outs
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'safety'}
            onClick={() => setActiveCategory('safety')}
            className={`faq-tab-btn ${activeCategory === 'safety' ? 'is-active' : ''}`}
          >
            🛡️ Clinical Safety & Loads
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'tenders'}
            onClick={() => setActiveCategory('tenders')}
            className={`faq-tab-btn ${activeCategory === 'tenders' ? 'is-active' : ''}`}
          >
            📑 GeM & Institutional Tenders
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'orders'}
            onClick={() => setActiveCategory('orders')}
            className={`faq-tab-btn ${activeCategory === 'orders' ? 'is-active' : ''}`}
          >
            📦 Shipping, Home Use & Warranty
          </button>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-container">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="faq-q-left">
                    <span className="faq-q-number">0{index + 1}</span>
                    <span className="faq-q-text">{faq.question}</span>
                  </div>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer-panel"
                  >
                    <p className="faq-answer-text">{faq.answer}</p>
                    {faq.highlight && (
                      <div className="faq-highlight-pill">
                        <span className="faq-highlight-dot">✓</span>
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Direct Calling / WhatsApp Banner */}
        <div className="faq-support-banner">
          <div className="faq-support-content">
            <div className="faq-support-icon" aria-hidden="true">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h3 className="faq-support-title">Still have a project-specific question?</h3>
              <p className="faq-support-desc">
                Speak directly with our senior clinical engineering team in Kochi. We can advise on specific child regulation targets, room measurements, and custom fabrication.
              </p>
            </div>
          </div>
          <div className="faq-support-actions">
            <a
              href="tel:+917736630683"
              className="faq-cta-btn faq-call-btn"
            >
              <span>Call Us: +91 77366 30683</span>
            </a>
            <a
              href="https://wa.me/917025315392?text=Hello%20Keller%20Adapt,%20I%20have%20a%20question%20regarding%20sensory%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta-btn faq-wa-btn"
            >
              <span>WhatsApp Specialist 💬</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
