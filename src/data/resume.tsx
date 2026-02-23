import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajneesh Verma",
  initials: "RV",
  url: "https://curiousrajneesh.vercel.app",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/Lucknow",
  description:
    "Building AI-powered & Full Stack apps with DevOps that make an impact.",
  summary:
    "Hey! I'm Rajneesh, a Full Stack & DevOps Engineer specializing in building scalable web applications and cloud infrastructure. I work with modern technologies like React, Node.js, Docker, and Kubernetes to create production-ready systems. Currently focused on CI/CD pipelines, containerization, and deploying SaaS products that drive real impact.",
  avatarUrl: "/Profile.jpg",
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
      company: "myeasylearn",
      href: "https://myeasylearn.com",
      badges: [],
      location: "Remote, Africa",
      title: "Founding Engineer",
      logoUrl: "/Myeasylearn.jpg",
      start: "September 2025",
      end: null,
      specialBadge: "Preseed Round • Currently building platform",
      description:
        "Building scalable ed-tech platform for Africa. Architecting full-stack solutions with modern technologies, implementing DevOps best practices, and establishing CI/CD pipelines for rapid deployment.",
    },
    {
      company: "Fiverr",
      badges: [],
      href: "https://www.fiverr.com",
      location: "Remote, India",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "September 2024",
      end: "March 2025",
      description:
        "Delivered full-stack solutions for diverse clients. Built responsive web applications using React, Node.js, and MongoDB. Implemented RESTful APIs, integrated third-party services, and optimized application performance for production environments.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com",
      badges: [],
      location: "Remote, India",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "June 2024",
      end: "August 2025",
      description:
        "Specialized in backend development and API design. Built scalable server-side applications with Node.js and Express, designed database schemas for MongoDB and PostgreSQL, and implemented secure authentication and authorization systems.",
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
          href: "#",
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
          href: "#",
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
      title: "Sketch Flow",
      href: "#",
      dates: "",
      active: true,
      description:
        "A scalable real-time drawing platform with multiplayer canvas synchronization and optimized rendering. Designed for performance, collaboration, and extensibility.",
      technologies: [
        "React",
        "WebSocket",
        "Canvas API",
        "Node.js",
        "Redis",
        "TypeScript",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Sketchflow.png",
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
          href: "#",
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
  ],
  clientProjects: [
    {
      title: "Agritech Cold Storage",
      location: "Lucknow",
      active: true,
      amount: "$650",
      badge: "Current",
      description:
        "Third freelancing project: developing a comprehensive scalable SaaS solution for cold storage facilities in local areas, featuring advanced inventory management, real-time temperature monitoring and tracking, automated alerts for storage conditions, and optimized operational workflows to enhance efficiency and reduce waste.",
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
      description:
        "A comprehensive modern real estate platform with detailed property listings, advanced search filters with multiple parameters, immersive virtual tours, and interactive maps. Features robust inquiry management system and analytics dashboard to help clients find their dream properties efficiently.",
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
      description:
        "A comprehensive modern dental clinic management system with seamless appointment booking, detailed patient records management, automated billing and invoicing, and payment processing. Streamlined clinical operations resulting in 40% faster patient processing and improved overall patient experience.",
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
  hackathons: [
    {
      title: "AI Hackathon - Chandigarh University",
      dates: "October 2025",
      location: "Chandigarh, India",
      description:
        "Qualified in the AI Hackathon organized by Chandigarh University. Developed AI-powered solutions and competed with teams from across the region.",
      image:
        "/chandigarhuniversityup_logo.jpg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "August 2025",
      location: "India",
      description:
        "Participated in Smart India Hackathon 2025, India's largest hackathon initiative. Collaborated with team members to develop innovative solutions addressing real-world problems.",
      image:
        "/SIH2.webp",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "August 2024",
      location: "India",
      description:
        "Participated in Smart India Hackathon 2024, working on innovative tech solutions for national-level challenges. Gained experience in rapid prototyping and team collaboration.",
      image:
        "/SIH2.webp",
      links: [],
    },
  ],
  osContributions: [
    {
      name: "Cal.com",
      description: "Open-source scheduling infrastructure",
      logo: "/cal.avif",
      href: "https://cal.com",
      isCurrent: true,
    },
    {
      name: "Dodo Payment",
      description: "Open-source payment infrastructure",
      logo: "/dodopayments_logo.jpg",
      href: "https://dodopayments.com",
      isCurrent: false,
      badgeText: "Done",
    },
  ],
} as const;
