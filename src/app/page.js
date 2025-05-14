import FirstAnimation from "@/components/animation/first-animation";
import SecondAnimation from "@/components/animation/second-animation";
import RootHeader from "@/components/header-root";



export default function Home() {


  return (
    <>

      <section className="home-page">

        <div className="w-full min-h-screen mb-20">
          <div className="w-full h-[400px] md:max-h-screen bg-[url(/images/sky.jpg)] bg-no-repeat bg-cover relative mb-60 flex justify-center items-center text-center ">
            <div className="w-full absolute top-0"><RootHeader /></div>

            <div className="absolute top-45 md:top-31 lg:top-28 xl:top-30">
              <p className="text-white lg:text-[210px] xl:text-[250px] opacity-55 text-center font-primary hidden lg:block">ARCH MAG</p>
              <p className="text-white text-[150px] md:text-[200px] opacity-55 text-center font-primary lg:hidden">ARCH</p>
            </div>
            <div className="w-full min-h-screen bg-[url(/images/bg-2.png)] bg-no-repeat bg-cover absolute top-50 z-50"></div>
          </div>
        </div>



        <div className="w-full min-h-screen flex flex-col justify-center items-center">

          <div className="w-3/5 h-300px mt-25 md:m-[150px] p-8 flex justify-center items-center text-[#001440] dark:text-white ">
            <p className="p-4 text-xs text-justify md:text-xl">معماری هنر و تکنیک طراحی و ساخت است که از مهارت های مرتبط با ساخت متمایز می شود. این هم فرآیند و هم محصول طراحی، تصور، برنامه ریزی، طراحی و ساخت ساختمان ها یا سازه های دیگر است. این اصطلاح از لاتین architectura گرفته شده است. از یونان باستان ἀρχιτέκτων (arkhitéktōn) 'معمار'; از ἀρχι- (arkhi-) 'رئیس'، و τέκτων (téktōn) 'خالق'. آثار معماری، در شکل مادی ساختمان ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری تلقی می شوند. تمدن های تاریخی اغلب با دستاوردهای معماری بازمانده خود شناسایی می شوند.</p>
          </div>

          <div className="w-full h-auto mt-1 md:mt-0">
            <FirstAnimation />
          </div>

          <div className="w-3/4 h-auto p-5 mt-20">
            <SecondAnimation />
          </div>

        </div>
      </section>

    </>
  );
}
