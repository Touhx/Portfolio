import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Graphic Designer Portfolio",
  description: "Premium Graphic Designer Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
        <LenisProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
