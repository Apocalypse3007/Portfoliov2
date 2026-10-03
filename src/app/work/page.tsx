import BlurFade from "@/components/magicui/blur-fade";
import ProjectsSection from "@/components/section/projects-section";
import ResearchSection from "@/components/section/research-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Research",
  description: "Things I've built and papers I've published.",
};

export default function WorkPage() {
  return (
    <main className="flex flex-col gap-14">
      <BlurFade delay={0.04}>
        <ProjectsSection />
      </BlurFade>
      <BlurFade delay={0.08}>
        <ResearchSection />
      </BlurFade>
    </main>
  );
}
