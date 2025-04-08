import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import { Flex, Text, Button } from "@radix-ui/themes";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BagProvider } from './components/Bag'; // Add this import
import "./globals.css";

export const metadata: Metadata = {
  title: "AGA",
  description: "A welcoming church community focused on faith and fellowship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BagProvider>
          <main>{children}</main>  {/* Page-specific content here */}
        </BagProvider>
      </body>
    </html>
  );
}