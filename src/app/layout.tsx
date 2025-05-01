import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/images/linkway.png";
import background from "../../public/images/linkway-background.png";

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
    <html lang="en">
      <body
        className={`py-2 px-2 ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${background.src})`, backgroundSize: 'auto 300px'}}
      >
        <header className="max-w-[900px] mx-auto flex items-center text-[#555] bg-[#F9F9F7] font-bold border border-gray-200 rounded-md shadow-md">
          <div className="flex-1">
            <Link href="/" className="h-14 duration-300 hover:brightness-105 active:brightness-95">
              <Image src={banner} alt="Linkway" className="h-18 object-cover object-[50%_35%] rounded-md" />
            </Link>
          </div>

          <nav className="flex-3 flex gap-4 justify-center items-center">
            <Link className="active:translate-y-1 duration-100" href="/">Home</Link>
            <Link className="active:translate-y-1 duration-100" href="/projects">Projects</Link>
            <Link className="active:translate-y-1 duration-100" href="/about">About</Link>
          </nav>

          <div className="flex-1 hidden sm:flex"></div>
        </header>

        <main className="max-w-[900px] mx-auto my-1 px-6 py-2 flex flex-col gap-2 justify-center items-center text-[#555] bg-[#F9F9F7] border border-gray-200 rounded-md shadow-md md:px-2">
          {children}
        </main>

        <footer className="max-w-[900px] mx-auto mb-2 p-4  text-[#555] bg-[#F9F9F7] border border-gray-200 rounded-md shadow-md">
          <div className="flex justify-center items-center gap-5 text-sm text-gray-700 dark:text-gray-200">
            <p className="cursor-default">© 2025 Linkway</p>
            <p className="cursor-default">Made by Heinrich Löwe</p>
            <Link href={"https://github.com/HeinrichLowe/linkway"} target="_blank" rel="noopener noreferrer" className="hover:underline"> 
              Code
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
