import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahara Enterprise | Bulk Milk & Dairy Product Transportation",
  description: "Sahara Enterprise specializes in bulk milk transportation using refrigerated tankers. Ensuring safe, hygienic, efficient, and reliable dairy delivery solutions across India.",
  keywords: ["bulk milk transportation", "refrigerated tankers", "dairy logistics", "Sahara Enterprise", "milk tanker", "cold chain logistics", "Ahmedabad dairy transport"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
