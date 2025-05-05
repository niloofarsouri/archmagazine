import FirstAnimation from "@/components/animation/first-animation";
import SecondAnimation from "@/components/animation/second-animation";
import HeaderBurger from "@/components/header-burger";
import Myheader from "@/components/header";



export default function Home() {



  return (
    <>

      {/* <section className="w-full h-auto"> */}
      <div className="w-full h-[300px] bg-no-repeat bg-cover mt-0 mb-0 
        md:bg-cover md:bg-top-right bg-[url(/images/bg-1.jpg)] md:w-full md:min-h-screen">
        {/* <HeaderBurger />
        <Myheader /> */}
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center m-3">

        <div className="w-3/5 m-15 p-8 flex justify-center items-center text-[#001440] dark:text-white ">
          <p className="p-4 text-xs text-justify md:text-xl">معماری هنر و تکنیک طراحی و ساخت است که از مهارت های مرتبط با ساخت متمایز می شود. این هم فرآیند و هم محصول طراحی، تصور، برنامه ریزی، طراحی و ساخت ساختمان ها یا سازه های دیگر است. این اصطلاح از لاتین architectura گرفته شده است. از یونان باستان ἀρχιτέκτων (arkhitéktōn) 'معمار'; از ἀρχι- (arkhi-) 'رئیس'، و τέκτων (téktōn) 'خالق'. آثار معماری، در شکل مادی ساختمان ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری تلقی می شوند. تمدن های تاریخی اغلب با دستاوردهای معماری بازمانده خود شناسایی می شوند.</p>
        </div>

        <div className="w-full h-auto mt-1 md:mt-0">
          <FirstAnimation />
        </div>

        <div className="w-3/4 h-auto p-5 mt-20 overflow-hidden">
          <SecondAnimation />
        </div>

      </div>
      {/* </section> */}

    </>
  );
}
