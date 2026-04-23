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
  title: {
    default: "GeneUs Labz",
    template: "%s | GeneUs Labz",
  },
  description: "GeneUs Labz is a venture studio building original products, IP, and systems across gaming, entertainment, and technology.",
  openGraph: {
    siteName: "GeneUs Labz",
    title: "GeneUs Labz",
    description: "GeneUs Labz is a venture studio building original products, IP, and systems across gaming, entertainment, and technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeneUs Labz",
    description: "GeneUs Labz is a venture studio building original products, IP, and systems across gaming, entertainment, and technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
