"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface OSContributionCardProps {
  name: string;
  description: string;
  logo: string;
  href: string;
  isCurrent?: boolean;
  badgeText?: string;
}

export const OSContributionCard = ({
  name,
  description,
  logo,
  href,
  isCurrent = false,
  badgeText,
}: OSContributionCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-all hover:shadow-sm group"
    >
      {/* Logo */}
      <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="object-contain w-full h-full scale-110 group-hover:scale-125 transition-transform"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {(isCurrent || badgeText) && (
            <span className="px-1 py-0 text-[9px] font-medium rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
              {badgeText || "Current"}
            </span>
          )}
        </div>
        <p className="text-[11px] text-muted-foreground leading-tight">
          {description}
        </p>
      </div>
    </Link>
  );
};
