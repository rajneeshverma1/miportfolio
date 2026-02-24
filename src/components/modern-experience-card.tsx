"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

interface ModernExperienceCardProps {
  title: string;
  company: string;
  badges?: readonly (string | {text: string, color: string})[];
  period: string;
  description?: string;
}

export const ModernExperienceCard = ({
  title,
  company,
  badges,
  period,
  description,
}: ModernExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div
        onClick={() => description && setIsExpanded(!isExpanded)}
        className={cn(
          "py-4",
          description && "cursor-pointer"
        )}
      >
        {/* Main content row */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 md:gap-6">
          {/* Left side: Title and Company */}
          <div className="flex-1 min-w-0 w-full sm:w-auto">
            {/* Role Title */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-1">
              <h3 className={cn(
                "text-base sm:text-lg md:text-xl font-semibold tracking-tight",
                "transition-opacity duration-300",
                description && "group-hover:opacity-70"
              )}>
                {title}
              </h3>
              {badges && badges.length > 0 && (
                <span className="inline-flex gap-x-1 sm:gap-x-1.5">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0 rounded-full",
                        typeof badge === 'object' ? badge.color : "bg-primary/10 text-primary"
                      )}
                      key={index}
                    >
                      {typeof badge === 'string' ? badge : badge.text}
                    </Badge>
                  ))}
                </span>
              )}
            </div>
            
            {/* Company Name */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground/70 font-normal">
              {company}
            </p>
          </div>

          {/* Right side: Period */}
          <div className="flex-shrink-0 text-left sm:text-right">
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground/50 font-normal whitespace-nowrap">
              {period}
            </p>
          </div>
        </div>

        {/* Description - Expandable */}
        {description && (
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 12 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-muted-foreground/65 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
