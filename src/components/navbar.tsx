import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/lib/data";
import { FileTextIcon, HomeIcon, NotebookIcon } from "lucide-react";

const NAV = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
  { href: profile.links.resume, icon: FileTextIcon, label: "Resume" },
];

const SOCIAL = [
  { href: profile.links.github, icon: Icons.github, label: "GitHub" },
  { href: profile.links.linkedin, icon: Icons.linkedin, label: "LinkedIn" },
  { href: profile.links.x, icon: Icons.x, label: "X" },
  { href: `mailto:${profile.email}`, icon: Icons.email, label: "Email" },
];

const iconClass =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

const tipClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

function DockLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          aria-label={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <DockIcon className={iconClass}>
            <Icon className="size-full rounded-sm overflow-hidden object-contain" />
          </DockIcon>
        </a>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={8} className={tipClass}>
        <p>{label}</p>
        <TooltipArrow className="fill-primary" />
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {NAV.map((item) => (
          <DockLink key={item.label} {...item} />
        ))}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        {SOCIAL.map((item) => (
          <DockLink key={item.label} {...item} />
        ))}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={iconClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tipClass}>
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
