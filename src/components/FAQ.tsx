
"use client";
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

function FAQ() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(
    Array.from({ length: 4 }).map(() => false)
  );

  const toggleDropdown = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
const faqs = [
    {
      question: "Do you offer both men’s and women’s haircuts?",
      answer:
        "Yes, we provide a full range of haircut services for both men and women. Our stylists are trained to handle various styles, from classic to trendy, ensuring you leave with a look you love.",
    },
    {
      question: "Do you offer grooming services for men, like beard trims or shaves?",
      answer:
        "Yes, we offer a variety of grooming services for men, including beard trims, shaves, and styling. Our stylists can help you achieve the perfect look that suits your style.",
    },
    {
      question: "Do you provide services for special occasions?",

      answer:
        "Yes, we offer a range of styling services for special occasions such as weddings, parties, and events. Whether you need an elegant updo or a polished look, our stylists are here to help.",
    },
    {
      question: "What measures are you taking for hygiene and safety? ",
      answer:
        "We follow strict hygiene protocols to ensure a safe and clean environment for our clients and staff. This includes sanitizing all tools and surfaces regularly and using disposable products where necessary.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl bg-gradient-to-r  dark:from-black dark:to-gray-900 px-2 py-10 md:px-0">
    <div>
    <div className="mx-auto max-w-xl text-center">
   <div className="mx-auto inline-flex rounded-full  bg-iconBg dark:bg-black px-4 py-1.5">
     <p className="text-xs font-semibold uppercase tracking-widest text-background">
         FAQ
     </p>
   </div>
   <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
   Common Queries for Our Salon Services
   </h2>
 </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-md border border-iconBg dark:border-gray-200 shadow-lg transition-all duration-200"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => toggleDropdown(index)}
            >
              <span className="flex text-lg font-semibold text-iconBg dark:text-gray-200">
                {faq.question}
              </span>
            </button>
            {isOpen[index] && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-header dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
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
  </section>
  )
}

export default FAQ