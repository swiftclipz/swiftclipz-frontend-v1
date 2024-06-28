import type { Metadata } from "next";
import type { Viewport } from "next";
import Header from "./components/layouts/header";
import { lexend } from "./libs/fonts";
import siteConfig from "./configs/site-config.json";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f5",
};

export const metadata: Metadata = {
  title: {
    template: `'%s | ${siteConfig.seo.title}'`,
    default: "Swiftclipz",
  },
  description: `${siteConfig.seo.description}`,
  icons: {
    icon: "/favicon.ico",
    shortcut: "./assets/shortcut-icon.png",
    apple: "./assets/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "./assets/apple-touch-icon-precomposed.png",
    },
  },
  applicationName: "Swiftclipz",
  referrer: "origin-when-cross-origin",
  keywords: ["Svae", "Share", "Online"],
  authors: [
    { name: `${siteConfig.author.name}`, url: `${siteConfig.author.github}` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={lexend.variable}>
        <Header />
        {children}
        </body>
    </html>
  );
}
