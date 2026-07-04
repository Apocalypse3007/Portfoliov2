import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = { title: "Work — Anany Singh" };

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-4">
        <RevealOnScroll>
          <SectionLabel index="00" label="work" />
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Projects & Contact
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/80">
            A selection of things I&apos;ve shipped — full-stack apps, computer vision
            tools, and AI systems.
          </p>
        </RevealOnScroll>
      </section>
      <Projects />
      <Contact />
    </>
  );
}
