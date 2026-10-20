'use client';

import React, { useState } from 'react';

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
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="keller-container">
        <div className="section-header">
          <span className="section-tag">Partner With Us</span>
          <h2 className="section-title">Let’s Build More Inclusive Spaces Together.</h2>
          <p className="section-subtitle">
            Whether you represent a therapy clinic, special school, hospital, airport, or are a parent seeking custom advice, our team is ready to assist.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Direct Actions */}
          <div className="contact-info-box">
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '14px' }}>
              SenseAbility Innovations Pvt Ltd
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '28px' }}>
              Headquartered in Kerala, India. We consult, design, manufacture, and distribute specialized pediatric assistive technology to institutions and families worldwide.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Manufacturing & R&D Hub</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--color-text-main)' }}>Kochi, Kerala, India — 682021</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Direct Email</div>
                  <a href="mailto:hello@kelleradapt.com" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    hello@kelleradapt.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ fontSize: '20px' }}>📞</span>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Direct Consultation Lines</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                    +91 77366 30683 / +91 70253 15392
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                Institutional & Government Tenders
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                Registered for institutional procurement and GEM Marketplace tenders for schools, rehabilitation centers, and medical colleges.
              </p>
            </div>
          </div>

          {/* Consultation Request Form */}
          <div className="contact-form">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-mint-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 20px auto' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                  Your inquiry regarding <strong>{formData.interest}</strong> has been received by our clinical & engineering team in Kochi. We will reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 22px', fontSize: '14px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '6px' }}>
                  Request Consultation or Custom Quote
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  Tell us about your space, clinic requirements, or specific child needs.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Dr. Sarah Jenkins / Anitha Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Area</label>
                  <select
                    className="form-select"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="Custom Sensory Room Project">Custom Sensory Room Project</option>
                    <option value="LumaSwing or LightLoops Inquiry">LumaSwing / LightLoops Inquiry</option>
                    <option value="Therapy Center Equipment Bulk Order">Therapy Center Equipment Bulk Order</option>
                    <option value="International Order & Delivery Support">International Order & Delivery Support</option>
                    <option value="Institutional Partnership / Distribution">Institutional Partnership / Distribution</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details or Questions *</label>
                  <textarea
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Describe your clinic, school, or home space requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  Submit Consultation Request →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
