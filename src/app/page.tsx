import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ModeToggle } from "@/components/mode-toggle";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { ModernExperienceCard } from "@/components/modern-experience-card";
import { QuoteSection } from "@/components/quote-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 px-4 sm:px-6 md:px-8">
      <section id="hero" className="w-full pt-2 pb-6 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-end mb-2">
            <ModeToggle />
          </div>

          <div className="py-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              {/* Left Column: Text Content */}
              <div className="flex-1 space-y-2 pr-0">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Hi, I&apos;m {DATA.name.split(' ')[0]} 👻
                  </h1>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    24-year-old tech enthusiast, sports lover and OS contributor.
                  </p>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                      <Icons.globe className="size-3.5 sm:size-4" />
                      <span>{DATA.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                      <Icons.clock className="size-3.5 sm:size-4" />
                      <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
                    </div>
                    <Link
                      href="https://drive.google.com/file/d/1Vf5ghCo3irbSMk1dgsMcJuWHVVyXq-gZ/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icons.resume className="size-3.5 sm:size-4" />
                      <span>Resume</span>
                    </Link>
                  </div>
                </BlurFade>
              </div>

              {/* Right Column: Profile Image */}
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="relative size-24 sm:size-32 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                  <Image
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="space-y-12 w-full py-12">
          <div className="max-w-2xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Work Experience</h2>
            </BlurFade>
          </div>
          <div className="space-y-6 max-w-2xl mx-auto">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ModernExperienceCard
                  key={work.company}
                  title={work.title}
                  company={work.company}
                  badges={work.end === null ? [{ text: "Current", color: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" }] : work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="mt-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-6">
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
        </div>
      </section>
      <section id="skills" className="mt-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Skills</h2>
            </BlurFade>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase().replace(".", "").replace(" ", "")
                          .replace("javascript", "javascript")
                          .replace("typescript", "typescript")
                          .replace("nextjs", "nextjs")
                          .replace("nodejs", "nodejs")
                          .replace("express", "express")
                          .replace("mongodb", "mongodb")
                          .replace("postgresql", "postgresql")
                          .replace("mysql", "mysql")
                          .replace("prisma", "prisma")
                          .replace("docker", "docker")
                          .replace("kubernetes", "kubernetes")
                          .replace("git", "git")
                          .replace("tailwindcss", "tailwindcss")
                          .replace("c++", "cplusplus")
                          .replace("java", "java")
                          .replace("react", "react")}-original.svg`}
                        alt={skill}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center">{skill}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="max-w-2xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Personal Projects</h2>
            </BlurFade>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
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
          <div className="max-w-2xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Freelancing Client Work</h2>
            </BlurFade>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
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
        <div className="mx-auto w-full max-w-2xl">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">Hackathons and Competitions</h2>
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
        </div>
      </section>
      <section id="github-contributions" className="w-full py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl italic">GitHub Contributions</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-2">
              <Image
                src="https://ghchart.rshah.org/10b981/curiousrajneesh27"
                alt="GitHub Contribution Chart"
                width={800}
                height={200}
                className="w-full rounded-lg dark:invert dark:hue-rotate-180"
                unoptimized
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
      <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <QuoteSection />
      </BlurFade>
      <footer className="border-t">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 py-8 px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <p className="text-sm text-muted-foreground text-center">
              Design & Developed by <span className="font-semibold text-foreground">Rajneesh</span>
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <p className="text-sm text-muted-foreground text-center">
              © 2026. All rights reserved.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 23}>
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
