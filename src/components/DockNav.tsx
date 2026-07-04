"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";
import { PixelAvatar } from "./PixelAvatar";
import { profile } from "@/lib/data";

const REVEAL_THRESHOLD = 0.85;
const MotionLink = motion.create(Link);

const TABS = [
  { href: "/", label: "abt me", emoji: null, match: (p: string) => p === "/" },
  { href: "/work", label: "work", emoji: "⛏️", match: (p: string) => p.startsWith("/work") },
  { href: "/blog", label: "blog", emoji: "📓", match: (p: string) => p.startsWith("/blog") },
];

const SOCIALS = [
  { href: profile.links.x, label: "X", icon: XIcon },
  { href: profile.links.instagram, label: "Instagram", icon: InstagramIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.links.github, label: "GitHub", icon: GithubIcon },
].filter((s) => Boolean(s.href));

export function DockNav() {
  const pathname = usePathname();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) {
      setRevealed(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      setRevealed(e.clientY >= window.innerHeight * REVEAL_THRESHOLD);
    };
    const onLeave = () => setRevealed(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [pathname]);

  return (
    <motion.nav
      initial={false}
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 16 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ pointerEvents: revealed ? "auto" : "none" }}
      className="glass-panel font-pixel fixed bottom-3 left-1/2 z-50 flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full px-1.5 py-1.5 text-xs sm:bottom-4 sm:gap-1.5 sm:px-2.5 sm:py-2"
      aria-label="Primary"
    >
      {TABS.map((tab) => {
        const active = tab.match(pathname);
        return (
          <MotionLink
            key={tab.href}
            href={tab.href}
            data-cursor-hover
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 whitespace-nowrap uppercase transition-colors ${
              active ? "bg-accent text-white" : "text-foreground hover:bg-foreground/10"
            }`}
          >
            {tab.href === "/" ? (
              <PixelAvatar size={18} />
            ) : (
              <span className="shrink-0 text-sm leading-none">{tab.emoji}</span>
            )}
            <span className="hidden sm:inline">{tab.label}</span>
          </MotionLink>
        );
      })}

      <span className="mx-0.5 h-5 w-px shrink-0 bg-ink/20 sm:mx-1" aria-hidden />

      {SOCIALS.map(({ href, label, icon: Icon }) => (
        <motion.a
          key={label}
          href={href}
          target={href!.startsWith("http") ? "_blank" : undefined}
          rel={href!.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          data-cursor-hover
          whileHover={{ scale: 1.35 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/10 hover:text-accent sm:h-8 sm:w-8"
        >
          <Icon size={14} />
        </motion.a>
      ))}
    </motion.nav>
  );
}
