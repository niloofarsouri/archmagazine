import FirstAnimation from "@/components/animation/first-animation";
import SecondAnimation from "@/components/animation/second-animation";
import Myfooter from "@/components/footer";
import RootHeader from "@/components/header-root";



export default function Home() {


  return (
    <>

      <section className="w-full min-h-screen bg-[#220C08] ">

        <div className="w-full h-auto bg-[#220C08] md:h-[750px]">
          <div className="w-full h-[400px] md:max-h-screen bg-[url(/backgroundSky.jpg)] bg-no-repeat bg-cover relative mb-60 flex justify-center items-center text-center ">
            <div className="w-full absolute top-0"><RootHeader /></div>

            <div className="absolute top-48 md:top-31">
              <p className="text-white lg:text-[210px] xl:text-[250px] opacity-55 text-center font-primary lg:top-40 xl:top-33 hidden lg:block">ARCH MAG</p>
              <p className="text-white text-[150px] md:text-[340px] opacity-55 text-center font-primary lg:hidden">ARCH</p>
            </div>

            <div className="w-full min-h-screen bg-[url(/images/bg-2.png)] bg-no-repeat bg-cover absolute top-50 z-50"></div>
          </div>
        </div>


        <div className="w-full min-h-screen bg-[#220C08] flex flex-col justify-center items-center">

          <div className="w-3/5 h-auto mt-[100px] md:mt-[200px] flex-1/2 p-8 flex-col justify-center items-center text-white ">
            <h1 className="text-center font-extrabold md:text-2xl">هنر یا علم ساختمان سازی</h1>
            <p className="p-4 text-xs text-justify font-extralight md:text-xl">
              این هنر است که معماری را از مهارت های مرتبط با ساخت متمایز می کند. معماری همان فرآیند ومحصول طراحی، تصور، برنامه ریزی، طراحی و ساخت ساختمان ها یا سازه ها می باشد. این اصطلاح از لاتین architectura از یونان باستان ἀρχιτέκτων (arkhitéktōn) 'معمار'; از ἀρχι- (arkhi-) 'رئیس'، و τέκτων (téktōn) 'خالق'. آثار معماری، در شکل مادی ساختمان ها، اغلب به عنوان نمادهای فرهنگی و به عنوان آثار هنری تلقی می شوند. تمدن های تاریخی اغلب با دستاوردهای معماری بازمانده از خود شناسایی می شوند.
            </p>
          </div>

          <div className="w-full h-auto flex-1/2 flex flex-col items-center mt-3 m-auto">
            <FirstAnimation />
          </div>
        </div>

      </section>

      <div className="w-full flex justify-center items-center">
        <div className="w-3/4 h-auto p-5 mt-20">
          <SecondAnimation />
        </div>
      </div>

      <Myfooter />
    </>
  );
}
