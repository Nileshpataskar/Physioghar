import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physioghar",
  description: "Physioghar developed by Nilesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
