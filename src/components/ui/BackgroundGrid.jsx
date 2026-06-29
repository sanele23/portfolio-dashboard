import { useEffect, useState } from "react";

const V_LINES = [25, 50, 75];
const H_LINES = [20, 80];

function createParticle(id) {
  const axis = Math.random() > 0.5 ? "v" : "h";
  const linePercent =
    axis === "v"
      ? V_LINES[Math.floor(Math.random() * V_LINES.length)]
      : H_LINES[Math.floor(Math.random() * H_LINES.length)];

  return {
    id,
    axis,
    pos: Math.random() * 100,
    linePercent,
    speed: 0.08 + Math.random() * 0.14,
    size: Math.random() > 0.7 ? 4 : 2,
  };
}

export default function BackgroundGrid() {
  const [particles, setParticles] = useState(() =>
    Array.from({ length: 8 }, (_, i) => createParticle(i)),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          const nextPos = p.pos + p.speed;
          if (nextPos <= 100) return { ...p, pos: nextPos };
          return createParticle(p.id);
        }),
      );
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      <div className="absolute left-1/4 top-0 h-full w-px bg-outline-variant/15" />
      <div className="absolute left-2/4 top-0 h-full w-px bg-outline-variant/15" />
      <div className="absolute left-3/4 top-0 h-full w-px bg-outline-variant/15" />

      <div className="absolute top-1/5 left-0 h-px w-full bg-outline-variant/15" />
      <div className="absolute top-4/5 left-0 h-px w-full bg-outline-variant/15" />

      {[25, 50, 75].map((x) =>
        [20, 80].map((y) => (
          <div
            key={`${x}-${y}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 select-none font-mono text-[10px] text-outline-variant/30"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            +
          </div>
        )),
      )}

      {particles.map((p) => {
        const style =
          p.axis === "v"
            ? { left: `${p.linePercent}%`, top: `${p.pos}%` }
            : { top: `${p.linePercent}%`, left: `${p.pos}%` };

        return (
          <div
            key={p.id}
            className="absolute rounded-full bg-white/40 blur-[1px]"
            style={{
              ...style,
              width: `${p.size}px`,
              height: `${p.size}px`,
              boxShadow: p.size > 2 ? "0 0 6px #ffffff" : "none",
            }}
          />
        );
      })}

      <div className="scanline absolute inset-0 opacity-20" />
    </div>
  );
}
