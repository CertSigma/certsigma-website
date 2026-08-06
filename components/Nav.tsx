"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#platform", label: "What we do" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#process", label: "Process" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setStuck(window.scrollY > 20);
    }
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={"navshell" + (stuck ? " stuck" : "")} id="navshell">
        <div className="wrap">
          <nav className="navbar">
            <a href="#top" className="brand">
              <i>Σ</i>CertSigma
            </a>
            <div className="navlinks">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="navright">
              <a href="#faq" className="b b--line">
                Talk to an auditor
              </a>
              <a href="#start" className="b b--fill">
                Free assessment
              </a>
              <button
                className="burger"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <b></b>
                <b></b>
                <b></b>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div className={"sheet" + (open ? " open" : "")} id="sheet">
        <button
          className="sheetclose"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#start" className="b b--fill" onClick={() => setOpen(false)}>
          Free assessment
        </a>
      </div>
    </>
  );
}
