import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { OffDuty } from "@/components/OffDuty";
import { getTopRatedFilms } from "@/lib/letterboxd";

export default async function Home() {
  const films = await getTopRatedFilms();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <OffDuty films={films} />
    </>
  );
}
