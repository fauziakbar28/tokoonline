import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Online Saya",
  description: "Belanja kebutuhan pangan, sandang, dan papan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
