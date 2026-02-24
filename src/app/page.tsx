import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ModeToggle } from "@/components/mode-toggle";
import { RealTimeClock } from "@/components/real-time-clock";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { EducationCard } from "@/components/education-card";
import { ModernExperienceCard } from "@/components/modern-experience-card";
import { TimelineWorkCard } from "@/components/timeline-work-card";
import { OSContributionCard } from "@/components/os-contribution-card";
import { QuoteSection } from "@/components/quote-section";
import { ProjectsSection } from "@/components/projects-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { getBlogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();
  
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 sm:space-y-8 md:space-y-10">
      <section id="hero" className="w-full pt-2 pb-4 sm:pb-6">
        <div className="mx-auto w-full max-w-2xl">
          <div className="py-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8">
              {/* Left Column: Text Content */}
              <div className="space-y-2 flex-1">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    Hi, I&apos;m {DATA.name.split(' ')[0]} 👻
                  </h1>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    19 y/o tech enthusiast, OS contributor, hobbyist developer and tinkerer.
                  </p>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-white border border-gray-300 text-[10px] sm:text-xs text-gray-900">
                      <Icons.globe className="size-3 sm:size-3.5 flex-shrink-0" />
                      <span className="truncate">{DATA.location}</span>
                    </div>
                    <RealTimeClock />
                    <div className="flex items-center gap-1.5">
                      <Link
                        href="https://drive.google.com/file/d/1Vf5ghCo3irbSMk1dgsMcJuWHVVyXq-gZ/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-white border border-gray-300 text-[10px] sm:text-xs text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        <Icons.resume className="size-3 sm:size-3.5 flex-shrink-0" />
                        <span>Resume</span>
                      </Link>
                      <ModeToggle />
                    </div>
                  </div>
                </BlurFade>
              </div>

              {/* Right Column: Profile Image */}
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="relative size-20 sm:size-24 md:size-28 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
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
      <section id="os-contributions" className="mt-8 sm:mt-10 md:mt-12">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-3 sm:gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">OS Contributions</h2>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {DATA.osContributions.map((contribution, id) => (
                <BlurFade
                  key={contribution.name}
                  delay={BLUR_FADE_DELAY * 4.5 + id * 0.05}
                >
                  <OSContributionCard
                    name={contribution.name}
                    description={contribution.description}
                    logo={contribution.logo}
                    href={contribution.href}
                    isCurrent={contribution.isCurrent}
                    badgeText={(contribution as any).badgeText}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full pt-4 pb-8 sm:pb-10 md:pb-12">
          <div className="max-w-2xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">Work Experience</h2>
            </BlurFade>
          </div>
          <div className="max-w-2xl mx-auto">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <TimelineWorkCard
                  company={work.company}
                  href={work.href}
                  location={work.location}
                  title={work.title}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                  number={id + 1}
                  isLast={id === DATA.work.length - 1}
                  specialBadge={(work as any).specialBadge}
                  isActive={work.end === null}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="mt-12 sm:mt-14 md:mt-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-4 sm:gap-y-5 md:gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">Education</h2>
            </BlurFade>
            <div className="space-y-4">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <EducationCard
                    school={education.school}
                    href={education.href}
                    location={education.location}
                    degree={education.degree}
                    period={`${education.start} - ${education.end}`}
                    logoUrl={education.logoUrl}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="mt-12 sm:mt-14 md:mt-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex min-h-0 flex-col gap-y-4 sm:gap-y-5 md:gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">Skills</h2>
            </BlurFade>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
                <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.1}>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground">{category}</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {(skills as readonly string[]).map((skill, skillIndex) => (
                        <BlurFade
                          key={skill}
                          delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.1 + skillIndex * 0.02}
                        >
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-md bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 transition-colors">
                            {skill}
                          </span>
                        </BlurFade>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <ProjectsSection 
          projects={DATA.projects as any}
          title="Personal Projects"
          blurFadeDelay={BLUR_FADE_DELAY * 11}
        />
      </section>
      <section id="client-projects">
        <ProjectsSection 
          projects={DATA.clientProjects as any}
          title="Freelancing Client Work"
          blurFadeDelay={BLUR_FADE_DELAY * 13}
        />
      </section>
      <section id="articles" className="w-full py-8 sm:py-10 md:py-12">
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-7 md:space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">My thoughts on ... everything</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                I love writing about tech, programming, and life in general. I hope you will click on them by mistake. Here are a few of my latest articles. You can find more on my{" "}
                <Link href="/blog" className="text-blue-500 hover:underline">
                  blog page
                </Link>
                .
              </p>
            </div>
          </BlurFade>
          <div className="space-y-3 sm:space-y-4">
            {posts
              .sort((a, b) => {
                if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                  return -1;
                }
                return 1;
              })
              .slice(0, 3)
              .map((post, id) => (
                <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 14.5 + id * 0.05}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:shadow-md">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center text-base sm:text-xl font-bold text-muted-foreground">
                        {post.metadata.title.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">
                          {post.metadata.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                          {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                          {post.metadata.publishedAt && 
                            ` (${Math.ceil((Date.now() - new Date(post.metadata.publishedAt).getTime()) / (1000 * 60 * 60 * 24 * 30))}mo ago)`
                          }
                        </p>
                        {post.metadata.summary && (
                          <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2">
                            {post.metadata.summary}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0 text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                        {post.metadata.readingTime || "5 mins read"}
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="mx-auto w-full max-w-2xl">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full py-8 sm:py-10 md:py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">Hackathons and Competitions</h2>
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
      <section id="github-contributions" className="w-full py-8 sm:py-10 md:py-12">
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-7 md:space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">GitHub Contributions</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-2">
              <Image
                src="https://ghchart.rshah.org/10b981/rajneeshverma1"
                alt="GitHub Contribution Chart"
                width={800}
                height={200}
                className="w-full rounded-lg dark:invert dark:hue-rotate-180"
                unoptimized
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-muted-foreground px-2 gap-2 sm:gap-0">
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
      <section id="contact" className="w-full py-8 sm:py-10 md:py-12">
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-7 md:space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 19.5}>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">Hook with me</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Let&apos;s connect and build something cool together. Feel free to reach out to me. I&apos;m always open to new opportunities and collaborations. Reach out to me via{" "}
                <Link
                  href="mailto:wwrajneesh807@gmail.com"
                  className="font-medium text-foreground hover:text-blue-500 underline underline-offset-4 transition-colors"
                >
                  email: (wwrajneesh807@gmail.com)
                </Link>{" "}
                or dm me on{" "}
                <Link
                  href="https://x.com/Rajneeshvermaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-blue-500 underline underline-offset-4 transition-colors"
                >
                  Twitter
                </Link>
                {" "}or{" "}
                <Link
                  href="https://www.linkedin.com/in/rajneesh-verma-4a871825b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-blue-500 underline underline-offset-4 transition-colors"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <QuoteSection />
      </BlurFade>
      <footer className="border-t">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3 sm:gap-4 py-6 sm:py-8 px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              Design & Developed by <span className="font-semibold text-foreground">Rajneesh</span>
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2026. All rights reserved.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 23}>
            <div className="flex items-center gap-3 sm:gap-4">
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
                    <social.icon className="size-4 sm:size-5" />
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
