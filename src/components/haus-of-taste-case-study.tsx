"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HausOfTasteProps {
  project: any;
}

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

/* ─── brand colours (matched from Figma) ─── */
const RED      = "#E8380D"; // exact Figma red-orange
const CREAM    = "#F0EBE3"; // Figma off-white/cream background
const DARK_NAV = "#1A1E26"; // Figma dark navy for headings & text

export default function HausOfTasteCaseStudy({ project }: HausOfTasteProps) {
  const screens = Array.from({ length: 11 }, (_, i) => `/images/iPhone 17 - ${i + 1}.png`);

  return (
    <div
      className="text-black overflow-x-hidden selection:bg-[#E8380D] selection:text-white"
      style={{ fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif" }}
    >

      {/* ═══════════════════════════════════════════
          SECTION 1 — FIGMA HERO: Cream bg + giant heading
          ═══════════════════════════════════════════ */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundColor: CREAM,
          backgroundImage: `radial-gradient(circle, #c5b9ae 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      >
        {/* ── Minimal top nav ── */}
        <nav className="flex items-center justify-between px-8 md:px-16 py-7">
          <Link
            href="/collection"
            className="flex items-center gap-2 text-[13px] font-semibold tracking-wide"
            style={{ color: DARK_NAV }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Vision Titans Pty</span>
          </Link>
          <span className="text-[13px] font-semibold" style={{ color: DARK_NAV }}>
            <span className="text-gray-400 mr-1">Date:</span> 2026
          </span>
        </nav>

        {/* ── Hero content ── */}
        <div className="max-w-6xl mx-auto px-8 md:px-16 pt-10 pb-24 md:pb-36">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-[820px]"
          >
            {/* Giant heading */}
            <motion.h1
              variants={fadeUp}
              className="leading-[0.9] tracking-tight mb-10"
              style={{
                fontSize: "clamp(72px, 11vw, 148px)",
                fontWeight: 900,
                color: DARK_NAV,
                fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif",
              }}
            >
              Designed<br />for Dates.
            </motion.h1>

            {/* Subtitle row */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "#5a5a5a" }}
            >
              <span className="font-bold" style={{ color: RED }}>Haus of Taste</span>{" "}
              is a mobile application designed to turn emotional intent into curated dining experiences.
            </motion.p>
          </motion.div>

          {/* Client / Date metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-16 mt-16 pt-8 border-t"
            style={{ borderColor: "#d5cdc4" }}
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#999" }}>Client</p>
              <p className="text-sm font-semibold" style={{ color: DARK_NAV }}>Vision Titans Pty</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#999" }}>Date</p>
              <p className="text-sm font-semibold" style={{ color: DARK_NAV }}>2026</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#999" }}>Role</p>
              <p className="text-sm font-semibold" style={{ color: DARK_NAV }}>UX/UI Designer & Researcher</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — RED card: "Designed for the Moment"
          ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: RED }}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: giant white heading */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2
                className="leading-[0.88] tracking-tight text-white"
                style={{
                  fontSize: "clamp(60px, 9vw, 120px)",
                  fontWeight: 900,
                  fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                Designed<br />for the<br />Moment.
              </h2>
            </motion.div>

            {/* Right: phone mockup */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src="/images/iPhone 17 - 7.png"
                alt="Haus of Taste app screen"
                className="w-full max-w-[280px] md:max-w-[340px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] rounded-[2.5rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — RED: "DESIGNED FOR THE MOMENT"
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: RED }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: typography */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Designed<br />
                for the<br />
                Moment.
              </h2>
            </motion.div>

            {/* Right: phone + food composition */}
            <div className="md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
              <motion.img
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/images/iPhone 17 - 7.png"
                alt="App restaurant screen"
                className="absolute z-20 w-44 md:w-56 left-[10%] top-[5%] drop-shadow-2xl rounded-[2rem]"
              />
              <img
                src="/case-study/delicious-breakfast-meal-composition-with-copy-space_23-2148878843.jpg"
                alt="Food"
                className="absolute z-10 w-48 md:w-64 right-[5%] top-[10%] rounded-3xl object-cover h-56 md:h-72 shadow-2xl"
              />
              <img
                src="/case-study/flat-lay-composition-mexican-food-with-copyspace_23-2148140316.jpg"
                alt="Food"
                className="absolute z-0 w-32 md:w-44 right-[30%] bottom-[5%] rounded-2xl object-cover h-36 md:h-48 shadow-xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — WHITE: "YOUR MOOD / JUST BECAME A SEARCH ENGINE"
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left: text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="md:w-1/2"
            >
              <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight mb-2" style={{ color: RED }}>
                Your Mood
              </motion.h2>
              <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900">
                Just Became a Search Engine
              </motion.h3>
              <motion.p variants={fadeUp} className="text-sm text-gray-500 leading-relaxed mb-6">
                Haus of Taste is a mobile application designed to uncover "hidden gem" restaurants in major South African cities (Johannesburg, Cape Town, Durban, etc.). The primary product use context centers around dating enthusiasts who want to experience the best, most unique culinary scenes in their cities more to offer.
              </motion.p>
            </motion.div>

            {/* Right: phone + food */}
            <div className="md:w-1/2 relative flex justify-center items-center">
              <motion.img
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="/images/iPhone 17 - 4.png"
                alt="Mood filter screen"
                className="w-48 md:w-56 z-20 drop-shadow-2xl rounded-[2rem]"
              />
              <img
                src="/case-study/spring-bright-soup-with-meatballs-vegetables-copy-space_127032-2938.jpg"
                alt="Food"
                className="absolute right-0 top-0 w-36 h-44 object-cover rounded-2xl shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — WHITE: PROBLEM STATEMENT / "THE ELEPHANT IN THE ROOM"
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAFAFA] py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left: phone mockups */}
            <div className="md:w-1/2 relative flex justify-center items-center h-[420px]">
              <motion.img
                initial={{ rotate: -8, y: 30, opacity: 0 }}
                whileInView={{ rotate: -8, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="/case-study/Iphone blk1.png"
                alt="Phone mockup"
                className="absolute left-[5%] w-44 md:w-52 drop-shadow-2xl z-10"
              />
              <motion.img
                initial={{ rotate: 5, y: 30, opacity: 0 }}
                whileInView={{ rotate: 5, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                src="/case-study/Iphone blk2.png"
                alt="Phone mockup"
                className="absolute right-[5%] w-44 md:w-52 drop-shadow-2xl z-20"
              />
            </div>

            {/* Right: problem text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="md:w-1/2"
            >
              <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: RED }}>
                Problem Statement
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-6">
                &ldquo;The Elephant<br />in the Room&rdquo;
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm text-gray-500 leading-relaxed">
                South African dating enthusiasts face cognitive overload when trying to discover and book unique restaurants across fragmented platforms. Current platforms are generic, requiring users to cross-reference multiple sites, ultimately ruining the novelty and excitement of planning an intimate evening.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — RED: "THE SOLUTION"
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-36 px-6" style={{ background: RED }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tight mb-20 text-center"
          >
            The<br />Solution
          </motion.h2>

          {/* Phone mockups composition */}
          <div className="relative flex justify-center items-end h-[500px] md:h-[600px]">
            <motion.img
              initial={{ y: 80, rotate: -12, opacity: 0 }}
              whileInView={{ y: 0, rotate: -12, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="/case-study/Iphone sc resturant.png"
              className="absolute left-[5%] md:left-[15%] bottom-0 w-40 md:w-60 drop-shadow-2xl z-10 rounded-2xl"
              alt="Restaurant screen"
            />
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              src="/case-study/Iphone sc resturant2.png"
              className="z-30 w-48 md:w-72 drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-2xl"
              alt="Restaurant detail"
            />
            <motion.img
              initial={{ y: 80, rotate: 12, opacity: 0 }}
              whileInView={{ y: 0, rotate: 12, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="/case-study/Iphone sc resturant3.png"
              className="absolute right-[5%] md:right-[15%] bottom-0 w-40 md:w-60 drop-shadow-2xl z-10 rounded-2xl"
              alt="Restaurant booking"
            />

            {/* Floating food emoji decorations */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 right-[25%] text-5xl z-40 drop-shadow-lg select-none"
            >🍔</motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 left-[20%] text-4xl z-40 drop-shadow-lg select-none"
            >🥤</motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[40%] right-[10%] text-4xl z-40 drop-shadow-lg select-none"
            >🍕</motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — RED: "RESEARCH PROCESS"
          ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6" style={{ background: RED }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6"
          >
            Research Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-sm mb-16 max-w-lg mx-auto"
          >
            We targeted users who dine out at least twice a month, filtering for &ldquo;The Planner&rdquo; mindset through qualitative &amp; quantitative insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl"
          >
            <img src="/case-study/diagra.png" alt="Research Process Diagram" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — DARK: PHONE GALLERY SHOWCASE
          ═══════════════════════════════════════════ */}
      <section className="bg-[#111111] py-28 md:py-36 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 snap-center"
              >
                <img
                  src={`/images/iPhone 17 - ${num}.png`}
                  alt={`Screen ${num}`}
                  className="h-[400px] md:h-[500px] w-auto rounded-[2rem] shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — WHITE: USER PERSONA
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-16"
            style={{ color: RED }}
          >
            User Persona
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-[#F5F5F5] rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-lg"
          >
            {/* Avatar */}
            <motion.div variants={fadeUp} className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gray-300 overflow-hidden shrink-0 border-4 border-white shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
            </motion.div>

            <div className="flex-1 space-y-5 text-center md:text-left">
              <motion.div variants={fadeUp}>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">Kabelo, 28</h3>
                <span className="inline-block mt-2 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full" style={{ background: RED }}>
                  The Planner
                </span>
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg font-bold italic text-gray-700 border-l-4 pl-5 py-1" style={{ borderColor: RED }}>
                &ldquo;I want to impress my dates with unique, intimate dining experiences rather than crowded chains.&rdquo;
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-6 text-sm text-gray-500">
                <div>
                  <p className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-1">Motivations</p>
                  <p>Unique spots, romantic ambiance, curated menus</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-xs uppercase tracking-widest mb-1">Frustrations</p>
                  <p>Cross-referencing Instagram, Google Reviews, booking sites</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative check icon */}
            <motion.div variants={fadeUp} className="hidden md:flex w-16 h-16 rounded-full items-center justify-center shrink-0" style={{ background: '#22C55E' }}>
              <span className="text-white text-2xl">✓</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — WHITE: USER FLOW
          ═══════════════════════════════════════════ */}
      <section className="bg-white pb-28 md:pb-36 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-16"
          >
            User Flow
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { step: '01', label: 'Discover Feed', active: false },
              { step: '02', label: 'Mood Filters', active: false },
              { step: '03', label: 'Restaurant Details', active: true },
              { step: '04', label: 'Book & Confirm', active: false },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(item.step) * 0.1 }}
                className={`p-7 rounded-2xl text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.active
                    ? 'text-white'
                    : 'bg-[#F5F5F5] text-gray-900'
                }`}
                style={item.active ? { background: RED } : {}}
              >
                <span className={`block text-[10px] uppercase font-black tracking-widest mb-2 ${item.active ? 'text-white/60' : 'text-gray-400'}`}>
                  Step {item.step}
                </span>
                <h4 className="font-bold text-base">{item.label}</h4>
              </motion.div>
            ))}
          </div>

          {/* Flow diagram with phone screens */}
          <div className="mt-16 flex gap-4 overflow-x-auto pb-4">
            {[9, 10, 11, 4, 5].map((num) => (
              <img
                key={num}
                src={`/images/iPhone 17 - ${num}.png`}
                alt={`Flow screen ${num}`}
                className="h-[280px] md:h-[350px] w-auto rounded-2xl shadow-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11 — RED: "TESTING & ITERATION"
          ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6" style={{ background: RED }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
                Testing &<br />Iteration
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                We validated every flow with real users, prioritizing discoverability and booking efficiency. Contextual cues and usability metrics shaped each design iteration.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-white text-black rounded-[2.5rem] p-10 shadow-2xl space-y-6">
                <div className="p-6 bg-[#F8F8F8] rounded-2xl">
                  <span className="text-5xl font-black block mb-1" style={{ color: RED }}>84/100</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-gray-500">System Usability Scale</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-[#F8F8F8] rounded-2xl text-center">
                    <span className="text-3xl font-black block mb-1">05</span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Users Tested</span>
                  </div>
                  <div className="p-5 bg-[#F8F8F8] rounded-2xl text-center">
                    <span className="text-3xl font-black block mb-1">85%</span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Issues Resolved</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12 — WHITE: BEFORE & AFTER ITERATIONS
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-center"
          >
            Design Iterations
          </motion.h2>
          <p className="text-gray-400 text-sm text-center mb-16 max-w-lg mx-auto">
            Side-by-side comparisons of key screens before and after user testing feedback.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { before: '/images/iPhone 17 - 3.png', after: '/images/iPhone 17 - 4.png', label: 'Home Feed' },
              { before: '/images/iPhone 17 - 6.png', after: '/images/iPhone 17 - 7.png', label: 'Restaurant View' },
              { before: '/images/iPhone 17 - 9.png', after: '/images/iPhone 17 - 10.png', label: 'Booking Flow' },
            ].map((pair, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#F5F5F5] rounded-3xl p-6 space-y-4"
              >
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-2 text-center">Before</p>
                    <img src={pair.before} alt={`${pair.label} before`} className="w-full rounded-xl shadow-md" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-center mb-2" style={{ color: RED }}>After</p>
                    <img src={pair.after} alt={`${pair.label} after`} className="w-full rounded-xl shadow-md" />
                  </div>
                </div>
                <p className="text-xs font-bold text-center text-gray-700">{pair.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 13 — WHITE: FINAL OUTCOME GALLERY
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAFAFA] py-28 md:py-36 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-6"
            style={{ color: RED }}
          >
            Final<br />Outcome
          </motion.h2>
          <p className="text-gray-400 text-sm mb-20 max-w-md mx-auto">
            The complete high-fidelity interface across all key user journeys.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {screens.map((screen, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                className="bg-white p-4 rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <img
                  src={screen}
                  alt={`Final Screen ${idx + 1}`}
                  className="w-full h-auto rounded-[1.5rem] group-hover:scale-[1.02] transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 14 — RED: CONCLUSION
          ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 text-center" style={{ background: RED }}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-10">
            Conclusion
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-14 rounded-[3rem] border border-white/20">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              Haus of Taste effectively solves the cognitive overload of date-planning,
              creating a seamless bridge between discovery and destination through bold, intuitive design.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <span className="px-6 py-3 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
              Highly Functional
            </span>
            <span className="px-6 py-3 bg-white text-xs font-black uppercase tracking-widest rounded-full" style={{ color: RED }}>
              Aesthetically Engaging
            </span>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 15 — NEXT PROJECT FOOTER
          ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 text-center bg-white border-t border-gray-100">
        <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-8 block font-black">Next Story</span>
        <Link href="/project/green-butcher" className="group inline-block">
          <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-none transition-colors duration-500 group-hover:text-[#E21E26]">
            Green<br />Butcher
          </h2>
        </Link>
      </section>

    </div>
  );
}
