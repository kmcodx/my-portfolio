import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Khurram Malik | Senior Software Engineer",
  description:
    "Elite portfolio of Khurram Malik — Senior Software Engineer, Architect, and DevOps Engineer building scalable systems for UK and US companies.",
  keywords: [
    "Khurram Malik",
    "Senior Software Engineer",
    "Software Architect",
    "DevOps Engineer",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Khurram Malik | Engineer. Architect. Builder.",
    description:
      "Scalable backend systems, SaaS platforms, and production-grade infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
