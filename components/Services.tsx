import Rise from "./Rise";
import LazyServiceIllustration from "./LazyServiceIllustration";
import type { ServiceIllustrationProps } from "./remotion/ServiceIllustration";

type Service = {
  title: string;
  tagline: string;
  bullets: string[];
  tint: "blue" | "gold" | "sage";
  illustration: ServiceIllustrationProps;
};

const SERVICES: Service[] = [
  {
    title: "Compliance as a Service",
    tagline: "Audit-ready in 6 weeks. Fully managed. Guaranteed.",
    bullets: [
      "SOC 2, ISO 27001, HIPAA, GDPR, and PCI DSS, implemented for you",
      "Dedicated project manager and certified consultants from day one",
      "End-to-end implementation and team enablement",
      "Ongoing monitoring, updates, and audit readiness",
    ],
    tint: "blue",
    illustration: { accent: "blue", coreIcon: "i-shieldlock", icons: ["i-report", "i-health", "i-grid"] },
  },
  {
    title: "Platform Services",
    tagline: "We work with over 10 platforms to automate your compliance.",
    bullets: [
      "6-week structured accelerator from scope to certification",
      "Elite partner expertise that closes the automation gap",
      "Faster certification at a fraction of traditional consulting cost",
    ],
    tint: "gold",
    illustration: { accent: "gold", coreIcon: "i-cloud", icons: ["i-grid", "i-continuity", "i-ai"] },
  },
  {
    title: "Internal Audit",
    tagline:
      "Strengthen your controls, surface hidden risks, and turn compliance into a competitive advantage.",
    bullets: [
      "Tailored audits aligned to your industry and objectives",
      "Risk identification with actionable recommendations",
      "Beyond compliance — operational excellence and ongoing improvement",
    ],
    tint: "sage",
    illustration: { accent: "sage", coreIcon: "i-report", icons: ["i-stars", "i-rosette", "i-grid"] },
  },
  {
    title: "Penetration Testing",
    tagline:
      "Vulnerability assessment and real-world penetration testing to expose exploitable risk, satisfy certification requirements, and strengthen your defenses.",
    bullets: [
      "Real-world testing that maps to the standards that matter",
      "Vulnerability assessment plus active exploitation",
      "Actionable reporting with prioritized remediation",
    ],
    tint: "blue",
    illustration: { accent: "blue", coreIcon: "i-safety", icons: ["i-shieldlock", "i-privacy", "i-grid"] },
  },
  {
    title: "Certification",
    tagline:
      "20+ globally recognized certifications. From ISO and SOC 2 to HIPAA, GDPR, and FedRAMP, turning compliance into market credibility and operational excellence.",
    bullets: [
      "Broad coverage across quality, security, and industry-specific standards",
      "Expert-guided certification, end to end",
      "Tailored solutions that build long-term credibility",
    ],
    tint: "gold",
    illustration: { accent: "gold", coreIcon: "i-rosette", icons: ["i-globe", "i-report", "i-stars"] },
  },
  {
    title: "Gap Analysis",
    tagline:
      "Benchmark your current state against where you need to be, delivering a prioritized, actionable roadmap.",
    bullets: [
      "Customized assessments tailored to your goals",
      "Thorough evaluation of processes, policies, and risks",
      "Prioritized action plan with strategic recommendations",
    ],
    tint: "sage",
    illustration: { accent: "sage", coreIcon: "i-continuity", icons: ["i-grid", "i-stars", "i-report"] },
  },
];

export default function Services() {
  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">Our Services</span>
          <h2>Your <span style={{ color: "var(--sigma)" }}>compliance team</span>. On demand.</h2>
          <p className="lede">
            From SOC 2 to ISO 27001 to ongoing audits — we run the whole
            program. You stay focused on shipping product and closing deals.
          </p>
        </Rise>

        <div className="svc-list">
          {SERVICES.map((s) => (
            <div key={s.title} className={`svc-panel svc-tint-${s.tint}`}>
              <div className="svc-text">
                <h3>{s.title}</h3>
                <p className="tagline">{s.tagline}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a href="#start" className="b b--blue">
                  Learn more <span className="ar">→</span>
                </a>
              </div>
              <div className="svc-illustration">
                <LazyServiceIllustration {...s.illustration} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
