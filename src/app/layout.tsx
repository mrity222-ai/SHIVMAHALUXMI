import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Preloader } from '@/components/layout/Preloader';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Best Solar Company in Meerut | SHIV MAHALUXMI SOLAR ENERGY | Rooftop Solar Installer',
  description: 'SHIV MAHALUXMI SOLAR ENERGY is a trusted solar solutions provider offering high-quality on-grid, hybrid, and off-grid solar installation services in Meerut, Noida, and Ghaziabad.',
  keywords: 'SHIV MAHALUXMI SOLAR ENERGY, Best Solar Company Near Me, Solar Dealer Near Me, On-grid Solar, Hybrid Solar, Off-grid Solar, Rooftop Solar Installer, Solar Energy Company, Solar Maintenance, Meerut, Noida, Ghaziabad',
  alternates: {
    canonical: 'https://shivmahaluxmi.com',
  },
  openGraph: {
    title: 'Smart Solar Energy Solutions | SHIV MAHALUXMI SOLAR ENERGY',
    description: 'Expert rooftop solar installation and maintenance services. High-quality on-grid, hybrid, and off-grid solutions across Uttar Pradesh.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SHIV MAHALUXMI SOLAR ENERGY",
              "image": "https://picsum.photos/seed/solar1/800/600",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "HOUSE NO.39, GALI NO.4, New Meenakshi Puram",
                "addressLocality": "Meerut",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "250001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.0172,
                "longitude": 77.7392
              },
              "url": "https://shivmahaluxmi.com",
              "telephone": "+919756915227",
              "areaServed": ["Meerut", "Noida", "Ghaziabad", "Hapur", "Baghpat"]
            })
          }}
        />
      </head>
      <body className="font-body selection:bg-accent/30 selection:text-accent overflow-x-hidden bg-background">
        <Preloader />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
