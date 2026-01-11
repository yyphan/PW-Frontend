import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import BackGround from "@/components/layout/Background";

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
        <BackGround />

        <Navbar />

        <main className="mt-[150px] sm:mt-[100px] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
