"use client";

import { motion } from "framer-motion";

export function CodingScene() {
  return (
    <motion.div
      aria-hidden
      className="hidden w-full max-w-md shrink-0 lg:block"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative aspect-[780/572] overflow-hidden rounded-2xl">
        <video
          src="/coding-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full scale-[1.32] object-cover"
        />
      </div>
    </motion.div>
  );
}
