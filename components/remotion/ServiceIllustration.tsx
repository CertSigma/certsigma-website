import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type ServiceIllustrationProps = {
  icons: string[]; // IconSprite symbol ids, e.g. "i-report"
  accent: "blue" | "gold" | "sage";
  coreIcon: string; // IconSprite symbol id shown in the central badge
};

const ACCENT: Record<ServiceIllustrationProps["accent"], { core: string; ring: string }> = {
  blue: { core: "#0A6EFF", ring: "rgba(10,110,255,.16)" },
  gold: { core: "#C5973A", ring: "rgba(197,151,58,.18)" },
  sage: { core: "#2E9E6B", ring: "rgba(46,158,107,.16)" },
};

// Fixed placement per badge slot (angle in degrees, radius in px). Kept
// static rather than orbiting so this reads as a calm illustration next
// to a paragraph of text, distinct from the spinning hero orbit.
const SLOTS = [
  { angle: -132, radius: 128 },
  { angle: -18, radius: 138 },
  { angle: 108, radius: 122 },
];

export default function ServiceIllustration({ icons, accent, coreIcon }: ServiceIllustrationProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const tone = ACCENT[accent];

  const coreScale = spring({ frame, fps, config: { damping: 14, mass: 0.7 } });
  const coreRotate = interpolate(frame, [0, 600], [0, 8], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* faint dot grid backdrop */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(rgba(26,58,92,.14) 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(circle at 50% 50%, #000 55%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, #000 55%, transparent 78%)",
          transform: `translate(${Math.sin(frame / 90) * 6}px, ${Math.cos(frame / 110) * 6}px)`,
        }}
      />

      {/* soft ring behind the core */}
      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${tone.ring} 0%, transparent 70%)`,
        }}
      />

      {/* central core */}
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
          transform: `scale(${coreScale}) rotate(${coreRotate}deg)`,
        }}
      >
        <svg width={48} height={48} viewBox="0 0 24 24" stroke="#fff" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <use href={`#${coreIcon}`} />
        </svg>
      </div>

      {/* floating badges */}
      {icons.slice(0, 3).map((icon, i) => {
        const slot = SLOTS[i % SLOTS.length];
        const rad = (slot.angle * Math.PI) / 180;
        const x = Math.cos(rad) * slot.radius;
        const y = Math.sin(rad) * slot.radius;

        const enter = spring({
          frame: frame - i * 6,
          fps,
          config: { damping: 16, mass: 0.6 },
        });
        const bob = Math.sin(frame / 26 + i * 2.1) * 8;

        return (
          <div
            key={icon}
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              left: `calc(50% + ${x}px - 28px)`,
              top: `calc(50% + ${y}px - 28px + ${bob}px)`,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #E2DFD8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 24px -16px rgba(18,41,63,.6)",
              opacity: enter,
              transform: `scale(${enter})`,
            }}
          >
            <svg width={20} height={20} viewBox="0 0 24 24" stroke="#1A3A5C" strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <use href={`#${icon}`} />
            </svg>
          </div>
        );
      })}
    </AbsoluteFill>
  );
}
