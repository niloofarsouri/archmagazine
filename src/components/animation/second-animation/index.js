



function SecondAnimation() {


    return (
        <>

            <div className="w-full h-[550px] border-l-1 border-r-1 hidden md:flex justify-between items-center md:overflow-hidden">

                <div className="flex-1/2">

                    <img src="/images/animationImg/stylist.jpg" className="z-1 relative  p-2" />

                    <div className="w-full p-3">

                        <div className="motion motion_first z-100 absolute">
                            <img src="/images/animationImg/rococo1.jpg" alt="archImage6" />
                        </div>
                        <div className="motion motion_second z-100 absolute">
                            <img src="/images/animationImg/rococo2.jpg" alt="archImage7" />
                        </div>
                        <div className="motion motion_third z-100 absolute">
                            <img src="/images/animationImg/rococo5.jpg" alt="archImage8" />
                        </div>
                        <div className="motion motion_fourth z-100 absolute">
                            <img src="/images/animationImg/rococo6.jpg" alt="archImage9" />
                        </div>
                        <div className="motion motion_fifth z-100 absolute">
                            <img src="/images/animationImg/rococo7.jpg" alt="archImage10" />
                        </div>

                    </div>

                </div>

                <div className="flex-1/2 p-3">
                    <p className="w-3/4 p-2 m-5 text-justify text-xl">سبک معماری مجموعه ای از ویژگی ها و ویژگی هایی است که یک ساختمان یا سازه را قابل توجه یا از نظر تاریخی قابل شناسایی می کند. به طور کلی سبک شناسی در معماری یک زیر مجموعه از سبک ها در هنرهای تجسمی  است، و بیشتر سبک ها در معماری ارتباط نزدیکی با سبک های گسترده تر دوره هنر معاصر دارند.</p>
                </div>
            </div>

            {/* <!-- responsive mode --> */}
            <div className="flex-col items-center md:hidden">
                <p className="w-full p-2 text-justify text-xl">سبک معماری مجموعه ای از ویژگی ها و ویژگی هایی است که یک ساختمان یا سازه را قابل توجه یا از نظر تاریخی قابل شناسایی می کند. به طور کلی سبک شناسی در معماری یک زیر مجموعه از سبک ها در هنرهای تجسمی  است، و بیشتر سبک ها در معماری ارتباط نزدیکی با سبک های گسترده تر دوره هنر معاصر دارند.</p>
                <img src="/images/animationImg/glassArt.jpg" className="w-full" alt="archImage11" />
            </div>
            {/* <!-- responsive mode --> */}

        </>
    )
}

export default SecondAnimation