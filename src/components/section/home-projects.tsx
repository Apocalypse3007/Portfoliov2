import { projects } from "@/lib/data";
import Link from "next/link";

// Compact project list: dash bullet, linked name, mono tech on the right,
// one-line description below. Hovering a row dims the others.
export default function HomeProjects() {
  return (
    <section id="projects">
      <h2 className="text-xl font-bold">Projects</h2>
      <ul className="group/list mt-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="relative py-2 pl-4 transition-opacity duration-300 group-hover/list:not-hover:opacity-45 before:absolute before:left-0 before:top-2 before:text-muted-foreground/50 before:content-['-']"
          >
            <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
              {project.href ? (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 font-medium underline underline-offset-4 decoration-muted-foreground/60 hover:decoration-foreground"
                >
                  {project.name}
                </Link>
              ) : (
                <span className="min-w-0 font-medium">{project.name}</span>
              )}
              <span className="font-mono text-xs text-muted-foreground sm:whitespace-nowrap">
                {project.stack.join(" · ")}
              </span>
            </div>
            <p className="mt-0.5 max-w-prose text-sm text-pretty text-muted-foreground">
              {project.tagline}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="/work"
        className="mt-4 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        all projects →
      </Link>
    </section>
  );
}
