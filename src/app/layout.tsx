import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
const inter = Inter({ subsets: ["latin"] });

type rootType = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
  title: "Evento - Find events around you...",
  description: "Browse more then 10,000 events around you ",
};

export default function RootLayout({ children }: rootType) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 bg-no-repeat overflow-y-scroll `}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
