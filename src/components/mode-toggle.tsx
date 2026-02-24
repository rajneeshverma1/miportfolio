"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white hover:bg-gray-50 border border-gray-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1rem] w-[1rem] sm:h-[1.1rem] sm:w-[1.1rem] text-gray-900 dark:hidden" />
      <MoonIcon className="hidden h-[1rem] w-[1rem] sm:h-[1.1rem] sm:w-[1.1rem] text-gray-900 dark:block" />
    </Button>
  );
}
