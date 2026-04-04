"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    // <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-white">
    <header className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-white">
      {/* Logo */}
      <Link href="/" className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">
        PORTFOLIO
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase text-gray-400">
        <Link href="/" className={`hover:text-white transition-colors duration-300 ${pathname === '/' ? 'text-white' : ''}`}>Home</Link>
        <Link href="/collection" className={`hover:text-white transition-colors duration-300 ${pathname === '/collection' ? 'text-white' : ''}`}>Collection</Link>
      </nav>

      {/* Empty div to maintain spacing if needed, or remove */}
      <div className="w-20 hidden md:block" />
    </header>
  );
}
