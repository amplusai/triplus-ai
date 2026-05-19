import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Amplus AI",
    template: "%s | Amplus AI",
  },
  description: "AI가 추천하는 스마트 여행 플랫폼. 항공권·호텔·투어·여행 콘텐츠를 AI로 탐색하세요.",
  keywords: ["AI 여행", "여행 추천", "항공권", "호텔 추천", "투어", "스마트 여행", "Amplus AI"],
  authors: [{ name: "Amplus AI" }],
  creator: "Amplus AI",
  metadataBase: new URL("https://amplus-ai.com"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://amplus-ai.com",
    siteName: "Amplus AI",
    title: "Amplus AI — AI 스마트 여행 플랫폼",
    description: "AI가 추천하는 스마트 여행 플랫폼. 항공권·호텔·투어·여행 콘텐츠를 AI로 탐색하세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amplus AI — AI 스마트 여행 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplus AI — AI 스마트 여행 플랫폼",
    description: "AI가 추천하는 스마트 여행 플랫폼. 항공권·호텔·투어·여행 콘텐츠를 AI로 탐색하세요.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}