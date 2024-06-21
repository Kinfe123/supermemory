import "@repo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@repo/ui/lib/utils";
import BackgroundPlus from "./(landing)/GridPatterns/PlusGrid";
const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Supermemory - Your personal second brain.",
  description:
    "Bring saved information from all over the internet into one place where you can connect it, and ask AI about it",
  openGraph: {
    images: [
      {
        url: "https://supermemory.ai/og-image.png",
        width: 1200,
        height: 627,
        alt: "Supermemory - Your personal second brain.",
      },
    ],
  },
  metadataBase: {
    host: "https://supermemory.ai",
    href: "/",
    origin: "https://supermemory.ai",
    password: "supermemory",
    hash: "supermemory",
    pathname: "/",
    search: "",
    username: "supermemoryai",
    hostname: "supermemory.ai",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://supermemory.ai/",
    toJSON: () => "https://supermemory.ai/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://supermemory.ai",
    creator: "https://supermemory.ai",
    title: "Supermemory - Your personal second brain.",
    description:
      "Bring saved information from all over the internet into one place where you can connect it, and ask AI about it",
    images: [
      {
        url: "https://supermemory.ai/og-image.png",
        width: 1200,
        height: 627,
        alt: "Supermemory - Your personal second brain.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      {/* <head>
        <ThemeScript />
      </head> */}
      <div className="absolute top-0 z-10 min-h-screen w-screen overflow-hidden bg-inherit  bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <BackgroundPlus />
      {/* TODO: when lightmode support is added, remove the 'dark' class from the body tag */}
      <body
        className={cn(
          `${inter.className} dark`,
          GeistMono.variable,
          GeistSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
