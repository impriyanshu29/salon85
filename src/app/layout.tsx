import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import ThemeWrapper from '@/context/ThemeContext';
import { Footer } from '@/components/Footer';
import Head from 'next/head'; 
import dynamic from 'next/dynamic';


export const metadata = {
  title: 'Salon85 | Premium Salon Services in Park Street, Kolkata',
  description: 'Salon85 offers top-notch grooming and beauty services for men and women in Park Street, Kolkata. Book your appointment today for a luxurious salon experience.',
  keywords: 'salon,Mens Parlour,women parlor,parlor, Park Street, Kolkata, grooming, beauty services, salon85',
  openGraph: {
    title: 'Salon85 | Premium Salon Services in Park Street, Kolkata',
    description: 'Salon85 offers top-notch grooming and beauty services for men and women in Park Street, Kolkata.',
    url: 'https://www.salon85.co',
    siteName: 'Salon85',
    locale: 'en_US',
    type: 'website',
    image: 'https://www.salon85.com/og-image.jpg', // Example URL for Open Graph image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon85 | Premium Salon Services in Park Street, Kolkata',
    description: 'Salon85 offers top-notch grooming and beauty services for men and women in Park Street, Kolkata.',
   
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
      
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Salon",
            "name": "Salon85",
            "description": "Salon85 offers premium salon services for men and women in Park Street, Kolkata.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address", // Update with your street address
              "addressLocality": "Park Street",
              "addressRegion": "Kolkata",
              "postalCode": "Your Postal Code", // Update with your postal code
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Sa 09:00-19:00",
            "telephone": "+91-9903016199",
            "url": "https://www.salon85.co", // Update with your actual website URL
            "image": "https://www.salon85.com/salon-image.jpg" // Update with actual image URL
          })
        }} />
      </Head>
      <body className='bg-gradient-to-r  dark:from-black dark:to-gray-900 bg-background'>
        <div className="flex flex-col min-h-screen bg-gradient-to-r  dark:from-black dark:to-gray-900 bg-background">
          <ThemeProvider>
            <ThemeWrapper>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </ThemeWrapper>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
