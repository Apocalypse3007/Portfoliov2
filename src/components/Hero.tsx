"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { HeroBackground } from "./HeroBackground";
import { LiveClock } from "./LiveClock";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6">
      <HeroBackground />
      <LiveClock />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-sm tracking-widest text-white uppercase [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]"
        >
          <span className="text-white/50">/</span> 00 — hello, i&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl leading-[0.95] font-bold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 h-9 font-mono text-xl text-white/70 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] sm:text-2xl"
        >
          Software Dev<span className="animate-pulse text-accent">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]"
        >
          Based in {profile.location}. I build full-stack products and AI systems,
          and occasionally forget to stop for lunch while doing it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/work"
            data-cursor-hover
            className="press-brutal shadow-brutal flex items-center gap-2 rounded-xl border-brutal bg-accent px-6 py-3 font-mono text-sm font-bold text-white uppercase"
          >
            View Work <ArrowUpRight size={16} />
          </Link>
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="press-glass rounded-xl border border-white/25 bg-black/30 px-6 py-3 font-mono text-sm font-bold text-white uppercase backdrop-blur-md"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.6 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
