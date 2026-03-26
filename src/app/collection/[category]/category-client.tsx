"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryClient({ projects, categorySlug }: { projects: any[], categorySlug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const count = projects.length;
  // If count is 2, width is 200vw, we slide by -50% to see last
  const slideDistance = count > 1 ? `-${((count - 1) / count) * 100}%` : "0%";

  return (
    <div className="bg-[#050505] min-h-screen">
      
      {/* Back button fixed overlay */}
      <div className="fixed top-8 left-6 md:left-12 z-50 mix-blend-difference mt-20">
        <Link href="/collection" className="text-white hover:text-white/50 transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase border border-white/20 px-4 py-2 rounded-full">
          <ArrowLeft className="w-3 h-3" /> Back
        </Link>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${count * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          <motion.div 
             style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", slideDistance]), width: `${count * 100}vw` }} 
             className="flex h-full items-center"
          >
            {projects.map((project, i) => (
              <Link 
                href={`/project/${project.slug}`} 
                key={project.id} 
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
                    {project.bgText}
                  </h2>
                </motion.div>

                {/* Left Device (iPhone Mockup) */}
                <motion.div 
                  className={`absolute z-10 w-[200px] md:w-[320px] aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-[#222] bg-black shadow-2xl overflow-hidden ${project.imgLeftTilted ? '-rotate-12 -translate-x-32 md:-translate-x-64' : 'rotate-12 translate-x-32 md:translate-x-64'} top-1/2 -translate-y-1/2 flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: "-50%", opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* The Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] bg-[#222] rounded-b-2xl z-20" />
                    
                    {/* Inner Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#050505] flex flex-col pointer-events-none relative rounded-[2rem] overflow-hidden">
                        <div className="w-full flex-1 flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40">
                           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
                           <h4 className="text-white/40 uppercase tracking-widest font-black text-2xl rotate-90 z-20 mix-blend-overlay">{project.category}</h4>
                        </div>
                    </div>
                </motion.div>
                
                {/* Right Device (iPhone Mockup) */}
                <motion.div 
                   className={`absolute z-10 w-[200px] md:w-[320px] aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-[#222] bg-black shadow-2xl overflow-hidden ${project.imgLeftTilted ? 'rotate-12 translate-x-32 md:translate-x-64' : '-rotate-12 -translate-x-32 md:-translate-x-64'} top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}
                   initial={{ y: -100, opacity: 0 }}
                   whileInView={{ y: "-50%", opacity: 1 }}
                   transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    {/* The Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] bg-[#222] rounded-b-2xl z-20" />
                    
                    {/* Inner Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-black flex flex-col pointer-events-none relative rounded-[2rem] overflow-hidden">
                        <div className="w-full flex-1 flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center z-20 backdrop-blur-sm">
                               <span className="text-white/50 text-xs font-bold tracking-widest">VIEW</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="relative z-20 text-center mix-blend-difference pointer-events-none flex flex-col items-center px-12">
                  <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-white leading-[0.85] group-hover:tracking-normal transition-all duration-700"
                  >
                    {project.title.split(' ').map((word: string, i: number) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </motion.h1>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 text-xs font-medium tracking-widest text-white mix-blend-difference pointer-events-none">
                  <span>0{i + 1}</span>
                  <div className="w-12 h-[1px] bg-white text-transparent overflow-hidden">
                    <motion.div 
                      className="h-full bg-black w-full" 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>
                  <span className="text-gray-500">0{count}</span>
                </div>

              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
