import Link from "next/link"




function Myheader() {


    return (
        <>
            <div className="w-full h-14 bg-amber-50 text-black flex justify-between">
                <ul className="flex justify-baseline items-center">
                    <Link href={'/'}>
                        <li className="p-4">Home</li>
                    </Link>

                    <Link href={'/contact'}>
                        <li className="p-4">Contact Us</li>
                    </Link>

                    <Link href={'/styles'}>
                        <li className="p-4">Styles in Architecture</li>
                    </Link>

                    <Link href={'/Projects'}>
                        <li className="p-4">Projects</li>
                    </Link>
                </ul>

                <ul className="flex justify-around">
                    <Link href={'/login'}>
                        <li className="p-4">Login</li>
                    </Link>

                    <Link href={'/signup'}>
                        <li className="p-4">SignUp</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}


export default Myheader