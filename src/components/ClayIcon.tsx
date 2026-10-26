import React, { useId } from 'react';

export type ClayName =
  | 'clinic'
  | 'home'
  | 'care'
  | 'school'
  | 'civic'
  | 'world'
  | 'pin'
  | 'mail'
  | 'phone'
  | 'parcel'
  | 'plane';

const GLYPHS: Record<ClayName, React.ReactNode> = {
  clinic: (
    <path fill="#FFF8F4" d="M36 24h8v8h8v8h-8v8h-8v-8h-8v-8h8z" />
  ),
  home: (
    <path fill="#FFF8F4" d="M40 22 24 36v16h10V40h12v12h10V36z" />
  ),
  care: (
    <path
      fill="#FFF8F4"
      d="M40 46s-12-7.2-12-14a6.2 6.2 0 0 1 12-2 6.2 6.2 0 0 1 12 2c0 6.8-12 14-12 14z"
    />
  ),
  school: (
    <path fill="#FFF8F4" d="M18 34 40 24l22 10-22 10zm8 6v10c4 3 10 4 14 4s10-1 14-4V40l-14 6z" />
  ),
  civic: (
    <path fill="#FFF8F4" d="M22 44h4V32h-4zm8 0h4V32h-4zm8 0h4V32h-4zm8 0h4V32h-4zM18 46h44v4H18zm4-18 18-8 18 8z" />
  ),
  world: (
    <>
      <circle cx="40" cy="36" r="12" fill="none" stroke="#FFF8F4" strokeWidth="2.4" />
      <path fill="none" stroke="#FFF8F4" strokeWidth="2.2" d="M40 24v24M28 36h24M31 28c4 3 14 3 18 0M31 44c4-3 14-3 18 0" />
    </>
  ),
  pin: (
    <path fill="#FFF8F4" d="M40 20c-7 0-12 5-12 12 0 9 12 20 12 20s12-11 12-20c0-7-5-12-12-12zm0 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  ),
  mail: (
    <path fill="#FFF8F4" d="M22 26h36v22H22zm2 2 16 11 16-11v2L40 41 24 30z" />
  ),
  phone: (
    <path fill="#FFF8F4" d="M28 22h8l2 8-5 3a16 16 0 0 0 8 8l3-5 8 2v8c0 2-2 4-5 3C33 47 23 33 24 26c0-2 2-4 4-4z" />
  ),
  parcel: (
    <path fill="#FFF8F4" d="M22 30 40 22l18 8v16L40 54 22 46zm18 2v14l14-6V32zm-2 0L24 26v6l14 6z" />
  ),
  plane: (
    <path fill="#FFF8F4" d="M22 38 58 26 46 50l-6-8-10 6 2-10z" />
  ),
};

export default function ClayIcon({ name, size = 72 }: { name: ClayName; size?: number }) {
  const id = useId().replace(/:/g, '');
  const gradientId = `clay-${id}`;

  return (
    <svg
      className="clay-icon"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={gradientId} cx="32%" cy="26%" r="78%">
          <stop offset="0%" stopColor="#F4B5A4" />
          <stop offset="48%" stopColor="#E24B32" />
          <stop offset="100%" stopColor="#9E3222" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="68" rx="16" ry="4.5" fill="rgba(28,20,16,0.16)" />
      <circle cx="40" cy="36" r="26" fill={`url(#${gradientId})`} />
      <ellipse cx="32" cy="28" rx="10" ry="6" fill="rgba(255,248,244,0.28)" />
      {GLYPHS[name]}
    </svg>
  );
}
