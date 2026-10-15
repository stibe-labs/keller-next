import type { Metadata, Viewport } from "next"
import "./globals.css"
import SplashScreen from "./_components/SplashScreen"
import KellerBranding from "./_components/KellerBranding"

export const metadata: Metadata = {
  title: "Keller Adapt — Engineered for Sensory Freedom & Developmental Progress",
  description: "Therapist-designed sensory pods, adaptive equipment, and pediatric therapy tools made with clinical care and radical affordability.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SplashScreen />
        <KellerBranding />
        {children}
      </body>
    </html>
  )
}

