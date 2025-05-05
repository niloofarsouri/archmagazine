import Link from "next/link"
import LogoutClick from "../log-out"
import { cookies } from "next/headers"



async function MyHeaderLogout() {

    const cookieStore = await cookies()


    return (
        <>
            <header className="flex w-full h-auto">

                <div className="w-full h-14 bg-[#e5d4b2] text-[#001440] border-b-1 hidden md:flex justify-between items-center">
                    <ul className="flex justify-baseline items-center text-xl">
                        <Link href={'/'}>
                            <li className="p-4">صفحه اصلی</li>
                        </Link>

                        <Link href={'/contact'}>
                            {/* <li className="p-4">Contact Us</li> */}
                            <li className="p-4">تماس با ما</li>
                        </Link>

                        <Link href={'/styles'}>
                            {/* <li className="p-4">Styles in Architecture</li> */}
                            <li className="p-4">سبک شناسی در معماری</li>
                        </Link>

                        <Link href={'/Projects'}>
                            <li className="p-4">پروژه ها</li>
                        </Link>
                    </ul>

                    <ul className="flex justify-center p-4">
                        <LogoutClick cookieStore={cookieStore} />
                    </ul>

                </div>
            </header>
        </>
    )
}


export default MyHeaderLogout