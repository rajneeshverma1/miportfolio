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
    <div className="relative flex gap-6 pb-8">
      {/* Timeline Line and Number */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Number Circle */}
        <div className="w-11 h-11 rounded-full border-2 border-border/50 bg-background flex items-center justify-center relative z-10">
          <span className="text-sm font-semibold text-foreground">{number}</span>
        </div>
        
        {/* Vertical Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border/50 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow pt-1 pb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-foreground">{company}</h3>
            {isActive && (
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-[10px] font-medium text-green-600 dark:text-green-500">Current</span>
                <div className="relative flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
              </div>
            )}
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
        </div>

        {/* Job Title Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-md bg-muted/50 border border-border/50 mb-2">
          <span className="text-xs font-medium text-foreground">{title}</span>
        </div>

        {/* Location */}
        <p className="text-sm text-muted-foreground mb-3">{location}</p>

        {/* Description */}
        <p className="text-sm text-foreground/90 leading-relaxed mb-4">{description}</p>

        {/* Buttons or Special Badge */}
        <div className="flex gap-2">
          {specialBadge ? (
            <div className="inline-flex items-center px-3 py-1.5 rounded-md border border-gray-300 bg-white text-xs font-medium text-gray-900">
              {specialBadge}
            </div>
          ) : (
            showWebsite && href && href !== "#" && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-xs font-medium text-gray-900"
              >
                <ExternalLinkIcon className="size-3" />
                Website
              </Link>
            )
          )}
        </div>

        {/* Dotted separator line */}
        {!isLast && (
          <div className="mt-6 border-b border-dashed border-border/50"></div>
        )}
      </div>
    </div>
  );
};
