'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const options = {
  autoRaf: true,
  anchors: true,
  allowNestedScroll: true,
  autoToggle: true,
  naiveDimensions: true,
  stopInertiaOnNavigate: true,
};

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
