import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajneesh Verma",
  initials: "RV",
  url: "https://curiousrajneesh.vercel.app",
  location: "Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Uttar+Pradesh",
  description:
    "Building AI-powered & Full Stack apps with DevOps that make an impact.",
  summary:
    "Hey! I'm Rajneesh, a Full Stack & DevOps Engineer specializing in building scalable web applications and cloud infrastructure. I work with modern technologies like React, Node.js, Docker, and Kubernetes to create production-ready systems. Currently focused on CI/CD pipelines, containerization, and deploying SaaS products that drive real impact.",
  avatarUrl: "/Profile.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Docker",
    "Kubernetes",
    "Git",
    "Tailwind CSS",
    "C++",
    "Java",
  ],
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
        url: "https://github.com/curiousrajneesh27",
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
      company: "myeasylearn - Africa",
      href: "https://myeasylearn.com",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/Myeasylearn.jpg",
      start: "September 2025",
      end: null,
      description:
        "Building scalable ed-tech platform for Africa. Architecting full-stack solutions with modern technologies, implementing DevOps best practices, and establishing CI/CD pipelines for rapid deployment.",
    },
    {
      company: "Dream Smile SaaS - DENTAL SAAS from USA",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "September 2024",
      end: "March 2025",
      description:
        "Delivered full-stack solutions for diverse clients. Built responsive web applications using React, Node.js, and MongoDB. Implemented RESTful APIs, integrated third-party services, and optimized application performance for production environments.",
    },
    {
      company: "Ayush Realtors - Mumbai",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "February 2024",
      end: "August 2024",
      description:
        "Specialized in backend development and API design. Built scalable server-side applications with Node.js and Express, designed database schemas for MongoDB and PostgreSQL, and implemented secure authentication and authorization systems.",
    },
  ],
  education: [
    {
      school: "Sri Ramswaroop Memorial University",
      href: "https://srmu.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/SRMU.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "100xDevs Cohort",
      href: "https://100xdevs.com",
      degree: "Full Stack Development & DevOps by Harkirat Singh",
      logoUrl: "/og.ico",
      start: "2024",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "DevTinder",
      href: "#",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "A networking platform for developers to connect and collaborate. Features include profile matching, real-time chat, skill-based connections, and project collaboration tools. Built with modern full-stack technologies.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Redux",
        "Tailwind CSS",
      ],
      links: [],
      image: "/Devtinder.png",
      video: "",
    },
    {
      title: "Netflix GPT",
      href: "#",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "An AI-powered Netflix clone with intelligent movie recommendations. Features include GPT-powered search, personalized content suggestions, and a modern streaming interface built with React and integrated with TMDB API.",
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "OpenAI GPT",
        "TMDB API",
        "Tailwind CSS",
        "Firebase",
      ],
      links: [],
      image: "/Netlfix.png",
      video: "",
    },
    {
      title: "DevTube",
      href: "https://dev-tube.vercel.app/",
      dates: "Mar 2025 - May 2025",
      active: true,
      description:
        "A modern video sharing platform built for developers. Upload, stream, and share technical content with features like comments, likes, subscriptions, and a responsive UI optimized for code tutorials and tech videos.",
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
      title: "Dream Smile Dental",
      location: "USA",
      dates: "Mar 2025 - May 2025",
      active: true,
      description:
        "A modern dental clinic management system for a US-based practice. Built with appointment booking, patient records, treatment history, billing automation, and analytics. Streamlined operations resulting in 40% faster patient processing and improved clinic efficiency.",
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
    {
      title: "Ayush Realtors",
      location: "Mumbai",
      dates: "Jun 2025 - Aug 2025",
      active: true,
      description:
        "Ayush Realtors is a modern real estate platform for a Mumbai-based property consultancy. The platform features property listings with advanced search filters, virtual tours, inquiry management, and analytics dashboard. Built to help clients find their dream properties seamlessly.",
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
} as const;
