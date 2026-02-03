"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 page-container">
      <nav className="flex items-center justify-between py-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          W.
        </Link>

        {/* Nav Items */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm link-underline transition-opacity",
                  pathname === item.href
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
