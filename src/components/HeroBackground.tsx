export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
      <div className="absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-accent-2/10 blur-3xl sm:h-[32rem] sm:w-[32rem]" />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(var(--ink) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
