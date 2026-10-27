import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms | Keller Adapt',
  description: 'Terms for enquiries and product information on the Keller Adapt site.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="keller-container legal-inner">
          <p className="section-tag">Keller Adapt</p>
          <h1>Terms</h1>
          <p>
            Keller Adapt is based in Kochi, Kerala. Product pages describe therapy tools. They are not a medical diagnosis or a promise of a clinical outcome.
          </p>
          <p>
            Sending the quote form is a request for a conversation. It is not an order and it does not take payment. Confirmed purchases happen on the marketplace listing you choose, under that marketplace’s checkout rules.
          </p>
          <p>
            Delivery windows, including the 9-day express note, are working estimates from dispatch. Customs can add time. Installation of sensory rooms is quoted per site.
          </p>
          <p>
            Questions: <a href="mailto:hello@kelleradapt.com">hello@kelleradapt.com</a> or +91 77366 30683.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
