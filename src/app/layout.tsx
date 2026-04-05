import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MBR Vastukalp - Construction, Renovation & Maintenance Services in Mumbai | 30+ Years Experience',
  description: 'MBR Vastukalp offers expert construction, renovation, and maintenance services in Mumbai. With 30+ years of experience, we provide civil structure repair, electrical, plumbing, painting, HVAC, and more.',
  keywords: 'MBR Vastukalp, construction services Mumbai, renovation Mumbai, civil construction, electrical services, plumbing services, painting services, HVAC services, building maintenance, Mumbai, Maharashtra, India',
  authors: [{ name: 'MBR Vastukalp' }],
  robots: 'index, follow',
  metadataBase: new URL('https://mbrvastukalp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://mbrvastukalp.com',
    title: 'MBR Vastukalp - Construction, Renovation & Maintenance Services in Mumbai',
    description: 'Expert construction and renovation services with 30+ years of experience. Quality assured, on-time delivery, licensed & insured professionals.',
    siteName: 'MBR Vastukalp',
    images: [{ url: '/logo.png' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBR Vastukalp - Construction Services in Mumbai',
    description: 'Expert construction and renovation services with 25+ years of experience in Mumbai.',
    images: ['/logo.png'],
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai',
    'geo.position': '19.0760;72.8777',
    'ICBM': '19.0760, 72.8777',
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";
import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta name="theme-color" content="#111827" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Providers>
          <TooltipProvider>
            <StructuredData />
            <Navbar />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
            <StickyContactButtons />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

