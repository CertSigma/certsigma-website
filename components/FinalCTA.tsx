import Rise from "./Rise";
import CalBooking from "./CalBooking";

export default function FinalCTA() {
  return (
    <section id="start" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Rise className="final">
          <h2>Thirty minutes. A real scope.</h2>
          <p>
            Book a free assessment with a lead auditor. You&apos;ll leave with
            the frameworks that matter for your buyers, a rough timeline, and
            a fixed-scope quote.
          </p>
          <CalBooking />
        </Rise>
      </div>
    </section>
  );
}
