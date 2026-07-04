import { SectionLabel } from "./SectionLabel";
import { RevealOnScroll } from "./RevealOnScroll";
import { profile, skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="01" label="about" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-12 max-w-3xl">
        <div className="space-y-4">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/85">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-xs tracking-widest text-muted uppercase">
                {category}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="glass-panel rounded-lg px-3 py-1 font-mono text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
