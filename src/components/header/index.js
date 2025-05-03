import Link from "next/link"



function Myheader() {



    return (
        <>
            <div className="w-full h-14 bg-transparent text-[#e5d4b2] border-b-1 hidden md:flex justify-between items-center">
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

                <ul className="flex justify-around">
                    <Link href={'/login'}>
                        <li className="p-1">Login</li>
                    </Link>

                    <Link href={'/signup'}>
                        <li className="p-1">SignUp</li>
                    </Link>
                </ul>
            </div>


        </>
    )
}


export default Myheader