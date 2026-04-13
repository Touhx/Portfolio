/**
 * Case Study Registry
 *
 * Maps a project slug → its dedicated case-study React component.
 * Use next/dynamic so each case study is code-split and only loaded
 * when its /project/[slug] page is actually visited.
 *
 * HOW TO ADD A NEW CASE STUDY:
 *   1. Create `src/components/<slug>-case-study.tsx`
 *   2. Set `layout: "case-study"` on the project object in `src/lib/data.ts`
 *   3. Add an entry here: `"<slug>": dynamic(() => import("@/components/<slug>-case-study"))`
 *   4. That's it — ProjectClient picks it up automatically.
 */

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { Project } from "@/types/project";

export type CaseStudyComponent = ComponentType<{ project: Project }>;

function makeCaseStudy(loader: () => Promise<{ default: CaseStudyComponent }>): CaseStudyComponent {
  return dynamic(loader, {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 border-2 border-[#E8380D] border-t-transparent rounded-full animate-spin" />
          <span
            className="text-xs tracking-[0.3em] uppercase text-gray-400"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Loading case study…
          </span>
        </div>
      </div>
    ),
  }) as CaseStudyComponent;
}

/**
 * Slug → case-study component map.
 * Keys MUST match `project.slug` in `src/lib/data.ts` exactly.
 */
export const CASE_STUDIES: Record<string, CaseStudyComponent> = {
  "haus-of-taste": makeCaseStudy(
    () => import("@/components/haus-of-taste-case-study")
  ),
  "bitsync": makeCaseStudy(
    () => import("@/components/bitsync-case-study")
  ),

  // ── Add future case studies below ────────────────────────────────────────
  // "green-butcher": makeCaseStudy(() => import("@/components/green-butcher-case-study")),
  // "the-experience": makeCaseStudy(() => import("@/components/the-experience-case-study")),
  // "iconic-interiors": makeCaseStudy(() => import("@/components/iconic-interiors-case-study")),
};
