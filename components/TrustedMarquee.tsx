"use client";

type Logo = { name: string; src: string; width: number; height: number };

// width/height are each logo's real pixel aspect ratio (scaled from its
// source file) so the browser reserves the correct box before the image
// loads instead of popping the pill open at render time.
const LOGOS: Logo[] = [
  { name: "AWS", src: "/clients/aws_logo.webp", width: 40, height: 24 },
  { name: "Scrut", src: "/clients/scrut_logo.webp", width: 89, height: 24 },
  { name: "Azure", src: "/clients/azure_logo.webp", width: 141, height: 24 },
  { name: "Secureframe", src: "/clients/secureframe_logo.webp", width: 114, height: 24 },
  { name: "Vercel", src: "/clients/vercel_logo.webp", width: 105, height: 24 },
  { name: "Google Cloud", src: "/clients/google_logo.webp", width: 133, height: 24 },
];

function LogoPill({ logo }: { logo: Logo }) {
  return (
    <span className="logo-pill">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        width={logo.width}
        height={logo.height}
        decoding="async"
      />
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
        <p className="cap">Trusted by teams at</p>
        <div className="mq">
          <Track items={LOGOS} />
        </div>
      </div>
    </div>
  );
}
