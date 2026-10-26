'use client';
import React, { useSyncExternalStore } from 'react';
import { SITE_CONFIG } from '@/config/siteConfig';
import ComingSoon from '@/components/ComingSoon';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeCreate from '@/components/WhatWeCreate';
import ProductCatalog from '@/components/ProductCatalog';
import ProductDeepDive from '@/components/ProductDeepDive';
import Marketplaces from '@/components/Marketplaces';
import ClinicalImpact from '@/components/ClinicalImpact';
import Reviews from '@/components/Reviews';
import ProblemWeSolve from '@/components/ProblemWeSolve';
import WhoWeServe from '@/components/WhoWeServe';
import WhyKeller from '@/components/WhyKeller';
import Team from '@/components/Team';
import GlobalReach from '@/components/GlobalReach';
import InvestorMetrics from '@/components/InvestorMetrics';
import ContactSection from '@/components/ContactSection';
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
      <SplashScreen />
      <div>
        {/* 00. Global Navigation Header */}
        <Navbar />

        <Reveal><Hero /></Reveal>
        <Reveal><WhatWeCreate /></Reveal>
        <Reveal><Reviews /></Reveal>
        <Reveal><ProblemWeSolve /></Reveal>
        <Reveal><WhoWeServe /></Reveal>
        <Reveal><WhyKeller /></Reveal>
        <Reveal><ClinicalImpact /></Reveal>
        <Reveal><Team /></Reveal>
        <Reveal><Marketplaces /></Reveal>
        <Reveal><GlobalReach /></Reveal>
        <Reveal><ContactSection /></Reveal>
        <Reveal><ProductCatalog /></Reveal>
        <Reveal><ProductDeepDive /></Reveal>
        <Reveal><InvestorMetrics /></Reveal>
        <Footer />
      </div>
    </>
  );
}
