import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Loader from "@/components/ui/Loader";
import ProgressBar from "@/components/ui/ProgressBar";
import ScrollToTop from "@/components/ui/ScrollToTop";

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Urban Development Department BTC",
  description: "Official website of Urban Development Department, Bodoland Territorial Council",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className="font-sans bg-white overflow-x-hidden">
        <Loader />
        <ProgressBar />
        <ScrollToTop />
        <main>{children}</main>
      </body>
    </html>
  );
}
