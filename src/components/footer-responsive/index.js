import Link from "next/link"
import Image from "next/image"



function FooterResponsive() {


    return (
        <>
            <div className="flex justify-between items-center font-extralight dark:border-t-1 bg-[#b48888] text-white md:hidden">
                <div className="flex-1/3 h-[300px] p-8 flex justify-baseline items-center">
                    <ul className="flex flex-col justify-center items-baseline ">
                        <Link href={'/'}>
                            <li className="p-1 md:p-4">صفحه اصلی</li>
                        </Link>

                        <Link href={'/styles'}>
                            <li className="p-1 md:p-4">سبک شناسی</li>
                        </Link>

                        <Link href={'/styles'}>
                            <li className="p-1 md:p-4">نورپردازی</li>
                        </Link>

                        <Link href={'/contact'}>
                            <li className="p-1 md:p-4">تماس با ما</li>
                        </Link>

                        <Link href={'/projects'}>
                            <li className="p-1 md:p-4">پروژه ها</li>
                        </Link>
                    </ul>
                </div>

                {/* <div className="flex-1/3 h-[300px] p-8 flex justify-baseline items-center">
                    <h3>درباره ما</h3>
                    <p></p>
                </div> */}

                <div className="flex-1/3 h-auto bg-transparent flex-col items-center justify-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/images/logo/logo-light.png"
                            alt="Picture of logo"
                            width={200}
                            height={100}
                        />
                    </div>
                    {/* <p className="text-center font-bold text-[#51181D]">ARCH MAG</p> */}
                </div>
            </div>
        </>
    )
}


export default FooterResponsive