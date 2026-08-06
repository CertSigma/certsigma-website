"use client";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Rise from "./Rise";

type Card = { glyph: string; tone: "g-blue" | "g-gold" | "g-sage"; title: string; body: string };

const GROUPS: { id: string; label: string; cards: Card[] }[] = [
  {
    id: "g-founder",
    label: "Founder",
    cards: [
      { glyph: "🎯", tone: "g-blue", title: "Only the frameworks you need", body: "We scope against your actual deal pipeline. If nobody is asking you for PCI DSS, we won't sell you PCI DSS." },
      { glyph: "📄", tone: "g-gold", title: "A quote you can budget against", body: "Fixed scope, published process, no mid-engagement discovery that quietly doubles the invoice." },
      { glyph: "🧭", tone: "g-sage", title: "One team, two hats kept apart", body: "Relynt builds the controls. CertSigma audits them. Independent by design, not by disclaimer." },
    ],
  },
  {
    id: "g-eng",
    label: "Engineering",
    cards: [
      { glyph: "🔁", tone: "g-blue", title: "Evidence collected once", body: "A control you prove for ISO 27001 mostly satisfies SOC 2 too. We map it across frameworks instead of asking twice." },
      { glyph: "🧪", tone: "g-gold", title: "Pen testing that reads like evidence", body: "Hand-tested, not a scanner export, and written the way an auditor needs to see it." },
      { glyph: "📅", tone: "g-sage", title: "Predictable interrupts", body: "Evidence requests batched to a calendar, so audits don't arrive as a surprise Slack message at 6pm." },
    ],
  },
  {
    id: "g-sec",
    label: "Security & GRC",
    cards: [
      { glyph: "📊", tone: "g-blue", title: "Control-by-control gap scoring", body: "You get a benchmark with named owners and priorities, not a RAG-status PDF that ages out in a month." },
      { glyph: "🔍", tone: "g-gold", title: "Internal audit before external", body: "A dry run against the same criteria the certifying body uses, so nothing lands as a nonconformity." },
      { glyph: "♻️", tone: "g-sage", title: "Surveillance built in", body: "Annual surveillance and recertification scheduled from day one, so a certificate never quietly lapses." },
    ],
  },
  {
    id: "g-sales",
    label: "Sales",
    cards: [
      { glyph: "🔓", tone: "g-blue", title: "Unblock the security review", body: "The report or certificate your prospect's procurement team is actually waiting on, with the scope written to cover the product they're buying." },
      { glyph: "📬", tone: "g-gold", title: "Answers for the questionnaire", body: "The SoA, the report, and the bridge letter, ready to send instead of assembled in a panic." },
      { glyph: "🌍", tone: "g-sage", title: "Recognised where you sell", body: "India-based team, globally accepted certifications — for companies selling into the US, EU and Gulf markets." },
    ],
  },
];

const groupVariants: Variants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const cardStagger: Variants = {
  center: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function PersonaTabs() {
  const [active, setActive] = useState("g-founder");
  const activeGroup = GROUPS.find((g) => g.id === active)!;

  return (
    <section id="platform">
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">What we do</span>
          <h2>Everything an audit needs, and nothing it doesn&apos;t.</h2>
          <p className="lede">
            Certification means different things depending on who&apos;s
            asking for it. Pick the seat you&apos;re sitting in.
          </p>
        </Rise>

        <Rise className="ptabs" role="tablist" id="ptabs">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              className="ptab"
              role="tab"
              aria-selected={active === g.id}
              onClick={() => setActive(g.id)}
              style={{ position: "relative" }}
            >
              {active === g.id && (
                <motion.span
                  layoutId="ptab-indicator"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 999,
                    background: "var(--navy-ink)",
                    zIndex: -1,
                  }}
                />
              )}
              {g.label}
            </button>
          ))}
        </Rise>

        <div id="pgroups">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              id={activeGroup.id}
              className="pgroup on"
              variants={groupVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.div
                style={{ display: "contents" }}
                variants={cardStagger}
                initial="enter"
                animate="center"
              >
                {activeGroup.cards.map((c) => (
                  <motion.div className="pcard" key={c.title} variants={cardVariants}>
                    <div className={"glyph " + c.tone}>{c.glyph}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
