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
    message: ''
  });

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

        {/* Section Headline */}
        <div id="consultation-form" className="contact-main-header">
          <p className="board-kicker">Direct Consultation</p>
          <h2 className="board-title">Contact.</h2>
          <div className="mission-title-bar" aria-hidden="true" />
        </div>

        {/* Authentic Dual-Card Layout Matching Top Sections */}
        <div className="contact-grid">
          {/* Left Column: Organization Credentials & GeM Tenders Card */}
          <div className="contact-info-box">
            <h3 className="contact-corp-title">SenseAbility Innovations Pvt Ltd</h3>
            <p className="contact-corp-desc">
              Headquartered in Kerala, India. We consult, design, manufacture, and distribute specialized pediatric assistive technology to institutions and families worldwide.
            </p>

            <div className="contact-channels-list">
              <div className="contact-channel-row">
                <ClayIcon name="pin" size={44} />
                <div>
                  <span className="contact-channel-label">Manufacturing & R&D Hub</span>
                  <p className="contact-channel-val">Kochi, Kerala, India — 682021</p>
                </div>
              </div>

              <div className="contact-channel-row">
                <ClayIcon name="mail" size={44} />
                <div>
                  <span className="contact-channel-label">Direct Email</span>
                  <a href="mailto:hello@kelleradapt.com" className="contact-channel-link">
                    hello@kelleradapt.com
                  </a>
                </div>
              </div>

              <div className="contact-channel-row">
                <ClayIcon name="phone" size={44} />
                <div>
                  <span className="contact-channel-label">Direct Consultation Lines</span>
                  <p className="contact-channel-val">
                    +91 77366 30683 &middot; +91 70253 15392
                  </p>
                </div>
              </div>
            </div>

            {/* Institutional & GeM Tenders Card */}
            <div className="contact-tender-card">
              <span className="tender-gem-tag">Institutional & Government Tenders</span>
              <p className="tender-card-desc">
                Registered for institutional procurement and GeM Marketplace tenders for schools, rehabilitation centers, and medical colleges.
              </p>
            </div>
          </div>

          {/* Right Column: Clean, Authentic Consultation Request Form */}
          <div className="contact-form">
            {formSubmitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon" aria-hidden="true">✓</div>
                <h3 className="contact-success-title">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="contact-success-message">
                  Your inquiry regarding <strong>{formData.interest}</strong> has been received by our clinical & engineering team in Kochi. We will reach out to you within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-head">
                  <h3 className="form-head-title">Request Consultation or Custom Quote</h3>
                  <p className="form-head-desc">
                    Tell us about your space, clinic requirements, or specific child needs.
                  </p>
                </div>

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

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-interest">Inquiry Area</label>
                  <select
                    id="contact-interest"
                    className="form-select"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="Custom Sensory Room Project">Custom Sensory Room Project</option>
                    <option value="LumaSwing or LightLoops Inquiry">LumaSwing / LightLoops Inquiry</option>
                    <option value="Therapy Center Equipment Bulk Order">Therapy Center Equipment Bulk Order</option>
                    <option value="Home Sensory Diet & SoloNest">Home Sensory Diet & SoloNest</option>
                    <option value="Institutional & Government GeM Tender">Institutional & Government GeM Tender</option>
                    <option value="International Order & Delivery Support">International Order & Delivery Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Project Details or Questions *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Describe your clinic, school, or home space requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px 24px', fontSize: '15px' }}
                >
                  Request a clinic quote
                </button>
                <p className="cta-micro">
                  A specialist in Kochi replies within one working day. No payment to enquire.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
