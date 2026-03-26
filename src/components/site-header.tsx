"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  
  // Do not show header in the admin panel to keep them separate
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-white">
      {/* Logo */}
      <Link href="/" className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">
        PORTFOLIO
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase text-gray-400">
        <Link href="/" className={`hover:text-white transition-colors duration-300 ${pathname === '/' ? 'text-white' : ''}`}>Home</Link>
        <Link href="/about" className={`hover:text-white transition-colors duration-300 ${pathname === '/about' ? 'text-white' : ''}`}>About</Link>
        <Link href="/collection" className={`hover:text-white transition-colors duration-300 ${pathname === '/collection' ? 'text-white' : ''}`}>Collection</Link>
      </nav>

      {/* Admin/Contact Link */}
      <div>
        <Link 
          href="/admin" 
          className="border border-white/40 uppercase text-[10px] uppercase tracking-widest px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          Admin
        </Link>
      </div>
    </header>
  );
}
