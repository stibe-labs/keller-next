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
        {/* Top Header with Phone Call & Connect Graffitos */}
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

        <h2 className="board-contact-label">Contact.</h2>

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
                <ClayIcon name="pin" size={48} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Manufacturing & R&D Hub</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--color-text-main)' }}>Kochi, Kerala, India — 682021</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <ClayIcon name="mail" size={48} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Direct Email</div>
                  <a href="mailto:hello@kelleradapt.com" style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    hello@kelleradapt.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <ClayIcon name="phone" size={48} />
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

                <div className="form-split">
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

                <button type="button" onClick={handleSubmit} className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  Request a clinic quote
                </button>
                <p className="cta-micro">A specialist in Kochi replies within one working day. No payment to enquire.</p>
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
