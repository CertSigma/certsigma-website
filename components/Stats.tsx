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
                <CountUp target={6} /> weeks<span className="flag">confirm</span>
              </h2>
              <p>Typical time from scoping call to a SOC 2 Type I or ISO stage-one audit.</p>
            </div>
            <div>
              <h2>
                <CountUp target={200} />+<span className="flag">confirm</span>
              </h2>
              <p>
                Companies guided through certification across the wider
                CertSigma and Relynt ecosystem.
              </p>
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}
