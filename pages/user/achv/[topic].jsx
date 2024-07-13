import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function MedallaDetail() {
  const defaultBackground = "bg-booksflying.webp";
  const [background, setBackground] = useState("bg-booksflying.webp");
  const router = useRouter();
  const [topicP, setTopic] = useState();
  const [colorFondo, setColorFondo] = useState();
  const [colorTexto, setColorTexto] = useState();
  const [iconoTopic, setIconoTopic] = useState();
  const [iconoTopicGrande, setIconoTopicGrande] = useState();
  let topic = router.query.topic;

  useEffect(() => {
    setTopic(topic);
  }, [topic]);

  useEffect(() => {
    if (topicP == "idiomas") {
      setColorFondo("border-langL");
      setColorTexto("text-langD ");
      setIconoTopic("/B_IDIOMASgrey.svg");
      setIconoTopicGrande("/M_IDIOMA_GREY.svg");
    }
    if (topicP == "mate") {
      setColorFondo("border-mathL");
      setColorTexto("text-mathD");
      setIconoTopic("/B_MATEgrey.svg");
      setIconoTopicGrande("/M_MATE_GREY.svg");
    }
    if (topicP == "ciencias") {
      setColorFondo("border-natL");
      setColorTexto("text-natD ");
      setIconoTopic("/B_CIENCIAgrey.svg");
      setIconoTopicGrande("/M_CIENCIA_GREY.svg");
    }
    if (topicP == "mundo") {
      setColorFondo("border-worldL");
      setColorTexto("text-worldD ");
      setIconoTopic("/B_MUNDOgrey.svg");
      setIconoTopicGrande("/M_MUNDO_GREY.svg");
    }
    if (topicP == "nerd") {
      setColorFondo("border-nerdL");
      setColorTexto("text-nerdD");
      setIconoTopic("/B_NERDgrey.svg");
      setIconoTopicGrande("/M_NERD_GREY.svg");
    }
    if (topicP == "deportes") {
      setColorFondo("border-sportL");
      setColorTexto("text-sportD ");
      setIconoTopic("/B_DEPORTEgrey.svg");
      setIconoTopicGrande("/M_DEPORTE_GREY.svg");
    }
    if (topicP == "vida") {
      setColorFondo("border-lifeL");
      setColorTexto("text-lifeD");
      setIconoTopic("/B_VIDAgrey.svg");
      setIconoTopicGrande("/M_VIDA_GREY.svg");
    }
    if (topicP == "arte") {
      setColorFondo("border-artL");
      setColorTexto("text-artD");
      setIconoTopic("/B_ARTEgrey.svg");
      setIconoTopicGrande("/M_ARTE_GREY.svg");
    }
  }, [topicP]);

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col  overflow-hidden"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />

      <div
        className={`flex flex-col gap-2 m-auto bg-oldwhite/75 border-4 ${colorFondo} rounded-xl shadow-lg px-6 py-4 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto`}
      >
        <div className="inline-flex justify-center gap-6 ">
          {/* MEDALLA GRANDE TOPIC */}
          <div className="flex justify-start">
            <img
              src={iconoTopicGrande}
              alt={`iconoGrande${topicP}`}
              className="h-16"
            />
          </div>{" "}
          {/* NOMBRE DEL TOPIC */}
          <div className="flex place-items-center">
            <p className={`font-lucky ${colorTexto} text-center text-4xl`}>
              {topicP}
            </p>
          </div>
        </div>

        {/* CAMINO BADGES + ESTRELLAS  */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 object-center  lg:gap-10 py-2">
          {/* PRINCIPIANTE */}
          <div className="">
            <div className="grid grid-cols-5 justify-items-center gap-4">
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src={`${iconoTopic}`} alt={`icono-${topicP}`} />
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
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src={`${iconoTopic}`} alt={`icono-${topicP}`} />
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
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src={`${iconoTopic}`} alt={`icono-${topicP}`} />
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
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src="/stargrey.svg" alt="estrella" />
              <img src={`${iconoTopic}`} alt={`icono-${topicP}`} />
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
