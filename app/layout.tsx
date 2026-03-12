import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileAnchorAd from "@/components/MobileAnchorAd";

export const metadata: Metadata = {
  title: "Percentage Calculator – Increase, Decrease & Discount Calculator",
  description:
    "Free percentage calculator to calculate percentage increase, decrease, discounts and percentage values instantly online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5174271804571339"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen text-gray-900 antialiased">
        <Header />
        {children}
        <Footer />
        <MobileAnchorAd />
        <Analytics />
      </body>
    </html>
  );
}
