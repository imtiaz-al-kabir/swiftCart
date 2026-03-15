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
  title: {
    default: "SwiftCart E-commerce",
    template: "%s | SwiftCart - Premium Online Shopping",
  },
  description:
    "Discover the ultimate online shopping experience with SwiftCart. Explore a wide range of products, enjoy seamless navigation, and shop with confidence. SwiftCart - Your one-stop destination for premium online shopping.",
    keywords: [
      "SwiftCart",
      "E-commerce",
      "Online Shopping",
      "Premium Products",
      "Seamless Navigation",
      "Shop with Confidence",
      "Wide Range of Products",
    ],
    authors: [
      {
        name: "Imtiaz kabir",
        url: "https://imtiazahmed.com",
      },
    ],

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
        {children}
      </body>
    </html>
  );
}
