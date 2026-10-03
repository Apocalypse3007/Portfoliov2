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
  description:
    "Software developer and undergraduate researcher into AI, finance and code LLMs. Sports geek, video game nerd and movie buff.",
  summary:
    "I'm a BTech student at IIIT Delhi building AI products at Aakaar AI and researching Code LLMs at MIDAS Lab. Curiosity got me here: I started by poking around game files to squeeze more performance out of my PC, and these days I'm deep into code, with AI and finance holding most of my attention. Outside of that, you'll find me gaming or catching up on movies.",
  bio: [
    "Tldr; started by tearing apart game files to squeeze out more FPS.",
    "Iron Man fan since before I could explain what an arc reactor was.",
    "Deep into code, with AI and finance holding most of my attention.",
    "Dabbled in Photoshop and FL Studio. Never took either past beginner.",
    "Still gaming, and a bit of a movie buff on the side.",
  ],
  email: "singhanany3007@gmail.com",
  links: {
    github: "https://github.com/Apocalypse3007",
    linkedin: "https://www.linkedin.com/in/-anany-singh-/",
    resume: "/resume.pdf",
    x: "https://x.com/Apocalypse3007",
    // TODO: add real handle once provided
    instagram: undefined as string | undefined,
  },
};


export const skills = {
  Languages: ["Python", "C", "C++", "Rust", "Golang", "Java", "JavaScript", "SQL"],
  "Frameworks & Tools": ["React", "Node.js", "Next.js", "Docker", "Kafka", "Google Cloud", "Git", "Postman"],
  "AI / ML": ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
  Concepts: [
    "Machine Learning",
    "LLM Evaluation",
    "Agentic Systems",
    "Data Structures",
    "Algorithms",
    "Distributed Systems",
  ],
};

export const education = [
  {
    school: "Indraprastha Institute of Information Technology",
    degree: "BTech in Electronics and VLSI Engineering",
    start: "Aug 2023",
    end: "Present",
    href: "https://www.iiitd.ac.in",
    logo: "/iiitd.png",
  },
];

export type ExperienceEntry = {
  kind: "work" | "education" | "publication";
  org: string;
  role: string;
  date: string;
  description: string;
  logo?: string;
  /** Fill the avatar circle instead of fitting inside it (for full-bleed logo art). */
  logoCover?: boolean;
};


export const experience: ExperienceEntry[] = [
  {
    kind: "work",
    org: "Aakaar AI",
    logo: "/aakaar.png",
    role: "Software Development Engineer",
    date: "May 2026 — Present",
    description:
      "Architected and built an AI-powered Listing Agent for Amazon sellers with 2 entry flows (ASIN-based and description-based), generating 7 named slot images and 6 discovery/archetype variations per session, and owned 20 tracked tickets (10 P0). Designed a 4-table data model and async job pipeline with status tracking and per-slot versioning, then implemented free-tier quota enforcement and closed 2 quota-bypass paths that allowed unmetered generation.",
  },
  {
    kind: "work",
    org: "MIDAS Lab",
    logo: "/midas.png",
    role: "Undergraduate Researcher",
    date: "Jan 2026 — Present",
    description:
      "Co-authored a study of 5 code LLMs on 538 executable RunBugRun problems: confidently wrong debugging instructions cut pass rates by up to 30 points and left every model below its no-guidance baseline. Identified \"Blind Obedience\" (models flag the wrong instruction as incorrect, yet still follow it), confirmed with paired McNemar tests (p < 0.001 on all 5 models). Built a multi-pass agentic evaluation harness showing most corrupted programs stay unrecovered.",
  },
  {
    kind: "work",
    org: "Camarin AI",
    logo: "/camarin.png",
    logoCover: true,
    role: "Full-Stack Intern",
    date: "Dec 2024",
    description:
      "Built the entire frontend in Next.js and wired it to an existing backend model, accelerating the project timeline by 25% and improving frontend load times by 40%.",
  },
];

export type Paper = {
  title: string;
  venue: string;
  date: string;
  href: string;
};

export const papers: Paper[] = [
  {
    title:
      "Obey, Diverge, Collapse: Blind Obedience to Incorrect Instructions Drives Code LLMs to Irrecoverable Code Semantic Collapse",
    venue: "arXiv",
    date: "Jul 2026",
    href: "https://arxiv.org/abs/2607.04537",
  },
  {
    title: "Detection of Fake News",
    venue: "IJARESM",
    date: "Jul 2022",
    href: "https://www.ijaresm.com/uploaded_files/document_file/Adit_DahiyajnK2.pdf",
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
    name: "Sputniq AgentOS",
    date: "May 2026",
    description:
      "A config-driven orchestration platform for deploying distributed agentic AI systems, cutting deployment to a single zip upload or one docker compose up.",
    bullets: [
      "Provisions apps across 15 Docker-in-Docker worker nodes via a FastAPI control API, a Kafka message bus and a CLI (init, validate, build, package, deploy)",
      "Scripted node provisioning (SSH key generation, image build, network attachment) and orchestrated the Control API, Kafka and Zookeeper in one Docker Compose stack",
    ],
    stack: ["Python", "FastAPI", "Kafka", "Docker"],
    href: "https://github.com/Apocalypse3007/Sputniq-AgentOS",
  },
  {
    name: "SignTrack",
    date: "Mar 2025",
    description:
      "A real-time computer vision pipeline for traffic-signal detection and counting from dashcam footage.",
    bullets: [
      "Fine-tuned a pretrained YOLOv8 model via transfer learning on a custom-annotated dataset",
      "Augmentation pipeline (brightness/contrast jitter, motion blur, synthetic fog/rain) and IoU-based NMS tuning to cut false positives",
      "Geotagged detections with GPS metadata and used DBSCAN clustering to deduplicate repeated sightings of the same signal",
    ],
    stack: ["Python", "OpenCV", "TensorFlow", "React"],
    href: "https://github.com/Apocalypse3007/SignTrack",
  },
  {
    name: "BFT-Metronome: Byzantine Fault-Tolerant Clock Synchronization",
    date: "Jan 2025 – May 2025",
    description:
      "A novel Byzantine fault-tolerant clock synchronization protocol combining Brooks-Iyengar sensor fusion with Inter-Tertile Range (ITR) outlier detection to achieve bounded-error time agreement in adversarial peer-to-peer networks, tolerating up to N/3−1 malicious nodes.",
    bullets: [
      "Switched from quartile- to tertile-based outlier filtering, raising Byzantine tolerance from 25% to the theoretical 33% bound",
      "Applied Brooks-Iyengar interval fusion to aggregate uncertainty ranges into a single consensus offset with a quantified confidence interval",
    ],
    stack: ["Rust", "libp2p", "Distributed Systems"],
    href: "https://github.com/heemankv/BFT-Metronome",
  },
];
