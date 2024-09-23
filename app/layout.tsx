import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "To do App",
  description: "Next.js Assessment",
};

export default function RootLayout(
  { children }: Readonly<{  children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="min-h-screen m-0 flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}