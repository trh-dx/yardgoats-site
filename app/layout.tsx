import type { Metadata } from "next";
import { Bebas_Neue, Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paradiseyardgoats.club"),
  title: {
    default: "Paradise Yard Goats Baseball | Paradise, TX",
    template: "%s | Paradise Yard Goats Baseball",
  },
  description:
    "Youth travel baseball in Paradise, Texas — 7U through 11U. Developing athletes, building character, and competing everywhere.",
  openGraph: {
    type: "website",
    siteName: "Paradise Yard Goats Baseball",
    title: "Paradise Yard Goats Baseball | Paradise, TX",
    description:
      "Youth travel baseball in Paradise, Texas — 7U through 11U. Developing athletes, building character, and competing everywhere.",
    images: [{ url: "/yardgoatsimage.png", width: 512, height: 512, alt: "Paradise Yard Goats Baseball" }],
  },
  twitter: {
    card: "summary",
    title: "Paradise Yard Goats Baseball | Paradise, TX",
    description:
      "Youth travel baseball in Paradise, Texas — 7U through 11U. Developing athletes, building character, and competing everywhere.",
    images: ["/yardgoatsimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${permanentMarker.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
