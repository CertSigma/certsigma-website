"use client";
import { useState } from "react";

type Logo = { name: string; icon: string | null };

// Icons come from the free Simple Icons CDN where a match exists.
// Scrut and Secureframe aren't in that library, so they render as
// styled wordmarks instead — same pill treatment either way.
const LOGOS: Logo[] = [
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws" },
  { name: "Scrut", icon: null },
  { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure" },
  { name: "Secureframe", icon: null },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
];

function LogoPill({ logo }: { logo: Logo }) {
  const [broken, setBroken] = useState(false);
  const showIcon = logo.icon && !broken;
  return (
    <span className="logo-pill">
      {showIcon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.icon as string}
          alt=""
          aria-hidden="true"
          onError={() => setBroken(true)}
        />
      )}
      {logo.name}
    </span>
  );
}

function Track({ items }: { items: Logo[] }) {
  const doubled = items.concat(items);
  return (
    <div className="mq-track">
      {doubled.map((logo, i) => (
        <LogoPill key={logo.name + i} logo={logo} />
      ))}
    </div>
  );
}

export default function TrustedMarquee() {
  return (
    <div className="trusted">
      <div className="wrap">
        <p className="cap">Works with the tools you already run on</p>
        <div className="mq">
          <Track items={LOGOS} />
        </div>
      </div>
    </div>
  );
}
