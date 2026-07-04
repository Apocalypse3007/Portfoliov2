import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Original pixel-art avatar — spiky silver hair, nodding to a certain
// Hunter x Hunter assassin, without reproducing any copyrighted artwork.
const GRID = [
  [0, 1, 0, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 3, 2, 3, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 0, 2, 2, 2, 2, 0, 0],
  [0, 0, 4, 4, 4, 4, 0, 0],
  [0, 4, 4, 4, 4, 4, 4, 0],
];

const COLORS: Record<number, string> = {
  0: "#0a0a0a",
  1: "#e8e8ec",
  2: "#e3b28a",
  3: "#141417",
  4: "#1f1f24",
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
        }}
      >
        {GRID.map((row, r) => (
          <div key={r} style={{ display: "flex" }}>
            {row.map((cell, c) => (
              <div key={c} style={{ width: 4, height: 4, background: COLORS[cell] }} />
            ))}
          </div>
        ))}
      </div>
    ),
    size
  );
}
