import BlurFade from "@/components/magicui/blur-fade";
import { skills } from "@/lib/data";
import { Database } from "lucide-react";
import {
  siApachekafka,
  siC,
  siCplusplus,
  siDocker,
  siGit,
  siGo,
  siGooglecloud,
  siJavascript,
  siKeras,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRust,
  siScikitlearn,
  siTensorflow,
  type SimpleIcon,
} from "simple-icons";

const ICONS: Record<string, SimpleIcon> = {
  Python: siPython,
  C: siC,
  "C++": siCplusplus,
  Rust: siRust,
  Golang: siGo,
  Java: siOpenjdk,
  JavaScript: siJavascript,
  React: siReact,
  "Node.js": siNodedotjs,
  "Next.js": siNextdotjs,
  Docker: siDocker,
  Kafka: siApachekafka,
  "Google Cloud": siGooglecloud,
  Git: siGit,
  Postman: siPostman,
  PyTorch: siPytorch,
  TensorFlow: siTensorflow,
  Keras: siKeras,
  "Scikit-learn": siScikitlearn,
  Pandas: siPandas,
  NumPy: siNumpy,
};

const BLUR_FADE_DELAY = 0.04;

// Concepts are prose, not tools — keep the chips to languages, frameworks and AI/ML.
const CHIPS = [...skills.Languages, ...skills["Frameworks & Tools"], ...skills["AI / ML"]];

// Near-black brand colors vanish in dark mode, so let those follow the text color.
function isDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b < 70;
}

function SkillIcon({ name }: { name: string }) {
  if (name === "SQL") return <Database className="size-4" />;
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4 flex-none"
      fill={isDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function SkillsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="flex flex-wrap gap-2">
        {CHIPS.map((name, id) => (
          <BlurFade key={name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
              <SkillIcon name={name} />
              <span className="text-foreground text-sm font-medium">{name}</span>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
