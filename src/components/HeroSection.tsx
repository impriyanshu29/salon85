"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Img1 from '../Images/Img1.png';
import Img2 from '../Images/Img2.png';

import {
    IconBrandWhatsapp,
    IconCoinRupee
  
  } from "@tabler/icons-react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,

  
  
} from "./ui/animated-modal";

import { motion } from "framer-motion";
function HeroSection() {
  return (
    <div className='relative h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center justify-center overflow-hidden mx-auto  px-2 mt-16 md:py-0 md:mt-5'>
      
      <div className="relative w-full bg-gradient-to-r  dark:from-black dark:to-gray-900 bg-background">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-2 py-12 md:py-16 lg:col-span-8 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-7">
          <div className="mt-8 flex max-w-max items-center justify-center lg:justify-normal mx-auto lg:mx-0 space-x-2 rounded-full bg-header dark:bg-black  p-2">
              <div className="rounded-full bg-iconBg dark:bg-zinc-900/70 p-1 px-2">
                <p className="text-sm text-background font-medium">Why Our </p>
              </div>
              <p className=" text-base text-background  ">Services → </p>
            </div>
           
            <h1 className="mt-8 text-3xl font-bold font-headingFont leading-normal    text-iconBg lg:text-left text-center md:text-4xl lg:text-5xl dark:text-gray-200">
            Elevating Grooming Standards for Everyone
            </h1>
            <p className="mt-4 text-center lg:text-left text-base md:text-lg  font-subheadingFont text-header dark:text-gray-300">
            Discover Park Street’s premier destination for sophisticated grooming. At Salon85, we blend modern techniques with timeless elegance, offering a refined experience for both men and women.
            </p>
            <div className='flex flex-row justify-around lg:gap-12 lg:justify-normal'>
            <div className=" mt-8 flex items-center lg:items-left lg:justify-start  justify-center">
            <Link href="https://wa.me/919903016199" target="_blank">
      <Modal>
        <ModalTrigger className="bg-background border border-header dark:border-zinc-700 dark:text-gray-200 text-header dark:bg-stone-950 flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          
   
        Contact US



          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <IconBrandWhatsapp className='text-green-700'/>
          </div>
        </ModalTrigger>
        
      </Modal>
      </Link>
    </div>
    <div className=" mt-8 flex items-center lg:items-left lg:justify-start  justify-center">
      <Modal>
        <ModalTrigger className="bg-header border border-header dark:border-zinc-900 dark:text-gray-200 text-background dark:bg-zinc-900/70 flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Price List
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <IconCoinRupee />
          </div>
        </ModalTrigger>
        
      </Modal>
    </div>
            </div>
            
          </div>
          <div className="relative after bg-transparent lg:col-span-4 lg:-mr-2  my-auto justify-center items-center hidden lg:flex  xl:col-span-5">
            <Image
              className="aspect-[3/2] dark:bg-transparent object-cover lg:aspect-[4/3] lg:h-[500px] mt-1 xl:aspect-[16/9]"
              src={Img2} loading="lazy" alt='salon image'
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default HeroSection;
