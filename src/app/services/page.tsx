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
const content = [
  {
    title: "Haircut & Styling",
    description: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Men's Haircut
          </h2>
          <ul className="list-disc ml-6 mt-2 text-secBackground dark:text-gray-400 space-y-1">
            <li className="hover:text-primary transition-colors duration-300">Classic Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Fade/Undercut</li>
            <li className="hover:text-primary transition-colors duration-300">Beard Trim & Shape</li>
            <li className="hover:text-primary transition-colors duration-300">Grooming Package (Haircut + Beard Trim)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Women's Haircut
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Classic Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Layered Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Bob & Pixie Cut</li>
            <li className="hover:text-primary transition-colors duration-300">Bangs/Fringe Styling</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Kid's Haircut
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-secBackground dark:text-gray-400">
            <li className="hover:text-primary transition-colors duration-300">Boy's Haircut</li>
            <li className="hover:text-primary transition-colors duration-300">Girl's Haircut</li>
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
            <li className="hover:text-primary transition-colors duration-300">Grooming Package (Haircut + Beard Trim)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-background dark:text-gray-300 hover:text-primary transition-colors duration-300">
            Highlights & Lowlights
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
            <li className="hover:text-primary transition-colors duration-300">Bold & Vibrant Colors</li>
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
          <h2 className="text-xl font-semibold text-secBackground dark:text-gray-400 hover:text-primary transition-colors duration-300">
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
          <h2 className="text-xl font-semibold text-secBackground dark:text-gray-400 hover:text-primary transition-colors duration-300">
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
            <li className="hover:text-primary transition-colors duration-300">Updos & Braiding</li>
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
          <li className="hover:text-primary transition-colors duration-300">Wig Fitting & Styling</li>
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
  return (
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
    </div>
  );
}
