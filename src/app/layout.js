import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myheader from "@/components/header";
import Myfooter from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arch-Magazine",
  description: "arch-magazine is a journal about architecture and styles and you wellcome !",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body>
        <Myheader/>
        {children}
        <Myfooter/>
      </body>
    </html>

  );
}
