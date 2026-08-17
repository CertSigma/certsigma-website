"use client";

const CALENDLY_URL =
  "https://calendly.com/shak-certsigma/30min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=0A6EFF";

export default function CalBooking() {
  return (
    <div className="cal-wrap">
      <iframe
        src={CALENDLY_URL}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "inherit" }}
        allowFullScreen
      />
    </div>
  );
}
