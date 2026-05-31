"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { p } from "@/lib/base-path";

const categories = [
  {
    id: "01",
    slug: "ux-ui-design",
    title: "UX/UI DESIGN",
    desc: "Digital Experiences",
    bgText: "UX / UI",
    imgLeftTilted: true,
  },
  {
    id: "02",
    slug: "brand-design",
    title: "BRAND DESIGN",
    desc: "Brand Identity",
    bgText: "IDENTITY",
    imgLeftTilted: false,
  },
  {
    id: "03",
    slug: "web-design",
    title: "WEB DESIGN",
    desc: "Digital Development",
    bgText: "WEB",
    imgLeftTilted: true,
  }
];

export default function CollectionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // 3 categories = 300vw wide, move -200vw to show third
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <div className="bg-[#050505] min-h-screen">
      
      {/* Category Indicators (Fixed) — desktop only */}
      <div className="hidden md:flex fixed top-32 left-6 md:left-12 z-40 gap-4 mix-blend-difference pb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="uppercase text-[10px] tracking-widest text-white font-bold">Categories</span>
        </div>
      </div>

      {/* ── Mobile: vertical category stack ── */}
      <div className="md:hidden flex flex-col pt-24">
        {categories.map((cat) => (
          <Link
            href={`/collection/${cat.slug}`}
            key={cat.id}
            className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-6 py-20 group"
          >
            <div className="absolute whitespace-nowrap z-0 select-none pointer-events-none">
              <h2
                className="text-[28vw] font-black uppercase text-transparent tracking-tighter"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
              >
                {cat.bgText}
              </h2>
            </div>

            <div className="relative z-20 text-center flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                {cat.title.split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <div className="mt-6 inline-flex items-center gap-3 bg-white text-black px-6 py-2 rounded-full">
                <span className="text-xs font-bold tracking-widest uppercase">{cat.desc}</span>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 text-xs font-medium tracking-widest text-white">
              <span>{cat.id}</span>
              <div className="w-12 h-[1px] bg-white/40" />
              <span>0{categories.length}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Desktop: horizontal scroll-on-vertical-scroll (unchanged) ── */}
      <div ref={containerRef} className="hidden md:block h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          {/* Floating Background Mockups */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div 
                  style={{ 
                    y: useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]),
                    rotate: -10
                  }}
                  className="absolute -left-12 top-[10%] w-[35vw] h-[70vh] opacity-50"
                >
                  <img src={p("/mockups/iphone_1.png")} alt="" className="object-contain w-full h-full" />
                </motion.div>
                
                <motion.div 
                  style={{ 
                    y: useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]),
                    rotate: 10
                  }}
                  className="absolute -right-12 bottom-[10%] w-[35vw] h-[70vh] opacity-50"
                >
                  <img src={p("/mockups/iphone_2.png")} alt="" className="object-contain w-full h-full" />
                </motion.div>
          </div>

          <motion.div style={{ x }} className="flex w-[300vw] h-full items-center">
            {categories.map((cat, idx) => (
              <Link 
                href={`/collection/${cat.slug}`} 
                key={cat.id} 
                className="relative w-screen h-full flex items-center justify-center overflow-hidden shrink-0 group cursor-pointer"
              >
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-700 z-50 pointer-events-none" />
                
                <motion.div 
                  className="absolute whitespace-nowrap z-0 select-none pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-[20vw] font-black uppercase text-transparent tracking-tighter" 
                      style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                    {cat.bgText}
                  </h2>
                </motion.div>

                {/* Center Title */}
                <div className="relative z-20 text-center mix-blend-difference pointer-events-none flex flex-col items-center">
                  <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-white leading-[0.85] group-hover:tracking-normal transition-all duration-700"
                  >
                    {cat.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </motion.h1>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 inline-flex items-center gap-3 bg-white text-black px-6 py-2 rounded-full"
                  >
                    <span className="text-xs font-bold tracking-widest uppercase">{cat.desc}</span>
                  </motion.div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 text-xs font-medium tracking-widest text-white mix-blend-difference pointer-events-none">
                  <span>{cat.id}</span>
                  <div className="w-12 h-[1px] bg-white text-transparent overflow-hidden">
                    <motion.div 
                      className="h-full bg-black w-full" 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-white">0{categories.length}</span>
                </div>

              </Link>
            ))}
          </motion.div>

          <div className="absolute bottom-12 right-6 md:right-12 z-40 mix-blend-difference pointer-events-none">
            <span className="uppercase text-[10px] tracking-widest text-white font-bold">Select Category</span>
          </div>

        </div>
      </div>
    </div>
  );
}
