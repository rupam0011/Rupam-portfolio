import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "@/layouts/Wrapper";
/** @type {import('next').Metadata} */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Rupam Majumder",
    template: "%s - Rupam Majumder"
  },
  description: "Rupam Majumder portfolio",
  twitter:{
    card: "summary_large_image",
  },
  verification: {
    google: "wIvwTWFTogtIwLvFXv2zxs7uWG0NseG7KueBt-e49yY",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Wrapper>
        {children}
        </Wrapper>
      </body>
    </html>
  );
}
