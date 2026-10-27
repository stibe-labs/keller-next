'use client';
import React, { useSyncExternalStore } from 'react';
import { SITE_CONFIG } from '@/config/siteConfig';
import ComingSoon from '@/components/ComingSoon';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeCreate from '@/components/WhatWeCreate';
import Marketplaces from '@/components/Marketplaces';
import ClinicalImpact from '@/components/ClinicalImpact';
import Reviews from '@/components/Reviews';
import ProblemWeSolve from '@/components/ProblemWeSolve';
import WhoWeServe from '@/components/WhoWeServe';
import WhyKeller from '@/components/WhyKeller';
import Team from '@/components/Team';
import InvestorMetrics from '@/components/InvestorMetrics';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

const noopSubscribe = () => () => {};

export default function Home() {
  const isComingSoon = useSyncExternalStore(
    noopSubscribe,
    () => {
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('preview') === 'full') return false;
        if (params.get('preview') === 'coming-soon') return true;
      } catch {}
      return SITE_CONFIG.comingSoon;
    },
    () => SITE_CONFIG.comingSoon
  );

  // When comingSoon is true, render the minimal Coming Soon page
  if (isComingSoon) {
    return <ComingSoon />;
  }

  // Full production website
  return (
    <>
      <div>
        {/* 00. Global Navigation Header */}
        <Navbar />

        {/* 01. Hook & Category Header */}
        <Reveal><Hero /></Reveal>

        {/* 02. The Problem & Market Need */}
        <Reveal><ProblemWeSolve /></Reveal>

        {/* 03. The Solution & Unfair Advantage */}
        <Reveal><WhyKeller /></Reveal>

        {/* 04. What We Create (Product Innovation Pillars) */}
        <Reveal><WhatWeCreate /></Reveal>

        {/* 05. Market Expansion & Environments (TAM) */}
        <Reveal><WhoWeServe /></Reveal>

        {/* 08. Traction, Key Metrics & Growth Roadmap */}
        <Reveal><InvestorMetrics /></Reveal>

        {/* 09. Clinical Advisory & Early Medical Adopters */}
        <Reveal><ClinicalImpact /></Reveal>

        {/* 10. Social Proof & Verified Customer Reviews */}
        <Reveal><Reviews /></Reveal>

        {/* 11. Where To Buy & Global Logistics (Combined) */}
        <Reveal><Marketplaces /></Reveal>

        {/* 13. The Execution Team */}
        <Reveal><Team /></Reveal>

        {/* 14. Conversion & Contact CTA */}
        <Reveal><ContactSection /></Reveal>

        {/* 15. Frequently Asked Questions */}
        <Reveal><FAQSection /></Reveal>

        {/* 16. Workshop & Demo Gym Location Map */}
        <Reveal><LocationMap /></Reveal>

        {/* 17. Footer */}
        <Footer />
      </div>
    </>
  );
}
