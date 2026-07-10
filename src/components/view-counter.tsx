"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Fetch and increment the view count
    fetch("https://api.counterapi.dev/v1/rajneesh/miportfolio/up")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          // To make it look more impressive initially, we can add a base number, 
          // or just show the real count. We'll show the real count since it's authentic.
          setViews(data.count);
        }
      })
      .catch((err) => console.error("Error fetching view count", err));
  }, []);

  if (views === null) return null;

  return (
    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-white border border-gray-300 text-[10px] sm:text-xs text-gray-900">
      <Eye className="size-3 sm:size-3.5 flex-shrink-0" />
      <span className="truncate font-medium">{views} Views</span>
    </div>
  );
}
