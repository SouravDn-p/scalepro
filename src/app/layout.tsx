import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scalepro — Everything You Need to Convert Faster",
  description: "Turn visitors into loyal customers – 10x faster.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
