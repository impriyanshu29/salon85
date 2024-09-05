import FAQ from "@/components/FAQ";
import Feature from "@/components/Feature";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import ReviewCards from "@/components/Review";
export default function Home() {
  return (
   <main className="min-h-screen bg-gradient-to-r   dark:from-black dark:to-gray-900 bg-background antialiased bg-grid-white/[0.2]">
    <HeroSection />
   <Feature />
   <FAQ />
   <ReviewCards/>
   </main>
  );
}
