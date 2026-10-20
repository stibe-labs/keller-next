'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  // Stages: 'logo' -> 'statement' -> 'fading' -> 'done'
  const [stage, setStage] = useState<'logo' | 'statement' | 'fading' | 'done'>(() => {
    if (typeof window !== 'undefined') {
      try {
        if (sessionStorage.getItem('keller_splash_completed')) {
          return 'done';
        }
      } catch {
        // storage unavailable
      }
    }
    return 'logo';
  });
  const [logoVisible, setLogoVisible] = useState<boolean>(true);
  const [line1Visible, setLine1Visible] = useState<boolean>(false);
  const [line2Visible, setLine2Visible] = useState<boolean>(false);

  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 1. If already seen in this session, skip immediately
    if (stage === 'done') {
      onCompleteRef.current?.();
      return;
    }

    // 2. Schedule sequence
    // Logo visible initially -> fade logo
    const t1 = setTimeout(() => {
      setLogoVisible(false);
    }, 900);

    // Switch to statement screen
    const t2 = setTimeout(() => {
      setStage('statement');
      setLine1Visible(true);
      setLine2Visible(true);
    }, 1300);

    // Fade out statement & signal completion
    const t3 = setTimeout(() => {
      setStage('fading');
      onCompleteRef.current?.();
    }, 2800);

    // Unmount permanently from DOM
    const t4 = setTimeout(() => {
      setStage('done');
      try {
        sessionStorage.setItem('keller_splash_completed', 'true');
      } catch {}
    }, 3400);

    // Safety fallback: guaranteed hard unmount after 3.8s no matter what
    const fallback = setTimeout(() => {
      setStage('done');
      onCompleteRef.current?.();
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(fallback);
    };
  }, []);

  // When completed, completely unmount from DOM
  if (stage === 'done') return null;

  const handleDismiss = () => {
    setStage('done');
    try {
      sessionStorage.setItem('keller_splash_completed', 'true');
    } catch {}
    onCompleteRef.current?.();
  };

  return (
    <div
      onClick={handleDismiss}
      title="Click to skip"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        opacity: stage === 'fading' ? 0 : 1,
        pointerEvents: stage === 'fading' ? 'none' : 'auto',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: 'clamp(28px, 6vw, 64px)',
        cursor: 'pointer',
      }}
    >
      {/* Screen 1: Centered Brand Logo */}
      {stage === 'logo' && (
        <div
          style={{
            position: 'relative',
            width: 'min(480px, 86vw)',
            height: '140px',
            opacity: logoVisible ? 1 : 0,
            transform: logoVisible ? 'scale(1)' : 'scale(0.96)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Image
            src="/assets/logo/keller-logo.png"
            alt="Keller Adapt"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      )}

      {/* Screen 2: Editorial Asymmetric Layout */}
      {(stage === 'statement' || stage === 'fading') && (
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            height: '100%',
            maxHeight: '620px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px 0',
          }}
        >
          {/* Top-Left Statement Block */}
          <div
            style={{
              textAlign: 'left',
              opacity: line1Visible ? 1 : 0,
              transform: line1Visible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              maxWidth: '720px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '2px',
                background: '#000000',
                marginBottom: '20px',
              }}
            />
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                color: '#000000',
                lineHeight: 1.14,
                letterSpacing: '-0.035em',
                margin: 0,
              }}
            >
              Empowering <br />
              Every Child
            </h1>
          </div>

          {/* Bottom-Right Statement Block */}
          <div
            style={{
              textAlign: 'right',
              marginLeft: 'auto',
              opacity: line2Visible ? 1 : 0,
              transform: line2Visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              maxWidth: '820px',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                color: '#000000',
                lineHeight: 1.14,
                letterSpacing: '-0.035em',
                margin: 0,
              }}
            >
              To Reach Their <br />
              Full Potential.
            </h1>
            <div
              style={{
                width: '44px',
                height: '2px',
                background: '#000000',
                marginTop: '20px',
                marginLeft: 'auto',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
