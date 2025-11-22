import type { Metadata } from "next";
import { Outfit, Kaushan_Script, Tenor_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const kaushan = Kaushan_Script({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const tenor = Tenor_Sans({
  weight: "400",
  variable: "--font-tenor",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oryn Retreat",
  description: "Этот ретрит — больше, чем программа. Это встреча с собой настоящим.",
  icons: {
    icon: "/images/logo.png",
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
        className={`${outfit.variable} ${kaushan.variable} ${tenor.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
