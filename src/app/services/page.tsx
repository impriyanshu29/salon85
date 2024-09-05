"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import cutting from "../../Images/Cutting.png"
import bridal from "../../Images/Bridal Makeup.png"
import makeup from "../../Images/Party Makeup.png"
import styling from "../../Images/spa.png"
import treatment from "../../Images/Straightening.png"
import extension from "../../Images/Extension.png"
import Head from "next/head";
import Link from "next/link";
const content = [
  {
    title: "Haircut & Styling",
    description: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Men’s Haircut
          </h2>
          <ul className="list-disc ml-6 mt-2 text-secBackground dark:text-gray-400 space-y-1">
            <li className="hover:text-primary transition-colors duration-300">Classic Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Fade/Undercut</li>
            <li className="hover:text-primary transition-colors duration-300">Beard Trim/Shape</li>
            <li className="hover:text-primary transition-colors duration-300">Grooming Package (Haircut/Beard Trim/Beard Shave) </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Women’s Haircut
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Classic Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Layered Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Bob/Pixie Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Bangs/Fringe Styling</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Kid’s Haircut
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Boy Haircut</li>
            <li className="hover:text-primary transition-colors duration-300">Girl Haircut</li>
            <li className="hover:text-primary transition-colors duration-300">Any Haircut</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Hair Coloring
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Global Hair Color</li>
            <li className="hover:text-primary transition-colors duration-300">Permanent Color</li>
            <li className="hover:text-primary transition-colors duration-300">Semi-Permanent Color</li>
            <li className="hover:text-primary transition-colors duration-300">Grooming Package (Haircut/Beard Trim)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Highlights/Lowlights
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Full Head</li>
            <li className="hover:text-primary transition-colors duration-300">Half Head</li>
            <li className="hover:text-primary transition-colors duration-300">Balayage</li>
            <li className="hover:text-primary transition-colors duration-300">Ombre</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Fashion Colors
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Pastel Shades</li>
            <li className="hover:text-primary transition-colors duration-300">Bold/Vibrant Colors</li>
            <li className="hover:text-primary transition-colors duration-300">Color Correction</li>
          </ul>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-gradient-to-r from-iconBg to-secBackground dark:from-black dark:to-gray-900 flex items-center justify-center text-white rounded-lg shadow-lg overflow-hidden p-6 transition-transform duration-500 hover:scale-105">
  <Image
    src={cutting}
    className="h-full w-full object-cover rounded-lg"
    alt="Hair Treatment"
    layout="fill" 
    objectFit="cover" 
  />
</div>

    ),
  },
  {
    title: "Hair Treatments",
    description: (
      <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Hair Spa
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Nourishing Treatment</li>
            <li className="hover:text-primary transition-colors duration-300">Deep Conditioning</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Keratin Treatment
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Smoothing Treatment</li>
            <li className="hover:text-primary transition-colors duration-300">Brazilian Blowout</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Scalp Treatments
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Dandruff Treatment</li>
            <li className="hover:text-primary transition-colors duration-300">Hair Fall Control</li>
          </ul>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-gradient-to-r from-iconBg to-secBackground dark:from-black dark:to-gray-900 flex items-center justify-center text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105">
        <Image
    src={styling}
    className="h-full w-full object-cover rounded-lg"
    alt="Hair Treatment"
    layout="fill" 
    objectFit="cover" 
  />
      </div>
    ),
  },
  {
    title: "Bridal & Special Occasion Makeup",
    description: (
      <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Bridal Makeup
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Traditional Bridal Makeup</li>
            <li className="hover:text-primary transition-colors duration-300">Airbrush Makeup</li>
            <li className="hover:text-primary transition-colors duration-300">Pre-Bridal Packages</li>
            <li className="hover:text-primary transition-colors duration-300">Destination Bridal Services</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Party & Event Makeup
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Cocktail Makeup</li>
            <li className="hover:text-primary transition-colors duration-300">Photoshoot Makeup</li>
            <li className="hover:text-primary transition-colors duration-300">Reception Makeup</li>
            <li className="hover:text-primary transition-colors duration-300">Engagement Makeup</li>
          </ul>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-gradient-to-r from-iconBg to-secBackground dark:from-black dark:to-gray-900 flex items-center justify-center text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105">
         <Image
    src={bridal}
    className="h-full w-full object-cover rounded-lg"
    alt="Hair Treatment"
    layout="fill" 
    objectFit="cover" 
  />
      </div>
    ),
  },
  {
    title: "Hair Styling for Special Occasions",
    description: (
      <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Bridal Hair Styling
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Elegant Updos</li>
            <li className="hover:text-primary transition-colors duration-300">Traditional Braiding</li>
            <li className="hover:text-primary transition-colors duration-300">Accessory Integration</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Party Hair Styling
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Blow Dry</li>
            <li className="hover:text-primary transition-colors duration-300">Straightening</li>
            <li className="hover:text-primary transition-colors duration-300">Updos/Braiding</li>
            <li className="hover:text-primary transition-colors duration-300">Curling</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Casual Hair Styling
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Natural Styling</li>
            <li className="hover:text-primary transition-colors duration-300">Low Maintenance Cuts</li>
            <li className="hover:text-primary transition-colors duration-300">Everyday Elegance</li>
          </ul>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-gradient-to-r from-iconBg to-secBackground dark:from-black dark:to-gray-900 flex items-center justify-center text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105">
      <Image
      src={makeup}
      className="h-full w-full object-cover rounded-lg"
      alt="Hair Treatment"
      layout="fill" 
      objectFit="cover" 
    />
    </div>
    ),
  },
  {
    title: "Chemical Treatment",
    description: (
      <div className="text-gray-700 dark:text-gray-300">
        <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
          <li className="hover:text-primary transition-colors duration-300">Permanent Straightening</li>
          <li className="hover:text-primary transition-colors duration-300">Perming</li>
          <li className="hover:text-primary transition-colors duration-300">Rebonding</li>
        </ul>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-gradient-to-r from-iconBg to-secBackground dark:from-black dark:to-gray-900 flex items-center justify-center text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105">
        <Image
    src={treatment}
    className="h-full w-full object-cover rounded-lg"
    alt="Hair Treatment"
    layout="fill" 
    objectFit="cover" 
  />
      </div>
    ),
  },
  {
    title: "Additional Services",
    description: (
      <div className="text-gray-700 dark:text-gray-300">
        <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
          <li className="hover:text-primary transition-colors duration-300">Hair Extensions</li>
          <li className="hover:text-primary transition-colors duration-300">Hair Weaving</li>
          <li className="hover:text-primary transition-colors duration-300">Wig Fitting/Styling</li>
        </ul>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-gradient-to-br from-iconBg to-secBackground flex dark:from-black dark:to-gray-900 items-center justify-center text-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105">
        <Image
      src={extension}
      className="h-full w-full object-cover rounded-lg"
      alt="Hair Treatment"
      layout="fill" 
      objectFit="cover" 
    />
      </div>
    ),
  },
];



