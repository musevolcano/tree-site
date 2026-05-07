import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Creek Tree Service | Cleveland Ohio Tree Removal & Land Clearing",
  description:
    "Professional tree removal, stump grinding, land clearing, and 24/7 storm damage response serving Greater Cleveland and NE Ohio. Licensed & insured. Free estimates — call 216-551-6445.",
  keywords:
    "tree removal Cleveland Ohio, tree service NE Ohio, stump grinding Cleveland, land clearing Ohio, storm damage tree removal, arborist Cleveland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
