import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "McMaster Venture Capital Club connects McMaster students, founders, and investors through hands-on venture capital experience, founder support, and industry partnerships.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mcmastervc.com"),
  applicationName: "MVCC",
  category: "education",
  title: {
    default: "McMaster Venture Capital Club | MVCC",
    template: "%s | MVCC",
  },
  description,
  keywords: [
    "McMaster Venture Capital Club",
    "McMaster venture capital",
    "MVCC",
    "McMaster startups",
    "McMaster founders",
    "student venture capital Canada",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://mcmastervc.com",
    siteName: "McMaster Venture Capital Club",
    title: "McMaster Venture Capital Club | MVCC",
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "McMaster Venture Capital Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "McMaster Venture Capital Club | MVCC",
    description,
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7A0000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
