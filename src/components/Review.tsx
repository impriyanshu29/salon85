"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Link from "next/link";
export default function ReviewCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-r  dark:from-black dark:to-gray-900 bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
         <div className="mx-auto pt-4 max-w-xl text-center">
   <div className="mx-auto inline-flex rounded-full bg-iconBg dark:bg-black px-4 py-1.5">
     <p className="text-xs font-semibold uppercase tracking-widest text-background">
         Reviews
     </p>
   </div>
   <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
   What Our Clients Say
   </h2>
 </div>
 <div className="mt-10">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
      <p className="textbase mt-6 text-center text-gray-600">
      Want more insights? {" "}
        <Link
          href="https://g.co/kgs/2gw63k3" target='_blank'
          title='Review'
          className="font-semibold text-iconBg dark:text-gray-200 hover:underline"
        >
    Check reviews
        </Link>
      </p>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Wow, what a transformation!The hairdresser , Sagar is a true artist! Not only did they nail the perfect color, but the cut is also fabulous! I'm absolutely thrilled with the results. The attention to detail, the expertise, and the care taken to understand my style and preferences - everything was top-notch!....",
    name: "Harshika Subnani",
    rating : 4,
  },
  {
    quote:
      "Amazing experience at Salon 85 wherein I got an Ombre (red) done .Their expert hair stylist, Sagar, is excellent at his art and catered to all my hair requirements.Do visit Salon 85 for the best experience ever!",
    name: "Prerna Koirala",
    rating : 5,
  },
  {
    quote: "I had an amazing experience at Salon 85, the top hair salon in Park Street, Kolkata. The service was fantastic and completed within the promised time frame. I'm fully satisfied with the results and highly recommend Salon 85 to anyone looking for exceptional hair care, and beauty treatment..",
    name: "Akash Shaw",
    rating : 5,
  },
  {
    quote:
      "My package included full body waxing, manicure, pedicure and nail extension. This was my first visit here, I had wonderful experience. The service is amazing as working staffs are very friendly and polite... Thanks to Saif, Veena and Pinki for the service..",
    name: "Neha Gupta",
    rating : 5,
  },
  {
    quote:
      "Got my dream color with excellent service and top notch product. Thanks Avinash brother for the balayage hair color with expertise. Looking forward to having some translation again. Thanks 🙏😊",
    name: "Sabrina Tinni",
    rating : 4,
  },
  {
    quote: "Had an amazing experience. Hospitality is really good. The hair stylist aiyaaz is brilliant. He will give the colour exactly that you need. His work is very unique and he works with complete dedication. Rest of the people here are also equally very sweet and very nice. Would love to come here again",
    name:"Naurin Kasem",
    rating:4,
  }
];
