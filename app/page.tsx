"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import LaFerrariScrollCanvas from "@/components/LaFerrariScrollCanvas";
import LaFerrariExperience from "@/components/LaFerrariExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-ferrari-black min-h-screen">
      <Navbar />

      {/* SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <LaFerrariScrollCanvas scrollYProgress={scrollYProgress} />
          <LaFerrariExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* REST OF SITE (Scrolls naturally after sequence) */}
      <div className="relative z-20 bg-ferrari-black">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
