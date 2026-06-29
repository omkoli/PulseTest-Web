import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ship with Confidence | Validate your MVP with real users",
  description: "Join the waitlist for a marketplace connecting founders with testers who provide structured feedback before launch.",
  openGraph: {
    title: "Ship with Confidence",
    description: "Your AI-built MVP deserves real users before real customers.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
