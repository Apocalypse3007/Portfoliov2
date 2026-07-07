import { ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { RevealOnScroll } from "./RevealOnScroll";
import { papers } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="03" label="research" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Research Work</h2>
      </RevealOnScroll>

      {papers.length === 0 ? (
        <RevealOnScroll delay={0.1} className="glass-panel mt-12 rounded-2xl p-10 text-center">
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            /404 — nothing here yet
          </p>
          <p className="mt-4 text-lg text-foreground/80">
            Paper links coming soon — check back shortly.
          </p>
        </RevealOnScroll>
      ) : (
        <div className="mt-12 space-y-4">
          {papers.map((paper, i) => (
            <RevealOnScroll key={paper.href} delay={i * 0.08}>
              <a
                href={paper.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="glass-panel press-glass flex items-center justify-between gap-4 rounded-xl p-5"
              >
                <div className="min-w-0">
                  <p className="font-bold">{paper.title}</p>
                  <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">
                    {paper.venue} · {paper.date}
                  </p>
                </div>
                <ExternalLink size={18} className="shrink-0 text-accent" />
              </a>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </section>
  );
}
