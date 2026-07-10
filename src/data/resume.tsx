import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajneesh Verma",
  initials: "RV",
  url: "https://curiousrajneesh.vercel.app",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/Lucknow",
  description: `Building AI-powered & Full Stack apps with DevOps that make an impact.`,
  summary:
    "Hey! I'm Rajneesh, a Full Stack & DevOps Engineer specializing in building scalable web applications and cloud infrastructure. I work with modern technologies like React, Node.js, Docker, and Kubernetes to create production-ready systems. Currently focused on CI/CD pipelines, containerization, and deploying SaaS products that drive real impact.",
  avatarUrl: "/profile1.jpeg",
  skills: {
    Frontend: ["React", "Next.js", "TailwindCSS", "Aceternity UI", "ShadCN UI", "Tanstack Query", "Redux"],
    "Javascript runtime": ["Node.js", "pnpm", "Bun", "Edge runtime (Vercel)", "CF Worker"],
    Backend: ["Express.js", "websocket", "Next.js", "Node.js"],
    "Database(including ORM and ODM)": ["Prisma", "Mongoose", "PostgreSQL", "MySQL"],
    Firmware: ["C++", "Javascript", "Typescript"],
    Devops: ["Redis", "docker", "k8s", "Kafka", "CICD"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "curiousrajneesh2024@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajneeshverma1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajneesh-verma-4a871825b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rajneeshvermaa",
        icon: Icons.x,

        navbar: true,
      },
      Reddit: {
        name: "Reddit",
        url: "https://www.reddit.com/user/rajneesh807/",
        icon: Icons.reddit,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sidekick (YC P26)",
      href: "#",
      badges: [],
      location: "San Francisco, California, United States · Remote",
      title: "Founding GT Engineer",
      logoUrl: "",
      start: "May 2026",
      end: "Present",
      description: `Joined a YC W26 backed startup as a Founding Growth & Technical Engineer.
• Working across Full-Stack Development, AI Engineering, and Growth Engineering to build and scale products from 0→1.
• Building scalable frontend and backend systems while contributing to product architecture and performance optimization.
• Developing AI-powered workflows, automations, and internal tools to improve product efficiency and user experience.
• Collaborating closely with the founding team on product strategy, rapid experimentation, user acquisition, and growth systems.
• Contributing across both technical execution and growth initiatives in a fast-paced, high-ownership startup environment.`,
    },
    {
      company: "Flyrank AI",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Backend AI Engineer",
      logoUrl: "",
      start: "Jul 2026",
      end: "Present",
      description: `Building and shipping AI backend systems at FlyRank AI - working on LLM integrations, APIs, automation pipelines, and scalable infrastructure.`,
    },
    {
      company: "Stealth AI Startup",
      href: "#",
      badges: [],
      location: "South Africa · Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "Mar 2025",
      end: "May 2026",
      description: `• Scaled the edtech platform to support 500+ concurrent users, optimizing backend services and real-time systems for low latency and high reliability.
• Engineered a live video lecture system for real-time classes, ensuring smooth streaming and interaction.
• Built a video upload & content management pipeline to support recorded lectures and on-demand learning.
• Developed advanced edtech features like interactive chat, engagement tools, and progress tracking, improving user retention.
• Designed and implemented a premium subscription model with feature gating to enable monetization and unlock advanced features.
• Took end-to-end ownership in a zero-to-one startup environment, collaborating with product/design to rapidly build, iterate, and launch features used by real users.`,
    },
    {
      company: "Stealth AI Startup",
      href: "#",
      badges: [],
      location: "South Africa · Remote",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "Jan 2025",
      end: "Mar 2025",
      description: `• Built and shipped scalable full-stack features, including backend APIs and real-time workflows to support multi-user live learning sessions.
• Engineered a live video lecture system and implemented a video upload & management pipeline for recorded content delivery.
• Designed and implemented a premium subscription model with feature gating to drive monetization and unlock advanced features.
• Took end-to-end ownership in a zero-to-one startup environment, collaborating with product/design to improve performance, reliability, and user experience.`,
    },
    {
      company: "Software Engineer (Contract) - US Based startup",
      badges: [],
      href: "#",
      location: "Remote, India",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "May 2024",
      end: "December 2024",
      description: `Delivered full-stack solutions for diverse clients. Built responsive web applications using React, Node.js, and MongoDB. Implemented RESTful APIs, integrated third-party services, and optimized application performance for production environments.`,
    },
    {
      company: "Software Engineer (Freelancer) - Mumbai based real state startup",
      href: "#",
      badges: [],
      location: "Remote, India",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "March 2024",
      end: "May 2024",
      description: `Specialized in backend development and API design. Built scalable server-side applications with Node.js and Express, designed database schemas for MongoDB and PostgreSQL, and implemented secure authentication and authorization systems.`,
    },
  ],
  education: [
    {
      school: "Sri Ramswaroop Memorial University",
      href: "https://srmu.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Uttar Pradesh, India",
      logoUrl: "/SRMU.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "100xDevs Cohort",
      href: "https://100xdevs.com",
      degree: "Full Stack Development & DevOps by Harkirat Singh",
      location: "Online",
      logoUrl: "/og.ico",
      start: "2024",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Lumify",
      href: "https://lumify-axdo.vercel.app",
      dates: "",
      active: true,
      description: `Transform your code and screenshots into stunning visuals with Lumify`,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rajneeshverma1/Lumify",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://lumify-axdo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Lumify.png",
      video: "",
    },
    {
      title: "Matic AI (SAAS)",
      href: "https://maticstudio.site",
      dates: "",
      active: true,
      description: `A text-to-educational-animation engine that converts structured content into animated learning sequences. Features content parsing, scene mapping, and timeline orchestration for AI-assisted educational content.`,
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
          href: "https://maticstudio.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Maticai.png",
      video: "",
    },
    {
      title: "Drafty AI",
      href: "https://creo.hrsht.me",
      dates: "",
      active: true,
      description: `Drafty is a high-performance, real-time collaborative white boarding application. The goal of this project was to explore the challenges of synchronizing complex, mutable state across multiple clients with minimal latency, while pushing the boundaries of what can be rendered smoothly in the browser.`,
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "WebSockets",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rajneeshverma1/Drafty",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://creo.hrsht.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Drafty.png",
      video: "",
    },
    {
      title: "Docly AI",
      href: "#",
      dates: "",
      active: true,
      description: `Chat with your documents. Upload any PDF and get instant, cited answers powered by Groq + Jina AI.`,
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
          href: "https://github.com/rajneeshverma1/Docly-AI",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Link Soon",
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
      description: `A high-fidelity SaaS landing page for B2B billing automation with premium aesthetics and cinematic animations. Built with focus on pixel-perfect responsiveness showcasing AI-powered financial workflows.`,
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
      title: "Netflix GPT",
      href: "#",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description: `An AI-powered Netflix clone with intelligent movie recommendations and GPT-powered search. Features personalized content suggestions with modern streaming interface built with React and TMDB API.`,
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

  ],
  clientProjects: [
    {
      title: "Agritech Cold Storage",
      location: "Lucknow",
      active: true,
      amount: "$650",
      badge: "Current",
      description: `Third freelancing project: developing a comprehensive scalable SaaS solution for cold storage facilities in local areas, featuring advanced inventory management, real-time temperature monitoring and tracking, automated alerts for storage conditions, and optimized operational workflows to enhance efficiency and reduce waste.`,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Socket.io",
      ],
      links: [],
      image: "/Coldstore.png",
      video: "",
    },
    {
      title: "Ayush Realtors",
      location: "Mumbai",
      dates: "Jun 2025 - Aug 2025",
      active: true,
      amount: "$125",
      badge: "Delivered",
      description: `A comprehensive modern real estate platform with detailed property listings, advanced search filters with multiple parameters, immersive virtual tours, and interactive maps. Features robust inquiry management system and analytics dashboard to help clients find their dream properties efficiently.`,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Google Maps API",
        "Cloudinary",
      ],
      links: [],
      image: "/Ayush.png",
      video: "",
    },
    {
      title: "Dream Smile Dental",
      location: "USA",
      dates: "Mar 2025 - May 2025",
      active: true,
      amount: "$350",
      badge: "Delivered",
      description: `A comprehensive modern dental clinic management system with seamless appointment booking, detailed patient records management, automated billing and invoicing, and payment processing. Streamlined clinical operations resulting in 40% faster patient processing and improved overall patient experience.`,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Stripe",
      ],
      links: [],
      image: "/Dreamsmile.png",
      video: "",
    },
  ],
  // Flagship hackathons, coding competitions, and academic fests
  hackathons: [
    {
      title: "Technex - Sri Ramswaroop Memorial University",
      dates: "March 2025",
      location: "Lucknow, India",
      description: `Competed and triumphed in Technex, the premier annual technical fest at Sri Ramswaroop Memorial University, building state-of-the-art technical prototypes and presenting software solutions.`,
      image: "/SRMU.jpg",
      links: [],
    },
    {
      title: "Coding Competition - Sri Ramswaroop Memorial University",
      dates: "September 2024",
      location: "Lucknow, India",
      description: `Secured 1st Position and Rank 1 in the university-wide Coding Competition at Sri Ramswaroop Memorial University, solving complex data structures and algorithmic challenges.`,
      image: "/SRMU.jpg",
      links: [],
    },
    {
      title: "AI Hackathon - Chandigarh University",
      dates: "October 2025",
      location: "Chandigarh, India",
      description: `Qualified in the AI Hackathon organized by Chandigarh University. Developed AI-powered solutions and competed with teams from across the region.`,
      image:
        "/chandigarhuniversityup_logo.jpg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "August 2025",
      location: "India",
      description: `Participated in Smart India Hackathon 2025, India's largest hackathon initiative. Collaborated with team members to develop innovative solutions addressing real-world problems.`,
      image:
        "/SIH2.webp",
      links: [],
    },
  ],
  osContributions: [
    {
      name: "Cal.com",
      description: `Open-source scheduling infrastructure`,
      logo: "/cal.avif",
      href: "https://cal.com",
      isCurrent: true,
    },
    {
      name: "Dodo Payment",
      description: `Open-source payment infrastructure`,
      logo: "/dodopayments_logo.jpg",
      href: "https://dodopayments.com",
      isCurrent: false,
      badgeText: "Done",
    },
  ],
} as const;
