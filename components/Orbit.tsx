"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRise } from "@/hooks/useRise";

type Sat = {
  ring: 1 | 2 | 3;
  a: number;
  dr: number;
  bs: number;
  dur: string;
  icon: string;
  num: string;
  fam: string;
  desc: string;
};

const RADIUS_VAR = { 1: "var(--r1)", 2: "var(--r2)", 3: "var(--r3)" };

const ORBIT_DATA: Sat[] = [
  // ring 1 — the four everybody asks for, biggest badges
  { ring: 1, a: 8, dr: 6, bs: 88, dur: "50s", icon: "i-globe", num: "ISO 27001", fam: "ISO/IEC 27001:2022", desc: "The global benchmark for an information security management system." },
  { ring: 1, a: 104, dr: -14, bs: 80, dur: "57s", icon: "i-report", num: "SOC 2", fam: "AICPA attestation", desc: "The report US enterprise buyers ask for first — Type I or Type II." },
  { ring: 1, a: 196, dr: 10, bs: 76, dur: "53s", icon: "i-health", num: "HIPAA", fam: "US HHS", desc: "Safeguards for protected health information and business associates." },
  { ring: 1, a: 279, dr: -6, bs: 82, dur: "46s", icon: "i-stars", num: "GDPR", fam: "EU 2016/679", desc: "In scope the moment an EU resident is one of your users." },
  // ring 2 — mid tier, counter-rotating
  { ring: 2, a: 41, dr: 12, bs: 74, dur: "68s", icon: "i-ai", num: "ISO 42001", fam: "ISO/IEC 42001:2023", desc: "The first certifiable standard for AI management systems." },
  { ring: 2, a: 118, dr: -18, bs: 66, dur: "76s", icon: "i-card", num: "PCI DSS", fam: "PCI SSC 4.x", desc: "Mandatory wherever cardholder data is processed or stored." },
  { ring: 2, a: 167, dr: 8, bs: 70, dur: "64s", icon: "i-privacy", num: "ISO 27701", fam: "ISO/IEC 27701", desc: "Privacy management layered on 27001 — the cleanest route to GDPR evidence." },
  { ring: 2, a: 243, dr: -10, bs: 72, dur: "71s", icon: "i-grid", num: "NIST CSF", fam: "NIST CSF 2.0", desc: "Framework alignment and maturity scoring across the core functions." },
  { ring: 2, a: 322, dr: 16, bs: 68, dur: "80s", icon: "i-rosette", num: "ISO 9001", fam: "ISO 9001:2015", desc: "The quality standard tenders and procurement teams ask for." },
  // ring 3 — outer, smallest, slowest
  { ring: 3, a: 23, dr: -12, bs: 62, dur: "92s", icon: "i-cloud", num: "ISO 27017", fam: "ISO/IEC 27017", desc: "Cloud-specific controls for shared responsibility and multi-tenancy." },
  { ring: 3, a: 79, dr: 14, bs: 58, dur: "104s", icon: "i-continuity", num: "ISO 22301", fam: "ISO 22301", desc: "Business continuity management, increasingly requested alongside 27001." },
  { ring: 3, a: 151, dr: -8, bs: 64, dur: "88s", icon: "i-shieldlock", num: "CMMC", fam: "DoD CMMC 2.0", desc: "Readiness gap work against NIST SP 800-171 ahead of a C3PAO audit." },
  { ring: 3, a: 214, dr: 18, bs: 56, dur: "98s", icon: "i-leaf", num: "ISO 14001", fam: "ISO 14001:2015", desc: "Environmental management, common in manufacturing supply chains." },
  { ring: 3, a: 296, dr: -4, bs: 60, dur: "110s", icon: "i-safety", num: "ISO 45001", fam: "ISO 45001:2018", desc: "Occupational health and safety management systems." },
];

const RING_DIR: Record<1 | 2 | 3, string | undefined> = {
  1: undefined,
  2: "reverse",
  3: undefined,
};
const RING_DUR: Record<1 | 2 | 3, string> = { 1: "52s", 2: "71s", 3: "94s" };

export default function Orbit() {
  const reduce = useReducedMotion();
  const [core, setCore] = useState<{ num: string; fam: string; desc: string } | null>(
    null
  );
  const stageRef = useRef<HTMLDivElement | null>(null);
  const seen = useRise(stageRef);

  return (
    <div
      ref={stageRef}
      className={"orbit-stage" + (seen ? " seen" : "")}
      data-rise
    >
      <div className="orbit" id="orbit">
        <span className="ringpath rp1"></span>
        <span className="ringpath rp2"></span>
        <span className="ringpath rp3"></span>

        {([1, 2, 3] as const).map((ring) => (
          <div
            key={ring}
            className={`ring ring--${ring}`}
            style={
              {
                "--dur": RING_DUR[ring],
                ...(RING_DIR[ring] ? { "--dir": RING_DIR[ring] } : {}),
              } as React.CSSProperties
            }
          >
            {ORBIT_DATA.filter((d) => d.ring === ring).map((d, idx) => {
              const dir = RING_DIR[ring];
              const armStyle = {
                "--a": d.a + "deg",
                "--dur": d.dur,
                ...(dir ? { "--dir": dir } : {}),
                ...(reduce ? { animation: "none" } : {}),
              } as React.CSSProperties;
              const faceStyle = {
                "--a": d.a + "deg",
                "--dur": d.dur,
                ...(dir ? { "--dir": dir } : {}),
                ...(reduce ? { animation: "none" } : {}),
              } as React.CSSProperties;
              const satStyle = {
                "--r": `calc(${RADIUS_VAR[ring]} + ${d.dr}px)`,
              } as React.CSSProperties;

              return (
                <div key={d.num + idx} className="satarm" style={armStyle}>
                  <div className="sat" style={satStyle}>
                    <div className="satface" style={faceStyle}>
                      <motion.a
                        href="#frameworks"
                        className="badge"
                        style={{ "--bs": d.bs + "px" } as React.CSSProperties}
                        aria-label={`${d.num} — ${d.desc}`}
                        onMouseEnter={() => setCore(d)}
                        onFocus={() => setCore(d)}
                        onMouseLeave={() => setCore(null)}
                        onBlur={() => setCore(null)}
                        initial={false}
                        animate={{ opacity: seen ? 1 : 0 }}
                        transition={{
                          duration: 0.5,
                          delay: reduce ? 0 : ORBIT_DATA.indexOf(d) * 0.045,
                          ease: [0.2, 0.8, 0.2, 1],
                        }}
                      >
                        <svg aria-hidden="true">
                          <use href={`#${d.icon}`}></use>
                        </svg>
                        <span className="bnum">{d.num}</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        <div className={"orbit-core" + (core ? " detail" : "")} id="orbitCore">
          <div className="big" id="orbitBig">
            {core ? core.num : "20+"}
          </div>
          <div className="cap" id="orbitCap">
            {core ? core.fam : "Frameworks covered"}
          </div>
          <div className="desc" id="orbitDesc">
            {core ? core.desc : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
