"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  gradient?: string;
  amount?: string;
  badge?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  gradient,
  amount,
  badge,
}: Props) {
  const gradientClass = gradient || "bg-gradient-to-br from-zinc-900 via-black to-zinc-800";
  const [showAllTags, setShowAllTags] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
    
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border-2 border-zinc-800/80 hover:border-zinc-700 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 ease-out h-full group"
      }
    >
        <Link
          href={href || "#"}
          className={cn("block cursor-pointer p-4 transition-all duration-300", gradientClass, className)}
        >
          <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 shadow-2xl"
              />
            )}
            {image && (
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 shadow-2xl"
              />
            )}
          </div>
        </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="mt-1 text-base text-white">{title}</CardTitle>
              {badge && (
                <span className={cn(
                  "text-[9px] font-medium px-1.5 py-0.5 rounded-full",
                  badge === "Current" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                )}>
                  {badge}
                </span>
              )}
            </div>
            {amount && (
              <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full border border-green-500/30">
                {amount}
              </span>
            )}
          </div>
          <time className="font-sans text-xs text-white">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="text-xs text-white">
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-white dark:prose-invert">
              {showFullDescription ? description : description.split('.')[0] + '.'}
            </Markdown>
            {description.split('.').length > 2 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-white/70 hover:text-white text-[10px] ml-1 underline"
              >
                {showFullDescription ? "less" : "more"}
              </button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {(showAllTags ? tags : tags.slice(0, 3))?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge
                className="px-1 py-0 text-[10px] cursor-pointer"
                variant="secondary"
                onClick={() => setShowAllTags(!showAllTags)}
              >
                {showAllTags ? "less" : `+${tags.length - 3} more`}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
