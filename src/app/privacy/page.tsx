import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy | Keller Adapt',
  description: 'How Keller Adapt handles enquiry details sent through kelleradapt.com.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="keller-container legal-inner">
          <p className="section-tag">Keller Adapt</p>
          <h1>Privacy</h1>
          <p>
            The quote form on this site asks for your name, email, phone, organisation, and message so the team in Kochi can reply. That is the only information this page collects.
          </p>
          <p>
            We use it to answer your enquiry. We do not sell it. Marketplace purchases on Etsy, Amazon, or Flipkart follow those sellers’ own privacy notices.
          </p>
          <p>
            To ask for a copy or deletion of an enquiry, write to{' '}
            <a href="mailto:hello@kelleradapt.com">hello@kelleradapt.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
