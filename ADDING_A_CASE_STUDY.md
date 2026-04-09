# Adding a New Case Study

This guide walks you through adding a fully-featured case study page to the portfolio.
The system is built so that **adding a case study requires touching exactly 3 files**.

---

## Overview

```
src/
├── lib/
│   ├── data.ts                    ← 1. Register project + set layout: "case-study"
│   └── case-study-registry.tsx    ← 2. Map slug → component
└── components/
    └── <slug>-case-study.tsx      ← 3. Build the case study page
```

Routing, code splitting, loading states, and page transitions are all handled
automatically by `ProjectClient` — you just need to fill these three spots.

---

## Step 1 — Add the project to `src/lib/data.ts`

Open `src/lib/data.ts` and add your project object to the `projects` array.
**Set `layout: "case-study"`** — this flag signals that a full case study exists.

```ts
{
  id: "05",                           // Unique ID (sequential is fine)
  slug: "green-butcher",             // ← Must match exactly in all 3 places
  title: "GREEN BUTCHER",
  category: "Brand Design",          // "UX/UI Design" | "Brand Design"
  bgText: "GREEN",                   // Ghost text shown in the hero background
  bgColor: "#1f2a1e",               // Dark fallback background colour
  imgLeftTilted: false,
  layout: "case-study",             // ← Required to route to case study component
  customBg: "/mockups/gb-bg.png",   // Optional: hero background image
  centerImage: "/mockups/gb-logo.png", // Optional: centred device/logo in hero
  titleImage: "/mockups/gb-title.png", // Optional: image in place of text title
  details: {
    role: "Brand Designer",
    tools: ["Figma", "Adobe Illustrator"],
    year: "2025",
    platforms: ["Print", "Digital"],
  },
},
```

> **Key rule:** The `slug` value here is your single source of truth.
> It must match the registry key (Step 2) and the filename (Step 3) exactly.

---

## Step 2 — Register the component in `src/lib/case-study-registry.tsx`

Open the registry and uncomment (or add) your slug → component line.

```ts
export const CASE_STUDIES: Record<string, CaseStudyComponent> = {
  "haus-of-taste": makeCaseStudy(
    () => import("@/components/haus-of-taste-case-study")
  ),

  // ↓ Un-comment this line (or add a new one):
  "green-butcher": makeCaseStudy(
    () => import("@/components/green-butcher-case-study")
  ),
};
```

> `makeCaseStudy()` wraps the import in `next/dynamic` automatically, so the
> bundle for this case study is **only loaded when someone visits that page**.
> A branded spinner is shown while it loads.

---

## Step 3 — Create `src/components/<slug>-case-study.tsx`

Create a new file named `<slug>-case-study.tsx` (e.g. `green-butcher-case-study.tsx`).

### Minimal starter template

```tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Project } from "@/types/project";
import { p } from "@/lib/base-path";

type MediaSlice = {
  type: "image" | "video";
  src: string;
};

export default function MyProjectCaseStudy({ project }: { project: Project }) {
  // Add your exported Figma slices here!
  const caseStudySlices: MediaSlice[] = [
    // { type: "image", src: p("/case-study/my-project/slice-1.jpg") },
    // { type: "image", src: p("/case-study/my-project/slice-2.jpg") },
    // { type: "video", src: p("/case-study/my-project/demo-video.mp4") },
  ];

  return (
    <div
      className="text-black overflow-x-hidden selection:bg-[#E8380D] selection:text-white bg-[#050505]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
        style={{
          backgroundImage: project.customBg ? \`url(\${project.customBg})\` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-8 left-6 md:left-12 z-50">
          <Link href="/collection" className="text-white flex items-center..."><ArrowLeft /> Back</Link>
        </div>
        <motion.div className="absolute z-0...">
          <h2 className="text-[20vw]...">{project.bgText}</h2>
        </motion.div>
        <div className="relative z-20...">
          <h1 className="text-6xl...">{project.title}</h1>
        </div>
      </section>

      {/* ── SECTION 2: SLICED IMAGE BEHANCE LAYOUT ── */}
      <section className="relative w-full z-20 flex flex-col items-center bg-[#050505]">
        {caseStudySlices.length > 0 ? (
          caseStudySlices.map((slice, index) => (
            slice.type === "image" ? (
              <img key={index} src={slice.src} alt={\`Slice \${index + 1}\`} className="w-full h-auto block" />
            ) : (
              <video key={index} src={slice.src} className="w-full h-auto block" autoPlay loop muted playsInline />
            )
          ))
        ) : (
           <div className="w-full h-[60vh] flex items-center justify-center text-white/50 border-t border-white/10">
              Sliced Images Go Here
           </div>
        )}
      </section>
      
      {/* ── SECTION 3: NEXT PROJECT FOOTER ── */}
      <section className="py-32 md:py-48 px-6 text-center bg-[#050505] border-t border-white/5">
         <span className="text-[10px] uppercase text-white/40 mb-8 block font-black">Next Story</span>
         <Link href="/project/next-project" className="group inline-block">
           <h2 className="text-5xl md:text-[8rem] font-black uppercase text-white hover:text-[#E21E26]">Next Project</h2>
         </Link>
      </section>
    </div>
  );
}
```

### Recommended Structure
It's now incredibly simple! All you do is export your massive long-scroll case study as image slices from Figma, drop them into a `public/case-study/my-project/` folder, and update the `caseStudySlices` array above. No manual HTML slicing necessary.

---

## Step 4 — Add public assets

Place any images used by the case study in the correct `public/` directories:

```
public/
├── mockups/          ← Hero images, logos, device mockups (customBg, centerImage, titleImage)
├── images/           ← iPhone screen exports (iPhone 17 - 1.png … iPhone 17 - 11.png)
└── case-study/       ← Section-specific images (food photos, diagrams, persona images etc.)
```

Reference them in JSX as absolute paths from `/public`, e.g.:

```tsx
<img src="/mockups/gb-bg.png" alt="Green Butcher background" />
<img src="/case-study/gb-persona.jpg" alt="User persona" />
```

---

## Step 5 — Verify

Run the dev server and check these URLs:

| URL | Expected |
|-----|---------|
| `/collection/brand-design` | Your project card appears in the collection |
| `/project/green-butcher` | Case study loads (not the default hero) |
| `/project/haus-of-taste` | Existing case study still works ✅ |
| `/project/iconic-interiors` | Default hero + "Coming Soon" badge ✅ |
| `/project/unknown-slug` | `404` page ✅ |

Also verify:
- [ ] `whileInView` animations trigger when scrolling each section
- [ ] No broken images (check the Network tab in DevTools)
- [ ] Back button leads to `/collection`
- [ ] Next project footer links to the correct next slug

---

## Quick reference cheatsheet

```
New slug: "my-project"

1. data.ts          → add { slug: "my-project", layout: "case-study", ... }
2. registry.tsx     → "my-project": makeCaseStudy(() => import("@/components/my-project-case-study"))
3. components/      → create my-project-case-study.tsx
4. public/mockups/  → add hero bg, centerImage, titleImage if needed
5. npm run dev      → visit /project/my-project ✅
```

---

> **Slug mismatch = silent fallback to hero.**  
> If your case study shows the default hero instead of your component, double-check
> that `data.ts slug`, `registry.tsx key`, and the `import()` filename all match exactly.

---

*Last updated: April 2026 — Vision Titans Portfolio*
