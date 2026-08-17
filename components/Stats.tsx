import Rise from "./Rise";
import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Rise className="stats">
          <div className="stats-grid">
            <div>
              <h2>
                <CountUp target={20} />+
              </h2>
              <p>
                Frameworks covered, from SOC 2 and ISO 27001 through to ISO
                42001 for AI systems.
              </p>
            </div>
            <div>
              <h2>
                <CountUp target={6} /> weeks
              </h2>
              <p>Typical time from scoping call to a SOC 2 Type I or ISO stage-one audit.</p>
            </div>
            <div>
              <h2>
                <CountUp target={300} />+
              </h2>
              <p>
                Companies guided through Audit readiness and certification
              </p>
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}
