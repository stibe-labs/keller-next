import React from 'react';

export default function Reveal({ children }: { children: React.ReactNode }) {
  return <div className="reveal">{children}</div>;
}
