'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How do custom Sensory Room fit-outs work?',
    answer: 'We review your room dimensions and clinical therapy goals to design a custom 3D layout. Our team fabricates and completes turnkey on-site installation and therapist orientation within 2 to 4 weeks.'
  },
  {
    question: 'Are Keller Adapt products clinically certified and load-tested?',
    answer: 'Yes. Every piece is co-designed alongside practicing pediatric occupational therapists using medical-grade, cleanable materials, non-toxic finishes, and hardware certified to over 200 kg load capacity.'
  },
  {
    question: 'Can schools, hospitals, and clinics purchase via GeM Tenders?',
    answer: 'Yes. Keller Adapt is an active registered vendor on the Government e-Marketplace (GeM). We fulfill custom tender BOQs, technical compliance sheets, and institutional orders.'
  },
  {
    question: 'Do you deliver across India and internationally?',
    answer: 'Yes. Pan-India domestic shipments arrive within 3 to 7 business days. International express orders to the US, Europe, GCC, and Australia arrive within 7 to 12 days with door-to-door tracking.'
  },
  {
    question: 'Can parents purchase therapy pieces for home use?',
    answer: 'Absolutely. Flagship pieces like SoloNest (deep-pressure lounger) and FlowSwing (compression swing) are designed for home sensory corners, with sizing and resistance advice from our team.'
  },
  {
    question: 'What warranty and replacement support is provided?',
    answer: 'All institutional equipment includes warranty against manufacturing defects, lifetime structural guidance, and direct replacement parts dispatched from our Kakkanad hub.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="faq-section board-section board-rule">
      <div className="keller-container">
        <div className="faq-split-grid">
          {/* Left Column: Visual, Header & Direct Contact Prompt */}
          <div className="faq-visual-col">
            <p className="board-kicker">Frequently Asked Questions</p>
            <h2 className="board-title">Common Questions.</h2>
            <div className="mission-title-bar" aria-hidden="true" />
            <p className="board-lead">
              Clear answers on sensory room engineering, clinical safety load tests, institutional GeM tenders, and worldwide delivery.
            </p>

            <div className="faq-image-card">
              <Image
                src="/assets/create/sensory-tech-lightloops.jpg"
                alt="Child interacting with Keller Adapt therapeutic sensory technology"
                width={560}
                height={370}
                className="faq-image"
              />
              <div className="faq-image-badge">
                <span className="faq-badge-dot" />
                <span>Kakkanad R&D & Sensory Gym</span>
              </div>
            </div>

            <div className="faq-quick-help">
              <p className="faq-quick-text">
                Have a specific clinic layout or room requirement?
              </p>
              <a href="#contact" className="faq-quick-link">
                <span>Talk to our team</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Accordion Card List */}
          <div className="faq-accordion-col">
            <div className="faq-cards-list">
              {FAQS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-card-q-btn"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-card-q-text">{item.question}</span>
                      <span className="faq-card-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-card-a-panel">
                        <p className="faq-card-a-text">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
