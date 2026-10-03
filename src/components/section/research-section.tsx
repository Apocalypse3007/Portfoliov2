import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section/page-section-header";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { papers } from "@/lib/data";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";

export default function ResearchSection() {
  return (
    <section id="research" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <SectionHeader
          badge="Research"
          title="I like asking why"
          description="Papers I've published on code LLMs and applied machine learning."
        />
        <Timeline>
          {papers.map((paper) => (
            <TimelineItem key={paper.href} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex items-center justify-center text-muted-foreground">
                  <FileText className="size-4" />
                </div>
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                <time className="text-xs text-muted-foreground">{paper.date}</time>
                <h3 className="font-semibold leading-snug">{paper.title}</h3>
                <p className="text-sm text-muted-foreground">{paper.venue}</p>
                <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                  <Link href={paper.href} target="_blank" rel="noopener noreferrer">
                    <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                      Paper
                      <ArrowUpRight className="size-3" />
                    </Badge>
                  </Link>
                </div>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
