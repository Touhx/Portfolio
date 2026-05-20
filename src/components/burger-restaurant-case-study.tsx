"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/project";
import { p } from "@/lib/base-path";

interface BurgerRestaurantProps {
  project: Project;
}

type MediaSlice = {
  type: "image" | "video";
  src: string;
};

export default function BurgerRestaurantCaseStudy({ project }: BurgerRestaurantProps) {
  // Array of image slices for your case study layout.
  const caseStudySlices: MediaSlice[] = [
    { type: "image", src: p("/case-study/burger-restaurant/Burger restaurant.png") },
  ];

  return (
    <div
      className="text-black overflow-x-hidden selection:bg-[#E30613] selection:text-white bg-[#050505]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* ═══════════════════════════════════════════
          SECTION 2 — SLICED IMAGE BEHANCE LAYOUT
          ═══════════════════════════════════════════ */}
      <section className="relative w-full z-20 flex flex-col items-center bg-[#050505]">
        {caseStudySlices.length > 0 ? (
          caseStudySlices.map((slice, index) => (
            slice.type === "image" ? (
              <img 
                key={index} 
                src={slice.src} 
                alt={`Case Study Slice ${index + 1}`} 
                className="w-full h-auto block select-none pointer-events-none" 
              />
            ) : (
              <video
                key={index}
                src={slice.src}
                className="w-full h-auto block select-none"
                autoPlay
                loop
                muted
                playsInline
              />
            )
          ))
        ) : (
          <div className="w-full h-[60vh] flex flex-col items-center justify-center text-white/50 border-t border-white/10">
            <p className="text-xl font-medium tracking-wide">Sliced Images Go Here</p>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — NEXT PROJECT FOOTER
          ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 text-center bg-[#050505] border-t border-white/5">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8 block font-black">Next Story</span>
        <Link href={`/project/${project.nextProject?.slug || 'the-joint'}`} className="group inline-block">
          <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white leading-none transition-colors duration-500 group-hover:text-white/70">
            {project.nextProject?.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            )) || 'The Joint'}
          </h2>
        </Link>
      </section>

    </div>
  );
}
