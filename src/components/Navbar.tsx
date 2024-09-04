
"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconAddressBook,
  IconUserFilled,
  IconBriefcaseFilled,
  IconHome,
  IconCoinRupee,


} from "@tabler/icons-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext"; // Adjust the import path as needed
import { IconSun, IconMoon } from "@tabler/icons-react"; // Use any icons you pref
export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const handleToggle = () => {
    console.log("Toggling theme", theme);
    toggleTheme();
  };
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-background dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUserFilled className="h-full w-full text-background dark:text-neutral-300" />
      ),
      href: "/about",
    },
   
    {
      title: "Services",
      icon: (
        <IconBriefcaseFilled className="h-full w-full text-background dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "Pricing",
      icon: (
        <IconCoinRupee className="h-full w-full text-background dark:text-neutral-300" />
      ),
      href: "/pricing",
    },
 
   
   
  ];
  return (
    <>
    <div className="relative flex items-center justify-center dark:bg-stone-950/90 w-full">
      <div className="fixed top-4 left-4 p-2 rounded-full  z-50">
        <h3 className="font-headingFont font-extrabold text-iconBg dark:text-gray-200 text-2xl"> Salon85</h3>
      </div>
      <FloatingDock
        desktopClassName="fixed top-14 z-50"
        mobileClassName="fixed bottom-6 right-0 m-4 z-50"
        items={links}
      />

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed top-4 right-4 p-2 rounded-full bg-background dark:bg-neutral-800 z-50"
      >
        {theme === "light" ? (
          <IconMoon className="text-iconBg dark:text-neutral-300" />
        ) : (
          <IconSun className="text-neutral-700 dark:text-neutral-300" />
        )}
      </button>
    </div>
  </>
  );
}