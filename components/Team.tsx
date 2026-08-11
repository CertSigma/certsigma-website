import Rise from "./Rise";

type Member = {
  name: string;
  role: string;
  tint: "blue" | "gold" | "sage";
};

const TEAM: Member[] = [
  { name: "Farhan I. [placeholder]", role: "CEO", tint: "blue" },
  { name: "Wale O. [placeholder]", role: "Principal Advisor", tint: "gold" },
  { name: "Chiamaka N. [placeholder]", role: "Customer Success Lead", tint: "sage" },
  { name: "Lourdes M. [placeholder]", role: "SOC 2 Lead Auditor", tint: "sage" },
  { name: "Hania Z. [placeholder]", role: "GRC Manager", tint: "blue" },
  { name: "Sana R. [placeholder]", role: "GRC Manager", tint: "gold" },
];

function Avatar({ tint }: { tint: Member["tint"] }) {
  return (
    <div className={`tm-avatar tm-avatar--${tint}`} aria-hidden="true">
      <svg width={34} height={34} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6" />
      </svg>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team">
      <div className="wrap team-grid">
        <Rise className="team-copy">
          <span className="kicker">Meet CertSigma</span>
          <h2>
            The people behind every{" "}
            <span style={{ color: "var(--sigma)" }}>clean audit</span>.
          </h2>
          <p className="lede">
            CertSigma&apos;s track record comes down to the people running it —
            compliance specialists who like untangling hard problems and
            won&apos;t let a client walk into an audit underprepared.
          </p>
          <p className="lede" style={{ marginTop: 12, marginBottom: 26 }}>
            Get on a call and meet them yourself.
          </p>
          <a href="#start" className="b b--blue">
            Schedule a free assessment <span className="ar">→</span>
          </a>
          <p className="flag" style={{ display: "inline-block", marginTop: 18 }}>
            names and avatars are placeholders — replace before launch
          </p>
        </Rise>

        <Rise className="team-showcase" delay={0.1}>
          <span className="team-ring team-ring--outer" />
          <span className="team-ring team-ring--inner" />
          <div className="team-people">
            {TEAM.map((m) => (
              <div className="tm" key={m.name}>
                <Avatar tint={m.tint} />
                <span className="tm-name">{m.name}</span>
                <span className="tm-role">{m.role}</span>
              </div>
            ))}
          </div>
        </Rise>
      </div>
    </section>
  );
}
