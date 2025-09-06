import FirstAnimation from "@/components/animation/first-animation";
import SecondAnimation from "@/components/animation/second-animation";
import Myfooter from "@/components/footer";
import RootHeader from "@/components/header-root";



export default function Home() {

  // lg:bottom-[220px] xl:text-[250px] xl:bottom-[200px] 2xl:bottom-20 

  return (
    <>

      <section className="w-full h-auto bg-[#220C08] m-0">

        <div className="w-full min-h-screen bg-[#220C08] md:h-[750px] m-0 p-0">
          <div className="w-full min-h-screen p-0 m-0 bg-[url(/backgroundSky.jpg)] bg-no-repeat bg-cover relative flex justify-center items-center text-center ">
            <div className="w-full absolute top-0"><RootHeader /></div>

            <div className="absolute text-white opacity-55">
              {/* <p className="hidden md:block relative font-primary opacity-55 md:text-[140px] md:bottom-[130px] lg:text-[160px] lg:bottom-[200px] xl:text-[160px] xl:bottom-[200px]">ARCH MAG</p> */}
              <p className="hidden lg:block relative font-primary opacity-55 lg:text-[235px] bottom-15">ARCH MAG</p>
              <p className=" lg:hidden relative font-primary opacity-55 text-[150px] bottom-30">ARCH</p>
            </div>

            <div className="w-full min-h-screen bg-[url(/images/bg-2.png)] bg-no-repeat bg-cover absolute top-50 z-50"></div>
          </div>
        </div>

        {/* <div className="w-full h-[300px] lg:hidden bg-[url(/images/img/bridge.jpg)] bg-cover bg-no-repeat m-0"></div> */}


        <div className="w-full min-h-screen lg:bg-[#220C08] flex flex-col justify-center items-center">

          <div className="w-3/5 h-auto md:mt-[200px] flex-1/2 p-8 flex-col justify-center items-center text-white ">
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

      <div className="w-full flex justify-center items-center dark:bg-[#220C08]">
        <div className="w-3/4 h-auto p-5 mt-20">
          <SecondAnimation />
        </div>
      </div>

      <Myfooter />
    </>
  );
}


// hidden lg:block