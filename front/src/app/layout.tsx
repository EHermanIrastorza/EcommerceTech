import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Tech Store",
  description: "La pagina más completa de compras online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
