"use client";

type Logo = { name: string; src: string };

const LOGOS: Logo[] = [
  { name: "AWS", src: "/clients/aws_logo.png" },
  { name: "Scrut", src: "/clients/scrut_logo.png" },
  { name: "Azure", src: "/clients/azure_logo.png" },
  { name: "Secureframe", src: "/clients/secureframe_logo.png" },
  { name: "Vercel", src: "/clients/vercel_logo.png" },
  { name: "Google Cloud", src: "/clients/google_logo.png" },
];

function LogoPill({ logo }: { logo: Logo }) {
  return (
    <span className="logo-pill">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        width={0}
        height={0}
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
