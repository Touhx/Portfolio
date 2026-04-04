"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Layers } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-study-registry";
import { Project } from "@/types/project";

/* ─── page-enter animation ─── */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function ProjectClient({ project }: { project: Project }) {
  /* ── Case-study branch: registry lookup ── */
  const CaseStudy = CASE_STUDIES[project.slug];
  if (CaseStudy) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CaseStudy project={project} />
        </motion.div>
      </AnimatePresence>
    );
  }

  /* ── Default hero branch (no dedicated case study yet) ── */
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.slug}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-screen relative flex items-center justify-center transition-colors duration-1000 overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >

        {/* Background ghost text */}
        <motion.div
          className="absolute whitespace-nowrap z-0 select-none pointer-events-none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2
            className="text-[25vw] font-black uppercase text-transparent tracking-tighter"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
          >
            {project.bgText}
          </h2>
        </motion.div>

        {/* Floating decorative device cards */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <motion.div
            className="absolute top-[20%] right-[15%] w-64 h-80 bg-black/60 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md rotate-12 flex flex-col items-center p-4 mix-blend-hard-light"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: 1, rotate: [12, 14, 12] }}
            transition={{
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
              opacity: { duration: 1 },
            }}
          >
            <div className="w-12 h-2 bg-white/10 rounded-full mb-4" />
            <div className="w-full flex-1 bg-[#111] rounded-md border border-white/5 flex items-center justify-center">
              <span className="text-white/20 text-xs tracking-widest uppercase">
                {project.category}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[15%] w-80 h-56 bg-black/60 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md -rotate-6 flex items-center p-4 mix-blend-hard-light"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: [0, 20, 0], opacity: 1, rotate: [-6, -4, -6] }}
            transition={{
              y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 },
              rotate: { repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 },
              opacity: { duration: 1, delay: 0.2 },
            }}
          >
            <div className="w-1/3 h-full bg-[#111] rounded-md border border-white/5 mr-4 flex-col justify-center gap-2 p-2 hidden sm:flex">
              <div className="w-full h-8 rounded-sm bg-white/5" />
              <div className="w-full h-8 rounded-sm bg-white/5" />
            </div>
            <div className="flex-1 space-y-3 flex flex-col justify-center">
              <div className="h-2 w-full bg-white/10 rounded-full" />
              <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              <div className="h-2 w-1/2 bg-white/10 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Project title */}
        <div className="relative z-20 text-center mix-blend-difference px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-[10vw] font-black uppercase tracking-tighter text-white leading-[0.85]"
          >
            {project.title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Honest bottom CTA — only when there IS no case study */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 mix-blend-difference text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/collection"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full group-hover:bg-white/10 transition-colors">
              <Layers className="w-3 h-3" />
              <span>View Collection</span>
            </div>
            <span className="text-[9px] tracking-widest uppercase opacity-40">
              Full case study coming soon
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
