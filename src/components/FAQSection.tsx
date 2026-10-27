'use client';

import React, { useState } from 'react';

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
    answer: 'Yes. SenseAbility Innovations Pvt Ltd is an active registered vendor on the Government e-Marketplace (GeM). We fulfill custom tender BOQs, technical compliance sheets, and institutional orders.'
  },
  {
    question: 'Do you deliver across India and internationally?',
    answer: 'Yes. Pan-India domestic shipments arrive within 3 to 7 business days. International express orders to the US, Europe, GCC, and Australia arrive within 7 to 12 days with door-to-door tracking.'
  },
  {
    question: 'Can parents purchase therapy pieces for home use?',
    answer: 'Absolutely. Flagship pieces like SoloNest (deep-pressure lounger) and FlowSwing (compression swing) are designed for home sensory corners, with sizing and resistance advice from our team.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="faq-section board-section board-rule">
      <div className="keller-container" style={{ maxWidth: '840px' }}>
        <div className="faq-minimal-header">
          <p className="board-kicker">Frequently Asked Questions</p>
          <h2 className="board-title" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', marginBottom: '12px' }}>
            Common Questions.
          </h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead" style={{ marginBottom: '28px' }}>
            Direct answers on sensory room design, clinical certification, government tenders, and worldwide delivery.
          </p>
        </div>

        <div className="faq-minimal-list">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-minimal-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-minimal-q-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-minimal-q-text">{item.question}</span>
                  <span className="faq-minimal-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-minimal-a-panel">
                    <p className="faq-minimal-a-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
