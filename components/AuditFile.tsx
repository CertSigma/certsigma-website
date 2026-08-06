"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRise } from "@/hooks/useRise";

const TABS = [
  { id: "p-scope", label: "Scope" },
  { id: "p-evid", label: "Evidence" },
  { id: "p-cert", label: "Certificate" },
];

export default function AuditFile() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileRef = useRef<HTMLDivElement | null>(null);
  const seen = useRise(fileRef);

  useEffect(() => {
    if (reduce) return;
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % TABS.length);
    }, 4200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduce]);

  function select(n: number) {
    if (timer.current) clearInterval(timer.current);
    setIdx(n);
  }

  return (
    <div ref={fileRef} className={"file" + (seen ? " seen" : "")} data-rise>
      <div className="file-top">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="name">certsigma / acme-fintech / iso-27001</span>
        <span className="live">live</span>
      </div>
      <div className="file-tabs" role="tablist" id="fileTabs">
        {TABS.map((t, n) => (
          <button
            key={t.id}
            className="file-tab"
            role="tab"
            aria-selected={idx === n}
            data-panel={t.id}
            onClick={() => select(n)}
          >
            {t.label}
            <span className="bar"></span>
          </button>
        ))}
      </div>
      <div className="file-body">
        <div className={"panel" + (idx === 0 ? " on" : "")} id="p-scope">
          <div className="frow"><span className="tickbox">✓</span><span className="fname">Frameworks in scope</span><span className="fmeta">ISO 27001 · SOC 2</span></div>
          <div className="frow"><span className="tickbox">✓</span><span className="fname">Systems &amp; boundaries defined</span><span className="fmeta">4 environments</span></div>
          <div className="frow"><span className="tickbox">✓</span><span className="fname">Control owners assigned</span><span className="fmeta">11 owners</span></div>
          <div className="frow"><span className="tickbox">✓</span><span className="fname">Audit calendar agreed</span><span className="fmeta">Q3 kick-off</span></div>
          <div className="frow"><span className="tickbox">✓</span><span className="fname">Fixed-scope quote issued</span><span className="fmeta">signed</span></div>
        </div>
        <div className={"panel" + (idx === 1 ? " on" : "")} id="p-evid">
          <div className="frow"><span className="fname">Access control (A.5.15)</span><span className="meter" style={{ "--w": "100%" } as React.CSSProperties}><b></b></span><span className="fmeta">42/42</span></div>
          <div className="frow"><span className="fname">Cryptography (A.8.24)</span><span className="meter" style={{ "--w": "100%" } as React.CSSProperties}><b></b></span><span className="fmeta">18/18</span></div>
          <div className="frow"><span className="fname">Supplier management (A.5.19)</span><span className="meter" style={{ "--w": "86%" } as React.CSSProperties}><b></b></span><span className="fmeta">19/22</span></div>
          <div className="frow"><span className="fname">Incident response (A.5.24)</span><span className="meter" style={{ "--w": "100%" } as React.CSSProperties}><b></b></span><span className="fmeta">14/14</span></div>
          <div className="frow"><span className="fname">Secure development (A.8.25)</span><span className="meter" style={{ "--w": "73%" } as React.CSSProperties}><b></b></span><span className="fmeta">11/15</span></div>
        </div>
        <div className={"panel" + (idx === 2 ? " on" : "")} id="p-cert">
          <div className="cert">
            <div className="seal">Σ</div>
            <h4>ISO/IEC 27001:2022</h4>
            <p>Certificate of registration — information security management system</p>
            <div className="sig"><span>Issued by CertSigma</span><span>Valid 3 years · surveillance annual</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
