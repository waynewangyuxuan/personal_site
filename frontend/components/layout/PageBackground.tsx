"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const bgMap: Record<string, string> = {
  "/": "#fafaf9",
  "/projects": "#f0e8df",
  "/research": "#e8ecf2",
  "/writing": "#f0ede4",
  "/writings": "#f0ede4",
};

function normalizePath(p: string) {
  return p === "/" ? "/" : p.replace(/\/+$/, "");
}

export function PageBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const key = normalizePath(pathname);
    const bg = bgMap[key] || bgMap["/"];
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
    document.body.style.transition = "background-color 0.5s ease";
  }, [pathname]);

  return null;
}
