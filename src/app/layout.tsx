import type { Metadata } from "next";
import { Calistoga } from "next/font/google";

import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "PTC",
  description: "Generated For PTC",
  icons: "/icons/PTCLOGO.png", // Correct way to define favicon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calistoga.variable}  ${geistMono.variable}  `}>
        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
