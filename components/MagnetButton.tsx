"use client";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function MagnetButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduce = useReducedMotion();

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (reduce || !matchMedia("(hover:hover)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.22;
    const y = (e.clientY - r.top - r.height / 2) * 0.34;
    el.style.transform = `translate(${x}px,${y}px)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </a>
  );
}
