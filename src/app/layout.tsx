'use client';

import Header from "@/components/header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {!isHomePage && <Header />}
        <main className={isHomePage ? '' : 'flex-1'}>
          {children}
        </main>
      </body>
    </html>
  );
}
