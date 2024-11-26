import "@wakeel/ui/globals.css";
import "@/styles/globals.css";

import { geistMono, geistSans } from "@/styles/fonts";

import { cn } from "@wakeel/utils";

import type { Metadata } from "next";

const title = "wakeel";
const description = "Rent with no doubts!";

// todo: add og image and icons!

export const metadata: Metadata = {
  title: title,
  description: description,
  creator: "@wakeelhq",
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@wakeelhq",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable)}>
        {children}
      </body>
    </html>
  );
}
