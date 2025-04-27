import FirstAnimation from "@/components/animation/first-animation";
import HeaderBurger from "@/components/header-burger";



export default function Home() {



  return (
    <>

      <section className="w-full h-auto">
        <div className="w-full bg-contain bg-no-repeat mt-0 mb-0 md:bg-cover md:bg-top-right min-h-screen bg-[url(/images/bg-1.jpg)] ">
          <HeaderBurger />
        </div>

        <div className="w-full h-auto flex flex-col justify-center items-center">

          <div className="w-3/5 m-15 p-8 flex justify-center items-center ">
            <p className="p-4 text-xs align-middle italic md:text-xl">
              Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures. The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief', and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilizations are often identified with their surviving architectural achievements.
            </p>
          </div>

          <div className="w-full h-auto mt-20 md:mt-0">
            <FirstAnimation />
          </div>
        </div>
      </section>

    </>
  );
}
