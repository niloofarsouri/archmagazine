import "./globals.css";
import HeaderBurger from "@/components/header-burger";
import { headers } from "next/headers";


export const metadata = {
  title: "Arch Magazine",
  description: "arch-magazine is a journal about architecture and styles and... you wellcome !",
};

export default async function RootLayout({ children }) {

  // const cookieStore = await cookies()
  // const cookie = cookieStore.get('accessToken')

  const dataHeaders = (await headers()).get("x-current-path")
  console.log({ dataHeaders })

  return (

    <html lang="en">
      <body className="dark:bg-[#080808] dark:text-[#e0d2b7]">

        {/* <div className="w-full h-[300px] bg-no-repeat bg-cover mt-0 mb-0 
        md:bg-cover md:bg-top-right bg-[url(/images/bg-1.jpg)] md:w-full md:min-h-screen">
          <HeaderBurger />
          <Myheader />
        </div> */}
        {/* {
          cookie ?
            <MyHeaderLogout />
            :
            <Myheader />
        } */}

        <HeaderBurger />
        {children}
        {/* <Myfooter /> */}

      </body>
    </html>

  );
}
