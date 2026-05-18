import type { Metadata } from "next";
import { Nunito, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Loader from "@/components/ui/Loader";
import ProgressBar from "@/components/ui/ProgressBar";
import ScrollToTop from "@/components/ui/ScrollToTop";

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"]
});

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"], 
  variable: "--font-dm-serif",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Urban Development Department BTR",
  description: "Official website of Urban Development Department, Bodoland Territorial Region",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSerif.variable}`}>
      <body className="font-sans bg-white overflow-x-hidden">
        <Loader />
        <ProgressBar />
        <ScrollToTop />
        <main>{children}</main>
      </body>
    </html>
  );
}
