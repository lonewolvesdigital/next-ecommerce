import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import ShippingBanner from "@/components/ShippingBanner";
import GlobalClientWrapper from "@/components/GlobalClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamila Beauty - Reveal Your Natural Beauty",
  description:
    "Transform your beauty routine with Jamila Beauty's premium skincare collection. Clean, non-toxic ingredients for all skin types. Free shipping on orders ZAR 50+.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Urbanist & Playfair Display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Ionicons CDN */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <GlobalClientWrapper>
          <WixClientContextProvider>
            <ShippingBanner show={true} />
            <Navbar logoSrc="/logo-new.svg" brandName="Jamila Beauty" />
            {children}
            <Footer />
          </WixClientContextProvider>
        </GlobalClientWrapper>
      </body>
    </html>
  );
}
