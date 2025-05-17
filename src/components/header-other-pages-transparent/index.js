import Link from "next/link"
import Image from "next/image"


function PagesHeaderTransparent() {



    return (
        <>
            <div className="w-full h-14 mt-0 bg-transparent text-white hidden md:flex justify-between items-center">
                <ul className="flex justify-baseline items-center">
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

                    <Link href={'/projects'}>
                        <li className="p-4">پروژه ها</li>
                    </Link>
                </ul>

                {/* <ul className="flex justify-around">
                    <Link href={'/login'}>
                        <li className="p-3">Login</li>
                    </Link>
                </ul> */}

                <Link href={'/'}>
                    <div className="flex justify-center items-center p-3">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Picture of logo"
                            width={30}
                            height={30}
                        />
                    </div>
                </Link>
            </div>


        </>
    )
}


export default PagesHeaderTransparent