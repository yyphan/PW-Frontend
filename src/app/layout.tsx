import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Yao Yifan",
  description: "Personal Website of Yao Yifan - A Software Engineer with a fun twist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono bg-ide-bg text-ide-fg antialiased`}
      >
        <Navbar />

        <main className="pt-[100px] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
