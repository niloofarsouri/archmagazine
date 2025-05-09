'use client'

import Link from "next/link"
import { useState } from "react"


function HeaderBurger() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }



    return (
        <>

            <div className="w-full max-h-screen flex-col transition-discrete bg-opacity mt-0 md:hidden">
                <button onClick={handleOpen}><img src="/icons/HamburgerMenu.png" className="w-[30px] h-[30px] p-1" /></button>
                {
                    open ?
                        <div className="max-w-3/5 min-h-screen bg-[#e0d2b7] text-black">

                            <ul className="flex border-b-1 mb-2">
                                <Link href={'/login'}>
                                    <li className="p-2 text-xs">Login</li>
                                </Link>

                                <Link href={'/signup'}>
                                    <li className="p-2 text-xs">SignUp</li>
                                </Link>
                            </ul>

                            <ul className="flex-col">
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

                        </div>
                        :
                        ''
                }
            </div>

        </>
    )
}


export default HeaderBurger