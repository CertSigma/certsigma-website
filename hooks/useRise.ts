"use client";
import { useEffect, useState, RefObject } from "react";

/**
 * Wires an existing ref up to the same rise-on-scroll IntersectionObserver
 * behavior used by <Rise>, without taking ownership of the ref (so it can
 * be combined with other refs/handlers on the same element).
 */
export function useRise(ref: RefObject<HTMLElement | null>) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return seen;
}
