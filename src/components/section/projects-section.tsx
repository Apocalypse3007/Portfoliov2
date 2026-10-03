import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section/page-section-header";
import { projects } from "@/lib/data";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <SectionHeader
          badge="My Projects"
          title="Check out my latest work"
          description="From distributed agentic systems and computer vision to Byzantine fault tolerance. Here are a few of my favorites."
        />
        <div className="flex flex-col gap-3 w-full">
          {projects.map((project, id) => (
            <BlurFade key={project.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05} >
              <ProjectCard
                href={project.href}
                title={project.name}
                description={project.description}
                bullets={project.bullets}
                dates={project.date}
                tags={project.stack}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