export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "BeautySalon",
      "name": "Salon 85",
      "image": "https://salon85.in/images/salon85-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "85, Park St, Mullick Bazar, Park Street area", 
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700016", 
        "addressCountry": "IN"
      },

      "telephone": "+91-9903016199"
    },
    "serviceType": [
      "Haircut",
      "Hair Styling",
      "Bridal Makeup",
      "Hair Treatments",
      "Chemical Treatments",
      "Hair Extensions"
    ],
    "areaServed": "Kolkata",
    "description": "Salon 85 offers premium services in haircuts, styling, bridal makeup, and hair treatments in Kolkata."
  };
  return (
    <>
    <Head>
    <title>Services at Salon 85 - Haircuts, Styling, Treatments</title>
    <meta
      name="description"
      content="Discover premium services at Salon 85, Kolkata: haircuts, bridal makeup, hair styling, treatments, and more. Book your VIP salon experience today!"
    />
    <meta
      name="keywords"
      content="Salon 85, haircuts, bridal makeup, party styling, hair treatments, hair extensions, chemical treatments, salon Park Street Kolkata"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Salon 85  Services - Haircuts, Styling & Treatments" />
    <meta
      property="og:description"
      content="Get the best salon services for men and women in Park Street, Kolkata. Haircuts, bridal makeup, styling, and luxurious hair treatments await!"
    />
    <meta property="og:url" content="https://salon85.in/services" />
    <meta property="og:image" content="/images/salon85-services.jpg" />
    <link rel="canonical" href="https://salon85.in/services" />


    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

  </Head>
    <div className="mx-auto my-3 py-8 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
      {/* Header Section */}
      <div className="mx-auto pt-12 lg:pt-4 max-w-xl pb-9 text-center">
        <div className="mx-auto inline-flex rounded-full bg-gradient-to-r bg-iconBg dark:from-black dark:to-gray-900 px-4 py-1.5 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-background">
            Our Services
          </p>
        </div>
        <h2 className="mt-6 text-4xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-5xl lg:text-6xl">
          Explore Our Services
        </h2>
      </div>

      {/* Content Section */}
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
      <p className="textbase mt-6 text-center text-gray-600">
        Can not find what you are looking for?{" "}
        <Link
          href="https://wa.me/919903016199" target='_blank'
          title='Contact Us'
          className="font-semibold text-iconBg dark:text-gray-200 hover:underline"
        >
          Contact Us
        </Link>
      </p>
    </div>
    </>
  );
}
