import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeavenlyMoon Macrame | Handcrafted Macrame Art & Accessories",
  description:
    "Discover unique handcrafted macrame creations - from stunning wall decor to elegant jewelry, customized keychains, bags, and thoughtful gift items. Each piece is carefully crafted with love.",
  keywords:
    "macrame, handcrafted, wall decor, jewelry, keychains, bags, custom gifts, handmade accessories",
  openGraph: {
    title: "HeavenlyMoon Macrame | Handcrafted Macrame Art & Accessories",
    description:
      "Unique handcrafted macrame creations - wall decor, jewelry, keychains, and more",
    images: [
      {
        url: "/images/Hero.webp",
        width: 1200,
        height: 630,
        alt: "HeavenlyMoon Macrame Creations",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/macrame.png" type="image/png" />
        <link rel="shortcut icon" href="/macrame.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
