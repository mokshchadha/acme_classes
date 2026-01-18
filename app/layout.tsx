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
  title: "ACME Classes | Best NEET & JEE Coaching in Hamirpur, Himachal Pradesh",
  description: "ACME Classes is the premier coaching academy in Hamirpur, Himachal Pradesh, specializing in NEET and JEE preparation. With a decade of excellence and a proven track record, we help students achieve their medical and engineering dreams.",
  keywords: "NEET coaching Hamirpur, JEE coaching Himachal Pradesh, ACME Classes Hamirpur, Best coaching for NEET JEE, ACME coaching academy, engineering entrance exam preparation, medical entrance exam coaching, Hamirpur coaching center",
  openGraph: {
    title: "ACME Classes - Transforming Aspirations into Success",
    description: "Leading NEET and JEE coaching in Hamirpur, Himachal Pradesh. 10+ years of excellence.",
    siteName: "ACME Classes",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
