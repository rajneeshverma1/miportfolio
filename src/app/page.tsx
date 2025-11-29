import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ModeToggle } from "@/components/mode-toggle";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="size-24 border-2">
                  <AvatarImage src="/Profile.jpg" alt={DATA.name} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">{DATA.name}</h1>
                  <p className="text-muted-foreground">Full Stack & DevOps Engineer</p>
                </div>
              </div>
              <ModeToggle />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug tracking-tight">
                <span className="font-light">Building </span>
                <span className="italic font-light">AI-powered</span>
                <span className="font-light"> & </span>
                <span className="italic font-light">Full Stack</span>
                <span className="font-light"> apps that </span>
                <span className="font-bold relative inline-block">
                  make an impact.
                  <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-emerald-500"></div>
                </span>
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Hey! I&apos;m <span className="font-semibold text-foreground">{DATA.name.split(" ")[0]}</span>, ...
              <span className="font-semibold text-foreground">React</span> and mastering{" "}
              <span className="font-semibold text-foreground">Node.js</span>. I build{" "}
              <span className="font-semibold text-foreground">scalable full stack apps</span>. Currently working on{" "}
              <span className="font-semibold text-foreground">modern web products, and DevOps tools</span> that drive real impact.
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="https://drive.google.com/file/d/1Vf5ghCo3irbSMk1dgsMcJuWHVVyXq-gZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "gap-2 rounded-full"
                )}
              >
                Resume
                <Download className="size-4" />
              </Link>
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-5" />
                    <span className="sr-only">{name}</span>
                  </Link>
                ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education" className="mt-16">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className="mt-16">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest Personal Projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="client-projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recent Client Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve delivered custom solutions for clients across different industries,
                  from healthcare to real estate, building scalable platforms that solve real business challenges.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {DATA.clientProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <ProjectCard
                  href="#"
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="github-contributions" className="w-full py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                My Contributions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Building in public, one commit at a time. Check out my GitHub activity and contributions.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="max-w-4xl mx-auto space-y-2">
              <img
                src="https://ghchart.rshah.org/10b981/curiousrajneesh27"
                alt="GitHub Contribution Chart"
                className="w-full rounded-lg dark:invert dark:hue-rotate-180"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground px-2">
                <span>481 contributions in the last year</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-emerald-200"></div>
                    <div className="w-3 h-3 rounded-sm bg-emerald-400"></div>
                    <div className="w-3 h-3 rounded-sm bg-emerald-600"></div>
                    <div className="w-3 h-3 rounded-sm bg-emerald-800"></div>
                  </div>
                  <span className="text-xs">More</span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <footer className="border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <p className="text-sm text-muted-foreground">
              © 2025 codexrajneesh.xyz — Built by Rajneesh with ❤️ . All rights reserved.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <div className="flex items-center gap-4">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="size-5" />
                    <span className="sr-only">{name}</span>
                  </Link>
                ))}
            </div>
          </BlurFade>
        </div>
      </footer>
    </main>
  );
}
