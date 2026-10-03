import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeader } from "@/components/section/page-section-header";
import { games } from "@/lib/data";
import type { LetterboxdFilm } from "@/lib/letterboxd";

const BLUR_FADE_DELAY = 0.04;

function Tile({
  href,
  title,
  meta,
  image,
  contain,
  portrait,
}: {
  href: string;
  title: string;
  meta: string;
  image?: string | null;
  contain?: boolean;
  portrait?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 border border-border rounded-xl p-3 hover:ring-2 hover:ring-muted transition-all duration-200"
    >
      <div
        className={`relative flex-none overflow-hidden rounded-md bg-muted ${
          portrait ? "h-16 w-11" : "h-12 w-20"
        }`}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="80px"
            className={contain ? "object-contain p-1" : "object-cover"}
          />
        )}
      </div>
      <div className="min-w-0 flex flex-col gap-0.5">
        <p className="text-sm font-semibold leading-tight line-clamp-2">{title}</p>
        <p className="text-xs text-muted-foreground truncate">{meta}</p>
      </div>
    </a>
  );
}

export default function OffDutySection({ films }: { films: LetterboxdFilm[] }) {
  return (
    <section id="off-duty">
      <div className="flex min-h-0 flex-col gap-y-8">
        <SectionHeader
          badge="Off Duty"
          title="Games & movies"
          description="What I'm playing and watching when I'm not writing code."
        />
        <div className="flex flex-col gap-6 max-w-[800px] mx-auto w-full">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Games</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {games.map((game, i) => (
                <BlurFade key={game.name} delay={BLUR_FADE_DELAY * 2 + i * 0.05}>
                  <Tile
                    href={game.href}
                    title={game.name}
                    meta={`${game.studio} · ${game.releaseYear}`}
                    image={game.image}
                    contain={game.logo}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
          {films.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">Movies</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {films.map((film, i) => (
                  <BlurFade key={film.href} delay={BLUR_FADE_DELAY * 2 + i * 0.05}>
                    <Tile
                      href={film.href}
                      title={film.title}
                      meta={`${film.year} · ${"★".repeat(Math.round(film.rating))}`}
                      image={film.poster}
                      portrait
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
