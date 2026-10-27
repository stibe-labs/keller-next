'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ClayIcon from '@/components/ClayIcon';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
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
             COMMON CTA SECTION: CONSULTATION & INSTITUTIONAL QUOTES
             ============================================================== */}
        <div id="consultation-form" className="contact-main-header">
          <p className="board-kicker">Written Inquiries & Procurement</p>
          <h2 className="board-title">Contact & Institutional Quotes</h2>
          <div className="mission-title-bar" aria-hidden="true" />
        </div>

        <div className="contact-grid">
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
      </div>
    </section>
  );
}
