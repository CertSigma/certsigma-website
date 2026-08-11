import Rise from "./Rise";

const FRAMEWORKS = [
  { code: "SOC 2", title: "SOC 2 Type I & II", body: "The report US enterprise buyers ask for first — design, or operation over a period." },
  { code: "ISO/IEC 27001:2022", title: "ISO 27001", body: "The global benchmark for an information security management system." },
  { code: "ISO/IEC 42001:2023", title: "ISO 42001", body: "The first certifiable standard for AI management systems." },
  { code: "ISO/IEC 27701", title: "ISO 27701", body: "Privacy management layered on 27001 — the cleanest route to evidencing GDPR duties." },
  { code: "ISO/IEC 27017", title: "ISO 27017", body: "Cloud-specific controls for shared responsibility and multi-tenancy." },
  { code: "HIPAA", title: "HIPAA", body: "Privacy and security safeguards for protected health information." },
  { code: "PCI DSS 4.x", title: "PCI DSS", body: "Mandatory wherever cardholder data is processed, stored or transmitted." },
  { code: "GDPR", title: "GDPR", body: "Readiness and audit support for the EU regime — in scope the moment an EU resident is a user." },
  { code: "ISO 9001:2015", title: "ISO 9001", body: "The quality standard tenders and procurement teams ask for alongside security." },
  { code: "NIST CSF", title: "NIST CSF", body: "Framework alignment and maturity assessment against the five functions." },
  { code: "ISO 22301", title: "ISO 22301", body: "Business continuity management, increasingly requested alongside 27001." },
  { code: "CMMC", title: "CMMC readiness", body: "Pre-assessment gap work against NIST SP 800-171 ahead of a C3PAO audit." },
];

export default function Frameworks() {
  return (
    <section id="frameworks">
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">Coverage</span>
          <h2>Twenty-plus frameworks, one evidence pipeline.</h2>
          <p className="lede">
            Pursuing more than one rarely means starting from zero. Prove a
            control once and we map it everywhere it counts.
          </p>
        </Rise>
        <Rise className="fwgrid">
          {FRAMEWORKS.map((f) => (
            <div className="fw" key={f.title}>
              <div className="fw-head">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="fw-logo"
                  src="/coverage/coverage.png"
                  alt={`${f.title} coverage`}
                />
                <div className="fw-head-txt">
                  <span className="code">{f.code}</span>
                  <h4>{f.title}</h4>
                </div>
              </div>
              <p>{f.body}</p>
            </div>
          ))}
          <div className="fwmore">
            Plus framework-specific mappings on request — if a customer is
            asking for it, tell us and we&apos;ll scope it.
          </div>
        </Rise>
      </div>
    </section>
  );
}
