import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "../components/ui/theme-provider";
import "./globals.css";
const poppins = localFont({
  src: "../fonts/poppins.woff2",
  variable: "--font-poppins",
  weight: "100 900",
  display: "swap",
  preload: false,
});

const raleway = localFont({
  src: "../fonts/raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

const openSans = localFont({
  src: "../fonts/opensans.woff2",
  variable: "--font-open-sans",
  weight: "100 900",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${raleway.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
