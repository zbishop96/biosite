import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

import {NavigationBar} from "./NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZBish",
  description: "A personal site to share experience, interests, and projects.",
  icons: {
    icon: '/Z.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body >
        <Providers>
        <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
