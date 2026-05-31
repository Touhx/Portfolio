"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      // Prevent Lenis from consuming wheel events fired on iframes
      // (e.g. embedded Vimeo players) which would halt scrolling
      eventsTarget: document.documentElement,
      content: document.body,
      autoResize: true,
    });

    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const resize = () => lenis.resize();

    window.addEventListener("load", resize);
    document.fonts?.ready.then(resize);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.body);

    // Case-study images load after Lenis init; recalculate scroll bounds
    const onImageLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) {
        resize();
      }
    };
    document.addEventListener("load", onImageLoad, true);

    return () => {
      window.removeEventListener("load", resize);
      document.removeEventListener("load", onImageLoad, true);
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Recalculate scroll height after client-side navigation and layout shifts
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.resize();
    const timers = [100, 400, 1000].map((delay) =>
      window.setTimeout(() => lenis.resize(), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return <>{children}</>;
}
