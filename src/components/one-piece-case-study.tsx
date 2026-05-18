"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { p } from "@/lib/base-path";
import Link from "next/link";

interface OnePieceProps {
  project: Project;
}

type MediaSlice = {
  type: "image" | "video";
  src: string;
};

export default function OnePieceCaseStudy({ project }: OnePieceProps) {
  const caseStudySlices = [
    { type: "image", src: p("/case-study/one-piece/Frame 1 ( For Animation ).png") },
    { type: "image", src: p("/case-study/one-piece/Frame 2 ( For Animation ).png") },
    { 
      type: "embed", 
      html: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/878630983?h=c5c1590e3c&autoplay=1&loop=1&muted=1&background=1" width="100%" height="auto" style="aspect-ratio: 16/9;" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"></iframe>` 
    },
    { type: "image", src: p("/case-study/one-piece/Frame 3 ( For Animation ).png") },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO (RE-CREATED FROM COLLECTION)
          ═══════════════════════════════════════════ */}
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E21E26]"
        style={{ 
          backgroundImage: project.customBg ? `url(${project.customBg})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Top Left: One Piece Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-36 left-12 z-30 w-[40vw] md:w-[25vw] max-w-[350px]"
        >
          <img src={project.titleImage} alt="One Piece Logo" className="w-full h-auto" />
        </motion.div>

        {/* Bottom Left: Adidas Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-12 left-12 z-30 w-[40vw] md:w-[25vw] max-w-[350px]"
        >
          <img src={project.secondaryImage} alt="Adidas Logo" className="w-full h-auto" />
        </motion.div>

        {/* Center Composition: Staggered iPhones */}
        <div className="relative flex items-center justify-center w-full flex-1 min-h-[400px]">
          {/* Left iPhone (3a) */}
          <motion.div
            initial={{ x: 50, y: 100, opacity: 0, rotate: -5 }}
            animate={{ x: "-65%", y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute z-10 w-[45vw] md:w-[28vw] max-w-[400px]"
          >
            <img src={p("/images/one-piece/Free_Iphone_14_Pro_Mockup_3a.png")} alt="iPhone Mockup" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>

          {/* Right iPhone (3) */}
          <motion.div
            initial={{ x: -50, y: 100, opacity: 0, rotate: 5 }}
            animate={{ x: "65%", y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute z-10 w-[45vw] md:w-[28vw] max-w-[400px]"
          >
            <img src={p("/images/one-piece/Free_Iphone_14_Pro_Mockup_3.png")} alt="iPhone Mockup" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>

          {/* Center iPhone (3b) */}
          <motion.div
            initial={{ y: 100, scale: 0.8, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative z-20 w-[80vw] md:w-[52vw] max-w-[850px]"
          >
            <img src={project.centerImage} alt="One Piece App" className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 right-12 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] tracking-widest uppercase text-white/60 rotate-90 mb-8">Scroll</span>
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
          SECTION 2 — CASE STUDY SLICES
          ═══════════════════════════════════════════ */}
      <section className="relative w-full z-20 flex flex-col items-center bg-[#050505]">
        {caseStudySlices.map((slice, index) => (
          slice.type === "image" ? (
            <img 
              key={index} 
              src={slice.src} 
              alt={`Case Study Slice ${index + 1}`} 
              className="w-full h-auto block select-none pointer-events-none" 
            />
          ) : (
            <div 
              key={index} 
              className="w-full aspect-video"
              dangerouslySetInnerHTML={{ __html: slice.html || "" }} 
            />
          )
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — NEXT PROJECT FOOTER
          ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 text-center bg-[#050505] border-t border-white/5">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8 block font-black">Next Story</span>
        <Link href={`/project/${project.nextProject?.slug || 'bitsync'}`} className="group inline-block">
          <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter text-white leading-none transition-colors duration-500 group-hover:text-[#E21E26]">
            {project.nextProject?.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            )) || 'Bitsync'}
          </h2>
        </Link>
      </section>
    </div>
  );
}
