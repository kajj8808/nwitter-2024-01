"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { logout, useUser } from "./lib/client/auth";
import Loader from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  home,
  login,
}: {
  home: React.ReactNode;
  login: React.ReactNode;
}) {
  const { isLoading, user } = useUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading ? <Loader /> : <div>{user ? home : login}</div>}
      </body>
    </html>
  );
}
