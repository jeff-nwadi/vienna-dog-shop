import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontClash = localFont({
  src: [
    {
      path: "../public/fonts/OTF/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/OTF/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/OTF/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/OTF/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OTF/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/OTF/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});


export const metadata: Metadata = {
  title: "Vienna dog shop",
  description: "Premium care for dogs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fontClash.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
