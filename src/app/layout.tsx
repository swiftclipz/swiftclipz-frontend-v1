import type { Metadata } from "next";
import type { Viewport } from "next";
import Header from "./components/layouts/header";
import { lexend, nunito } from "./libs/fonts";
import siteConfig from "./configs/site-config.json";
import "./globals.css";
import Footer from "./components/layouts/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f5",
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.seo.title}`,
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
  keywords: ["Save", "Share", "Online"],
  authors: [
    { name: `${siteConfig.author.name}`, url: `${siteConfig.author.github}` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${nunito.variable} font-nunito`}>
        <Header />
        <main className="max-w-[1450px] min-h-screen mx-auto pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
