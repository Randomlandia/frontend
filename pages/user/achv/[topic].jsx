import React from "react";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function MedallaDetail() {
  const [background, setBackground] = useState("../backgrounds/3.png");
  const router = useRouter();
  const [topicP, setTopic] = useState();
  const [colorFondo, setColorFondo] = useState();
  const [colorTexto, setColorTexto] = useState();
  const [iconoTopic, setIconoTopic] = useState();
  const [iconoTopicOn, setIconoTopicOn] = useState();
  const [iconoTopicGrande, setIconoTopicGrande] = useState();
  const [iconoTopicGrandeOff, setIconoTopicGrandeOff] = useState();
  const [id, setId] = useState();
  const [logros, setLogros] = useState();
  const [colorStar, setColorStar] = useState();

  useEffect(() => {
    const idLocal = localStorage.getItem("userID");
    const topic = router.query.topic;

    setId(idLocal);
    setTopic(topic);

    if (topic === "idiomas") {
      setColorFondo("border-langL");
      setColorTexto("text-langD");
      setIconoTopic("/B_IDIOMASgrey.svg");
      setIconoTopicOn("/B_IDIOMAS.svg");
      setColorStar("/starlang.svg");
      setIconoTopicGrande("/M_IDIOMA.svg");
      setIconoTopicGrandeOff("/M_IDIOMA_GREY.svg");
    } else if (topic === "matematicas") {
      setColorFondo("border-mathL");
      setColorTexto("text-mathD");
      setIconoTopic("/B_MATEgrey.svg");
      setIconoTopicOn("/B_MATE.svg");
      setColorStar("/starmath.svg");
      setIconoTopicGrande("/M_MATE.svg");
      setIconoTopicGrandeOff("/M_MATE_GREY.svg");
    } else if (topic === "ciencias") {
      setColorFondo("border-natL");
      setColorTexto("text-natD");
      setIconoTopic("/B_CIENCIAgrey.svg");
      setIconoTopicOn("/B_CIENCIA.svg");
      setColorStar("/starnat.svg");
      setIconoTopicGrande("/M_CIENCIA.svg");
      setIconoTopicGrandeOff("/M_CIENCIA_GREY.svg");
    } else if (topic === "mundo") {
      setColorFondo("border-worldL");
      setColorTexto("text-worldD");
      setIconoTopic("/B_MUNDOgrey.svg");
      setIconoTopicOn("/B_MUNDO.svg");
      setColorStar("/starworld.svg");
      setIconoTopicGrande("/M_MUNDO.svg");
      setIconoTopicGrandeOff("/M_MUNDO_GREY.svg");
    } else if (topic === "nerd") {
      setColorFondo("border-nerdL");
      setColorTexto("text-nerdD");
      setIconoTopic("/B_NERDgrey.svg");
      setIconoTopicOn("/B_NERD.svg");
      setColorStar("/starnerd.svg");
      setIconoTopicGrande("/M_NERD.svg");
      setIconoTopicGrandeOff("/M_NERD_GREY.svg");
    } else if (topic === "deportes") {
      setColorFondo("border-sportL");
      setColorTexto("text-sportD");
      setIconoTopic("/B_DEPORTEgrey.svg");
      setIconoTopicOn("/B_DEPORTE.svg");
      setColorStar("/starsport.svg");
      setIconoTopicGrande("/M_DEPORTE.svg");
      setIconoTopicGrandeOff("/M_DEPORTE_GREY.svg");
    } else if (topic === "vida") {
      setColorFondo("border-lifeL");
      setColorTexto("text-lifeD");
      setIconoTopic("/B_VIDAgrey.svg");
      setIconoTopicOn("/B_VIDA.svg");
      setColorStar("/starlife.svg");
      setIconoTopicGrande("/M_VIDA.svg");
      setIconoTopicGrandeOff("/M_VIDA_GREY.svg");
    } else if (topic === "arte") {
      setColorFondo("border-artL");
      setColorTexto("text-artD");
      setIconoTopic("/B_ARTEgrey.svg");
      setIconoTopicOn("/B_ARTE.svg");
      setColorStar("/starart.svg");
      setIconoTopicGrande("/M_ARTE.svg");
      setIconoTopicGrandeOff("/M_ARTE_GREY.svg");
    }

    if (idLocal && topic) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${idLocal}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          setLogros(json.data.users.achievements[topic]?.level);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [router.query.topic, id]);

  const startOn = <img src={colorStar} alt="estrella" />;
  const starOff = <img src="/stargrey.svg" alt="estrella" />;
  const iconoOn = (
    <img
      src={iconoTopicOn}
      alt={`icono-${topicP}`}
      className="hover:animate-spin"
    />
  );
  const iconoOff = <img src={iconoTopic} alt={`icono-${topicP}`} />;
  // console.log(logros);
  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col  overflow-hidden"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />

      <div
        className={`flex flex-col gap-2 m-auto bg-oldwhite/75 border-4 ${colorFondo} rounded-xl shadow-lg px-6 py-4 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto`}
      >
        <div className="inline-flex justify-center items-center align-middle gap-6 ">
          {/* MEDALLA GRANDE TOPIC */}

          <div className="flex md:absolute place-items-center">
            {logros < 20 && (
              <img
                src={iconoTopicGrandeOff}
                alt={`iconoGrande${topicP}`}
                className="h-16 "
              />
            )}
            {logros == 20 && (
              <img
                src={iconoTopicGrande}
                alt={`iconoGrande${topicP}`}
                className="h-16 animate-heartbeat"
              />
            )}
            <p
              className={`font-lucky ${colorTexto} text-center text-3xl md:text-4xl `}
            >
              {topicP}
            </p>
          </div>
          <div className=" hidden md:flex  relative z-50 items-end top-0 right-0 md:ml-auto ml-auto  ">
            <button
              type=""
              onClick={() => router.push(`/user/achv`)}
              className="rounded-full w-fit border-2 border-transparent
              hover:border-red-500 p-2"
            >
              <img src="/close.svg" alt="close" className="h-4 w-4" />
            </button>
          </div>

          <div className=" flex md:hidden h-8 w-8 ml-auto   ">
            <button
              onClick={() => router.push(`/user/achv`)}
              type=""
              className="rounded-full h-8 w-8   border-2 border-transparent
              hover:border-red-500 p-2"
            >
              <img src="/close.svg" alt="close" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CAMINO BADGES + ESTRELLAS  */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 object-center  mt-5 lg:gap-10 py-2">
          {/* PRINCIPIANTE */}
          <div className="">
            <div className="grid grid-cols-5 justify-items-center gap-4">
              {logros >= 1 ? startOn : starOff}
              {logros >= 2 ? startOn : starOff}
              {logros >= 3 ? startOn : starOff}
              {logros >= 4 ? startOn : starOff}
              {logros >= 5 ? iconoOn : iconoOff}
            </div>
            <div className="flex justify-center">
              <p className={`font-lucky ${colorTexto} text-center p-2`}>
                PRINCIPIANTE
              </p>
            </div>
          </div>

          {/* INTERMEDIO */}
          <div className="">
            <div className="grid grid-cols-5 justify-items-center gap-4">
              {logros >= 6 ? startOn : starOff}
              {logros >= 7 ? startOn : starOff}
              {logros >= 8 ? startOn : starOff}
              {logros >= 9 ? startOn : starOff}
              {logros >= 10 ? iconoOn : iconoOff}
            </div>
            <div className="flex justify-center">
              <p className={`font-lucky ${colorTexto} text-center p-2`}>
                INTERMEDIO
              </p>
            </div>
          </div>

          {/* AVANZADO */}
          <div className="">
            <div className="grid grid-cols-5 justify-items-center gap-4">
              {logros >= 11 ? startOn : starOff}
              {logros >= 12 ? startOn : starOff}
              {logros >= 13 ? startOn : starOff}
              {logros >= 14 ? startOn : starOff}
              {logros >= 15 ? iconoOn : iconoOff}
            </div>
            <div className="flex justify-center">
              <p className={`font-lucky ${colorTexto} text-center p-2`}>
                AVANZADO
              </p>
            </div>
          </div>

          {/* EXPERTO */}
          <div className="">
            <div className="grid grid-cols-5 justify-items-center gap-4">
              {logros >= 16 ? startOn : starOff}
              {logros >= 17 ? startOn : starOff}
              {logros >= 18 ? startOn : starOff}
              {logros >= 19 ? startOn : starOff}
              {logros >= 20 ? iconoOn : iconoOff}
            </div>
            <div className="flex justify-center">
              <p className={`font-lucky ${colorTexto} text-center p-2`}>
                EXPERTO
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AQUÍ VA UN RANDY  QUE PUEDA HABLAR */}
      <div className="flex absolute bottom-0 p-5"></div>
    </div>
  );
}
