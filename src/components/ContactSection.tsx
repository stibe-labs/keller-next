'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ClayIcon from '@/components/ClayIcon';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: 'Custom Sensory Room Project',
    preferredContact: 'Phone Call',
    message: ''
  });

  const inquiryPills = [
    'Custom Sensory Room Project',
    'LumaSwing & Swings Inquiry',
    'Therapy Center Bulk Fit-out',
    'Home Sensory Diet & SoloNest',
    'Government GeM Tender'
  ];

  const handleCopyPhone = (number: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(number);
      setCopiedPhone(number);
      setTimeout(() => setCopiedPhone(null), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = (e.currentTarget as HTMLButtonElement).form;
    if (form && !form.reportValidity()) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section board-section board-rule">
      <div className="keller-container">
        {/* Top Hero Banner with Therapist & Sensory Room Photo */}
        <div className="board-together">
          <div className="section-graffitos-header">
            <div className="section-graffitos-bg" aria-hidden="true">
              <Image
                src="/assets/bg/contact-graffitos.svg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 1100px"
                className="section-graffitos-img"
              />
            </div>
            <p className="board-kicker">Get In Touch</p>
            <h2 className="board-title board-title-stack">
              <span>Let’s build</span>
              <span>more inclusive spaces</span>
              <span>Together</span>
            </h2>
            <div className="mission-title-bar" aria-hidden="true" />
            <p className="board-lead">
              A therapy clinic, a special school, a hospital, an airport, or a parent with a specific child in mind. Tell us the space. We will help shape it.
            </p>
          </div>
          <div className="board-frame board-together-photo">
            <Image
              src="/assets/create/sensory-rooms-74.jpg"
              alt="Therapist and child interacting with inclusive sensory room equipment"
              fill
              sizes="(max-width: 800px) 100vw, 520px"
            />
          </div>
        </div>

        {/* ==============================================================
             CALLING & DIRECT COMMUNICATION HUB (REDESIGNED)
             ============================================================== */}
        <div className="contact-calling-hub">
          {/* Background Decorative Calling Vector Art */}
          <div className="calling-vector-bg" aria-hidden="true">
            <Image
              src="/assets/bg/calling-communication-vector.svg"
              alt=""
              width={800}
              height={240}
              className="calling-vector-img"
            />
          </div>

          <div className="calling-hub-header">
            <div className="calling-badge-row">
              <span className="calling-pill-status">
                <span className="calling-pulse-dot" />
                Clinical Lines Live & Ready
              </span>
              <span className="calling-pill-location">Kochi R&D Workshop</span>
            </div>
            <h3 className="calling-hub-title">Direct Calling & Clinical Consultation</h3>
            <p className="calling-hub-subtitle">
              Need immediate technical specifications, room blueprints, or product sizing? Speak or chat directly with our senior clinical engineering team.
            </p>
          </div>

          {/* 3 Interactive Calling & Messaging Cards */}
          <div className="calling-cards-grid">
            {/* Card 1: Direct Phone Call */}
            <div className="calling-card is-phone">
              <div className="calling-card-top">
                <div className="calling-icon-wrapper is-coral">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="calling-card-badge">Instant Call</div>
              </div>
              <h4 className="calling-card-title">Direct Consultation Line</h4>
              <p className="calling-card-desc">
                One-on-one phone consultation with our pediatric equipment engineers for custom room dimensions and load ratings.
              </p>
              <div className="calling-numbers-list">
                <div className="calling-number-row">
                  <a href="tel:+917736630683" className="calling-number-link">
                    +91 77366 30683
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPhone('+91 77366 30683')}
                    className="calling-copy-btn"
                    title="Copy phone number"
                  >
                    {copiedPhone === '+91 77366 30683' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <div className="calling-number-row">
                  <a href="tel:+917025315392" className="calling-number-link">
                    +91 70253 15392
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPhone('+91 70253 15392')}
                    className="calling-copy-btn"
                    title="Copy phone number"
                  >
                    {copiedPhone === '+91 70253 15392' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>
              <a href="tel:+917736630683" className="calling-action-btn btn-call">
                <span>Call Primary Line</span>
                <span aria-hidden="true">📞</span>
              </a>
              <span className="calling-timing-hint">Mon – Sat, 9:30 AM – 6:00 PM IST</span>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="calling-card is-whatsapp">
              <div className="calling-card-top">
                <div className="calling-icon-wrapper is-green">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="calling-card-badge is-green">⚡ Fastest Reply</div>
              </div>
              <h4 className="calling-card-title">WhatsApp Clinical Desk</h4>
              <p className="calling-card-desc">
                Send room photos, hand sketches, or floor plan PDFs directly. Ideal for quick sizing and product questions.
              </p>
              <div className="calling-wa-info">
                <span className="calling-wa-stat">✓ Usually replies within 1 hour</span>
                <span className="calling-wa-number">+91 70253 15392</span>
              </div>
              <a
                href="https://wa.me/917025315392?text=Hello%20Keller%20Adapt%20team,%20I%20would%20like%20to%20consult%20regarding%20sensory%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="calling-action-btn btn-whatsapp"
              >
                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">💬</span>
              </a>
              <span className="calling-timing-hint">Available for international & domestic chats</span>
            </div>

            {/* Card 3: Free 3D Virtual Walkthrough */}
            <div className="calling-card is-schedule">
              <div className="calling-card-top">
                <div className="calling-icon-wrapper is-teal">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className="calling-card-badge is-teal">Free 3D Layout</div>
              </div>
              <h4 className="calling-card-title">Virtual Room Planning</h4>
              <p className="calling-card-desc">
                Have a clinic or school hall to outfit? Schedule a free 20-minute video walkthrough to map out your sensory stations.
              </p>
              <ul className="calling-check-list">
                <li>✓ Custom 3D CAD space model</li>
                <li>✓ Vestibular & swing load calculations</li>
                <li>✓ Tailored BOQ for your budget</li>
              </ul>
              <a
                href="#consultation-form"
                onClick={() => {
                  setFormData(prev => ({ ...prev, interest: 'Custom Sensory Room Project', preferredContact: 'Virtual Call' }));
                  document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="calling-action-btn btn-schedule"
              >
                <span>Request 3D Walkthrough</span>
                <span aria-hidden="true">→</span>
              </a>
              <span className="calling-timing-hint">No obligation • 100% confidential</span>
            </div>
          </div>
        </div>

        {/* Section Divider & Headline */}
        <div className="contact-main-header">
          <p className="board-kicker">Written Inquiries & Procurement</p>
          <h2 className="board-title">Contact & Institutional Quotes</h2>
          <div className="mission-title-bar" aria-hidden="true" />
        </div>

        {/* ==============================================================
             REDESIGNED DUAL-CARD GRID (DETAILS & CONSULTATION FORM)
             ============================================================== */}
        <div id="consultation-form" className="contact-grid">
          {/* Left Column: Organization Credentials & GeM Tenders Card */}
          <div className="contact-info-box contact-details-elevated">
            <div className="contact-corp-header">
              <span className="contact-badge-corp">Official Entity</span>
              <h3 className="contact-corp-title">SenseAbility Innovations Pvt Ltd</h3>
              <p className="contact-corp-desc">
                Headquartered in Kochi, Kerala. We research, design, manufacture, and distribute specialized pediatric assistive technology to institutions and families worldwide.
              </p>
            </div>

            {/* Contact Channels List */}
            <div className="contact-channels-list">
              <div className="contact-channel-row">
                <ClayIcon name="pin" size={48} />
                <div>
                  <span className="contact-channel-label">Manufacturing & R&D Hub</span>
                  <p className="contact-channel-val">Kochi, Kerala, India — 682021</p>
                </div>
              </div>

              <div className="contact-channel-row">
                <ClayIcon name="mail" size={48} />
                <div>
                  <span className="contact-channel-label">Direct Clinical Email</span>
                  <a href="mailto:hello@kelleradapt.com" className="contact-channel-link">
                    hello@kelleradapt.com
                  </a>
                </div>
              </div>

              <div className="contact-channel-row">
                <ClayIcon name="phone" size={48} />
                <div>
                  <span className="contact-channel-label">Hotline & Inquiries</span>
                  <p className="contact-channel-val">
                    +91 77366 30683 &middot; +91 70253 15392
                  </p>
                </div>
              </div>
            </div>

            {/* Institutional & GeM Tenders Card */}
            <div className="contact-tender-card">
              <div className="tender-badge-row">
                <span className="tender-gem-tag">GeM Registered</span>
                <span className="tender-subtag">Government e-Marketplace</span>
              </div>
              <h4 className="tender-card-title">Institutional Procurement & Tenders</h4>
              <p className="tender-card-desc">
                Registered vendor for government medical colleges, special schools, defense rehabilitation centers, and healthcare institutions. We provide custom tender BOQs, technical compliance sheets, and GST invoicing.
              </p>
              <div className="tender-points">
                <span>✓ Pan-India Delivery</span>
                <span>✓ Turnkey Installation</span>
                <span>✓ CPWD/Hospital Grade Hardware</span>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Request Form */}
          <div className="contact-form contact-form-elevated">
            {formSubmitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon" aria-hidden="true">✓</div>
                <h3 className="contact-success-title">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="contact-success-message">
                  Your inquiry regarding <strong>{formData.interest}</strong> has been logged with our senior clinical engineering team in Kochi. We will reach out via <strong>{formData.preferredContact}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-secondary contact-success-btn"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-head">
                  <span className="form-head-kicker">Clinical & Institutional Consultation</span>
                  <h3 className="form-head-title">Request Consultation or Custom Quote</h3>
                  <p className="form-head-desc">
                    Tell us about your space, clinic requirements, or specific child needs.
                  </p>
                </div>

                {/* Inquiry Area Interactive Pills */}
                <div className="form-group">
                  <label className="form-label">Inquiry Area</label>
                  <div className="inquiry-pill-selector">
                    {inquiryPills.map(pill => (
                      <button
                        key={pill}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: pill })}
                        className={`inquiry-pill-btn ${formData.interest === pill ? 'is-selected' : ''}`}
                      >
                        {pill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Dr. Sarah Jenkins / Anitha Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email and Phone Split */}
                <div className="form-split">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Preferred Callback Channel */}
                <div className="form-group">
                  <label className="form-label">Preferred Callback Method</label>
                  <div className="contact-pref-row">
                    {['Phone Call', 'WhatsApp', 'Email'].map((method) => (
                      <label key={method} className={`pref-radio-pill ${formData.preferredContact === method ? 'is-active' : ''}`}>
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        />
                        <span>{method === 'Phone Call' ? '📞 Call me' : method === 'WhatsApp' ? '💬 WhatsApp' : '✉️ Email'}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Project Details or Questions *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Describe your clinic, school, or home space requirements, child regulation targets, or room dimensions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary contact-submit-btn"
                >
                  <span>Request a clinic quote & floor plan</span>
                  <span aria-hidden="true">→</span>
                </button>
                <p className="cta-micro">
                  A specialist in Kochi replies within one working day. No payment to enquire. Confidential clinical review.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Office & Workshop Location Map Section */}
        <div className="contact-map-section">
          <div className="contact-map-header">
            <span className="contact-map-kicker">Find Us in Kochi</span>
            <h3 className="contact-map-title">SenseAbility Innovations & Workshop Location</h3>
            <p className="contact-map-lead">
              Our clinical consultation office, R&D workshop, and sensory demo gym are based in Kochi, Kerala. Visits for therapy clinics, hospital teams, and families are welcome by appointment.
            </p>
          </div>

          <div className="contact-map-card">
            <div className="map-embed-wrapper">
              <iframe
                title="SenseAbility Innovations & Keller Adapt Kochi Location Map"
                src="https://maps.google.com/maps?q=Kochi,+Kerala,+India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-embed-iframe"
              />

              <div className="map-floating-pin-card">
                <div className="pin-indicator">
                  <span className="pin-dot" />
                  <span className="pin-ping" />
                </div>
                <div className="pin-text">
                  <strong>SenseAbility Innovations Pvt Ltd</strong>
                  <span>Keller Adapt R&D & Sensory Workshop</span>
                  <span className="pin-coords">Kochi, Kerala, India — 682021</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Kochi,+Kerala,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pin-directions-link"
                >
                  <span>Open in Google Maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="map-info-strip">
              <div className="map-info-col">
                <span className="map-info-label">Manufacturing & R&D Hub</span>
                <span className="map-info-val">Kochi, Kerala, India — 682021</span>
              </div>
              <div className="map-info-col">
                <span className="map-info-label">Visiting Hours</span>
                <span className="map-info-val">Mon – Sat, 9:30 AM – 6:00 PM IST</span>
              </div>
              <div className="map-info-col">
                <span className="map-info-label">Direct Lines</span>
                <span className="map-info-val">+91 77366 30683 / +91 70253 15392</span>
              </div>
              <div className="map-info-col">
                <span className="map-info-label">Airport & Rail</span>
                <span className="map-info-val">35 mins to COK Airport · 20 mins to ERS Rail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
