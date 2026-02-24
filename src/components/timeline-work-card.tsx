"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

interface TimelineWorkCardProps {
  company: string;
  href?: string;
  location: string;
  title: string;
  period: string;
  description: string;
  number: number;
  isLast?: boolean;
  specialBadge?: string;
  showWebsite?: boolean;
  isActive?: boolean;
}

export const TimelineWorkCard = ({
  company,
  href,
  location,
  title,
  period,
  description,
  number,
  isLast = false,
  specialBadge,
  showWebsite = true,
  isActive = false,
}: TimelineWorkCardProps) => {
  return (
    <div className="relative flex gap-3 sm:gap-4 md:gap-6 pb-6 sm:pb-8">
      {/* Timeline Line and Number */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Number Circle */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 border-border/50 bg-background flex items-center justify-center relative z-10">
          <span className="text-xs sm:text-sm font-semibold text-foreground">{number}</span>
        </div>
        
        {/* Vertical Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border/50 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow pt-1 pb-3 sm:pb-4">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-bold text-foreground">{company}</h3>
            {isActive && (
              <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-[9px] sm:text-[10px] font-medium text-green-600 dark:text-green-500">Current</span>
                <div className="relative flex items-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
              </div>
            )}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{period}</span>
        </div>

        {/* Job Title Badge */}
        <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-muted/50 border border-border/50 mb-2">
          <span className="text-[10px] sm:text-xs font-medium text-foreground">{title}</span>
        </div>

        {/* Location */}
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{location}</p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-3 sm:mb-4">{description}</p>

        {/* Buttons or Special Badge */}
        <div className="flex gap-2">
          {specialBadge ? (
            <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-gray-300 bg-white text-[10px] sm:text-xs font-medium text-gray-900">
              {specialBadge}
            </div>
          ) : (
            showWebsite && href && href !== "#" && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-[10px] sm:text-xs font-medium text-gray-900"
              >
                <ExternalLinkIcon className="size-2.5 sm:size-3" />
                Website
              </Link>
            )
          )}
        </div>

        {/* Dotted separator line */}
        {!isLast && (
          <div className="mt-4 sm:mt-6 border-b border-dashed border-border/50"></div>
        )}
      </div>
    </div>
  );
};
