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
  logo: string;
  alt: string;
  num: string;
  fam: string;
  desc: string;
};

const RADIUS_VAR = { 1: "var(--r1)", 2: "var(--r2)", 3: "var(--r3)" };

const ORBIT_DATA: Sat[] = [
  // ring 1 — the two everybody asks for, biggest badges
  { ring: 1, a: 90, dr: 6, bs: 84, dur: "50s", logo: "/services_logo/iso.png", alt: "ISO 27001 logo", num: "ISO 27001", fam: "ISO/IEC 27001:2022", desc: "The global benchmark for an information security management system." },
  { ring: 1, a: 210, dr: -6, bs: 84, dur: "57s", logo: "/services_logo/aicpa.png", alt: "AICPA SOC 2 logo", num: "SOC 2", fam: "AICPA attestation", desc: "The report US enterprise buyers ask for first — Type I or Type II." },
  { ring: 1, a: 330, dr: 10, bs: 84, dur: "53s", logo: "/services_logo/iso.png", alt: "ISO 42001 logo", num: "ISO 42001", fam: "ISO/IEC 42001:2023", desc: "The first certifiable standard for AI management systems." },
  // ring 2 — mid tier, counter-rotating
  { ring: 2, a: 50, dr: 12, bs: 84, dur: "68s", logo: "/services_logo/hippa_logo.png", alt: "HIPAA logo", num: "HIPAA", fam: "US HHS", desc: "Safeguards for protected health information and business associates." },
  { ring: 2, a: 170, dr: -14, bs: 84, dur: "76s", logo: "/services_logo/gdpr.png", alt: "GDPR logo", num: "GDPR", fam: "EU 2016/679", desc: "In scope the moment an EU resident is one of your users." },
  { ring: 2, a: 290, dr: 8, bs: 84, dur: "64s", logo: "/services_logo/iso.png", alt: "ISO 14001 logo", num: "ISO 14001", fam: "ISO 14001:2015", desc: "Environmental management, common in manufacturing supply chains." },
  // ring 3 — outer, smallest, slowest
  { ring: 3, a: 10, dr: 10, bs: 84, dur: "92s", logo: "/services_logo/pci.png", alt: "PCI DSS logo", num: "PCI DSS", fam: "PCI SSC 4.x", desc: "Mandatory wherever cardholder data is processed or stored." },
  { ring: 3, a: 130, dr: -8, bs: 84, dur: "104s", logo: "/services_logo/nist.png", alt: "NIST CSF logo", num: "NIST CSF", fam: "NIST CSF 2.0", desc: "Framework alignment and maturity scoring across the core functions." },
  { ring: 3, a: 250, dr: 14, bs: 84, dur: "88s", logo: "/services_logo/iso.png", alt: "ISO 45001 logo", num: "ISO 45001", fam: "ISO 45001:2018", desc: "Occupational health and safety management systems." },
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={d.logo} alt={d.alt} />
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
