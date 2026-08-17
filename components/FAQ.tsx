"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Rise from "./Rise";

const ITEMS = [
  { q: "What is CertSigma's core expertise?", a: "CertSigma specialises in compliance automation, cybersecurity audits, and certification support for frameworks such as SOC 2, ISO 27001, HIPAA, GDPR, and PCI DSS. We combine automation tools with human expertise to simplify complex compliance processes." },
  { q: "How long does a SOC 2 or ISO 27001 audit take?", a: "A SOC 2 Type I or an ISO 27001 stage-one audit moves quickly once evidence is ready. A SOC 2 Type II needs an observation period of its own — usually three to twelve months — because it tests whether controls operated, not just whether they exist. You'll get a real timeline at scoping." },
  { q: "Can you handle several frameworks at once?", a: "Yes, and it's usually cheaper than running them separately. A control evidenced for ISO 27001 satisfies most of what SOC 2 asks for, so we build one evidence set and map it across every framework in scope." },
  { q: "Do you work predominantly with clients from a specific Region?", a: "No. We have a global presense in Dubai and India to cover both the US, EU and APAC Regions." },
  { q: "What happens after we're certified?", a: "We will help you remain compliant throughout the year with our optional vCISO services and will also help you with each year's surveillance re-audits." },
  { q: "We already have controls in place. Can you just audit?", a: "Yes. We have a pool of peer reviewed CPA's who we've handpicked for independent audits." },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={"fitem" + (open ? " open" : "")}>
      <button className="fq" onClick={onToggle}>
        {q}
        <span className="pm">+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="fa"
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: "hidden", maxHeight: "none" }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">Questions</span>
          <h2>Before you book a call.</h2>
        </Rise>
        <Rise className="faq" id="faqList">
          {ITEMS.map((item, n) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIdx === n}
              onToggle={() => setOpenIdx(openIdx === n ? -1 : n)}
            />
          ))}
        </Rise>
      </div>
    </section>
  );
}
