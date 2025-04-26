import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import banner from "../../public/images/linkway.png";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkway",
  description: "Linkway is a personal project created with the goal of serving both as a portfolio and as a showcase for other projects, as well as bringing together all my professional information in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body
        className={`max-w-[900px] mx-auto px-2 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex items-center bg-[#F9F9F7] text-[#555] font-bold rounded-md shadow-sm">
          <div className="flex-1">
            <Link href="/" className="h-14">
              <Image src={banner} alt="Linkway" className="h-18 object-cover object-[50%_35%] rounded-md" />
            </Link>
          </div>

          <nav className="flex-3 flex gap-4 justify-center items-center">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="flex-1 hidden sm:flex"></div>
        </header>

        <main className="my-2 flex flex-col gap-2 justify-center items-center">
          {children}
        </main>

        <footer className="">
          <div className="h-10 flex justify-center items-center gap-5 text-sm text-gray-700 dark:text-gray-200">
            <p>© 2025 Linkway.</p>
            <p>Made by Heinrich Löwe.</p>
            <Link href={"/"} className=" hover:underline" > Code </Link>
            </div>
        </footer>
      </body>
    </html>
  );
}
