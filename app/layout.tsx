import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import "@/app/globals.css";
import bgImg from "@/public/home.jpg";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Demo",
  description: "It is a Nextjs Demo Project for Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero imgData={bgImg} imgAlt="bg image" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
