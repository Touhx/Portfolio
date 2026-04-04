export type ProjectDetails = {
  role: string;
  tools: string[];
  year: string;
  platforms: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: "UX/UI Design" | "Brand Design";
  bgText?: string;
  bgColor?: string;
  /** Optional: URL to a full-bleed custom background image (collection card + hero) */
  customBg?: string;
  /** Optional: centred device image overlaid on the hero */
  centerImage?: string;
  /** Optional: SVG/PNG logo used in place of the text title in hero */
  titleImage?: string;
  imgLeftTilted?: boolean;
  /** Whether a dedicated case-study component exists for this slug */
  layout?: "hero" | "case-study";
  details?: ProjectDetails;
};
