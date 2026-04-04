import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectClient from "./project-client";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) return notFound();
  
  return <ProjectClient project={project} />;
}
