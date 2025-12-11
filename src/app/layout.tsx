import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "МЕСТОРОЖДЕНИЯ - Ретрит на Бали",
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
        className={`${inter.variable} antialiased font-sans bg-retreat-bg`}
      >
        {children}
      </body>
    </html>
  );
}
