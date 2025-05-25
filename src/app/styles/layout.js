import FooterTransparent from "@/components/footer-transparent";


export default function Layout({ children }) {

    return (
        // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        //     <div className="w-full flex-none md:w-64">
        //         <SideNav />
        //     </div>
        //     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>

        // </div>


        <>

            {children}
            <div className="w-full h-auto bg-[#b6b6b6] text-white flex items-center justify-center mt-10 dark:bg-[#080808]">
                <div className="w-4/5 border-t-1">
                    <FooterTransparent />
                </div>
            </div>
        </>
    );
}


