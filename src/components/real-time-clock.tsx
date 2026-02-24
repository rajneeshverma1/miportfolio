"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";

export function RealTimeClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-white border border-gray-300 text-[10px] sm:text-xs text-gray-900">
      <Icons.clock className="size-3 sm:size-3.5 flex-shrink-0" />
      <span className="tabular-nums">{time || "00:00:00"}</span>
    </div>
  );
}
