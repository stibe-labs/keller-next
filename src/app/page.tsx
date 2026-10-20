'use client';

import React, { useState } from 'react';
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

export default function Home() {
  // Boolean toggle driven by SITE_CONFIG.comingSoon
  // Also supports ?preview=full or ?preview=coming-soon for instant browser testing
  const [isComingSoon] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('preview') === 'full') return false;
      if (params.get('preview') === 'coming-soon') return true;
    }
    return SITE_CONFIG.comingSoon;
  });

  // When comingSoon is true, render the minimal Coming Soon page
  if (isComingSoon) {
    return <ComingSoon />;
  }

  // Full production website
  return (
    <>
      {/* Brand Splash Screen with slow reveal */}
      <SplashScreen />

      {/* Main Landing Page */}
      <div>
        {/* 00. Global Navigation Header */}
        <Navbar />

        {/* 01. HERO — BRAND INTRODUCTION */}
        <Hero />

        {/* 02. WHAT WE CREATE */}
        <WhatWeCreate />

        {/* 05. MARKETPLACE RECOGNITION */}
        <Marketplaces />

        {/* 03. PRODUCT DISPLAY */}
        <ProductCatalog />

        {/* 04. PRODUCT PORTFOLIO & APPLICATIONS */}
        <ProductDeepDive />

        {/* 08. THE PROBLEM WE SOLVE */}
        <ProblemWeSolve />

        {/* 09. WHO WE SERVE */}
        <WhoWeServe />

        {/* 10. WHY KELLER ADAPT */}
        <WhyKeller />

        {/* 06. FIRST BUYERS */}
        <ClinicalImpact />

        {/* 07. CUSTOMER REVIEWS */}
        <Reviews />

        {/* 11. OUR STORY & TEAM INTRODUCTION */}
        <Team />

        {/* 12. GLOBAL REACH & SHIPPING */}
        <GlobalReach />

        {/* 13. GROWTH ROADMAP & INVESTOR PROOF POINTS */}
        <InvestorMetrics />

        {/* 14. FINAL CALL TO ACTION & CONTACT */}
        <ContactSection />

        {/* Brand Footer */}
        <Footer />
      </div>
    </>
  );
}
