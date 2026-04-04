"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HausOfTasteCaseStudy from "@/components/haus-of-taste-case-study";

export default function ProjectClient({ project }: { project: any }) {
  if (project.slug === "stat-metrix") {
    return <HausOfTasteCaseStudy project={project} />;
  }

  return (
    <div 
      className="min-h-[100vh] mt-24 relative overflow-hidden flex items-center justify-center transition-colors duration-1000"
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="absolute top-8 left-8 z-50 mix-blend-difference">
        <Link href="/collection" className="text-white hover:text-white/80 transition-colors flex items-center gap-2 text-xs tracking-widest uppercase border border-white/20 px-6 py-2 rounded-full">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>
      </div>

      <motion.div 
        className="absolute whitespace-nowrap z-0 select-none pointer-events-none"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-[25vw] font-black uppercase text-transparent tracking-tighter" 
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}>
          {project.bgText}
        </h2>
      </motion.div>

      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <motion.div 
           className="absolute top-[20%] right-[15%] w-64 h-80 bg-black/60 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md rotate-12 flex flex-col items-center p-4 mix-blend-hard-light"
           initial={{ y: 50, opacity: 0, rotate: 0 }}
           animate={{ y: [0, -20, 0], opacity: 1, rotate: [12, 14, 12] }}
           transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut" }, rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }, opacity: { duration: 1 } }}
        >
          <div className="w-12 h-2 bg-white/10 rounded-full mb-4" />
          <div className="w-full flex-1 bg-[#111] rounded-md border border-white/5 flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest uppercase">{project.category} Device</span>
          </div>
        </motion.div>
        
        <motion.div 
           className="absolute bottom-[20%] left-[15%] w-80 h-56 bg-black/60 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md -rotate-6 flex items-center p-4 mix-blend-hard-light"
           initial={{ y: -50, opacity: 0, rotate: 0 }}
           animate={{ y: [0, 20, 0], opacity: 1, rotate: [-6, -4, -6] }}
           transition={{ y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }, rotate: { repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }, opacity: { duration: 1, delay: 0.2 } }}
        >
           <div className="w-1/3 h-full bg-[#111] rounded-md border border-white/5 mr-4 flex flex-col justify-center gap-2 p-2 hidden sm:flex">
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

      <div className="relative z-20 text-center mix-blend-difference px-6">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-[10vw] font-black uppercase tracking-tighter text-white leading-[0.85]"
        >
          {project.title.split(' ').map((word: string, i: number) => (
            <span key={i} className="block">{word}</span>
          ))}
        </motion.h1>
      </div>
      
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 mix-blend-difference text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
         <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] tracking-widest uppercase">Scroll to view details</span>
            <div className="w-[1px] h-16 bg-white/30 overflow-hidden relative">
               <motion.div 
                 className="absolute top-0 w-full h-1/2 bg-white"
                 animate={{ y: [0, 64] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               />
            </div>
         </div>
      </motion.div>
    </div>
  );
}
