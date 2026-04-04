# Portfolio: Dynamic Case Studies & Project Page Routing

**Audience:** Developer (or AI agent) implementing scalable case-study routing and fixing “page does not scroll” / “project no longer works” issues.

**Stack context:** Next.js App Router, `src/app/project/[slug]/`, Framer Motion, Lenis (smooth scroll in `src/app/layout.tsx` via `LenisProvider`), project list in `src/lib/data.ts`.

**This file lives at the repo root:** `CASE_STUDY_ROUTING_AGENT_INSTRUCTIONS.md`

---

## 0. Current repo snapshot (verify after pull)

Use this as ground truth; line numbers may drift.

| Project slug | Category in `data.ts` | Case study in `project-client.tsx`? | Default hero? |
|----------------|------------------------|-------------------------------------|---------------|
| `haus-of-taste` | UX/UI Design | **Yes** → `HausOfTasteCaseStudy` | No |
| `green-butcher` | Brand Design | No | Yes |
| `the-experience` | UX/UI Design | No | Yes |
| `iconic-interiors` | Brand Design | No | Yes |

**Historical bug (fixed in this codebase):** `HausOfTasteCaseStudy` was once gated on a wrong slug (`stat-metrix`) while `data.ts` used `haus-of-taste`, so the long page never mounted. The condition must stay aligned with `project.slug` in `data.ts` (or with your registry keys).

---

## 1. How routing works today

| Piece | Role |
|--------|------|
| `src/app/project/[slug]/page.tsx` | Resolves `slug` against `projects` from `src/lib/data.ts`. Calls `notFound()` if unknown. Uses `generateStaticParams()` and **`export const dynamicParams = false`**, so **only slugs known at build time** are valid for static export–style behavior. |
| `src/app/project/[slug]/project-client.tsx` | **Client** component that decides what to render: case study branch vs default hero. |
| `src/lib/data.ts` | Source of truth for `slug`, `title`, `category`, `bgColor`, optional `details`, mockup fields, etc. |
| `src/app/collection/[category]/page.tsx` | Maps URL segment → category filter; **`generateStaticParams`** only lists `ux-ui-design` and `brand-design`. |
| `src/app/collection/[category]/category-client.tsx` | Renders horizontal/sticky scroll experience and links each card to **`/project/${project.slug}`**. |

### Collection URL → category filter

| URL path segment | Filters `projects` where `category` equals |
|------------------|---------------------------------------------|
| `/collection/ux-ui-design` | `"UX/UI Design"` |
| `/collection/brand-design` | `"Brand Design"` |

Adding a new collection requires updating **`page.tsx`** (`generateStaticParams` + filter logic) and **`data.ts`** (project `category` strings must match).

**Important:** Collection → project links are **`/project/[slug]`** from `project.slug`. If a project page “does nothing” or “won’t scroll,” the issue is almost always **`ProjectClient` output**, not the collection link.

### `dynamicParams = false` pitfall

After adding a **new** `slug` to `projects`, you must **rebuild** (or run dev fresh) so `generateStaticParams` picks it up. Otherwise visiting `/project/new-slug` can **404** even though the object exists in source—this can look like “routing is broken.”

---

## 2. Why some project pages “don’t scroll” or feel broken

Two issues are often confused.

### 2.1 Default “hero” layout: one screen, overflow clipped, misleading CTA

When a project does **not** match the case study branch, `ProjectClient` renders the **default hero**. The root `<div>` (see `project-client.tsx`) uses classes including:

- `min-h-[100vh]` and `mt-24` (header offset)
- `overflow-hidden`
- `flex items-center justify-center`

Effects:

- The block reads as **one viewport of content**, centered.
- **`overflow-hidden`** clips overflow inside that element; there is **no long scrollable case study** in this branch.
- The bottom still shows **“Scroll to view details”**, which is **misleading** when there is no details section below—users expect a long page (e.g. `/project/iconic-interiors`, `/project/the-experience`, `/project/green-butcher` today).

So “does not scroll to show more info” is **expected** for those slugs until you either ship a **case study component** registered for that slug or **extend the default layout** with real below-the-fold content and fix overflow/layout so the **document** scrolls.

### 2.2 Case studies are opt-in per slug (maintenance risk)

`HausOfTasteCaseStudy` lives in `src/components/haus-of-taste-case-study.tsx`. It only renders when `ProjectClient` routes to it (today: `project.slug === "haus-of-taste"`).

If **`data.ts` slugs** and **routing logic / registry keys** diverge, users silently get the default hero again → same “no scroll / empty” complaint.

**Rule:** Every project that should show a long case study must have a **single source of truth** (slug or explicit key) shared by data and the registry.

### 2.3 Optional: Lenis + layout changes

`LenisProvider` (`src/components/lenis-provider.tsx`) smooth-scrolls the **window / document**. After you change overflow or introduce nested scroll areas, **verify wheel / trackpad** on real devices. Issues are usually CSS (overflow traps), not Lenis alone.

### 2.4 Case study pages use `whileInView` (Framer Motion)

Long case studies animate sections with **`whileInView`**. Avoid putting a case study root inside an ancestor with **`overflow: hidden`** in a way that breaks scroll or viewport intersection; the default hero’s `overflow-hidden` does not wrap the case study once you return the case study component at the top level.

