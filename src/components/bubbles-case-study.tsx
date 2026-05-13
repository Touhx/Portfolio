"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/project";
import { p } from "@/lib/base-path";

interface BubblesProps {
  project: Project;
}

type MediaSlice = {
  type: "image" | "video";
  src: string;
};

export default function BubblesCaseStudy({ project }: BubblesProps) {
  // Array of image slices for your case study layout.
  const caseStudySlices: MediaSlice[] = [
    { type: "image", src: p("/images/bubbles/Bubbles.png") },
    { type: "image", src: p("/images/bubbles/Bubbles 2.png") },
  ];

  return (
    <div
      className="text-black overflow-x-hidden selection:bg-[#E30613] selection:text-white bg-[#FFFFFF]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* ═══════════════════════════════════════════
          SECTION 2 — SLICED IMAGE BEHANCE LAYOUT
          ═══════════════════════════════════════════ */}
      <section className="relative w-full z-20 flex flex-col items-center bg-white">
        {caseStudySlices.length > 0 ? (
          caseStudySlices.map((slice, index) => (
            slice.type === "image" ? (
              <img 
                key={index} 
                src={slice.src} 
                alt={`Case Study Slice ${index + 1}`} 
                className="w-full h-auto block select-none" 
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
          <div className="w-full h-[60vh] flex flex-col items-center justify-center text-black/50 border-t border-black/10">
            <p className="text-xl font-medium tracking-wide">Sliced Images Go Here</p>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — NEXT PROJECT FOOTER
          ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 text-center bg-white border-t border-black/5">
        <span className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-8 block font-black">Next Story</span>
        <Link href={`/project/${project.nextProject?.slug || 'haus-of-taste'}`} className="group inline-block">
          <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-black leading-none transition-colors duration-500 group-hover:text-black/70">
            {project.nextProject?.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            )) || 'Haus Of Taste'}
          </h2>
        </Link>
      </section>

    </div>
  );
}
