
"use client";
import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GiPerfumeBottle } from "react-icons/gi";
import { MdOutlineHomeRepairService } from "react-icons/md";

function Feature() {
  return (
  
 <div className="mx-auto my-3 py-8 max-w-7xl bg-gradient-to-r bg-secBackground dark:from-black dark:to-gray-900 px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
 <div className="mx-auto pt-4 max-w-xl text-center">
   <div className="mx-auto inline-flex rounded-full bg-iconBg dark:bg-black px-4 py-1.5">
     <p className="text-xs font-semibold uppercase tracking-widest text-background">
         Our Features
     </p>
   </div>
   <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
   Why We’re  Premier Salon in Park Street
   </h2>
 </div>
 <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
   <div>
     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-header dark:bg-zinc-900/70">
       <GrUserExpert className="h-9 w-9 text-background" />
     </div>
     <h3 className="mt-8 text-lg font-semibold text-iconBg dark:text-gray-200">Expert Stylists and Beauticians</h3>
     <p className="mt-4 text-sm text-header dark:text-gray-300">
     From expert cuts and vibrant color to seamless hair extensions and hair fixing solutions, our team offers a full range of hair services.
     
.
     </p>
   </div>
   <div>
     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-header dark:bg-zinc-900/70">
       <HiOutlineBuildingStorefront className="h-9 w-9 text-background" />
     </div>
     <h3 className="mt-8 text-lg font-semibold text-iconBg dark:text-gray-200">Relaxing Atmosphere</h3>
     <p className="mt-4 text-sm text-header dark:text-gray-300">
     Enjoy a calm and welcoming environment designed to make your salon experience as relaxing and enjoyable as possible.
     </p>
   </div>
   <div>
     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-header dark:bg-zinc-900/70">
       <GiPerfumeBottle className="h-9 w-9 text-background" />
     </div>
     <h3 className="mt-8 text-lg font-semibold text-iconBg dark:text-gray-200">Premium Products</h3>
     <p className="mt-4 text-sm text-header dark:text-gray-300">
     We use only high-quality, professional-grade products to ensure the best results and maintain the health of your hair and skin.
     </p>
   </div>
   <div>
     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-header dark:bg-zinc-900/70">
       <MdOutlineHomeRepairService className="h-9 w-9 text-background" />
     </div>
     <h3 className="mt-8 text-lg font-semibold text-iconBg dark:text-gray-200">Customizable Services</h3>
     <p className="mt-4 text-sm text-header dark:text-gray-300">
     Whether you’re looking for a classic haircut, a bold new color, or a rejuvenating facial, we offer a range of customizable services tailored to your preferences.
     </p>
   </div>
 </div>
</div>

  )
}

export default Feature