import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/app/styles/variable.scss';
import '@/app/styles/mixin.scss'
import '@/app/styles/font.scss';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UzOPay",
  description: "Solutions for Digital Era",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
          <Script
          src="/assets/js/vendor/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/split-type.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/global.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}