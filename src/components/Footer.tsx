"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-iconBg text-background dark:bg-neutral-950 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-2">Great Hair,Great Day - Salon 85 , 85 Park St, Mullick Bazar, Park Street area, Kolkata</p>
            <p className="mt-2">Open from 10 AM to 9 PM, Monday to Sunday (Prior booking required for special hours)  </p>
           
        
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/salon85kolkata/" target="_blank" rel="noopener noreferrer" className="text-background hover:text-pink-600 dark:hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a
             href="https://www.facebook.com/Salon85parkstreet" target="_blank" rel="noopener noreferrer"
              className="text-background dark:hover:text-blue-600 hover:text-blue-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/Salon85k" target="_blank" rel="noopener noreferrer"
              className="text-background hover:text-gray-100 dark:hover:text-gray-10000"
            >
              <BsTwitterX size={24} />
            </a>
            <a
             href="https://in.pinterest.com/salon85k/" target="_blank" rel="noopener noreferrer"
              className="text-background hover:text-red-600 dark:hover:text-red-600"
            >
              <FaPinterest size={24} />
            </a>
            <a
              href={`mailto:alammahtab@hotmail.com`}
              className="text-background dark:hover:text-blue-600 hover:text-blue-600"
            >
              <MdEmail size={24} />
            </a>


           
          </div>
        </div>
        <div className="mt-8 border-t border-background pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background">&copy; {new Date().getFullYear()} Salon 85. All rights reserved.</p>
          <p className="text-background font-thin text-sm mt-4 md:text-base  "> Made with ❤️ by Indian</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <Link href="/" className="text-background  hover:text-white transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-background  hover:text-white transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/services" className="text-background hover:text-white transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link href="/pricing" className="text-background  hover:text-white transition-colors duration-300">Prices</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
