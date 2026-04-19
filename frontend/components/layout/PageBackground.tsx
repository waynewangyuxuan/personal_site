"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme";

const lightBg: Record<string, string> = {
  "/": "#fafaf9",
  "/projects": "#f0e8df",
  "/research": "#e8ecf2",
  "/writing": "#f0ede4",
  "/writings": "#f0ede4",
};

const darkBg: Record<string, string> = {
  "/": "#1a1918",
  "/projects": "#23201c",
  "/research": "#1c1f25",
  "/writing": "#2d2a24",
  "/writings": "#2d2a24",
};

function normalizePath(p: string) {
  return p === "/" ? "/" : p.replace(/\/+$/, "");
}

export function PageBackground() {
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const key = normalizePath(pathname);
    const map = theme === "dark" ? darkBg : lightBg;
    const bg = map[key] || map["/"];
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
    document.body.style.transition = "background-color 0.5s ease";
  }, [pathname, theme]);

  return null;
}
