"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Rise from "./Rise";

const ITEMS = [
  { q: "What does CertSigma certify, and what does Relynt do?", a: "CertSigma runs the audit and issues the certificate or attestation report. Relynt, the sister practice, does hands-on implementation — building controls, running vCISO programmes — before an audit begins. Separating them is what protects the independence of the audit." },
  { q: "How long does a SOC 2 or ISO 27001 audit take?", a: "A SOC 2 Type I or an ISO 27001 stage-one audit moves quickly once evidence is ready. A SOC 2 Type II needs an observation period of its own — usually three to twelve months — because it tests whether controls operated, not just whether they exist. You'll get a real timeline at scoping." },
  { q: "Can you handle several frameworks at once?", a: "Yes, and it's usually cheaper than running them separately. A control evidenced for ISO 27001 satisfies most of what SOC 2 asks for, so we build one evidence set and map it across every framework in scope." },
  { q: "Do you work with companies outside India?", a: "Yes. CertSigma is India-based, but the certifications are the ones enterprise buyers expect everywhere. Most clients are selling into the US, EU or Gulf markets from an India-based or India-founded team." },
  { q: "What happens after we're certified?", a: "ISO certificates run a three-year cycle with annual surveillance audits. SOC 2 Type II reports need renewal each observation period. The surveillance calendar is built into the engagement from day one so nothing lapses by accident." },
  { q: "We already have controls in place. Can you just audit?", a: "Absolutely. If you're already prepared, come straight to CertSigma for the audit — Relynt is there for teams who need the build-out, not a requirement." },
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
