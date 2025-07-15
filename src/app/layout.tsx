import type { Metadata } from "next";
import React from 'react';
import "./globals.css";
import { NavBar } from "@/components/navigation/nav-bar";

export const metadata: Metadata = {
  title: "Schulbuch Bibliothek",
  description: "Schulbuch Verwaltung für Lehrer:innen und Schüler:innen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-300 text-gray-900 antialiased">
        <div className="flex flex-col min-h-screen justify-between bg-gray-300">
          <NavBar />
          <main className="container mx-auto p-4 flex-grow">
            {children}
          </main>
          <footer className="bg-green-900 text-white shadow mt-10">
            <div className="container mx-auto px-4 py-6 text-center">
              <p>© 2025 Schubi2. Alle Rechte vorbehalten.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
