import React from "react";
import Navbar from "@/components/Navbar";
import TemaContainer from "@/components/TemaContainerSlider";
import MenuTemasSlider from "@/components/MenuTemasSlider";
import MenuTemasCircle from "@/components/MenuTemasCircle";
import RandyTextRight from "@/components/RandyTextRight";
import RandyTextLeft from "@/components/RandyTextLeft";
import BackgroundModal from "@/components/BackgroundModal";
import { useState, useEffect } from "react";
export default function Menu() {
  const [background, setBackground] = useState("../backgrounds/3.png");

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateBackground();
    }
  }, []);

  return (
    <div className="w-full max-h-screen max-w-screen flex flex-col bg-white pb-8 overflow-hidden">
      <Navbar />
      <div className="flex justify-end">
        <BackgroundModal onClose={updateBackground} />
      </div>
      <div
        className="relative h-screen max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat lg:mx-6 lg:rounded-2xl"
        style={{
          backgroundImage: `url('${
            background
              ? `/backgrounds/${background}`
              : "/backgrounds/bg-booksflying.webp"
          }')`,
        }}
      >
        <div
          name="menu"
          className="w-full h-full z-10 flex justify-center py-5 lg:py-3 px-2"
        >
          <div className="sm:hidden relative lg:w-1/2 sm:h-full bg-oldwhite/70 shadow-xl m-5 pt-5 rounded-xl lg:mx-7">
            {/* Esta parte muestra el carusel si la pantalla es mobile */}
            <div className="flex flex-col justify-items-center">
              <TemaContainer bool={true} name="default" />
              <MenuTemasSlider />
              <div className="mt-6">
                <RandyTextRight
                  img={"/RANDY_08.svg"}
                  text="¡Vamo, vamo, elige uno!"
                />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col w-4/5 lg:w-1/2 h-full bg-oldwhite/70 shadow-xl p-5 rounded-xl lg:mx-7 gap-5">
            {/* Esta parte se muestra para cualquier otro tamaño mayor a mobile */}
            <div className="lg:w-4/5 mx-auto">
              <MenuTemasCircle />
            </div>
            <div className="mt-6">
              <p> </p>
              <RandyTextLeft
                img={"/RANDY_08.svg"}
                text="¡Vamo, vamo, elige uno!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
