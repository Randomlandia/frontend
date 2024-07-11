import Navbar from "../components/Navbar";
import CardRandyIcono from "@/components/about/cardRandyIcono";
import { nosotros } from "@/components/constants/nosotros";
import Unicos from "@/components/landing/unicos2Div";
import ProbarAhora from "@/components/landing/botonProbarAhora";
import ContactoFooter from "@/components/ContactoFooter";
import RandyBurbuja from "@/components/landing/randyBurbuja";
import { iconoRandyCard } from "@/components/constants/iconoRandyCard";
import { perspectiva } from "@/components/constants/perspectiva";
import CarruselTemas from "@/components/landing/carruselTemas";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Nosotros = () => {
  const [mostarIndex, setMostarIndex] = useState(1);
  const { handleSubmit } = useForm();

  async function onSubmit(e) {
    if (!e) {
      return (
        <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
      );
    }
  }

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
        {/*nosotros */}
        <div className="flex flex-col text-center  rounded-3xl bg-[#f6ead7]/75  p-[112px] w-auto h-auto gap-[10px] align-middle justify-center">
          <div
            className=" 
            flex font-lucky justify-center align-middle items-center  text-dgreen text-2xl xl:text-6xl md:text-5xl "
          >
            Nosotros
          </div>
          {/* 1 */}
          <div className="md:grid hidden md:grid-cols-2 xl:grid-cols-4 ">
            {nosotros.map((unico, index) => {
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
          {/* 2 */}
          <div className="md:hidden flex flex-col g-0  items-center justify-center align-middle">
            {nosotros.map((unico, index) => {
              return (
                index == mostarIndex && (
                  <CarruselTemas
                    key={`unico-${index}`}
                    icono={unico.icono}
                    alt={unico.alt}
                    tema={unico.tema}
                    contenido={unico.contenido}
                  ></CarruselTemas>
                )
              );
            })}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-row  pt-7 align-middle justify-center items-center"
            >
              {nosotros.map((unico, index) => {
                return (
                  <button
                    className={
                      index == mostarIndex
                        ? "h-6 w-6 m-1 rounded-full bg-[#21643f] "
                        : "h-6 w-6 m-1 rounded-full bg-slate-500"
                    }
                    onClick={() => setMostarIndex(index)}
                  ></button>
                );
              })}
            </form>
          </div>
        </div>

        {/*iconoRandyCard  */}
        <div className="flex flex-col text-center rounded-3xl bg-[#f6ead7]/75  mt-[20px] md:p-[112px] pt-[112px] pb-[112px]  gap-[10px]  align-middle justify-center">
          {/*1 */}
          <div className="xl:grid hidden xl:grid-cols-3 ">
            {iconoRandyCard.map((unico, index) => {
              return (
                <CardRandyIcono
                  key={`unico-${index}`}
                  icono={unico.icono}
                  alt={unico.alt}
                  tema={unico.tema}
                  contenido={unico.contenido}
                ></CardRandyIcono>
              );
            })}
          </div>
          {/*2 */}
          <div className="xl:hidden flex flex-col g-0  items-center justify-center align-middle">
            {iconoRandyCard.map((unico, index) => {
              return (
                index == mostarIndex && (
                  <CardRandyIcono
                    key={`unico-${index}`}
                    icono={unico.icono}
                    alt={unico.alt}
                    tema={unico.tema}
                    contenido={unico.contenido}
                  ></CardRandyIcono>
                )
              );
            })}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-row h-auto w-72 align-middle justify-center items-center"
            >
              {iconoRandyCard.map((unico, index) => {
                return (
                  <button
                    className={
                      index == mostarIndex
                        ? "h-6 w-6 m-1 rounded-full bg-[#21643f] "
                        : "h-6 w-6 m-1 rounded-full bg-slate-500"
                    }
                    onClick={() => setMostarIndex(index)}
                  ></button>
                );
              })}
            </form>
          </div>
        </div>

        {/* quienes somos*/}
        <div className="flex flex-row  rounded-3xl   xl:mt-[20px] pt-[112px] w-auto h-auto gap-[10px] pb-[112px] align-middle items-center justify-center">
          <div className="flex flex-col md:pl-[150px]  xl:pl-0  xl:pr-[112px] align-middle items-center justify-center">
            <img
              src="RANDY_02.svg"
              alt="randy_guino"
              className="w-[109px] md:w-[206px] md:h-[190px] "
            />
          </div>
          <div>
            <div
              className=" 
            flex font-lucky justify-center align-middle items-center  text-dgreen text-2xl xl:text-6xl md:text-3xl"
            >
              ¿Quiénes somos?
            </div>
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
export default Nosotros;
