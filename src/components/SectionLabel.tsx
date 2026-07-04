export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
      <span className="text-muted">/</span> {index} — {label}
    </p>
  );
}
