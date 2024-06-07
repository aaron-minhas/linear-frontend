import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { CopyrightLinearBanner } from "@/components/copyright-linear-banner";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linear Rebuilt",
  description: "Rebuilding Linear.app's website with Next.js, Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
           {children}
          </main>
          <Footer />
          <CopyrightLinearBanner />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
