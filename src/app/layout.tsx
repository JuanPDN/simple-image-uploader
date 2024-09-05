import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";
import Theme from "@/components/buttons/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Simple Image Uploader",
  description: "Simple Image Uploader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} bg-F9FAFB text-121826 dark:bg-121826 dark:text-F9FAFB`}>
        <header className="absolute flex w-full justify-between items-center
         py-4 xl:px-[72px] px-8 border-b border-b-E5E7EB dark:border-b-212936">
          <Logo />
          <Theme />
        </header>
        {children}
      </body>
    </html>
  );
}
