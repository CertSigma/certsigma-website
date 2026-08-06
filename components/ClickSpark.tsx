"use client";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ClickSpark() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    function onDown(e: PointerEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest(".b, .badge, .ptab, .fq")) return;
      for (let k = 0; k < 8; k++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.style.left = e.clientX + "px";
        s.style.top = e.clientY + "px";
        document.body.appendChild(s);
        const ang = ((Math.PI * 2) / 8) * k;
        const dist = 22 + Math.random() * 16;
        s.animate(
          [
            { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
            {
              transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${
                Math.sin(ang) * dist
              }px)) scale(0)`,
              opacity: 0,
            },
          ],
          { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" }
        ).onfinish = () => s.remove();
      }
    }
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [reduce]);

  return null;
}
