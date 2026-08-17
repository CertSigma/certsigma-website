import type { Metadata, Viewport } from "next";
import "./globals.css";
import IconSprite from "@/components/IconSprite";

export const metadata: Metadata = {
  title: "CertSigma — Security certification, done properly.",
  description:
    "CertSigma is the audit and certification arm of an India-native compliance ecosystem. SOC 2, ISO 27001, ISO 42001, GDPR, HIPAA and 20+ frameworks, run by lead auditors.",
  icons: {
    icon: "/certsigma_logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
