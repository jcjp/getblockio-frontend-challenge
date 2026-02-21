export const runtime = "edge";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { getConfig } from "@/wagmi.config";

import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaMask SDK Quickstart",
  description: "MetaMask SDK Quickstart app",
  verification: {
    google: "s7yrtcx-82dNdGuUrGabi_-1dIK5fgXXbHE_M0xPVwI",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getConfig(),
    (await headers()).get("cookie") ?? ""
  );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black bg-opacity-90 text-foreground antialiased`}
      >
        <div className="fixed inset-0 w-full bg-repeat bg-noise opacity-25 bg-[length:350px] z-[-20]" />
        <main className="flex flex-col max-w-screen-lg mx-auto">
          <Providers initialState={initialState}>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
