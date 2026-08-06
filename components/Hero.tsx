"use client";
import { motion, type Variants } from "framer-motion";
import RevealHeadline from "./RevealHeadline";
import MagnetButton from "./MagnetButton";
import Orbit from "./Orbit";

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.55 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="aurora" aria-hidden="true">
        <i className="a1"></i>
        <i className="a2"></i>
        <i className="a3"></i>
        <i className="a4"></i>
      </div>
      <div className="grain" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span className="shiny" variants={item}>
            <b>New</b> ISO 42001 for AI management systems
          </motion.span>
          <RevealHeadline>
            Security certification, <span className="gtext">without the theatre.</span>
          </RevealHeadline>
          <motion.p className="lede" variants={item}>
            CertSigma audits and certifies fast-growing SaaS and fintech teams
            against SOC 2, ISO 27001, ISO 42001, GDPR, HIPAA and 20+ other
            frameworks. India-based lead auditors, fixed scope, no surprise
            findings on audit day.
          </motion.p>
          <motion.div className="hero-cta" variants={item}>
            <MagnetButton href="#start" className="b b--blue">
              Book a free assessment <span className="ar">→</span>
            </MagnetButton>
            <MagnetButton href="#platform" className="b b--line">
              See what&apos;s included
            </MagnetButton>
          </motion.div>
          <motion.div className="hero-meta" variants={item}>
            <span className="chip">20+ frameworks</span>
            <span className="chip">Lead auditor on every engagement</span>
            <span className="chip">Fixed scope, published process</span>
          </motion.div>
        </motion.div>

        <Orbit />
      </div>
    </div>
  );
}
