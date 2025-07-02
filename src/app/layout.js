// import FooterResponsive from "@/components/footer-responsive";
import "./globals.css";
import HeaderBurger from "@/components/header-burger";


export const metadata = {
  title: "Arch Magazine",
  description: "arch-magazine is a journal about architecture and styles and... you wellcome !",
};

export default async function RootLayout({ children }) {

  // const cookieStore = await cookies()
  // const cookie = cookieStore.get('accessToken')

  // const dataHeaders = (await headers()).get("x-current-path")
  // console.log({ dataHeaders })

  return (

    <html lang="en">
      <body className="dark:bg-[#080808] dark:text-[#e0d2b7]">

        {/* {
          cookie ?
            <MyHeaderLogout />
            :
            <Myheader />
        } */}

        <HeaderBurger />
        {children}
        {/* <FooterResponsive/>   */}

      </body>
    </html>

  );
}
