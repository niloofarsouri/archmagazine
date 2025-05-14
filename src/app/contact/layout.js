import PagesHeader from "@/components/header-other-pages";




export default function Layout({ children }) {

    return (
        // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        //     <div className="w-full flex-none md:w-64">
        //         <SideNav />
        //     </div>
        //     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>

        // </div>



        <div className="w-full">
            <div className="w-full h-[50px] bg-[#E0D2B7] text-[#080808]">
                <PagesHeader/>
            </div>


            {children}
        </div>

    );
}