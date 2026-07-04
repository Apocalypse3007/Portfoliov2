import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { DockNav } from "@/components/DockNav";
import { profile } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio[0],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pixelifySans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <main className="flex-1 pb-24">{children}</main>
        <DockNav />
      </body>
    </html>
  );
}
