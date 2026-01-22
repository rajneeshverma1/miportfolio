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
}: Props) {
  const getGradientClass = () => {
    if (title === "Netflix GPT" || title === "DevTube") {
      return "bg-gradient-to-br from-red-600 via-black to-red-800";
    }
    if (title === "Dream Smile Dental") {
      return "bg-gradient-to-br from-white via-red-100 to-red-300";
    }
    if (title === "Ayush Realtors") {
      return "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300";
    }
    if (title === "DevTinder") {
      return "bg-gradient-to-br from-gray-200 via-white to-gray-100";
    }
    return gradient || "bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700";
  };
  
  const gradientClass = getGradientClass();
    
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border-2 border-emerald-500/50 hover:border-emerald-500 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 ease-out h-full group"
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
          <CardTitle className="mt-1 text-base text-white">{title}</CardTitle>
          <time className="font-sans text-xs text-white">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-white dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
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
