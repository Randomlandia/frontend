import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
import { MusicContext } from "@/components/home/musicContex";

export default function Home() {
  const router = useRouter();
  const { musica, setMusica } = useContext(MusicContext);
  const [animacionActiva, setAnimacionActiva] = useState(false);

  useEffect(() => {
    setAnimacionActiva(true);
  }, []);

  const menu = () => {
    const exp = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const rm = localStorage.getItem("rememberMe");
    !rm && localStorage.setItem("rememberMe", "waiting");
    localStorage.setItem("exp", exp.toString());
    router.push("/menu");
  };

  return (
    <div className="max-h-screen bg-cover md:bg-center bg-left-bottom bg-no-repeat flex flex-col font-mont font-bold overflow-hidden bg-[url('/backgrounds/randyBosque.svg')] xl:bg-[url('/parallax_home/desk.png')] ">
      <Navbar />

      <div
        className="flex h-10 absolute z-[5000] bg-transparent align-middle items-center
        font-lucky text-white text-2xl md:text-5xl"
      >
        <div
          id="burbuja2"
          className=" justify-end bg-black h-20 w-20 mt-52 ml-10 mr-auto align-middle
          bg-grey/20 rounded-full shadow-amber-100 shadow-lg"
        >
          <button
            className="absolute z-[5000]"
            onClick={() => setMusica((prev) => !prev)}
          >
            <img
              className="h-20 w-20"
              src={
                musica
                  ? "/home/encendidoVolumen.svg"
                  : "/home/apagadoVolumen.svg"
              }
              alt=""
            />
          </button>
        </div>
      </div>

      <Luz className="min-h-full relative" active={animacionActiva}>
        <div>
          <div
            id="burbuja"
            className="bg-black z-[1000] absolute h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] pt-16
            flex bg-grey/20 rounded-full justify-center items-end shadow-amber-100 shadow-lg"
          >
            <img
              className="h-[100px] w-[144px] xl:h-[200px] xl:w-[244px]"
              src="/RANDY_08.svg"
              alt="RANDY_08"
            />
          </div>

          <img
            className="xl:hidden z-[9000] absolute m-auto pr-52 md:pb-[270px] h-[850px]  md:h-[1300px] bg-transparent"
            src="/parallax_home/ARBOL 1 PLANO - IZQ.png"
            alt="ARBOL1PLANO"
          />

          <img
            className="hidden xl:grid absolute z-[9000]  m-auto  md:pb-[950px]  md:h-[2000px] bg-transparent"
            src="/parallax_home/ARBOL 1 PLANO - IZQ.png"
            alt="ARBOL1PLANO"
          />
        </div>
      </Luz>

      <div
        className="flex absolute bg-transparent w-screen h-screen z-[100]
        font-lucky text-white text-2xl md:text-5xl"
      >
        <div
          id="burbuja2"
          className="bg-black mt-[400px] m-auto z-[1000] h-[200px] w-[200px] md:h-[300px] md:w-[300px] align-middle
          flex bg-grey/30 rounded-full shadow-amber-100 shadow-lg"
        >
          <button
            onClick={menu}
            type="submit"
            className="m-auto w-40 h-16 md:w-60 md:h-28 hover:shadow-xl hover:translate-y-3 hover:translate-x-2 hover:shadow-orange-300 bg-agreen font-lucky items-center text-center justify-center rounded-3xl"
          >
            Jugar
          </button>
        </div>
      </div>
    </div>
  );
}
