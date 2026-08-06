"use client";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "nandagopal.chandragam/30min";
const CAL_NAMESPACE = "30min";

// Cal.com's embed only exposes a handful of theming hooks (a single brand
// accent plus a few text/border tokens) — it can't be fully re-themed from
// outside. These are mapped to the closest tokens from app/globals.css so
// the calendar reads as part of the site instead of Cal's default gray.
const CAL_COLORS = {
  brand: "#0A6EFF", // --sigma
  borderBooker: "#E2DFD8", // --hair
  border: "#E2DFD8", // --hair
  borderSubtle: "#E2DFD8", // --hair
  textEmphasis: "#12293F", // --navy-ink
  text: "#1E3348", // --ink
  textMuted: "#5C7186", // --muted
  bgEmphasis: "#E9F0FB", // --tint-blue
};

export default function CalBooking() {
  useEffect(() => {
    (async function run() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: CAL_COLORS.brand } },
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-border-booker": CAL_COLORS.borderBooker,
            "cal-border": CAL_COLORS.border,
            "cal-border-subtle": CAL_COLORS.borderSubtle,
            "cal-text-emphasis": CAL_COLORS.textEmphasis,
            "cal-text": CAL_COLORS.text,
            "cal-text-muted": CAL_COLORS.textMuted,
            "cal-bg-emphasis": CAL_COLORS.bgEmphasis,
          },
          // Theme is pinned to "light" above, but the type requires both
          // keys — reuse the same palette so it's a no-op either way.
          dark: {
            "cal-border-booker": CAL_COLORS.borderBooker,
            "cal-border": CAL_COLORS.border,
            "cal-border-subtle": CAL_COLORS.borderSubtle,
            "cal-text-emphasis": CAL_COLORS.textEmphasis,
            "cal-text": CAL_COLORS.text,
            "cal-text-muted": CAL_COLORS.textMuted,
            "cal-bg-emphasis": CAL_COLORS.bgEmphasis,
          },
        },
      });
    })();
  }, []);

  return (
    <div className="cal-embed">
      <div className="cal-embed-bar" aria-hidden="true" />
      <div className="cal-embed-cal">
        <Cal
          namespace={CAL_NAMESPACE}
          calLink={CAL_LINK}
          style={{ width: "100%", height: "100%", overflow: "auto" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
      <p className="cal-fallback">
        Calendar not loading?{" "}
        <a
          href={`https://cal.com/${CAL_LINK}?overlayCalendar=true`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
}
