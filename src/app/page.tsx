"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Abstract Gradients (Optional touch for the luxury feel) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/50 via-transparent to-black/80 z-0 mix-blend-overlay" />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Area */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] pt-20 px-6">
        
        {/* Giant Typography Background Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute w-full flex justify-center items-center pointer-events-none z-0"
        >
          <h1 className="text-[14vw] md:text-[12vw] font-black tracking-widest uppercase text-white leading-none whitespace-nowrap">
            PORTFOLIO
          </h1>
        </motion.div>
        
        {/* Floating Center Object / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-20 mt-12 md:mt-24"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
          >
            {/* The primary focal point - using a sleek placeholder or abstract shape */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#111] to-black shadow-inner flex items-center justify-center">
                    <div className="w-[40%] h-[40%] rounded-full bg-black/50 border border-white/10" />
                </div>
            </div>
            
            {/* Pedestal underneath */}
            <div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 w-[240px] md:w-[380px] h-[100px] md:h-[160px] bg-gradient-to-t from-black via-[#111] to-[#1a1a1a] rounded-[100%] blur-[2px] -z-10 shadow-2xl" />
          </motion.div>
        </motion.div>

        {/* Subtitle / Description left aligned */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 md:bottom-24 left-6 md:left-12 max-w-sm hidden md:block"
        >
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Get Your Visual Fix: Where Luxury Meets <br/>
            Digital Craftsmanship in Design.
          </p>
        </motion.div>

        {/* Scroll Indicator Center Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 border border-white/30 rounded-full p-2 z-[999]"
        >
          <motion.div
             animate={{ y: [0, 5, 0] }}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        {/* Social Icons right aligned */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 md:bottom-24 right-6 md:right-12 flex gap-6 text-xs font-bold tracking-widest text-white"
        >
          <span className="cursor-pointer hover:text-white/50 transition-colors">IG</span>
          <span className="cursor-pointer hover:text-white/50 transition-colors">TW</span>
          <span className="cursor-pointer hover:text-white/50 transition-colors">FB</span>
          <span className="cursor-pointer hover:text-white/50 transition-colors">LI</span>
        </motion.div>
      </section>

      {/* Second Section to showcase parallax */}
      <section className="relative z-10 min-h-screen bg-[#050505] flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center grid gap-8">
           <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-wide uppercase"
           >
             The Collection
           </motion.h2>
           <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
           >
             Discover a curated selection of premium design projects that push the boundaries of digital and physical aesthetic appeal. Projects to be loaded here.
           </motion.p>
        </div>
      </section>
    </div>
  );
}
