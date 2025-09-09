'use client';

import Header from "@/components/header";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { polyfillViewTransitions } from "@/utils/view-transition-polyfill";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Initialize View Transitions polyfill
    polyfillViewTransitions();
  }, []);

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
