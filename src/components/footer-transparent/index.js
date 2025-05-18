import Link from "next/link"
import Image from "next/image"


function FooterTransparent() {


    return (
        <>
            <div className="flex justify-between items-center bg-transparent">
                <div className="flex-1/2  h-[300px] p-8 flex justify-baseline items-center">
                    <ul className="flex flex-col justify-center items-baseline ">
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
                </div>

                <div className="flex-1/2 h-auto bg-transparent flex-col items-center justify-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Picture of logo"
                            width={80}
                            height={90}
                        />
                    </div>
                    <p className="text-center font-bold text-[#51181D]">ARCH MAG</p>
                </div>
            </div>
        </>
    )
}


export default FooterTransparent