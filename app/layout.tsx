import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Geet's Pharmaceutical Pvt. Ltd. | Redefining Healthcare Excellence",
  description:
    "Research-driven pharmaceutical company established in 2026, headquartered in India. WHO-GMP quality, ISO certified, bridging advanced medical research with affordable healthcare.",
  keywords: [
    "Geet's Pharmaceutical",
    "PCD Pharma Franchise",
    "Pharmaceutical India",
    "WHO-GMP",
    "ISO Certified Pharma",
    "Medicine Verification",
    "Healthcare",
  ],
  openGraph: {
    title: "Geet's Pharmaceutical Pvt. Ltd.",
    description: "Redefining Healthcare Excellence — Quality First, Patient-Centric Innovation.",
    type: "website",
  },
  icons: {
    icon: "/GP_logo.png",
    apple: "/GP_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
