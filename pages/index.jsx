import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Luz from '@/components/home/luz';
import { MusicContext } from '@/components/home/musicContex';
import BurbujaAdaptable from '@/components/BurbujaAdaptable';

export default function Home() {
  const router = useRouter();
  const { musica, setMusica } = useContext(MusicContext);
  const [animacionActiva, setAnimacionActiva] = useState(false);

  useEffect(() => {
    setAnimacionActiva(true);
  }, []);

  const menu = () => {
    const exp = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const rm = localStorage.getItem('rememberMe');
    !rm && localStorage.setItem('rememberMe', 'waiting');
    localStorage.setItem('exp', exp.toString());
    router.push('/menu');
  };

  return (
    <div className="max-h-screen bg-cover md:bg-center bg-left-bottom bg-no-repeat flex flex-col font-mont font-bold overflow-hidden bg-[url('/backgrounds/randyBosque.svg')] xl:bg-[url('/parallax_home/desk.png')] overflow-hidden">
      <Navbar />

      <div
        className="flex h-10 absolute top-28 start-10 z-[5000] bg-transparent align-middle items-center
        font-lucky text-white text-2xl md:text-5xl"
        id="burbuja2">
        <BurbujaAdaptable className="absolute h-20 w-20"></BurbujaAdaptable>
        <button
          className="absolute"
          onClick={() => setMusica((prev) => !prev)}>
          <img
            className="h-20 w-20"
            src={
              musica ? '/home/encendidoVolumen.svg' : '/home/apagadoVolumen.svg'
            }
            alt=""
          />
        </button>
      </div>

      <Luz
        className="min-h-full relative overflow-hidden"
        active={animacionActiva}>
        <div className="absolute inset-0 overflow-hidden w-fit">
          <Luz />
        </div>
        <div className="absolute inset-0 overflow-hidden w-fit">
          <Luz />
        </div>
        <div>
          <div
            id="burbuja"
            className="z-[1000] absolute h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] pt-16
            flex rounded-full justify-center items-end">
            <BurbujaAdaptable className="w-full aspect-square">
              <img
                className="h-[100px] w-[144px] xl:h-[200px] xl:w-[244px]"
                src="/RANDY_08.svg"
                alt="RANDY_08"
              />
            </BurbujaAdaptable>
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

      <div className="absolute top-0 flex items-end pb-8 md:pb-48 bg-transparent w-full min-h-full z-[100] font-lucky text-white text-2xl md:text-5xl overflow-hidden">
        <BurbujaAdaptable
          id="burbuja2"
          className="aspect-square z-[1000] h-[200px] md:h-[300px] mx-auto lign-middle">
          <button
            onClick={menu}
            type="submit"
            className="m-auto w-40 h-16 md:w-60 md:h-28 hover:shadow-xl hover:translate-y-3 hover:translate-x-2 hover:shadow-orange-300 bg-agreen font-lucky items-center text-center justify-center rounded-3xl  flex shadow-amber-100 shadow-lg">
            Jugar
          </button>
        </BurbujaAdaptable>
      </div>
    </div>
  );
}
