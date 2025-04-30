import Link from "next/link"



function Myfooter() {


    return (
        <>
            <div className="flex justify-between">
                <div className="w-full bg-[#e0d2b7] h-[300px] p-8 flex justify-baseline items-center">
                    <ul className="flex flex-col justify-center items-baseline text-[#001440]">
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

                <div>

                </div>
            </div>
        </>
    )
}


export default Myfooter