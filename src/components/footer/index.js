import Link from "next/link"



function Myfooter() {


    return (
        <>
            <div className="flex justify-between">
                <div className="w-full bg-amber-50 h-[300px] p-8 flex justify-baseline items-center">
                    <ul className="flex flex-col justify-center items-baseline text-black">
                        <Link href={'/'}>
                            <li className="p-1">Home</li>
                        </Link>

                        <Link href={'/contact'}>
                            <li className="p-1">Contact Us</li>
                        </Link>

                        <Link href={'/styles'}>
                            <li className="p-1">Styles in Architecture</li>
                        </Link>

                        <Link href={'/Projects'}>
                            <li className="p-1">Projects</li>
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