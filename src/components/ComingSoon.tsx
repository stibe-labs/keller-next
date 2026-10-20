'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/siteConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const emptySubscribe = () => () => {};

function calculateTimeRemaining(targetIso: string): TimeLeft {
  if (typeof window === 'undefined') {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let target = new Date(targetIso).getTime();
  const now = Date.now();

  // If invalid or in past, dynamically target next Monday at 10:00 AM
  if (isNaN(target) || target <= now) {
    const nowDate = new Date();
    const day = nowDate.getDay();
    let daysUntilMonday = (1 + 7 - day) % 7;
    if (daysUntilMonday === 0) {
      const today10am = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 10, 0, 0).getTime();
      if (now >= today10am) {
        daysUntilMonday = 7;
      }
    }
    const nextMon = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + daysUntilMonday, 10, 0, 0);
    target = nextMon.getTime();
  }

  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function ComingSoon() {
  const { brandQuote, statusLabel, targetLaunchDate, contact } = SITE_CONFIG;

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      setTimeLeft(calculateTimeRemaining(targetLaunchDate));
    };

    const rafId = requestAnimationFrame(updateTime);
    const interval = setInterval(updateTime, 1000);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(interval);
    };
  }, [targetLaunchDate]);

  const padZero = (n: number) => String(n).padStart(2, '0');

  return (
    <main className="minimal-maintenance-wrapper">
      {/* Background Layer: Corner Kids Banner (Desktop & Mobile) */}
      <div className="minimal-maintenance-bg-layer" aria-hidden="true">
        {/* Desktop Landscape Banner */}
        <div className="bg-desktop-wrap">
          <Image
            src="/assets/banners/keller-corner-kids.png"
            alt="Keller Adapt sensory therapy background"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Mobile Rotated Portrait Banner */}
        <div className="bg-mobile-wrap">
          <Image
            src="/assets/banners/keller-corner-kids-mobile.png"
            alt="Keller Adapt sensory therapy background mobile"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>

      <div className="minimal-maintenance-content">
        {/* Big Brand Logo */}
        <div className="minimal-logo-wrap">
          <Image
            src="/assets/logo/keller-logo.png"
            alt="Keller Adapt"
            width={560}
            height={168}
            priority
            style={{
              width: '100%',
              maxWidth: 'clamp(340px, 62vw, 540px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>

        {/* Launching Soon Status Badge */}
        <div className="minimal-status-badge">
          <span className="minimal-status-dot" aria-hidden="true" />
          <span>{statusLabel || 'Launching Soon'}</span>
        </div>

        {/* Minimal Live Countdown Grid */}
        <div className="minimal-countdown" aria-label="Countdown to launch">
          <div className="countdown-card">
            <span className="countdown-number">
              {isMounted ? padZero(timeLeft.days) : '00'}
            </span>
            <span className="countdown-label">Days</span>
          </div>

          <span className="countdown-separator" aria-hidden="true">:</span>

          <div className="countdown-card">
            <span className="countdown-number">
              {isMounted ? padZero(timeLeft.hours) : '00'}
            </span>
            <span className="countdown-label">Hours</span>
          </div>

          <span className="countdown-separator" aria-hidden="true">:</span>

          <div className="countdown-card">
            <span className="countdown-number">
              {isMounted ? padZero(timeLeft.minutes) : '00'}
            </span>
            <span className="countdown-label">Mins</span>
          </div>

          <span className="countdown-separator" aria-hidden="true">:</span>

          <div className="countdown-card">
            <span className="countdown-number countdown-number-accent">
              {isMounted ? padZero(timeLeft.seconds) : '00'}
            </span>
            <span className="countdown-label">Secs</span>
          </div>
        </div>

        {/* Small Quote about Keller */}
        <div className="minimal-quote-box">
          <p className="minimal-quote-text">
            “{brandQuote.quote}”
          </p>
          <span className="minimal-quote-author">
            — {brandQuote.author}
          </span>
        </div>

        {/* Contact Details Strip */}
        {contact && (
          <div className="minimal-contact-section">
            {contact.heading && (
              <p className="minimal-contact-heading">
                {contact.heading}
              </p>
            )}
            <div className="minimal-contact-bar" aria-label="Contact information">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="minimal-contact-chip"
                  title="Send us an email"
                >
                  <svg
                    className="minimal-contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{contact.email}</span>
                </a>
              )}

              {contact.phones?.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="minimal-contact-chip"
                  title={`Call ${phone}`}
                >
                  <svg
                    className="minimal-contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
