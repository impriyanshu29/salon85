'use client'

import React from 'react'
// import { Menu, X, MapPin } from 'lucide-react'
import Image from 'next/image'

import Images from '../../components/Images';
import about from '../../Images/about.jpg';
import worker1 from '../../Images/worker1.jpg';
import worker2 from '../../Images/worker2.jpg';
import worker3 from '../../Images/worker3.jpg';


const users = [
  {
    name: '',
    image:worker1.src,
    position: '',
  },
  {
    name: '',
    image:worker2.src,
    position: '',
  },
  {
    name: '',
    image:worker3.src,
    position: '',
  }
]

export default function AboutPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>

      <div className="mx-auto my-3 py-8 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">


        <div className="mx-auto pt-12  lg:pt-4 justify-center max-w-xl pb-9 text-center">
          <div className="mx-auto inline-flex rounded-full bg-iconBg dark:bg-black px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-background">
              About Us
            </p>
          </div>
          <h2 className="mt-6 text-3xl hidden md:flex font-bold leading-tight font-headingFont text-iconBg justify-center text-center mx-auto dark:text-gray-200 sm:text-4xl lg:text-5xl">
            Discover more about Salon85
          </h2>
        </div>

        {/* About page Intro */}
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-2 py-2 md:py-12 lg:col-span-8 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-7">
            <div className=" hidden md:flex mt-8 max-w-max items-center justify-center lg:justify-normal mx-auto lg:mx-0 space-x-2 rounded-full bg-header dark:bg-black  p-2">
              <div className="rounded-full bg-iconBg dark:bg-zinc-900/70 p-1 px-2">
                <p className="text-sm text-background font-medium">Know</p>
              </div>
              <p className=" text-base text-background  ">About Us→ </p>
            </div>


            <h1 className="-mt-4 md:mt-8 text-2xl font-bold font-headingFont leading-normal    text-iconBg lg:text-left text-center md:text-3xl lg:text-4xl dark:text-gray-200">
              Step into Luxury at Salon85, Park Street's Leading VIP Salon
            </h1>
            <p className="mt-4 text-center lg:text-left text-base md:text-lg  font-subheadingFont text-header dark:text-gray-300">
              Welcome to Salon85, the leading unisex salon on Park Street, Kolkata. We offer top-quality hair treatments, facials, and makeup at competitive prices. Visit us today and discover why Salon85 is the preferred choice for luxury beauty services in Kolkata.
            </p>

          </div>
          <div className="relative after bg-transparent lg:col-span-4 lg:-mr-2  my-auto justify-center items-center hidden lg:flex  xl:col-span-5">
            <Image
              src={about}
              alt="salon image"
              className="rounded-lg"
            />
          </div>
        </div>


        <hr className="mt-8 md:mt-20 border-secBackground dark:border-gray-600" />
        {/* Salon Image */}
        <div className="mx-auto max-w-7xl bg-gradient-to-r  dark:from-black dark:to-gray-900 px-2 py-10 md:px-0">
          <div>
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto inline-flex rounded-full  bg-iconBg dark:bg-black px-4 py-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-background">
                  Images
                </p>
              </div>
              <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
              Explore Our Space in Pictures
              </h2>
            </div>
            <div className='flex mt-4 md:mt-12 lg:mt-16 mx-auto  justify-center text-center'>
            <Images  />
            </div>
          </div>
        </div>

        <hr className="mt-8 md:mt-20 border-secBackground dark:border-gray-600" />
        {/* Salon team */}
        <div className="mt-16 flex items-center">
          <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto inline-flex rounded-full  bg-iconBg dark:bg-black px-4 py-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-background">
                  Our Team
                </p>
              </div>
              <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
              Meet the Faces Behind Your Glamour
              </h2>
            </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 max-w-6xl gap-4 gap-y-6 py-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>


      </div>


    </div>
  )
}
