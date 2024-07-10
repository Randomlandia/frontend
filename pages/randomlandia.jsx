import Navbar from "../components/Navbar";
import { unicos } from "@/components/constants/unicos";
import { useRouter } from "next/router";
import Unicos from "@/components/landing/unicos2Div";

const Randomlandia = () => {
  const router = useRouter();
  const index = () => {
    router.push(`/`);
  };
  return (
    <div className=" flex  min-h-screen font-mont flex-col font-bold overflow-hidden items-center bg-white">
      <Navbar className="fixed" />

      <div
        className="
      xl:bg-transparent  xl:w-[1168px] xl:gap-[10px]
       md:w-[669px] md:gap-[10px]
       pt-[20px] w-[340px] min-h-screen gap-[10px]"
      >
        <div className="flex rounded-3xl bg-[#f6ead7]/75  pt-[112px] pb-[112px] max-w-[1168px] max-h-[660px] gap-[10px] p-[112px] items-center align-middle justify-center ">
          <div className="flex flex-col text-center">
            <div className="xl:hidden flex">
              <img
                src="/landing/randyLanding.png"
                alt="randyLanding"
                className="
                w-[308px] 
              md:w-[420px] "
              />
            </div>
            <div
              className=" 
            flex font-lucky  text-dgreen text-xl xl:text-3xl md:text-3xl pt-[28px] md:pt-[40px]"
            >
              Inspira jugando, aprende investigando
            </div>
            <div
              className="
            flex pt-[28px] md:pt-[40px] font-mont font-semibold text-slate-950 text-sm xl:text-2xl md:text-xl"
            >
              Descubre la forma más divertida e interactiva de aprender.
            </div>
            <div className="flex pt-[28px] md:pt-[40px]  ">
              <button
                onClick={index}
                type="submit"
                className=" text-basemd:text-lg m-auto h-[60px] w-[226px] md:h-[78px] md:w-[226px]  hover:shadow-xl hover:translate-y-3 hover:translate-x-2  hover:shadow-orange-300 bg-natL  font-lucky items-center text-center justify-center  rounded-[100px]"
              >
                ¡Probar ahora!
              </button>
            </div>
          </div>
          <div className="hidden xl:flex">
            <img
              src="/landing/randyLanding.png"
              alt="randyLanding"
              className="
              xl:w-[1000px]
              md: w-[900px]"
            />
          </div>
        </div>
        {/*que nos hace unicos */}
        <div className="flex flex-col text-center rounded-3xl bg-[#f6ead7]/75  mt-[20px] pb-[112px] w-auto h-auto gap-[10px] p-[112px] align-middle justify-center">
          <div
            className=" 
            flex font-lucky justify-center align-middle items-center  text-dgreen text-xl xl:text-6xl md:text-5xl pt-[28px] md:pt-[40px]"
          >
            ¿qué nos hace únicos?
          </div>

          <div className="md:grid hidden md:grid-cols-2 xl:grid-cols-3 ">
            {unicos.map((unico, index) => {
              return (
                <Unicos
                  key={`unico-${index}`}
                  icono={unico.icono}
                  alt={unico.alt}
                  tema={unico.tema}
                  contenido={unico.contenido}
                ></Unicos>
              );
            })}
          </div>
        </div>
        {/* como funciona */}
        <div> como funciona</div>
        {/*perspectiva */}
        <div>perspectiva</div>
        {/*contactanos */}
        <div>contactanos</div>
      </div>
    </div>
  );
};
export default Randomlandia;
