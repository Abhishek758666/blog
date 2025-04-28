import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writewise - Where good ideas find you",
  description: "A modern blog platform for sharing ideas and stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/gaegu" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed -z-10 top-0 left-0 inset-0 [background-size:30px_30px] [background-image:radial-gradient(#EAEAF1_2px,transparent_2px)] dark:[background-image:radial-gradient(#303030_2px,transparent_2px)]" />
          <div className="-z-10 pointer-events-none fixed top-0 inset-0 flex items-center justify-center bg-white dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="z-10">
            {children}
            {}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
