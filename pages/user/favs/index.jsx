import Navbar from "@/components/Navbar";
import TemaContainer from "@/components/TemaContainerSlider";
import MenuFavsSlider from "@/components/MenuFavsSlider";
import MenuFavsCircle from "@/components/MenuFavsCircle";
import RandyTextRight from "@/components/RandyTextRight";
import RandyTextLeft from "@/components/RandyTextLeft";
import BackgroundModal from "@/components/BackgroundModal";
import React, { useState, useEffect } from "react";

export default function Menu() {
  const [background, setBackground] = useState("../backgrounds/3.png");

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  useEffect(() => {
    updateBackground();
  }, []);

  return (
    <div
      className="max-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${
          background
            ? `/backgrounds/${background}`
            : "/backgrounds/bg-booksflying.webp"
        }')`,
      }}
    >
      <Navbar />
      <div className="flex justify-end pt-13   xl:mt-7">
        <BackgroundModal onClose={updateBackground} />
      </div>
      <div
        name="menu"
        className="w-full h-full pt-14 z-10 flex justify-center py-5 lg:py-3 px-2 "
      >
        <div className="sm:hidden  lg:w-1/2 sm:h-full bg-oldwhite/70 shadow-xl grid gap-3 p-5 rounded-xl lg:mx-7">
          <div id="titleBtn" className="relative">
            {/* {isHover && (
              <p className="absolute top-0 z-10 capitalize text-dgreen font-bold text-center text-xs">
                De vuelta al menu
              </p>
            )} */}
            <button className="flex gap-2  bg-lorange/60 mx-auto py-3 px-10 rounded-full items-center">
              <div className="w-8 sm:w-10 bg-langD rounded-full p-[6px] sm:p-2 flex items-center">
                <img src="/icon_whiteheart.svg" alt="❤️" className="w-auto" />
              </div>
              <h1 className="font-lucky text-dgreen text-3xl sm:text-5xl tracking-wider">
                favoritas
              </h1>
            </button>
          </div>
          {/* Esta parte muestra el carusel si la pantalla es mobile */}
          <div className="flex flex-col justify-items-center">
            <TemaContainer bool={true} name="default" />
            <MenuFavsSlider />
            <div className="mt-6">
              <RandyTextRight
                img={"/RANDY_08.svg"}
                text="¡Vamo, vamo, elige uno!"
              />
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-col w-4/5 lg:w-1/2 h-full bg-oldwhite/70 shadow-xl p-5 rounded-xl lg:mx-7 gap-5">
          <div id="titleBtn" className="relative">
            {/* {isHover && (
              <p className="absolute top-0 z-10 capitalize text-dgreen font-bold text-center text-xs">
                De vuelta al menu
              </p>
            )} */}
            <button className="flex gap-2  bg-lorange/60 mx-auto py-3 px-10 rounded-full items-center">
              <div className="w-8 sm:w-10 bg-langD rounded-full p-[6px] sm:p-2 flex items-center">
                <img src="/icon_whiteheart.svg" alt="❤️" className="w-auto" />
              </div>
              <h1 className="font-lucky text-dgreen text-3xl sm:text-5xl tracking-wider">
                favoritas
              </h1>
            </button>
          </div>
          {/* Esta parte se muestra para cualquier otro tamaño mayor a mobile */}
          <div className="lg:w-4/5 mx-auto">
            <MenuFavsCircle />
          </div>
          <div className="">
            <p> </p>
            <RandyTextLeft
              img={"/RANDY_08.svg"}
              text="¡A que no puedes pintarlas todas!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
