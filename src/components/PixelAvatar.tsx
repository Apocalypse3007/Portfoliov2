// Original 8x8 pixel-art avatar (not a copy of any reference site's asset).
// 0 = transparent, 1 = hair, 2 = skin, 3 = eye, 4 = collar
const GRID = [
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 3, 2, 3, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 0, 2, 2, 2, 2, 0, 0],
  [0, 0, 4, 4, 4, 4, 0, 0],
  [0, 4, 4, 4, 4, 4, 4, 0],
];

const COLORS: Record<number, string> = {
  0: "transparent",
  1: "var(--accent)",
  2: "#e3b28a",
  3: "#141417",
  4: "var(--accent-2)",
};

export function PixelAvatar({ size = 18 }: { size?: number }) {
  return (
    <div
      className="grid overflow-hidden rounded-[3px]"
      style={{
        width: size,
        height: size,
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
      }}
      aria-hidden
    >
      {GRID.flatMap((row, r) =>
        row.map((cell, c) => (
          <div key={`${r}-${c}`} style={{ background: COLORS[cell] }} />
        ))
      )}
    </div>
  );
}
