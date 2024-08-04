import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LibreSplit",
  description: "A speedrun timer for Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className="bg-[#1b1b1b]">
        <div className="flex justify-center p-4 md:p-8">
          <Image
            src="/libresplit.webp"
            alt="libresplit logo"
            width="750"
            height="250"
            className="w-full md:w-auto"
          />
        </div>
        <SiteHeader />
        <main className="relative z-30 px-4 md:px-[25%] py-2 md:py-4 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}