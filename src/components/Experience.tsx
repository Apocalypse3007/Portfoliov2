import { SectionLabel } from "./SectionLabel";
import { RevealOnScroll } from "./RevealOnScroll";
import { experience } from "@/lib/data";

const KIND_LABEL: Record<string, string> = {
  work: "Work",
  education: "Education",
  publication: "Publication",
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="02" label="experience & education" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Where I&apos;ve Been</h2>
      </RevealOnScroll>

      <div className="relative mt-14 space-y-10 border-l-[2.5px] pl-8 sm:pl-10">
        {experience.map((item, i) => (
          <RevealOnScroll key={`${item.org}-${item.role}`} delay={i * 0.08} className="relative">
            <span className="absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-brutal bg-accent sm:-left-[49px]" />
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              {KIND_LABEL[item.kind]} · {item.date}
            </p>
            <h3 className="mt-2 text-xl font-bold">
              {item.role} <span className="text-muted">— {item.org}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-foreground/80">{item.description}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
