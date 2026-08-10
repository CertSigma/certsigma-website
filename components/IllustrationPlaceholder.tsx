import { ACCENT, SLOTS, type ServiceIllustrationProps } from "./remotion/ServiceIllustration";

/**
 * Static, zero-JS rendering of ServiceIllustration's resting frame. Shown
 * immediately in place of the Remotion Player (which lazy-mounts once the
 * card scrolls near the viewport) so there's no blank flash and no upfront
 * cost paid for illustrations the visitor may never scroll to.
 */
export default function IllustrationPlaceholder({ icons, accent, coreIcon }: ServiceIllustrationProps) {
  const tone = ACCENT[accent];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Outfit', sans-serif",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(26,58,92,.14) 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at 50% 50%, #000 55%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 55%, transparent 78%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${tone.ring} 0%, transparent 70%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          width: 128,
          height: 128,
          borderRadius: 30,
          background: `linear-gradient(135deg, ${tone.core}, #12293F)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 24px 40px -20px rgba(18,41,63,.55)",
        }}
      >
        <svg width={48} height={48} viewBox="0 0 24 24" stroke="#fff" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <use href={`#${coreIcon}`} />
        </svg>
      </div>

      {icons.slice(0, 3).map((icon, i) => {
        const slot = SLOTS[i % SLOTS.length];
        const rad = (slot.angle * Math.PI) / 180;
        const x = Math.cos(rad) * slot.radius;
        const y = Math.sin(rad) * slot.radius;

        return (
          <div
            key={icon}
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              left: `calc(50% + ${x}px - 28px)`,
              top: `calc(50% + ${y}px - 28px)`,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #E2DFD8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 24px -16px rgba(18,41,63,.6)",
            }}
          >
            <svg width={20} height={20} viewBox="0 0 24 24" stroke="#1A3A5C" strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <use href={`#${icon}`} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
