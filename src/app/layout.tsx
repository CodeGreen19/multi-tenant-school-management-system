import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lenxend = Lexend({
  variable: "--font-lexand",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Multi tenant saas ",
  description: "a comprehensive school management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lenxend.variable} font-lexand font-light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
