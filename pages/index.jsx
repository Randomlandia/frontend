import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function Home(props) {
  const router = useRouter();
  const [musica, setMusica] = useState(false);
  const [animacionActiva, setAnimacionActiva] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("music/18. The Flower Garden.mp3");

    return () => {
      // Cleanup audio on component unmount
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (musica) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musica]);

  useEffect(() => {
    // Activar la animación al montar el componente
    setAnimacionActiva(true);
  }, []);

  const menu = () => {
    router.push(`/menu`);
  }

  return (
    <div className="max-h-screen bg-cover md:bg-center bg-left-bottom bg-no-repeat flex flex-col font-mont font-bold overflow-hidden bg-[url('/backgrounds/randyBosque.svg')] xl:bg-center xl:bg-[url('/backgrounds/bg-6.webp')]">
      <Navbar />

      <div
        className="flex h-10 absolute z-[5000] bg-transparent justify-center align-middle items-center
        font-lucky text-white text-2xl md:text-5xl"
      >
        <div
          id="burbuja2"
          className="bg-black h-20 w-20 mt-52 ml-10 mr-auto align-middle
          flex bg-grey/20 rounded-full shadow-amber-100 shadow-lg"
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
            className="xl:hidden z-[9000] absolute m-auto pr-52 md:pb-[270px] h-[850px] pb-11 md:h-[1300px] bg-transparent"
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
          flex bg-grey/20 rounded-full shadow-amber-100 shadow-lg"
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
