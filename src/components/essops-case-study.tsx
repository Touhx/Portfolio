"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/project";
import { p } from "@/lib/base-path";

interface EssopsProps {
  project: Project;
}

type MediaSlice = {
  type: "image" | "video";
  src: string;
};

/* ─── animation helpers ─── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function EssopsCaseStudy({ project }: EssopsProps) {
  // Array of image slices for your case study layout.
  const caseStudySlices: MediaSlice[] = [
    { type: "image", src: p("/images/essops/Essops 1.png") },
    { type: "image", src: p("/images/essops/Essops 2.png") },
    { type: "image", src: p("/images/essops/Essops 3.png") },
  ];

  return (
    <div
      className="text-black overflow-x-hidden selection:bg-[#DD1D21] selection:text-white bg-[#050505]"
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
        <Link href={`/project/${project.nextProject?.slug || 'hi-q'}`} className="group inline-block">
          <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white leading-none transition-colors duration-500 group-hover:text-white/70">
            {project.nextProject?.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            )) || 'Hi-Q'}
          </h2>
        </Link>
      </section>

    </div>
  );
}
