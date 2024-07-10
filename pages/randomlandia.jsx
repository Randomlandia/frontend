import Navbar from "../components/Navbar";
import { unicos } from "@/components/constants/unicos";
import Unicos from "@/components/landing/unicos2Div";
import ProbarAhora from "@/components/landing/botonProbarAhora";
import ContactoFooter from "@/components/ContactoFooter";
import RandyBurbuja from "@/components/landing/randyBurbuja";
import Perspectiva from "@/components/landing/perspectivaDiv";
import { perspectiva } from "@/components/constants/perspectiva";

const Randomlandia = () => {
  return (
    <div className=" flex  min-h-screen font-mont flex-col font-bold overflow-hidden items-center bg-white">
      {/*nav */}
      <div className=" fixed w-full h-14 z-[4000] bg-lorange flex justify-between items-center text-white font-lucky text-xl py-3">
        <Navbar />
      </div>
      <div
        className="
      xl:bg-transparent  xl:w-[1168px] xl:gap-[10px]
       md:w-[669px] md:gap-[10px]
       w-[340px] min-h-screen gap-[10px]"
      >
        {/*logo*/}
        <div className="flex flex-row mb-5 mt-20 rounded-3xl bg-[#f6ead7]/75  w-auto h-auto pt-[50px] pb-[50px] align-middle items-center justify-center">
          <div className="h-full pb-32">
            <RandyBurbuja></RandyBurbuja>
          </div>
          <img
            src="/logoLarge.svg"
            alt="Random"
            className="h-32 hover:translate-x-1 hover:translate-y-1"
          />
        </div>
        {/*inspira */}
        <div className="flex rounded-3xl bg-[#f6ead7]/75  pt-[112px] pb-[112px] max-w-[1168px] max-h-[660px] gap-[10px] p-[112px] items-center align-middle justify-center ">
          <div className="flex flex-col text-center">
            <div className="xl:hidden flex pb-3">
              <img
                src="/landing/randyLanding.png"
                alt="randyLanding"
                className="
                min-w-[308px] 
              md:w-[420px] "
              />
            </div>

            <div
              className=" 
            flex font-lucky  text-dgreen text-xl xl:text-3xl md:text-3xl"
            >
              Inspira jugando, aprende investigando
            </div>
            <div
              className="
            flex pt-[28px] md:pt-[40px] font-mont font-semibold text-slate-950 text-sm xl:text-2xl md:text-xl"
            >
              Descubre la forma más divertida e interactiva de aprender.
            </div>

            <ProbarAhora></ProbarAhora>
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
            flex font-lucky justify-center align-middle items-center  text-dgreen text-xl xl:text-6xl md:text-5xl "
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
        <div className="flex flex-row  rounded-3xl bg-[#f6ead7]/75  mt-[20px] pb-[112px] w-auto h-auto gap-[10px] p-[112px] align-middle items-center justify-center">
          <div className="hidden md:flex flex-col md:pl-[150px]  xl:pl-0  xl:pr-[112px] align-middle items-center justify-center">
            <img
              src="RANDY_02.svg"
              alt="randy_guino"
              className="w-[325px] h-[330px] "
            />
            <ProbarAhora></ProbarAhora>
          </div>
          <div>
            <div
              className=" 
            flex font-lucky justify-center md:pr-[20%] text-center md:text-start align-middle items-center  text-dgreen text-2xl xl:text-3xl md:text-2xl "
            >
              ¿CÓMO FUNCIONA?
            </div>
            <div className="flex pt-[28px] md:pt-[40px] md:pr-8 xl:pr-0 font-mont font-semibold text-dgreen/75 text-sm  md:text-start">
              <div className="text-5xl pl-24 text-center text-orange-500 ">
                <div className="pb-9">1</div>
                <div className="pb-9">2</div>
                <div className="pb-9">3</div>
                <div className="pb-9">4</div>
                <div className="pl-1 m-auto hover:animate-spin ">5</div>
              </div>

              <div className="w-[375px] p-5">
                <p>Elige un tema de interés</p>
                <br />
                <p className="">----------------------------- </p>

                <br />
                <p>Guarda tu datos random favoritos </p>
                <br />
                <p className="">----------------------------- </p>
                <br />
                <p>Pon a prueba tus conocimientos</p>
                <br />
                <p className="">----------------------------- </p>
                <br />
                <p>Información real y divertida</p>
                <br />
                <p className="h">----------------------------- </p>
                <br />
                <p className="text-lg hover:text-xl  text-orange-500 hover:translate-x-1 ">
                  ¡Para toda la familia!
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-7  md:hidden align-middle items-center justify-center">
              <img
                src="RANDY_02.svg"
                alt="randy_guino"
                className="w-[188px] h-[198px] "
              />
              <ProbarAhora className="pt-7"></ProbarAhora>
            </div>
          </div>
        </div>
        {/*perspectiva */}
        <div className="flex flex-col text-center rounded-3xl bg-[#f6ead7]/75  mt-[20px] pb-[112px] w-auto h-auto gap-[10px] p-[112px] align-middle justify-center">
          <div
            className=" 
            flex font-lucky pb-[50px] justify-center align-middle items-center  text-dgreen text-xl xl:text-6xl md:text-5xl "
          >
            Perspectiva del aprendizaje
          </div>

          <div className="md:grid hidden md:grid-cols-2 xl:grid-cols-4 ">
            {perspectiva.map((unico, index) => {
              return (
                <Perspectiva
                  key={`unico-${index}`}
                  icono={unico.icono}
                  alt={unico.alt}
                  tema={unico.tema}
                  contenido={unico.contenido}
                ></Perspectiva>
              );
            })}
          </div>
        </div>

        {/*contactanos */}
        <div className="flex flex-row mt-[20px] mb-[20px]   rounded-3xl bg-[#f6ead7]/75  w-auto h-auto pt-[50px] pb-[50px] align-middle items-center justify-center">
          <ContactoFooter />
        </div>
      </div>
    </div>
  );
};
export default Randomlandia;
