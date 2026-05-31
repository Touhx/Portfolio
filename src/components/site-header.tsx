"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-white">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase relative z-[60]"
        >
          PORTFOLIO
        </Link>

        <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase text-gray-400">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-white transition-colors duration-300 ${pathname === href ? "text-white" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden relative z-[60] p-2 -mr-2 text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="w-20 hidden md:block" />
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#0a0a0a]/98 backdrop-blur-sm flex flex-col items-center justify-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-2xl font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                pathname === href ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
