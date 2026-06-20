import { Cormorant_Garamond, Jost } from "next/font/google";
import config from "@/data/config";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(config.meta.url),
  title: config.meta.title,
  description: config.meta.description,
  keywords: ["undangan pernikahan", "wedding invitation", config.couple.groom.fullName],
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: config.meta.url,
    siteName: config.meta.title,
    images: [{ url: config.meta.ogImage, width: 1024, height: 1024 }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.meta.title,
    description: config.meta.description,
    images: [config.meta.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#5E6B54",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
