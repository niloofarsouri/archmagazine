import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myheader from "@/components/header";
import Myfooter from "@/components/footer";
// import HeaderBurger from "@/components/header-burger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Arch Magazine",
  description: "arch-magazine is a journal about architecture and styles and... you wellcome !",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body className="font-primary overflow-x-hidden bg-white dark:bg-[#080808] dark:text-[#e0d2b7]">
      {/* <div className="w-full h-[300px] bg-no-repeat bg-cover mt-0 mb-0 
        md:bg-cover md:bg-top-right bg-[url(/images/bg-1.jpg)] md:w-full md:min-h-screen">
          <HeaderBurger />
          <Myheader />
        </div> */}
        {/* <Myheader/> */}
        {children}
        <Myfooter />

      </body>
    </html>

  );
}
