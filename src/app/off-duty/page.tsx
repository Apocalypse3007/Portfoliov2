import BlurFade from "@/components/magicui/blur-fade";
import OffDutySection from "@/components/section/off-duty-section";
import { getTopRatedFilms } from "@/lib/letterboxd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games & Movies",
  description: "What I'm playing and watching when I'm not writing code.",
};

export default async function OffDutyPage() {
  const films = await getTopRatedFilms();
  return (
    <main>
      <BlurFade delay={0.04}>
        <OffDutySection films={films} />
      </BlurFade>
    </main>
  );
}
