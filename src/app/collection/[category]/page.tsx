import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import CategoryClient from "./category-client";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  const filteredProjects = projects.filter(p => {
    if (category === "ux-ui-design") return p.category === "UX/UI Design";
    if (category === "brand-design") return p.category === "Brand Design";
    return false;
  });

  if (filteredProjects.length === 0) return notFound();

  return <CategoryClient projects={filteredProjects} categorySlug={category} />;
}
