import type { Metadata } from "next";
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