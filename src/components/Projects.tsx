import { SectionLabel } from "./SectionLabel";
import { RevealOnScroll } from "./RevealOnScroll";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="01" label="projects" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Things I&apos;ve Built</h2>
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
