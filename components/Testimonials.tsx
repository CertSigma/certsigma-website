"use client";
import { useRef, useState } from "react";
import Rise from "./Rise";
import { useRise } from "@/hooks/useRise";

const QUOTES = [
  { title: "They told us what was broken in week one, not week nine.", body: "The gap report came back with owners already assigned. Our engineers knew exactly what to pick up.", av: "AR", nm: "Ananya R. [placeholder]", rl: "CTO, Example SaaS" },
  { title: "The first audit where nothing was a surprise.", body: "We'd been through one certification before. This was the first time the closing meeting had no findings we hadn't already seen.", av: "JD", nm: "Jordan D. [placeholder]", rl: "VP Engineering, Example Fintech" },
  { title: "One evidence set, three frameworks.", body: "We were bracing to collect everything twice. They mapped it across and we didn't re-run a single control test.", av: "MK", nm: "Meera K. [placeholder]", rl: "Head of Security, Example Health" },
  { title: "Our biggest deal was waiting on this.", body: "Procurement wanted a Type II and a scope that covered the product they were buying. We got both, and the deal closed.", av: "SV", nm: "Sanjay V. [placeholder]", rl: "CEO, Example B2B" },
  { title: "The quote we signed was the invoice we paid.", body: "No mid-engagement scope discovery. That alone put them ahead of the two firms we'd used before.", av: "PN", nm: "Priya N. [placeholder]", rl: "Finance Lead, Example Co." },
  { title: "They knew what our auditor would ask before we did.", body: "Which makes sense, given they are the auditor. The internal dry run made the real thing uneventful.", av: "RG", nm: "Rahul G. [placeholder]", rl: "Head of Platform, Example AI" },
];

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(1);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const railSeen = useRise(railRef);

  function step() {
    const rail = railRef.current;
    if (!rail || !rail.children.length) return 0;
    return (rail.children[0] as HTMLElement).offsetWidth + 18;
  }

  function next() {
    railRef.current?.scrollBy({ left: step(), behavior: "smooth" });
  }
  function prev() {
    railRef.current?.scrollBy({ left: -step(), behavior: "smooth" });
  }
  function onScroll() {
    const rail = railRef.current;
    if (!rail) return;
    const s = step() || 1;
    let i = Math.round(rail.scrollLeft / s) + 1;
    i = Math.max(1, Math.min(QUOTES.length, i));
    setCount(i);
  }

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    startX.current = e.clientX;
    startLeft.current = railRef.current?.scrollLeft || 0;
    setIsDragging(true);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current || !railRef.current) return;
    railRef.current.scrollLeft = startLeft.current - (e.clientX - startX.current);
  }
  function onPointerUp() {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
  }

  return (
    <section id="voices">
      <div className="wrap">
        <Rise as="div" className="rail-head">
          <div>
            <span className="kicker">In their words</span>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", fontWeight: 800 }}>
              What it&apos;s like on the other side.
            </h2>
            <p className="flag" style={{ display: "inline-block", marginTop: 12 }}>
              all six quotes are placeholders — replace before launch
            </p>
          </div>
          <div className="rail-nav">
            <span className="rail-count" id="railCount">
              {String(count).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
            <button aria-label="Previous" onClick={prev}>←</button>
            <button aria-label="Next" onClick={next}>→</button>
          </div>
        </Rise>
        <div
          className={"rail" + (isDragging ? " dragging" : "") + (railSeen ? " seen" : "")}
          id="rail"
          ref={railRef}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          data-rise
        >
          {QUOTES.map((q) => (
            <article className="quote" key={q.nm}>
              <span className="mark">&quot;</span>
              <h3>{q.title}</h3>
              <p>{q.body}</p>
              <div className="by">
                <span className="av">{q.av}</span>
                <span>
                  <span className="nm">{q.nm}</span>
                  <br />
                  <span className="rl">{q.rl}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
