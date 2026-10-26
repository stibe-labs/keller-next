export interface SiteConfig {
  /**
   * Set `comingSoon` to `true` to enable the Coming Soon / Launching Soon page.
   * Set to `false` to display the full website.
   */
  comingSoon: boolean;

  /**
   * Status label displayed on the badge.
   */
  statusLabel: string;

  /**
   * Target launch date in ISO string format (Defaults to Next Monday 10:00 AM).
   */
  targetLaunchDate: string;

  brandQuote: {
    quote: string;
    author: string;
    tagline: string;
  };

  contact: {
    heading: string;
    email: string;
    phones: string[];
    label: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  // Toggle this boolean to turn the Coming Soon mode on (true) or off (false)
  comingSoon: false,

  statusLabel: "Launching Soon",

  // Next Monday at 10:00 AM IST
  targetLaunchDate: "2026-10-26T10:00:00+05:30",

  brandQuote: {
    quote: "Alone we can do so little; together we can do so much.",
    author: "Helen Keller",
    tagline: "Empowering every child with innovative pediatric assistive & sensory therapy solutions.",
  },

  contact: {
    heading: "For any queries, orders or support:",
    email: "jaleel@kelleradapt.com",
    phones: ["+91 70253 15392", "+91 77366 30683"],
    label: "Contact & Inquiries",
  },
};