---

## 3. URLs called out in the original brief

| URL | What to expect in *this* codebase |
|-----|-----------------------------------|
| `http://localhost:3000/project/the-experience` | Renders **default hero** only (no dedicated case study file). “Not working” usually means **UX expectation** (wanted a long page), not a missing route—unless **404**, then check slug + rebuild (Section 1). |
| `http://localhost:3000/project/iconic-interiors` | Same: default hero; **no** extra scrollable content until you add it or add a case study. |
| `http://localhost:3000/collection/brand-design` → Iconic Interiors | Link target is **`/project/iconic-interiors`**; navigation is correct. Fix is on the **project** view, not the collection route. |

---

## 4. Goal: Many case studies, loaded cleanly (recommended direction)

**Avoid** a growing list of:

```ts
if (slug === "a") return <A />;
if (slug === "b") return <B />;
```

**Prefer** a single **allowlist registry**: slug string → React component, optionally wrapped with **`next/dynamic`** for code splitting.

### 4.1 Data model

Extend the project shape in `src/lib/data.ts` (with a real TypeScript type) using **one** convention, for example:

- `layout: "hero" | "case-study"` and optional `caseStudyModule: "haus-of-taste"`  
- or register purely by **`slug`** if every case study maps 1:1 to URL slug (simplest).

### 4.2 Registry module (pattern)

Add e.g. `src/lib/case-study-registry.tsx`:

- Export a `Record<string, ComponentType<{ project: Project }>>` or similar **static** map.
- `ProjectClient`: `const CaseStudy = CASE_STUDIES[project.slug]` (or by explicit key); if `CaseStudy`, render `<CaseStudy project={project} />`; else default hero.

**Security / bundling:** Never compute dynamic `import(\`${userInput}\`)`. Only keys you list in the registry object.

### 4.3 Optional: `next/dynamic`

```ts
import dynamic from "next/dynamic";

const HausOfTasteCaseStudy = dynamic(() => import("@/components/haus-of-taste-case-study"));
```

Register that in the map by slug. Large case studies then load on demand.

### 4.4 Default hero improvements (parallel track)

Until every project has a case study:

- Remove or conditionally show **“Scroll to view details”** only when there **is** scrollable detail content, **or**
- Add a real second section (e.g. metadata). **Note:** only **`haus-of-taste`** currently defines `details` in `data.ts`; other projects omit it—use **optional** access (`project.details?.role`) and fallbacks.

Also revisit **`overflow-hidden`** on the default hero root if you add content that should extend document height.

---

## 5. Concrete files to touch

| File | Purpose |
|------|---------|
| `src/lib/data.ts` | Slugs, categories, optional `details`; type definitions. |
| `src/app/project/[slug]/project-client.tsx` | Registry lookup; default hero overflow / copy. |
| New: `src/lib/case-study-registry.tsx` (name flexible) | Slug → component map (+ optional `dynamic()`). |
| `src/components/*-case-study.tsx` | One module per case study (`haus-of-taste-case-study.tsx` exists). |
| `src/app/project/[slug]/page.tsx` | Rarely needs logic changes; new slugs must appear in `projects` for `generateStaticParams`. |
| `src/app/collection/[category]/page.tsx` | When adding categories or changing URL segments. |

---

## 6. TypeScript

Replace `project: any` in `ProjectClient` (and case study props) with a shared **`Project`** type (exported from `data` or `src/types/project.ts`), including optional fields (`details`, `customBg`, `centerImage`, etc.).

---

## 7. Verification checklist

1. **`/project/haus-of-taste`** — Long case study scrolls; images under `/public/images/` and `/public/case-study/` load.  
2. **`/project/iconic-interiors`** — Either new case study + scroll, or hero with **honest** UX (no false “scroll for details”).  
3. **`/project/the-experience`** — Same.  
4. **`/project/green-butcher`** — Same (default hero today).  
5. **`/collection/brand-design`** and **`/collection/ux-ui-design`** — Cards still navigate to correct `/project/...` URLs.  
6. **Unknown slug** — Still **`notFound()`**.  
7. **Production / static build** — After adding projects, rebuild so all slugs are in `generateStaticParams`.  
8. **Motion** — Case study sections using `whileInView` animate when scrolling (no accidental overflow clipping on a wrapper).

---

## 8. Summary for the agent

1. **“Won’t scroll”** on non–case-study projects: default hero uses **`overflow-hidden`**, **`min-h-[100vh]`**, and has **no long content**; “Scroll to view details” overpromises.  
2. **Scale** with a **slug → case study registry** (optional `dynamic()`), not repeated `if` chains.  
3. Keep **`data.ts` slugs** and registry keys identical (remember the old **`stat-metrix` / `haus-of-taste`** mismatch class of bug).  
4. **`dynamicParams = false`**: new slugs need **`generateStaticParams`** coverage via `projects` + rebuild.  
5. **Collection** routes and filters are in `collection/[category]/page.tsx`; **project** behavior is in **`project-client.tsx`**.

---

*Handoff document for implementing changes in this repository.*
