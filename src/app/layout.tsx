import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#EA5338",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kelleradapt.com"),
  title: "Keller Adapt | Pediatric Assistive & Sensory Solutions",
  description: "Keller Adapt designs and manufactures innovative, affordable pediatric assistive therapy products and sensory integration spaces for children with special needs. Handcrafted in Kerala, India and shipped worldwide.",
  keywords: [
    "Keller Adapt",
    "SenseAbility Innovations",
    "pediatric therapy",
    "sensory integration",
    "occupational therapy tools",
    "LumaSwing",
    "LayerNest",
    "sensory room installations",
    "switch adapted technology"
  ],
  authors: [{ name: "SenseAbility Innovations Pvt Ltd" }],
  openGraph: {
    title: "Keller Adapt | Making Every Space More Inclusive",
    description: "Pediatric assistive devices, sensory rooms, and occupational therapy products crafted with purpose in Kerala, India.",
    url: "https://www.kelleradapt.com",
    siteName: "Keller Adapt",
    images: [
      {
        url: "/assets/products/SOLONEST.png",
        width: 1200,
        height: 630,
        alt: "Keller Adapt Sensory Solutions"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/logo/keller-logo.png",
    apple: "/assets/logo/keller-logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
