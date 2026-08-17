"use client";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    idx: "01",
    title: "The auditor never graded their own homework",
    body: "CertSigma only audits — we don't build or sell the controls we're assessing. When a prospect asks who built the controls, the answer isn't \"the same people who signed off on them\".",
    pinTitle: "Independence you can point to",
    pinBlurb: "Most compliance firms sell you the build and the audit in one contract. We stay on one side of that line on purpose, because a certificate is only worth what the independence behind it is worth.",
  },
  {
    idx: "02",
    title: "You talk to the person signing the opinion",
    body: "No handoff to an account manager reading from a checklist. The auditor on the kickoff call is the auditor on the closing meeting.",
    pinTitle: "Lead auditors, not coordinators",
    pinBlurb: "Every engagement is run by someone qualified to sign the opinion. You get their judgement on scoping calls, not a project manager relaying it back second-hand.",
  },
  {
    idx: "03",
    title: "Nothing gets discovered halfway through",
    body: "Published process, fixed-scope quote, and an evidence list you can hand to your team on day one.",
    pinTitle: "Fixed scope, in writing",
    pinBlurb: "The audit plan, the evidence list and the timeline are agreed before anything is signed. Scope changes are a conversation, not an invoice.",
  },
  {
    idx: "04",
    title: "Recognised wherever you're selling",
    body: "The certificate has to satisfy your customer's procurement team, not just your own compliance checklist. We scope for the former.",
    pinTitle: "Built for the buyers you have",
    pinBlurb: "India-based team, globally recognised certifications. Most of our clients are selling into the US, EU or Gulf from an India-based or India-founded team.",
  },
];

export default function PinnedScroll() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = els.indexOf(e.target as HTMLDivElement);
          if (i !== -1) setActive(i);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = ITEMS[active];

  return (
    <section id="why" style={{ paddingTop: 0 }}>
      <div className="wrap pinwrap">
        <div className="pinrail">
          <span className="pinnum" id="pinNum">
            {String(active + 1).padStart(2, "0")} / 0{ITEMS.length}
          </span>
          <h2 id="pinTitle">{current.pinTitle}</h2>
          <p id="pinBlurb">{current.pinBlurb}</p>
          <a href="#start" className="b b--fill">
            Book a free assessment <span className="ar">→</span>
          </a>
        </div>

        <div className="pinlist" id="pinList">
          {ITEMS.map((item, n) => (
            <div
              key={item.idx}
              ref={(el) => {
                refs.current[n] = el;
              }}
              className={"pinitem" + (active === n ? " active" : "")}
              data-title={item.pinTitle}
              data-blurb={item.pinBlurb}
            >
              <span className="idx">{item.idx}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
