'use client';

import React from 'react';

export default function LocationMap() {
  return (
    <section id="location" className="contact-map-section board-section board-rule">
      <div className="keller-container">
        <div className="contact-map-header">
          <p className="board-kicker">Find Us in Kochi</p>
          <h2 className="board-title">Keller Adapt Workshop & Experience Hub</h2>
          <div className="mission-title-bar" aria-hidden="true" />
          <p className="board-lead">
            Our clinical consultation office, R&D workshop, and sensory demo gym are based in Kochi, Kerala. Visits for therapy clinics, hospital teams, and families are welcome by appointment.
          </p>
        </div>

        <div className="contact-map-card">
          <div className="map-embed-wrapper">
            <iframe
              title="Keller Adapt Kochi Location Map"
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
                <strong>Keller Adapt</strong>
                <span>R&D & Sensory Workshop</span>
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
    </section>
  );
}
