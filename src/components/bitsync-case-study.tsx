"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/project";
import { p } from "@/lib/base-path";

interface BitsyncProps {
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

export default function BitsyncCaseStudy({ project }: BitsyncProps) {
  // Sequential image stack for Bitsync
  const caseStudySlices: MediaSlice[] = [
    { type: "image", src: p("/case-study/bitsync/bitsync-1.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-2.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-3.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-4.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-5.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-6.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-7.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-8.png") },
    { type: "image", src: p("/case-study/bitsync/bitsync-9.png") },
  ];

  return (
    <div
      className="text-black overflow-x-hidden selection:bg-[#E21E26] selection:text-white bg-[#050505]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
        style={{
          backgroundImage: project.customBg ? `url(${project.customBg})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Background Ghost Text */}
        <motion.div
          className="absolute whitespace-nowrap z-0 select-none pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[20vw] font-black uppercase text-transparent tracking-tighter"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
            {project.bgText}
          </h2>
        </motion.div>

        {/* Center Mockup */}
        {project.centerImage && (
          <motion.div
            className="absolute z-10 w-[280px] md:w-[500px] aspect-square flex items-center justify-center top-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: "-50%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={project.centerImage} alt={project.title} className="w-full h-full object-contain" />
          </motion.div>
        )}

        {/* Title/Logo positioned at bottom */}
        <div className="absolute bottom-24 z-20 text-center pointer-events-none flex flex-col items-center px-12">
          {project.titleImage ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[60vw] md:w-[35vw] max-w-[500px]"
            >
              <img src={project.titleImage} alt={project.title} className="w-full h-auto" />
            </motion.div>
          ) : (
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-white leading-[0.85]"
            >
              {project.title}
            </motion.h1>
          )}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] tracking-widest uppercase">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
              <motion.div
                className="absolute top-0 w-full h-1/2 bg-white"
                animate={{ y: [0, 48] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — IMAGE STACK
          ═══════════════════════════════════════════ */}
      <section className="relative w-full z-20 flex flex-col items-center bg-[#050505]">
        {caseStudySlices.map((slice, index) => (
          <img 
            key={index} 
            src={slice.src} 
            alt={`Bitsync Case Study Slice ${index + 1}`} 
            className="w-full h-auto block select-none" 
          />
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — NEXT PROJECT FOOTER
          ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 text-center bg-[#050505] border-t border-white/5">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8 block font-black">Next Story</span>
        <Link href="/project/haus-of-taste" className="group inline-block">
          <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white leading-none transition-colors duration-500 group-hover:text-[#FA0000]">
            Haus Of<br />Taste
          </h2>
        </Link>
      </section>

    </div>
  );
}
