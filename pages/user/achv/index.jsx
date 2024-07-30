import React from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function achv() {
  const router = useRouter();
  const defaultBackground = "bg-booksflying.webp";
  const [background, setBackground] = useState("bg-booksflying.webp");
  const [usertopic, setTopic] = useState("");
  const [id, setId] = useState();
  const [artes, setArtes] = useState();
  const [ciencias, setCiencias] = useState();
  const [deportes, setDeportes] = useState();
  const [idiomas, setIdiomas] = useState();
  const [matematicas, setMatematicas] = useState();
  const [mundo, setMundo] = useState();
  const [nerd, setNerd] = useState();
  const [vida, setVida] = useState();
  const [logros, setLogros] = useState();

  useEffect(() => {
    const idLocal = localStorage.getItem("userID");
    setId(idLocal);

    if (idLocal) {
      fetch(`${process.env.NEXT_PUBLIC_RANDOM_API}users/${idLocal}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          setArtes(json.data.users.achievements.artes.level);
          setCiencias(json.data.users.achievements.ciencias.level);
          setDeportes(json.data.users.achievements.deportes.level);
          setIdiomas(json.data.users.achievements.idiomas.level);
          setMatematicas(json.data.users.achievements.matematicas.level);
          setMundo(json.data.users.achievements.mundo.level);
          setNerd(json.data.users.achievements.nerd.level);
          setVida(json.data.users.achievements.vida.level);
          setLogros(json.data.users.achievements);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (usertopic) {
      router.push(`/user/achv/${usertopic}`);
    }
  }, [usertopic, router]);

  // console.log(logros);

  const idiomasGrey = (
    <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
  );
  const idiomasColor = (
    <img src="/B_IDIOMAS.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );

  const mateGrey = <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />;
  const mateColor = (
    <img src="/B_MATE.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );
  const cienciasGrey = (
    <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
  );
  const cienciasColor = (
    <img src="/B_CIENCIA.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );
  const mundoGrey = <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />;
  const mundoColor = (
    <img src="/B_MUNDO.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );
  const nerdGrey = <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />;
  const nerdColor = (
    <img src="/B_NERD.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );
  const deportesGrey = (
    <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
  );
  const deportesColor = (
    <img src="/B_DEPORTE.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );

  const vidaGrey = <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />;
  const vidaColor = (
    <img src="/B_VIDA.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );
  const artesGrey = <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />;
  const artesColor = (
    <img src="/B_ARTE.svg" alt="" className="h-10 w-10 hover:animate-spin" />
  );
  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col  overflow-hidden"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />
      {/* TÍTULO  */}
      <div className="flex justify-center p-5">
        <div className="inline-flex gap-4 bg-oldwhite/60 rounded-xl shadow-md px-5 py-3">
          <img src="/icon_userachieve.svg" alt="logros" className="h-12" />
          <p className="flex  justify-center font-lucky text-dgreen text-5xl  ">
            LOGROS
          </p>
        </div>
      </div>

      <div className="flex justify-center p-5">
        {/* CONTAINER DE MEDALLAS X TOPIC*/}
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 md:p-10 md:gap-6 lg:grid-cols-4 lg:gap-3 lg:p-5 justify-items-center bg-oldwhite/70 shadow-md rounded-xl p-5 ">
          {/* CONTAINER IDIOMAS */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("idiomas")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl shadow-md">
                {idiomas >= 5 ? idiomasColor : idiomasGrey}
                {idiomas >= 10 ? idiomasColor : idiomasGrey}
                {idiomas >= 15 ? idiomasColor : idiomasGrey}
                {idiomas >= 20 ? idiomasColor : idiomasGrey}
              </div>
            </button>
          </div>

          {/* CONTAINER MATE */}
          <div className="flex-col justify-center">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-mathD text-2xl text-center">MATE</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("matematicas")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-mathL bg-white/35 p-2  rounded-xl shadow-md">
                {matematicas >= 5 ? mateColor : mateGrey}
                {matematicas >= 10 ? mateColor : mateGrey}
                {matematicas >= 15 ? mateColor : mateGrey}
                {matematicas >= 20 ? mateColor : mateGrey}
              </div>
            </button>
          </div>
          {/* CONTAINER CIENCIAS*/}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-natD text-2xl text-center">
                CIENCIAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("ciencias")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-natL bg-white/35 p-2  rounded-xl shadow-md">
                {ciencias >= 5 ? cienciasColor : cienciasGrey}
                {ciencias >= 10 ? cienciasColor : cienciasGrey}
                {ciencias >= 15 ? cienciasColor : cienciasGrey}
                {ciencias >= 20 ? cienciasColor : cienciasGrey}
              </div>
            </button>
          </div>
          {/* CONTAINER MUNDO */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-worldD text-2xl text-center">
                MUNDO
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("mundo")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-worldL bg-white/35 p-2  rounded-xl shadow-md">
                {mundo >= 5 ? mundoColor : mundoGrey}
                {mundo >= 10 ? mundoColor : mundoGrey}
                {mundo >= 15 ? mundoColor : mundoGrey}
                {mundo >= 20 ? mundoColor : mundoGrey}
              </div>
            </button>
          </div>
          {/* CONTAINER NERD */}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-nerdD text-2xl text-center">NERD</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("nerd")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-nerdL bg-white/35 p-2  rounded-xl shadow-md">
                {nerd >= 5 ? nerdColor : nerdGrey}
                {nerd >= 10 ? nerdColor : nerdGrey}
                {nerd >= 15 ? nerdColor : nerdGrey}
                {nerd >= 20 ? nerdColor : nerdGrey}
              </div>
            </button>
          </div>
          {/* CONTAINER DEPORTES*/}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-sportD text-2xl text-center">
                DEPORTES
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("deportes")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-sportL bg-white/35 p-2  rounded-xl">
                {deportes >= 5 ? deportesColor : deportesGrey}
                {deportes >= 10 ? deportesColor : deportesGrey}
                {deportes >= 15 ? deportesColor : deportesGrey}
                {deportes >= 20 ? deportesColor : deportesGrey}
              </div>
            </button>
          </div>
          {/* CONTAINER VIDA */}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-lifeD text-2xl text-center">VIDA</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("vida")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-lifeL bg-white/35 p-2  rounded-xl shadow-md">
                {vida >= 5 ? vidaColor : vidaGrey}
                {vida >= 10 ? vidaColor : vidaGrey}
                {vida >= 15 ? vidaColor : vidaGrey}
                {vida >= 20 ? vidaColor : vidaGrey}
              </div>
            </button>
          </div>
          {/* CONTAINER ARTE*/}
          <div className="flex-col justify-center">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-artD text-2xl text-center">ARTE</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("arte")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-artL bg-white/35 p-2  rounded-xl shadow-md">
                {artes >= 5 ? artesColor : artesGrey}
                {artes >= 10 ? artesColor : artesGrey}
                {artes >= 15 ? artesColor : artesGrey}
                {artes >= 20 ? artesColor : artesGrey}
              </div>
            </button>
          </div>
        </div>

        {/* AQUÍ VA UN RANDY  QUE PUEDA HABLAR */}
        <div className="flex absolute bottom-0 p-5"></div>
      </div>
    </div>
  );
}
