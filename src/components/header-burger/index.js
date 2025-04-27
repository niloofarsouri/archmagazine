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

            <div className="w-full min-h-screen bg-opacity mt-0 md:hidden">
                <button onClick={handleOpen}><img src="/icons/HamburgerMenu.png" className="w-[30px] h-[30px] p-1" /></button>
                {
                    open ?
                        <div className="max-w-3/5 min-h-screen bg-amber-50 text-black">

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
                                    <li className="p-2 text-xs">Home</li>
                                </Link>

                                <Link href={'/contact'}>
                                    <li className="p-2 text-xs">Contact Us</li>
                                </Link>

                                <Link href={'/styles'}>
                                    <li className="p-2 text-xs">Styles in Architecture</li>
                                </Link>

                                <Link href={'/Projects'}>
                                    <li className="p-2 text-xs">Projects</li>
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