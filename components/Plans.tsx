import Rise from "./Rise";

const PLANS = [
  {
    tier: "Starting out",
    name: "Readiness",
    desc: "For teams who've just been asked for a certification by their first enterprise buyer.",
    period: "engagement",
    features: ["Framework scoping", "Control-by-control gap analysis", "Prioritised remediation roadmap", "Evidence inventory"],
    cta: "b--line",
    feat: false,
  },
  {
    tier: "Most common",
    name: "Certification",
    desc: "Readiness plus the full audit and certificate for one or two frameworks.",
    period: "engagement",
    features: ["Everything in Readiness", "Internal audit dry run", "Full certification audit", "Report or certificate issued", "First surveillance scheduled"],
    cta: "b--blue",
    feat: true,
  },
  {
    tier: "Multi-framework",
    name: "Programme",
    desc: "For teams running three or more frameworks on a shared evidence set and a single calendar.",
    period: "year",
    features: ["Everything in Certification", "Cross-framework control mapping", "Penetration testing included", "Annual surveillance & recertification"],
    cta: "b--line",
    feat: false,
  },
];

export default function Plans() {
  return (
    <section id="plans">
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">Engagements</span>
          <h2>Pick the engagement that fits where you are.</h2>
          <p className="lede">
            Every engagement is fixed-scope and quoted before it starts.{" "}
            <span className="flag">all prices are placeholders — replace before launch</span>
          </p>
        </Rise>
        <Rise className="plans">
          {PLANS.map((p) => (
            <div className={"plan" + (p.feat ? " feat" : "")} key={p.name}>
              <span className="tier">{p.tier}</span>
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <div className="price">
                ₹ ——<small> / {p.period}</small>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#start" className={"b " + p.cta}>
                Get a quote
              </a>
            </div>
          ))}
        </Rise>
      </div>
    </section>
  );
}
