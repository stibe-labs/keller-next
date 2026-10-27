'use client';

import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    __keller_splash_completed?: boolean;
  }
}

// Module-level session cache: persists across all client-side route navigations and button clicks
let hasShownInCurrentSession = false;

function checkIfShouldShow(): boolean {
  if (typeof window === 'undefined') return false;

  // 1. If already shown in the current in-memory JS session (SPA navigation), NEVER show again!
  if (hasShownInCurrentSession || window.__keller_splash_completed) {
    return false;
  }

  // 2. Detect if this is an explicit browser reload (F5 / Cmd+R / reload button)
  let isBrowserReload = false;
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      isBrowserReload = (navEntries[0] as PerformanceNavigationTiming).type === 'reload';
    } else if (window.performance && window.performance.navigation) {
      isBrowserReload = window.performance.navigation.type === 1;
    }
  } catch {}

  // 3. User requirement: "Browser reload button press cheythalum kaanicho" (show on browser reload)
  if (isBrowserReload) {
    return true;
  }

  // 4. Check sessionStorage for previous visits in this browser tab/window
  try {
    const alreadyShownInStorage = sessionStorage.getItem('keller_splash_shown') === 'true';
    if (alreadyShownInStorage) {
      return false;
    }
  } catch {}

  // Initial fresh visit: show
  return true;
}

export default function SplashScreen() {
  const [shouldShow, setShouldShow] = useState<boolean>(() => {
    const show = checkIfShouldShow();
    if (!show && typeof document !== 'undefined') {
      document.documentElement.classList.add('splash-done');
    }
    return show;
  });

  const [fading, setFading] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!shouldShow) {
      document.documentElement.classList.add('splash-done');
      return;
    }

    // Mark as shown immediately so subsequent button clicks or route changes never re-trigger it
    hasShownInCurrentSession = true;
    window.__keller_splash_completed = true;
    try {
      sessionStorage.setItem('keller_splash_shown', 'true');
    } catch {}

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fadeAt = reduce ? 300 : 1600;
    const hideAt = reduce ? 500 : 2100;

    const fadeTimer = window.setTimeout(() => setFading(true), fadeAt);
    const hideTimer = window.setTimeout(() => {
      setDismissed(true);
      document.documentElement.classList.add('splash-done');
    }, hideAt);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [shouldShow]);

  if (!shouldShow || dismissed) return null;

  return (
    <div
      className={`keller-splash${fading ? ' is-fading' : ''}`}
      onClick={() => {
        setDismissed(true);
        hasShownInCurrentSession = true;
        window.__keller_splash_completed = true;
        try {
          sessionStorage.setItem('keller_splash_shown', 'true');
        } catch {}
        document.documentElement.classList.add('splash-done');
      }}
      role="presentation"
    >
      <img src="/assets/logo/keller-logo.png" alt="Keller Adapt" />
    </div>
  );
}
