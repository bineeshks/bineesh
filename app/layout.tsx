import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bineeshks.vercel.app"),
  title: "Bineesh K S | Filmmaker, Videographer & Editor",
  description: "Filmmaker, videographer and editor with 2.5 years of experience in short films, brand ads, and client videos. Based in Kerala.",
  keywords: "Filmmaker, Videographer, Video Editor, Direction, Camera Department, Sony FX3, Color Grading, Reels & Ads, Short Films, Kerala, Bineesh K S",
  authors: [{ name: "Bineesh K S" }],
  creator: "Bineesh K S",
  openGraph: {
    title: "Bineesh K S | Filmmaker, Videographer & Editor",
    description: "Filmmaker, videographer and editor with 2.5 years of experience in short films, brand ads, and client videos. Based in Kerala.",
    type: "website",
    locale: "en_IN",
    siteName: "Bineesh K S Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Bineesh K S | Filmmaker, Videographer & Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bineesh K S | Filmmaker, Videographer & Editor",
    description: "Filmmaker, videographer and editor with 2.5 years of experience in short films, brand ads, and client videos. Based in Kerala.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-inter antialiased bg-navy text-white selection:bg-violet selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
