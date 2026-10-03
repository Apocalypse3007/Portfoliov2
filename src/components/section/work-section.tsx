"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/lib/data";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function Monogram({ name, logo, cover }: { name: string; logo?: string; cover?: boolean }) {
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={name}
        className={cn(
          "size-8 md:size-10 border rounded-full shadow ring-2 ring-border overflow-hidden flex-none bg-white",
          cover ? "object-cover" : "object-contain p-1"
        )}
      />
    );
  }
  return (
    <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-xs font-semibold text-muted-foreground">
      {name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)}
    </div>
  );
}

export default function WorkSection() {
  const work = experience.filter((e) => e.kind === "work");
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {work.map((item) => (
        <AccordionItem key={item.org} value={item.org} className="w-full border-b-0 grid gap-2">
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <Monogram name={item.org} logo={item.logo} cover={item.logoCover} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {item.org}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-xs text-foreground/80">{item.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>{item.date.replace("—", "-")}</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-sm text-foreground">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
