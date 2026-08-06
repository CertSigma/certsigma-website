# CertSigma_Latest

Next.js (App Router, TypeScript) rebuild of the CertSigma landing page, matching the original HTML's look, feel, and interactions.

## Structure

- `app/globals.css` — all design tokens and styles, ported from the original `<style>` block.
- `app/layout.tsx` — fonts (Outfit, DM Sans, JetBrains Mono) and the SVG icon sprite.
- `app/page.tsx` — assembles the page from section components.
- `components/` — one reusable component per section (Nav, Hero, Orbit, Services, PersonaTabs, Process, PinnedScroll, Frameworks, Ecosystem, Testimonials, Plans, FAQ, FinalCTA, Footer), plus small client-side helpers (`Rise` for scroll-reveal, `CountUp`, `RevealHeadline`, `MagnetButton`, `ClickSpark`).
- `components/remotion/ServiceIllustration.tsx` + `components/ServiceIllustrationPlayer.tsx` — the animated illustration next to each service card, built as a Remotion composition and played live in-browser via `@remotion/player` (no video rendering/FFmpeg involved — it's a looping React animation, not a pre-rendered file).
- `hooks/useReducedMotion.ts` — respects `prefers-reduced-motion`.
- `hooks/useRise.ts` — same scroll-reveal wiring as `<Rise>`, for elements that already own a ref (audit-file card, testimonial rail, hero orbit).

All the original vanilla-JS interactions (sticky nav, scroll reveal, marquee, auto-cycling audit-file tabs, headline word reveal, magnet CTA, click-spark, framework orbit, persona tabs, count-up stats, pinned scroll rail, draggable testimonial rail, FAQ accordion) were reimplemented as React state/effects rather than DOM manipulation. Scroll-reveal and several interactions were later upgraded to Framer Motion springs.

### Hidden sections

The Plans ("Engagements") and Ecosystem sections are hidden per request but not deleted — `components/Plans.tsx` and `components/Ecosystem.tsx` still exist. To bring either back, uncomment its import and JSX line in `app/page.tsx` (marked with a comment).

### Remotion licensing — please read before shipping this

The service illustrations use [Remotion](https://remotion.dev), which is **free only for companies with 3 or fewer people** involved in operating the software. At 4+ people, Remotion requires a paid Company License (currently ~$25/seat/month; see remotion.dev/license for current terms). If Axipro/CertSigma has more than 3 people, you'll need to either buy a license or swap the illustration for a non-Remotion alternative (e.g. a plain CSS/SVG animation) before this goes to production. I added `acknowledgeRemotionLicense` to the `<Player>` to silence the build-time reminder, not to imply compliance — that's a business decision for you to make.

### Cal.com booking

`components/CalBooking.tsx` embeds a live Cal.com scheduler in the "Thirty minutes. A real scope." section, using `@calcom/embed-react` (same inline-embed + "open in a new tab" fallback pattern as beyondbrnd.co). It's wired to:

```ts
const CAL_LINK = "nandagopal.chandragam/30min";
```

To point it at a different Cal.com username/event-type slug later, just change that one constant.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm start   # production build
```

## Notes

- All "draft" placeholders from the original file (prices, testimonial names, contact details) were kept as-is, since they were flagged as not-final in the source.
- Google Fonts are loaded via `<link>` tags (not `next/font`) to mirror the original's loading approach exactly.
