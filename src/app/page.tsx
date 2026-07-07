import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { OffDuty } from "@/components/OffDuty";
import { getTopRatedFilms } from "@/lib/letterboxd";

export default async function Home() {
  const films = await getTopRatedFilms();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Research />
      <OffDuty films={films} />

      <p className="mx-auto max-w-5xl px-6 pb-16 text-center font-mono text-xs text-muted/70">
        With thanks to my parents and my girlfriend — for the support, and for putting up
        with the debugging rants.
      </p>
    </>
  );
}
