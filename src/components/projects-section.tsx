"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image: string;
  video: string;
  amount?: string;
  badge?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  title: string;
  blurFadeDelay: number;
}

export function ProjectsSection({ projects, title, blurFadeDelay }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full py-8 sm:py-10 md:py-12">
      <div className="max-w-2xl mx-auto">
        <BlurFade delay={blurFadeDelay}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter">{title}</h2>
        </BlurFade>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-2xl mx-auto">
        {displayedProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={blurFadeDelay + 0.04 + id * 0.05}
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
              amount={project.amount}
              badge={project.badge}
            />
          </BlurFade>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="flex justify-end max-w-2xl mx-auto mt-6 sm:mt-8">
          <BlurFade delay={blurFadeDelay + 0.3}>
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-gray-900"
            >
              {showAll ? "Show Less" : "See More"}
            </Button>
          </BlurFade>
        </div>
      )}
    </div>
  );
}
