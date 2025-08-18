"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-white/10 text-black dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 shadow-lg"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] dark:opacity-100"
            style={{ opacity: theme === "dark" ? 0 : 1 }}
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] dark:opacity-0"
            style={{ opacity: theme === "dark" ? 1 : 0 }}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-2xl"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
