import Rise from "./Rise";
import AuditFile from "./AuditFile";

const STEPS = [
  { n: "Phase 01", title: "Scope and find the gaps", body: "We map your customer commitments to the right frameworks, then benchmark every control against them and hand back a prioritised list with owners.", who: "Week 1", cls: "" },
  { n: "Phase 02", title: "Close what's open", body: "Policies, tooling, access, evidence. Where controls need building rather than checking, we hand your team a prioritised checklist and stay on the audit side of the line — we advise, we don't build the controls ourselves.", who: "Week 2-5", cls: "rel" },
  { n: "Phase 03", title: "Audit, certify, maintain", body: "Internal audit, then the formal certification audit, then a surveillance calendar so the certificate stays valid instead of expiring quietly.", who: "Week 6-8", cls: "" },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">How it runs</span>
          <h2>Three phases. You always know which one you&apos;re in.</h2>
        </Rise>
        <div className="proc-grid">
          <Rise className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className={"who " + s.cls}>{s.who}</span>
              </div>
            ))}
          </Rise>

          <AuditFile />
        </div>
      </div>
    </section>
  );
}
