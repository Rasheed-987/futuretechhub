import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FutureTech Institute",
  description: "Empowering the next generation of technology leaders through industry-led education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
          style={{ paddingTop: 'calc(var(--topbar-height, 0) + 2px)' }}
        >
          <Container className="px-4">
            <main className="3xl:pt-1! min-h-screen">{children}</main>
          </Container>

          <div className="relative z-50 bg-white transition-all duration-500 ease-in-out mt-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
