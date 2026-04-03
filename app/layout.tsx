import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import StickyContact from "../components/StickyContact";

const frutiger = localFont({
  src: [
    {
      path: "../public/fonts/FrutigerLTArabic45Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FrutigerLTArabic55Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FrutigerLTArabic65Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/frutigerltarabic75black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-frutiger",
});

export const metadata: Metadata = {
  title: "FutureTech Institute",
  description: "Empowering the next generation of technology leaders through industry-led education.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://f.vimeocdn.com" />
      </head>
      <body
        className={`${frutiger.variable} font-sans antialiased`}
      >
        <div className="absolute top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ease-in-out">
          <div
            className="bg-white transition-[height] duration-500 ease-in-out overflow-hidden relative z-60"
            style={{ height: 'var(--topbar-height, 0)' }}
          >
            <Container className="px-4">
              <TopBar />
            </Container>
          </div>
          <div className="w-full">
            <Container className="px-4">
              <Navbar />
            </Container>
          </div>
        </div>

        <div
          className="relative transition-[padding] duration-500 ease-in-out"
          style={{ paddingTop: 'calc(var(--topbar-height, 0) )' }}
        >
          <Container className="px-4">
            <main className="3xl:pt-1! min-h-screen">{children}</main>
          </Container>

          <div className="relative z-50 bg-white transition-all duration-500 ease-in-out mt-10">
            <Footer />
          </div>
          <StickyContact />
        </div>
      </body>
    </html>
  );
}
