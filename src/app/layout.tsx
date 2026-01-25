import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "A Portfolio Website",
  description: "Powered by Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quickSand.variable}>
      <body className={quickSand.className}>
        {children}
      </body>
    </html>
  );
}
