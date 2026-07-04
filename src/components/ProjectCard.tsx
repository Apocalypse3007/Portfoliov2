import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { RevealOnScroll } from "./RevealOnScroll";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="glass-panel press-glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 shadow-[0_18px_46px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
        <div className="pointer-events-none absolute -top-12 -right-10 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />

        <div className="relative flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{project.name}</h3>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} on GitHub`}
              data-cursor-hover
              className="mt-1 shrink-0 text-muted hover:text-accent"
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        <p className="mt-1 font-mono text-xs tracking-wide text-muted">{project.date}</p>
        <p className="mt-4 text-sm text-foreground/85">{project.description}</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-foreground/70">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.map((tech) => (
            <span key={tech} className="glass-panel rounded-lg px-2.5 py-1 font-mono text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
