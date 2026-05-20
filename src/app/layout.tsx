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
  title: "Urban Development Department | Bodoland Territorial Council",
  description: "Official portal of the Urban Development Department, Bodoland Territorial Council (BTC). Access digital civic services, track local schemes, urban planning updates, and e-governance platforms.",
  keywords: [
    "UDD BTC",
    "Urban Development Department BTC",
    "Bodoland Territorial Council",
    "BTC Urban Services",
    "Kokrajhar Urban Development",
    "Assam Town Planning",
    "E-Governance BTC",
    "Online Building Permission BTC",
    "Municipalities in BTC"
  ],
  authors: [{ name: "Urban Development Department, BTC" }],
  creator: "Urban Development Department, BTC",
  publisher: "Bodoland Territorial Council",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://uddbtr.online",
    title: "Urban Development Department | Bodoland Territorial Council",
    description: "Official online portal of the Urban Development Department, BTC. Empowering municipal growth, transparent town administration, and swift citizen e-services.",
    siteName: "Urban Development Department BTC",
    images: [
      {
        url: "https://uddbtr.online/images/logo.png",
        width: 1200,
        height: 630,
        alt: "UDD BTC Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Development Department | Bodoland Territorial Council",
    description: "Official online portal of the Urban Development Department, BTC. Providing active citizen care, online building permissions, and infrastructure tracking.",
    images: ["https://uddbtr.online/images/logo.png"],
    creator: "@UDD_BTC",
  },
  robots: {
    index: true,
    follow: true,
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
