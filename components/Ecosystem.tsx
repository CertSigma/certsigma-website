import Rise from "./Rise";

export default function Ecosystem() {
  return (
    <section id="ecosystem" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Rise className="head">
          <span className="kicker">The ecosystem</span>
          <h2>Two firms. Two jobs. Deliberately apart.</h2>
        </Rise>
        <Rise className="eco">
          <div className="ecocard eco-a">
            <span className="ghost">Σ</span>
            <span className="role">Audit &amp; certification</span>
            <h3>CertSigma</h3>
            <p>Scopes the engagement, tests the controls, issues the report or certificate. You&apos;re on this one.</p>
            <a href="#platform" className="b">What CertSigma does</a>
          </div>
          <div className="ecocard eco-b">
            <span className="ghost">R</span>
            <span className="role">Implementation &amp; vCISO</span>
            <h3>Relynt</h3>
            <p>Builds the controls, runs vCISO programmes, and gets an organisation audit-ready before a test plan is ever opened.</p>
            <a href="#" className="b">
              Visit Relynt{" "}
              <span className="flag" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>
                link TBD
              </span>
            </a>
          </div>
        </Rise>
      </div>
    </section>
  );
}
