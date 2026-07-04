"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute top-6 right-6 z-10 rounded-lg bg-black/30 px-3 py-2 text-right backdrop-blur-sm sm:top-8 sm:right-8">
      <p className="font-mono text-[9px] tracking-widest text-white/50 uppercase">system online</p>
      <p className="font-mono text-lg font-bold tabular-nums text-white sm:text-xl">
        {time ?? "00:00:00"}
      </p>
    </div>
  );
}
