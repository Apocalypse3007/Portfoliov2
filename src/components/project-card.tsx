import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  bullets?: readonly string[];
  dates: string;
  tags: readonly string[];
  className?: string;
}

export function ProjectCard({ title, href, description, bullets, dates, tags, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="p-6 flex flex-col gap-5 flex-1 sm:flex-row sm:gap-8">
        <div className="flex flex-col gap-3 sm:w-52 sm:flex-none">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold leading-snug">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm sm:order-last"
                aria-label={`Open ${title}`}
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:mt-auto">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <p className="text-xs text-pretty leading-relaxed text-muted-foreground">{description}</p>
          {bullets && bullets.length > 0 && (
            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
