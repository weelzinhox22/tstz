import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollProgress } from "@/components/scroll-progress";
import { AntiPrint } from "@/components/anti-print";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "oi me desculpa",
  description: "pedido de desculpas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            <AntiPrint />
            <ScrollProgress />
            <div className="fixed right-3 top-3 z-50">
              <ThemeToggle />
            </div>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
