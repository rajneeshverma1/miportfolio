const fs = require('fs');
const path = '/Users/apple/Desktop/miportfolio/src/data/resume.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const newProjects = `  projects: [
    {
      title: "Lumify",
      href: "#",
      dates: "",
      active: true,
      description:
        "Description goes here. I will provide github and live link later.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Matic AI (SAAS)",
      href: "https://matic-rho.vercel.app/",
      dates: "",
      active: true,
      description:
        "A text-to-educational-animation engine that converts structured content into animated learning sequences. Features content parsing, scene mapping, and timeline orchestration for AI-assisted educational content.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Canvas API",
        "Framer Motion",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rajneeshverma1/main-maticai",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://matic-rho.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/maticai.png",
      video: "",
    },
    {
      title: "Drafty AI",
      href: "#",
      dates: "",
      active: true,
      description:
        "AI-powered platform.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "AI",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Docly AI",
      href: "#",
      dates: "",
      active: true,
      description:
        "Chat with your documents. Upload any PDF and get instant, cited answers powered by Groq + Jina AI.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Groq",
        "Jina AI",
        "React",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Doclyai.png",
      video: "",
    },
    {
      title: "Collectly (SAAS)",
      href: "https://collectly-kappa.vercel.app/",
      dates: "",
      active: true,
      description:
        "A high-fidelity SaaS landing page for B2B billing automation with premium aesthetics and cinematic animations. Built with focus on pixel-perfect responsiveness showcasing AI-powered financial workflows.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Table",
        "React Query",
        "Node.js",
        "Express",
        "Zod",
        "PostgreSQL",
        "Prisma ORM",
        "Stripe SDK",
        "Razorpay SDK",
        "Redis",
        "BullMQ",
        "Supabase Auth",
        "SendGrid",
        "Docker",
        "GitHub Actions",
        "Sentry",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rajneeshverma1/Collectly",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://collectly-kappa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/collectly.png",
      video: "",
    },
    {
      title: "Blitzquiz",
      href: "#",
      dates: "",
      active: true,
      description:
        "A full-stack coding competition platform with contest creation, problem handling, and user participation flows. Built with Next.js and TypeScript for speed and scalability.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rajneeshverma1/blitzquiz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Blitzquiz.png",
      video: "",
    },
    {
      title: "DevTinder",
      href: "#",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "A networking platform for developers to connect and collaborate with profile matching and real-time chat. Features skill-based connections and project collaboration tools with modern full-stack technologies.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Redux",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Devtinder.png",
      video: "",
    },
    {
      title: "Netflix GPT",
      href: "#",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "An AI-powered Netflix clone with intelligent movie recommendations and GPT-powered search. Features personalized content suggestions with modern streaming interface built with React and TMDB API.",
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "OpenAI GPT",
        "TMDB API",
        "Tailwind CSS",
        "Firebase",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Netlfix.png",
      video: "",
    },
    {
      title: "DevTube",
      href: "https://dev-tube.vercel.app/",
      dates: "Mar 2025 - May 2025",
      active: true,
      description:
        "A modern video sharing platform built for developers to upload, stream, and share technical content. Features comments, likes, subscriptions, and responsive UI optimized for code tutorials and tech videos.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
        "Cloudinary",
        "JWT",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://dev-tube.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Devtube.png",
      video: "",
    },
  ],`;

lines.splice(150, 449 - 151 + 1, newProjects);

fs.writeFileSync(path, lines.join('\\n'), 'utf8');
console.log('Done replacing!');
