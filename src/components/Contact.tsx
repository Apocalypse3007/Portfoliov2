import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";
import { RevealOnScroll } from "./RevealOnScroll";
import { profile } from "@/lib/data";

const LINKS = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.github, label: "GitHub", icon: GithubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.links.resume, label: "Resume", icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="02" label="contact" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s Build Something
        </h2>
        <p className="mt-4 max-w-xl text-lg text-foreground/80">
          Have a project, a research idea, or just want to talk about the latest match or
          whatever I&apos;m currently playing? My inbox is open.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            data-cursor-hover
            className="glass-panel press-glass flex items-center gap-3 rounded-xl px-5 py-3 font-mono text-sm"
          >
            <Icon size={16} className="text-accent" />
            {label}
          </a>
        ))}
      </RevealOnScroll>
    </section>
  );
}
