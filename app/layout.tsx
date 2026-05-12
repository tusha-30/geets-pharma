import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Geet's Pharmaceutical | Trusted Global Healthcare",
  description:
    "Geet's Pharmaceutical is a global, integrated specialty pharmaceutical company committed to delivering quality medicines that improve lives worldwide.",
  keywords: [
    "Geet's Pharmaceutical",
    "Pharma",
    "Healthcare",
    "Medicines",
    "Generics",
    "Specialty",
    "India",
  ],
  openGraph: {
    title: "Geet's Pharmaceutical",
    description:
      "A global, integrated specialty pharmaceutical company committed to better health, better lives.",
    type: "website",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
