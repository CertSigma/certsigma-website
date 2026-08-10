"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import type { ServiceIllustrationProps } from "./remotion/ServiceIllustration";

// The Remotion Player (and remotion core) only loads once a card is close
// to the viewport, instead of all 6 mounting + autoplaying on first paint.
const ServiceIllustrationPlayer = dynamic(() => import("./ServiceIllustrationPlayer"), {
  ssr: false,
});

export default function LazyServiceIllustration(props: ServiceIllustrationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "240px 0px 240px 0px" });

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height: "100%" }}>
      <IllustrationPlaceholder {...props} />
      {inView && (
        <div style={{ position: "absolute", inset: 0 }}>
          <ServiceIllustrationPlayer {...props} />
        </div>
      )}
    </div>
  );
}
