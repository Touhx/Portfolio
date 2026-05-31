"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { p } from "@/lib/base-path";

export default function CategoryClient({ projects, categorySlug }: { projects: any[], categorySlug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const count = projects.length;
  // If count is 2, width is 200vw, we slide by -50% to see last
  const slideDistance = count > 1 ? `-${((count - 1) / count) * 100}%` : "0%";

  return (
    <div className="bg-[#050505] min-h-screen">
      
      {/* Back button fixed overlay */}
      <div className="fixed top-8 left-6 md:left-12 z-50 mix-blend-difference mt-16 md:mt-20">
        <Link href="/collection" className="text-white hover:text-white/70 transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase border border-white/20 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
          <ArrowLeft className="w-3 h-3" /> Back
        </Link>
      </div>

      {/* ── Mobile: vertical project stack ── */}
      <div className="md:hidden flex flex-col pt-28">
        {projects.map((project, i) => (
          <Link
            href={`/project/${project.slug}`}
            key={project.id}
            className={`relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-6 py-20 group ${
              project.slug === "shell"
                ? "bg-[#FFD500]"
                : project.slug === "one-piece"
                  ? "bg-[#E21E26]"
                  : ""
            }`}
            style={{
              backgroundImage:
                project.customBg && project.slug !== "shell"
                  ? `url(${project.customBg})`
                  : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {project.titleImage ? (
              <img
                src={project.titleImage}
                alt={project.title}
                className="relative z-20 w-[70vw] max-w-[320px] h-auto mb-6"
              />
            ) : (
              <h2 className="relative z-20 text-4xl font-black uppercase tracking-tighter text-white text-center leading-[0.85]">
                {project.title.split(" ").map((word: string, idx: number) => (
                  <span key={idx} className="block">{word}</span>
                ))}
              </h2>
            )}

            {project.centerImage && (
              <img
                src={project.centerImage}
                alt={project.title}
                className="relative z-10 w-[55vw] max-w-[280px] h-auto object-contain mt-4"
              />
            )}

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 text-xs font-medium tracking-widest text-white">
              <span>0{i + 1}</span>
              <div className="w-12 h-[1px] bg-white/40" />
              <span>0{count}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Desktop: horizontal scroll-on-vertical-scroll (unchanged) ── */}
      <div ref={containerRef} className="hidden md:block relative" style={{ height: `${count * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          <motion.div 
             style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", slideDistance]), width: `${count * 100}vw` }} 
             className="flex h-full items-center"
          >
            {projects.map((project, i) => (
              <Link 
                href={`/project/${project.slug}`} 
                key={project.id} 
                className={`relative w-screen h-full overflow-hidden shrink-0 group cursor-pointer ${
                  project.slug === 'shell' || project.slug === 'essops' || project.slug === 'hi-q' || project.slug === 'bubbles' || project.slug === 'one-piece' || project.slug === 'burger-restaurant' || project.slug === 'the-joint'
                    ? 'flex flex-col items-center justify-between py-24 md:py-32' 
                    : 'flex items-center justify-center'
                } ${project.slug === 'shell' ? 'bg-[#FFD500]' : project.slug === 'one-piece' ? 'bg-[#E21E26]' : ''} `}
                style={{ 
                  backgroundImage: project.customBg && project.slug !== 'shell' ? `url(${project.customBg})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                
                {project.slug === 'shell' ? (
                  <>
                    {/* Title Image - The Shell Title (Top) */}
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative z-30 w-[51vw] md:w-[30vw] max-w-[425px]"
                    >
                      <img src={project.titleImage} alt="Shell Case Study" className="w-full h-auto" />
                    </motion.div>

                    {/* Center Composition: Large Logo behind the Car */}
                    <div className="relative flex items-center justify-center w-full flex-1 min-h-[400px]">
                      {/* Large Logo */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative z-10 w-[68vw] md:w-[38vw] max-w-[595px] pointer-events-none"
                      >
                        <img src={p("/images/shell/Shell logo.png")} alt="Shell Logo" className="w-full h-auto" />
                      </motion.div>

                      {/* BMW Car */}
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="absolute z-20 w-[72vw] md:w-[55vw] max-w-[850px] mt-40 md:mt-56"
                      >
                        <img src={project.centerImage} alt="BMW" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />
                      </motion.div>
                    </div>
                  </>
                ) : project.slug === 'essops' ? (
                  <>
                    {/* Title Image - Essops Logo & Text (Top) */}
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative z-30 w-[50vw] md:w-[35vw] max-w-[500px]"
                    >
                      <img src={project.titleImage} alt="Essops Case Study" className="w-full h-auto" />
                    </motion.div>

                    {/* Center Composition: Furniture */}
                    <div className="relative flex items-end justify-center w-full flex-1 min-h-[400px]">
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative z-20 w-[85vw] md:w-[65vw] max-w-[1000px] mb-[-4rem] md:mb-[-6rem]"
                      >
                        <img src={project.centerImage} alt="Essops Furniture" className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]" />
                      </motion.div>
                    </div>
                  </>
                ) : project.slug === 'hi-q' ? (
                  <>
                    {/* Title Image - Hi-Q Logo (Top) */}
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative z-30 w-[35vw] md:w-[20vw] max-w-[300px]"
                    >
                      <img src={project.titleImage} alt="Hi-Q Case Study" className="w-full h-auto" />
                    </motion.div>

                    {/* Center Composition: Shorty's Logo & Wheels */}
                    <div className="relative flex flex-col items-center justify-center w-full flex-1 min-h-[400px] mt-24 md:mt-32">
                      {/* Shorty's Logo */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative z-20 w-[70vw] md:w-[45vw] max-w-[700px] mb-[-12%] md:mb-[-18%]"
                      >
                        <img src={project.secondaryImage} alt="Shorty's Tyres" className="w-full h-auto" />
                      </motion.div>

                      {/* Wheels */}
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="relative z-10 w-[90vw] md:w-[70vw] max-w-[1100px]"
                      >
                        <img src={project.centerImage} alt="Hi-Q Wheels" className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]" />
                      </motion.div>
                    </div>
                  </>
                ) : project.slug === 'one-piece' ? (
                  <>
                    {/* Top Left: One Piece Logo */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute top-36 left-12 z-30 w-[40vw] md:w-[25vw] max-w-[350px]"
                    >
                      <img src={project.titleImage} alt="One Piece Logo" className="w-full h-auto" />
                    </motion.div>

                    {/* Bottom Left: Adidas Logo */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
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
                        whileInView={{ x: "-65%", y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="absolute z-10 w-[45vw] md:w-[28vw] max-w-[400px]"
                      >
                        <img src={p("/images/one-piece/Free_Iphone_14_Pro_Mockup_3a.png")} alt="iPhone Mockup" className="w-full h-auto drop-shadow-2xl" />
                      </motion.div>

                      {/* Right iPhone (3) */}
                      <motion.div
                        initial={{ x: -50, y: 100, opacity: 0, rotate: 5 }}
                        whileInView={{ x: "65%", y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className="absolute z-10 w-[45vw] md:w-[28vw] max-w-[400px]"
                      >
                        <img src={p("/images/one-piece/Free_Iphone_14_Pro_Mockup_3.png")} alt="iPhone Mockup" className="w-full h-auto drop-shadow-2xl" />
                      </motion.div>

                      {/* Center iPhone (3b) */}
                      <motion.div
                        initial={{ y: 100, scale: 0.8, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative z-20 w-[80vw] md:w-[52vw] max-w-[850px]"
                      >
                        <img src={project.centerImage} alt="One Piece App" className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
                      </motion.div>
                    </div>
                  </>
                ) : project.slug === 'bubbles' ? (
                  <>
                    {/* Bubbles Composition: Logo + Case Study Text */}
                    <div className="relative flex flex-col items-center justify-center w-full flex-1">
                      <div className="relative flex flex-col items-end">
                        {/* Bubbles Logo + plastics text */}
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="relative z-20 w-[80vw] md:w-[50vw] max-w-[800px]"
                        >
                          <img src={project.titleImage} alt="Bubbles Logo" className="w-full h-auto" />
                        </motion.div>

                        {/* Case Study Text (Title.png) */}
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                          className="relative z-30 w-[40vw] md:w-[25vw] max-w-[350px] mt-2 md:mt-4 mr-[5%]"
                        >
                          <img src={project.secondaryImage} alt="Case Study" className="w-full h-auto" />
                        </motion.div>
                      </div>
                    </div>
                  </>
                ) : project.slug === 'the-joint' ? (
                  <>
                    {/* Header Image (Top) */}
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute top-12 z-30 w-[80vw] md:w-[60vw] max-w-[800px] flex justify-center"
                    >
                      <img src={project.titleImage} alt="The Joint Header" className="w-full h-auto" />
                    </motion.div>

                    {/* Foreground Composition (Text + Pasta) */}
                    <div className="relative flex items-center justify-center w-full flex-1 min-h-[400px]">
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative z-20 w-[95vw] md:w-[85vw] max-w-[1400px] mt-24"
                      >
                        <img src={project.centerImage} alt="The Joint Foreground" className="w-full h-auto drop-shadow-2xl" />
                      </motion.div>
                    </div>
                  </>
                ) : project.slug === 'burger-restaurant' ? (
                  <>
                    <div className="relative flex items-center justify-center w-full flex-1 min-h-[400px]">
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-20 w-[90vw] md:w-[75vw] max-w-[1200px]"
                      >
                        <img src={project.titleImage} alt="Burger Restaurant" className="w-full h-auto drop-shadow-2xl" />
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    {!project.customBg && <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-700 z-50 pointer-events-none" />}
                    
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

                    {/* Default Left/Right Devices - Hidden if centerImage is present */}
                    {!project.centerImage && project.slug !== 'restaurant' && (
                      <>
                        {/* Left Device (iPhone Mockup) */}
                        <motion.div 
                          className={`absolute z-10 w-[200px] md:w-[320px] aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-[#222] bg-black shadow-2xl overflow-hidden ${project.imgLeftTilted ? '-rotate-12 -translate-x-32 md:-translate-x-64' : 'rotate-12 translate-x-32 md:translate-x-64'} top-1/2 -translate-y-1/2 flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}
                          initial={{ y: 100, opacity: 0 }}
                          whileInView={{ y: "-50%", opacity: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] bg-[#222] rounded-b-2xl z-20" />
                          <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#050505] flex flex-col pointer-events-none relative rounded-[2rem] overflow-hidden">
                              <div className="w-full flex-1 flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
                                <h4 className="text-white/80 uppercase tracking-widest font-black text-2xl rotate-90 z-20 mix-blend-overlay">{project.category}</h4>
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
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] bg-[#222] rounded-b-2xl z-20" />
                          <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-black flex flex-col pointer-events-none relative rounded-[2rem] overflow-hidden">
                              <div className="w-full flex-1 flex items-center justify-center relative bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40">
                                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
                                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center z-20 backdrop-blur-sm">
                                    <span className="text-white text-xs font-bold tracking-widest">VIEW</span>
                                  </div>
                              </div>
                          </div>
                        </motion.div>
                      </>
                    )}

                    {/* Centered Image (Override) */}
                    {project.centerImage && (
                      <motion.div 
                        className="absolute z-10 w-[322px] md:w-[575px] aspect-square flex items-center justify-center top-1/2 -translate-y-1/2 pointer-events-none"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: "-50%", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        <img src={project.centerImage} alt={project.title} className="w-full h-full object-contain" />
                      </motion.div>
                    )}

                    <div className={`${project.titlePosition === 'bottom' ? 'absolute bottom-24' : 'relative'} z-20 text-center ${project.titleImage ? '' : 'mix-blend-difference'} pointer-events-none flex flex-col items-center px-12`}>
                      {project.titleImage ? (
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          className="w-[60vw] md:w-[40vw] max-w-[600px]"
                        >
                          <img src={project.titleImage} alt={project.title} className="w-full h-auto" />
                        </motion.div>
                      ) : (
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
                      )}
                    </div>
                  </>
                )}

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
                  <span className="text-white">0{count}</span>
                </div>

              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
