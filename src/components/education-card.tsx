"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface EducationCardProps {
  school: string;
  href?: string;
  location: string;
  degree: string;
  period: string;
  logoUrl?: string;
}

export const EducationCard = ({
  school,
  href,
  location,
  degree,
  period,
  logoUrl,
}: EducationCardProps) => {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
      {/* Logo */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={school}
            width={48}
            height={48}
            className="object-contain w-full h-full scale-110"
          />
        ) : (
          <span className="text-lg font-semibold text-foreground">{school.charAt(0)}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-grow">
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-base hover:underline group"
            >
              {school}
              <ChevronRightIcon className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
            <p className="text-sm text-muted-foreground mt-0.5">{location}</p>
            <p className="text-sm text-foreground mt-1">{degree}</p>
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap">
            {period}
          </div>
        </div>
      </div>
    </div>
  );
};
