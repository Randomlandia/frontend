import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import TemaContainer from "@/components/TemaContainerSlider";
import MenuTemasSlider from "@/components/MenuTemasSlider";
import MenuTemasCircle from "@/components/MenuTemasCircle";
import RandyTextRight from "@/components/RandyTextRight";
import RandyTextLeft from "@/components/RandyTextLeft";
import BackgroundModal from "@/components/BackgroundModal";
import Burbuja from "@/components/burbuja";

export default function Menu() {
  const [background, setBackground] = useState("../backgrounds/3.png");
  const [showTour, setShowTour] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateBackground();
      startTour();
    }
  }, []);

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  const startTour = () => {
    const recorrido = localStorage.getItem("recorrido");
    if (!recorrido) {
      setShowTour(true);
    }
  };

  const handleContinue = () => {
    localStorage.setItem("recorrido", "true");
    setShowTour(false);
    router.push("menu/ciencias");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${
          background
            ? `/backgrounds/${background}`
            : "/backgrounds/bg-booksflying.webp"
        }')`,
      }}
    >
      {/* Fondo difuminado cuando showTour es true */}
      {showTour && (
        <div className="fixed inset-0 backdrop-blur-[2px] pointer-events-none z-10"></div>
      )}

      <div className={`flex ${showTour ? "pointer-events-none" : ""}`}>
        <Navbar />

        <BackgroundModal onClose={updateBackground} />
      </div>

      <div
        name="menu"
        className="flex flex-col  items-center w-full h-full z-10 py-5 lg:py-3 px-2 justify-end pt-13 xl:mt-7"
      >
        <div className="sm:hidden relative lg:w-1/2 sm:h-full bg-oldwhite/70 shadow-xl m-5 pt-5 rounded-xl lg:mx-7">
          {/* Carusel para mobile */}
          <div className="flex flex-col justify-items-center pt-5">
            <TemaContainer bool={true} name="default" />
            <MenuTemasSlider />
            {!showTour && (
              <div className="mt-6 pt-5">
                <RandyTextRight
                  id="RandyElige"
                  img={"/RANDY_08.svg"}
                  text="¡Vamo, vamo, elige uno!"
                />
              </div>
            )}
          </div>
        </div>

        <div className="hidden sm:flex flex-col w-4/5 lg:w-1/2 h-full bg-oldwhite/70 shadow-xl p-5 rounded-xl lg:mx-7 md:mt-16 xl:mt-1 gap-5">
          {/* Contenido para pantallas mayores a mobile */}
          <div className="lg:w-4/5 mx-auto">
            <MenuTemasCircle />
          </div>
          {!showTour && (
            <div id="RandyElige" className="mt-6">
              <RandyTextLeft
                img={"/RANDY_08.svg"}
                text="¡Vamo, vamo, elige uno!"
              />
            </div>
          )}
        </div>
      </div>

      {showTour && (
        <div className="fixed inset-x-0 bottom-16 flex justify-center items-center pb-24 z-20 pointer-events-auto">
          <Burbuja id="burbuja2">
            <div className="flex flex-col items-center">
              <RandyTextLeft
                img={"/RANDY_08.svg"}
                text="Este es el menú de temas, aquí encontrarás temas totalmente randoms."
                className="text-xs"
              />
              <button
                onClick={handleContinue}
                className="bg-natL mt-4 h-9 px-5 rounded-[10px] flex items-center transform hover:scale-110 text-xl justify-center align-middle font-lucky"
              >
                Continuar
              </button>
            </div>
          </Burbuja>
        </div>
      )}
    </div>
  );
}
