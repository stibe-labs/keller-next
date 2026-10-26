'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'keller_splash_completed';

function noopSubscribe() {
  return () => {};
}

function getCompletedSnapshot(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function getServerCompletedSnapshot(): boolean {
  return true;
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch {}
  document.documentElement.classList.add('splash-done');
}

export default function SplashScreen() {
  const isAlreadyCompleted = useSyncExternalStore(
    noopSubscribe,
    getCompletedSnapshot,
    getServerCompletedSnapshot
  );

  const [dismissed, setDismissed] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (isAlreadyCompleted) {
      markSeen();
      return;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fadeAt = reduce ? 400 : 1100;
    const hideAt = reduce ? 500 : 1700;
    const fadeTimer = window.setTimeout(() => setFading(true), fadeAt);
    const hideTimer = window.setTimeout(() => {
      markSeen();
      setDismissed(true);
    }, hideAt);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [isAlreadyCompleted]);

  if (isAlreadyCompleted || dismissed) return null;

  return (
    <div
      className={`keller-splash${fading ? ' is-fading' : ''}`}
      onClick={() => {
        markSeen();
        setDismissed(true);
      }}
      role="presentation"
    >
      <img src="/assets/logo/keller-logo.png" alt="Keller Adapt" />
    </div>
  );
}
