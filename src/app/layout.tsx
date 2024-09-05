import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";
import DarkTheme from "@/components/buttons/darkTheme";

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
    <html lang="en">
      <body className={`${inter.variable} bg-F9FAFB text-121826 dark:bg-121826 dark:text-F9FAFB`}>
        <header className="absolute flex w-full justify-between items-center
         py-4 xl:px-[72px] px-8 border-b border-b-E5E7EB dark:border-b-212936">
          <Logo />
          <button className="bg-FFFFFF p-2 rounded-xl border border-E5E7EB dark:bg-4D5562/80 dark:border-4D5562">
            <DarkTheme />
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
