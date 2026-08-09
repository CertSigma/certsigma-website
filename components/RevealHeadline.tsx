"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Splits its text children into word-level <span class="rvl"> nodes and
 * staggers them in on mount, matching the original BlurText-style reveal.
 * Non-text children (e.g. the <span class="gtext">) are preserved and
 * recursed into so their words animate too.
 */
export default function RevealHeadline({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    let i = 0;
    function wrap(node: ChildNode) {
      if (node.nodeType === 3) {
        const text = node.textContent || "";
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((tok) => {
          if (!tok.trim()) {
            frag.appendChild(document.createTextNode(tok));
            return;
          }
          const sp = document.createElement("span");
          sp.className = "rvl";
          sp.style.setProperty("--d", i++ * 0.075 + "s");
          sp.textContent = tok;
          frag.appendChild(sp);
        });
        node.parentNode?.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        // Wrap the whole element as a single reveal unit instead of
        // reaching inside it. Elements like the gradient ".gtext" span
        // rely on background-clip:text painting directly on their own
        // text node — splitting that text into new inline-block spans
        // breaks the clip and the words render invisible. Wrapping the
        // element from the outside keeps its internal styling intact.
        const el = node as HTMLElement;
        const outer = document.createElement("span");
        outer.className = "rvl";
        outer.style.setProperty("--d", i++ * 0.075 + "s");
        el.parentNode?.replaceChild(outer, el);
        outer.appendChild(el);
      }
    }
    Array.from(host.childNodes).forEach(wrap);

    const rvls = host.querySelectorAll<HTMLElement>(".rvl");
    if (reduce) {
      rvls.forEach((el) => {
        el.style.opacity = "1";
        el.style.filter = "none";
        el.style.transform = "none";
      });
    } else {
      requestAnimationFrame(() => {
        rvls.forEach((el) => el.classList.add("go"));
      });
    }
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
