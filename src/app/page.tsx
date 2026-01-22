import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ModeToggle } from "@/components/mode-toggle";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { QuoteSection } from "@/components/quote-section";
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
    <main className="flex flex-col min-h-[100dvh] space-y-10 px-4 sm:px-6 md:px-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="size-24 border-2">
                  <AvatarImage src="/Profile.jpg" alt={DATA.name} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-black tracking-tight">{DATA.name}</h1>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Full Stack & DevOps</span> Engineer</p>
                </div>
              </div>
              <ModeToggle />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
                <span className="font-light text-foreground/80">Building </span>
                <span className="italic font-extrabold text-foreground">AI-powered</span>
                <span className="font-black text-foreground"> & </span>
                <span className="italic font-black text-foreground">Full Stack</span>
                <span className="font-light text-foreground/80"> apps that </span>
                <span className="font-black relative inline-block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  make an impact.
                  <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
                </span>
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Hey! I&apos;m <span className="font-semibold text-foreground">{DATA.name.split(" ")[0]}</span>, a Full Stack & DevOps Engineer focused on{" "}
              <span className="font-semibold text-foreground">React</span> and mastering{" "}
              <span className="font-semibold text-foreground">Node.js</span>. I build{" "}
              <span className="font-semibold text-foreground">scalable full stack apps</span>. Currently working on{" "}
              <span className="font-semibold text-foreground">modern web products, and DevOps tools</span> that drive real impact.
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex items-center justify-between gap-4 flex-wrap">
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
              <Link
                href="mailto:curiousrajneesh2024@gmail.com"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                )}
              >
                Book a Meeting
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-6">
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
                badges={work.end === null ? [{text: "Current", color: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"}] : work.badges}
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
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase().replace('.', '').replace(' ', '')
                        .replace('javascript', 'javascript')
                        .replace('typescript', 'typescript')
                        .replace('nextjs', 'nextjs')
                        .replace('nodejs', 'nodejs')
                        .replace('express', 'express')
                        .replace('mongodb', 'mongodb')
                        .replace('postgresql', 'postgresql')
                        .replace('mysql', 'mysql')
                        .replace('prisma', 'prisma')
                        .replace('docker', 'docker')
                        .replace('kubernetes', 'kubernetes')
                        .replace('git', 'git')
                        .replace('tailwindcss', 'tailwindcss')
                        .replace('c++', 'cplusplus')
                        .replace('java', 'java')
                        .replace('react', 'react')}/${skill.toLowerCase().replace('.', '').replace(' ', '')
                        .replace('javascript', 'javascript')
                        .replace('typescript', 'typescript')
                        .replace('nextjs', 'nextjs')
                        .replace('nodejs', 'nodejs')
                        .replace('express', 'express')
                        .replace('mongodb', 'mongodb')
                        .replace('postgresql', 'postgresql')
                        .replace('mysql', 'mysql')
                        .replace('prisma', 'prisma')
                        .replace('docker', 'docker')
                        .replace('kubernetes', 'kubernetes')
                        .replace('git', 'git')
                        .replace('tailwindcss', 'tailwindcss')
                        .replace('c++', 'cplusplus')
                        .replace('java', 'java')
                        .replace('react', 'react')}-original.svg`}
                      alt={skill}
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
