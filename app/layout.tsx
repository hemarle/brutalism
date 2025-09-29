import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import "./globals.css";



export const metadata: Metadata = {
  title: "Brutalism Marketing Dashboard",
  description: "Marketing analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
