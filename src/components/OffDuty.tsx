import Image from "next/image";
import { SectionLabel } from "./SectionLabel";
import { RevealOnScroll } from "./RevealOnScroll";
import { games } from "@/lib/data";
import type { LetterboxdFilm } from "@/lib/letterboxd";
import type { Game } from "@/lib/data";

const CARD_TONES = [
  "bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(135deg,rgba(82,113,255,0.4),rgba(255,255,255,0.06)_46%,rgba(10,10,10,0.45))] ring-1 ring-white/10",
  "bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(29,58,173,0.45),rgba(142,161,240,0.18)_45%,rgba(255,255,255,0.05))] ring-1 ring-white/10",
  "bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(135deg,rgba(67,91,168,0.4),rgba(255,255,255,0.08)_50%,rgba(10,10,10,0.4))] ring-1 ring-white/10",
];

function toneFor(title: string) {
  const hash = title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return CARD_TONES[hash % CARD_TONES.length];
}

function ShineSweep({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="animate-shine pointer-events-none absolute -inset-y-1/2 left-0 w-2/3 rounded-full bg-white/[0.05] opacity-70 blur-3xl"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

export function OffDuty({ films }: { films: LetterboxdFilm[] }) {
  return (
    <section id="off-duty" className="mx-auto max-w-5xl px-6 py-24">
      <RevealOnScroll>
        <SectionLabel index="04" label="off duty" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Games &amp; Movies
        </h2>
      </RevealOnScroll>

      <div className="mt-12 space-y-10">
        <RevealOnScroll
          delay={0.1}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <ShineSweep />
          <div className="relative flex items-baseline justify-between">
            <h3 className="font-pixel text-3xl font-bold tracking-wide uppercase">Games</h3>
            <span className="font-mono text-xs tracking-widest text-white/50 uppercase">game shelf</span>
          </div>
          <div className="relative mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.2}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <ShineSweep delay={2.2} />
          <div className="relative flex items-baseline justify-between">
            <h3 className="font-pixel text-3xl font-bold tracking-wide uppercase">Movies</h3>
            <span className="font-mono text-xs tracking-widest text-white/50 uppercase">watch stack</span>
          </div>
          {films.length === 0 ? (
            <p className="relative mt-6 text-sm text-white/60">
              Couldn&apos;t load films from Letterboxd right now — check back soon.
            </p>
          ) : (
            <div className="relative mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {films.map((film) => (
                <MovieCard key={film.href} film={film} />
              ))}
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}

function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.href}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      className={`press-glass relative min-h-[8.5rem] overflow-hidden rounded-2xl p-3 shadow-[0_18px_46px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] ${toneFor(game.name)}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
      <div className="pointer-events-none absolute -top-12 -right-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex h-full items-start gap-3">
        <div className="relative h-14 w-20 flex-none overflow-hidden rounded-md bg-black/30 ring-1 ring-white/15">
          {game.image ? (
            <Image
              src={game.image}
              alt={game.name}
              fill
              className={game.logo ? "object-contain p-2" : "object-cover"}
              sizes="80px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs tracking-widest text-white/40 uppercase">
              game
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
          <p className="line-clamp-2 text-sm leading-snug font-bold text-white">{game.name}</p>
          <div className="mt-2 border-t border-white/15 pt-2 font-mono text-[11px] tracking-widest text-white/60 uppercase">
            <p className="truncate">{game.studio}</p>
            <p className="mt-0.5">{game.releaseYear}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

function MovieCard({ film }: { film: LetterboxdFilm }) {
  return (
    <a
      href={film.href}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      className={`press-glass relative min-h-[8.5rem] overflow-hidden rounded-2xl p-3 shadow-[0_18px_46px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] ${toneFor(film.title)}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
      <div className="pointer-events-none absolute -top-12 -right-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex h-full items-start gap-3">
        <div className="relative h-20 w-14 flex-none overflow-hidden rounded-md bg-black/30 ring-1 ring-white/15">
          {film.poster ? (
            <Image src={film.poster} alt={film.title} fill className="object-cover" sizes="56px" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs tracking-widest text-white/40 uppercase">
              poster
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
          <p className="line-clamp-2 text-sm leading-snug font-bold text-white">{film.title}</p>
          <div className="mt-2 flex items-center justify-between gap-2 border-t border-white/15 pt-2 font-mono text-[11px] tracking-widest text-white/60 uppercase">
            <span>movie</span>
            <span>{film.year}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
