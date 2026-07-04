export const profile = {
  name: "Anany Singh",
  initials: "AS",
  role: "Software Developer",
  roles: [
    "Software Developer",
    "AI Enthusiast",
    "Sports Geek",
    "Video Game Nerd",
  ],
  location: "New Delhi, India",
  bio: [
    "I've been an Iron Man fan since before I could properly explain what an arc reactor was, thanks to a childhood spent watching Marvel on loop. My real entry into tech happened almost by accident. My parents had a computer at home, and I started poking around it early, using it here and there without much of a plan. Video games pulled me in next, and when my PC couldn't quite keep up, I started digging into game files and tweaking things just to get a little more performance out of it.",
    "That curiosity never really left. Along the way, I dabbled in Photoshop and FL Studio, just enough to get a feel for design and music production, though I never took either past the beginner stage. It was fun to explore, but it always felt more like a detour than the destination.",
    "These days, that original curiosity has me deep into code, with AI and finance holding most of my attention. I'm still the same person who used to take apart game files just to see how they worked. I've just traded one set of files for another.",
    "Outside of that, gaming is still very much a part of my leisure time, and I've grown into a bit of a movie buff along the way. You can find what I'm currently watching, playing, or working on below.",
  ],
  email: "singhanany3007@gmail.com",
  links: {
    github: "https://github.com/ananysingh",
    linkedin: "https://linkedin.com/in/anany-singh",
    resume: "/resume.pdf",
    x: "https://x.com/Apocalypse3007",
    // TODO: add real handle once provided
    instagram: undefined as string | undefined,
  },
};

export const skills = {
  Languages: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "Golang", "Rust", "Solidity"],
  "Frameworks & Tools": [
    "React",
    "Next.js",
    "Node.js",
    "NextAuth",
    "Turborepo",
    "TailwindCSS",
    "Redis",
    "Docker",
    "Git",
    "Postman",
  ],
  "AI / ML": ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "LangChain", "Pandas", "NumPy"],
  Concepts: [
    "Machine Learning",
    "Data Structures & Algorithms",
    "Object-Oriented Design",
    "Operating Systems",
    "Database Management Systems",
  ],
};

export type ExperienceEntry = {
  kind: "work" | "education" | "publication";
  org: string;
  role: string;
  date: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    kind: "work",
    org: "MIDAS Lab",
    role: "Undergraduate Researcher",
    date: "Jan 2026 — Present",
    description:
      "Evaluating and enhancing Code LLMs through the design and orchestration of autonomous agent-based workflows, building benchmarking frameworks to assess model performance and edge-case behavior.",
  },
  {
    kind: "work",
    org: "Camarin AI",
    role: "Full-Stack Intern",
    date: "Dec 2024",
    description:
      "Built the entire frontend in Next.js and wired it to an existing backend model, accelerating the project timeline by 25% and improving frontend load times by 40%.",
  },
  {
    kind: "education",
    org: "IIIT Delhi",
    role: "BTech, Electronics & VLSI Engineering",
    date: "Aug 2023 — Present",
    description: "Indraprastha Institute of Information Technology, New Delhi.",
  },
  {
    kind: "publication",
    org: "IJARESM",
    role: "Detection of Fake News",
    date: "Jul 2022",
    description: "Published in the International Journal of All Research Education and Scientific Methods.",
  },
];

export type Game = {
  name: string;
  image?: string;
  /** True for logo-style art (transparent background) that should never be cropped. */
  logo?: boolean;
  href: string;
  studio: string;
  releaseYear: string;
};

export const games: Game[] = [
  {
    name: "007 First Light",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3768760/dbe86ebd2edb4c77d113e9e2feefeb90189fabc9/header.jpg",
    href: "https://store.steampowered.com/app/3768760",
    studio: "IO Interactive",
    releaseYear: "2026",
  },
  {
    name: "God of War Ragnarök",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
    href: "https://store.steampowered.com/app/2322010",
    studio: "Santa Monica Studio",
    releaseYear: "2024",
  },
  {
    name: "Ghost of Tsushima",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
    href: "https://store.steampowered.com/app/2215430",
    studio: "Sucker Punch Productions",
    releaseYear: "2024",
  },
  {
    name: "Mafia: Definitive Edition",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg",
    href: "https://store.steampowered.com/app/1030840",
    studio: "Hangar 13",
    releaseYear: "2020",
  },
  {
    name: "Counter-Strike 2",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/162664aa5da85f418105350c5d67ca565f6c3713/header.jpg",
    href: "https://store.steampowered.com/app/730",
    studio: "Valve",
    releaseYear: "2012",
  },
  {
    name: "Valorant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/500px-Valorant_logo_-_pink_color_version.svg.png",
    logo: true,
    href: "https://playvalorant.com",
    studio: "Riot Games",
    releaseYear: "2020",
  },
];

export type Project = {
  name: string;
  date: string;
  description: string;
  bullets: string[];
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Collaborative Drawing",
    date: "May 2025",
    description:
      "A real-time collaborative drawing tool built on WebSockets and a pub/sub architecture, supporting sub-100ms latency updates for up to 50 concurrent users.",
    bullets: [
      "p5.js-powered canvas with live shape rendering and real-time parameter editing",
      "Over 95% input responsiveness with under 50ms rendering delay",
      "Responsive Tailwind UI, 100% cross-device compatible",
    ],
    stack: ["TypeScript", "React", "PostgreSQL", "TailwindCSS", "WebSockets"],
    href: "https://github.com/ananysingh",
  },
  {
    name: "SignTrack",
    date: "Mar 2025",
    description:
      "A computer-vision tool that processes dashcam footage to detect and count traffic signals encountered during a drive.",
    bullets: [
      "YOLOv8 object detection fine-tuned for traffic-light recognition",
      "91% detection accuracy across urban and highway datasets",
      "Optimized inference speed for real-time use",
    ],
    stack: ["Python", "OpenCV", "TensorFlow", "React"],
    href: "https://github.com/ananysingh",
  },
  {
    name: "AI-Powered Mental Health Chatbot",
    date: "May 2025",
    description:
      "An empathetic, context-aware conversational assistant for mental health support, built on top of large language models.",
    bullets: [
      "LangChain-based conversational memory and prompt chaining across sessions",
      "FastAPI + PostgreSQL backend for low-latency, secure responses",
      "Anonymized storage of user interaction data",
    ],
    stack: ["LangChain", "Gemini API", "Python", "FastAPI", "PostgreSQL"],
  },
];
