import FirstAnimation from "@/components/animation/first-animation";



export default function Home() {



  return (
    <>
      <div className="w-full bg-cover bg-top-right min-h-screen bg-[url(/images/bg-1.jpg)]"></div>
      <div className="flex flex-col justify-center items-center">

        <div className="w-3/5 flex justify-center items-center m-15 p-8">
          <p className="text-xl p-4 align-middle italic">
            Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures. The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief', and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilizations are often identified with their surviving architectural achievements.
          </p>
        </div>

        <FirstAnimation/>
      </div>
    </>
  );
}
