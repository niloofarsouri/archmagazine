import Link from "next/link";
import Image from "next/image";
import FooterTransparent from "@/components/footer-transparent";



export default function Layout({ children }) {

    return (

        <>

            {children}
            <div className="w-full h-auto flex items-center justify-center dark:text-white ">
                <div className="w-4/5 border-t-1">
                    <FooterTransparent />
                </div>
            </div>
        </>

    );
}