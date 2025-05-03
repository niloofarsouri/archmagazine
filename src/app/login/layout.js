import HeaderLogin from "@/components/header-login";



export default function LoginLayout({ children }) {

    return (
        <section>
            <HeaderLogin/>
            {children}
            {/* <Myfooter/> */}
        </section>
    )
}

