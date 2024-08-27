import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactoFooter from "@/components/ContactoFooter";
import { useRouter } from "next/router";
import Burbuja from "@/components/burbuja";
import RandyTextLeft from "@/components/RandyTextLeft";

export default function User() {
  const router = useRouter();
  const [tourStep, setTourStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const tourUserMenu = localStorage.getItem("tourUserMenu");
    if (!tourUserMenu || tourUserMenu === "false") {
      setTourStep(1);
    }
  }, []);

  const handleCreateAccount = () => {
    router.push("/register");
    setTourStep(2); // Cambia al segundo paso para continuar el recorrido la próxima vez
  };

  const handleContinue = () => {
    setTourStep(2);
  };

  const handleUnderstood = () => {
    setTourStep(3);
  };

  const handlePlay = () => {
    localStorage.setItem("tourUserMenu", "true");
    setTourStep(0);
    router.push("/menu");
  };

  const handleFavsClick = () => {
    router.push("/user/favs");
  };

  const handleViewClick = () => {
    router.push("/user/ackn");
  };

  const handleRankingClick = () => {
    router.push("/ranking");
  };

  return (
    <main
      className={`w-full min-h-screen bg-white overflow-hidden ${
        tourStep > 0 ? "pointer-events-none filter blur-[2]" : ""
      }`}
    >
      {/* NAVBAR COMPONENT */}
      <Navbar />

      {/* CARD CONTAINER */}
      <div className="bg-oldwhite rounded-xl p-6 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
        <div className="md:grid grid-cols-2 ">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <div className="p-4 px-10 lg:px-2">
            <img
              src="/avatars/A_RANDY_DED.svg"
              alt="RANDY_DED"
              className="h-32 w-32 animate-spin"
            />
          </div>

          {/* SCORE */}
          <div className="py-4 px-10 grid grid-cols-1 place-items-center lg:px-2">
            <div className="border-4 border-lorange rounded-lg py-2 px-4 grid grid-rows-2 gap-2 w-fit">
              {" "}
              <p className="font-lucky animate-heartbeat text-dgreen text-2xl text-center">
                SCORE
              </p>
              <p className="font-mont font-semibold text-black text-lg text-center ">
                Crea tu cuenta
              </p>
            </div>
          </div>
        </div>

        {/* BOTONES HACIA SUBMENUS */}
        <div className="grid gap-4 w-full py-4 px-10 md:px-32 lg:grid-cols-2 lg:gap-2 lg:px-2 xl:grid-cols-4 ">
          <button
            className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly cursor-pointer"
            onClick={handleFavsClick}
          >
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl xl:text-lg">
              FAVS
            </span>
          </button>

          <button
            className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly relative cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img src="/icon_userachieve.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl xl:text-lg">
              LOGROS
            </span>
            {showTooltip && (
              <div className="absolute top-10 bg-green-500 left-0 font-lucky text-sm text-white z-10">
                Debes estar logueado para ver tus logros
              </div>
            )}
          </button>

          <button
            className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly cursor-pointer"
            onClick={handleViewClick}
          >
            <img src="/icon_userview.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl xl:text-lg ">
              VISTOS
            </span>
          </button>

          <button
            className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly cursor-pointer"
            onClick={handleRankingClick}
          >
            <img src="/icon_userabt.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl xl:text-lg">
              RANKING
            </span>
          </button>
        </div>
      </div>

      {/* FOOTER CONTACTO */}
      {tourStep === 0 && <ContactoFooter />}

      {/* TOUR BURBUJA */}
      {tourStep > 0 && (
        <div className="fixed inset-x-0 bottom-16 flex justify-center items-center pb-24 z-50 pointer-events-auto">
          <Burbuja id="burbuja2">
            {tourStep === 1 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="Aquí encontrarás todo sobre tu usuario. Para ello, puedes crear tu cuenta."
                  className="text-xs"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleCreateAccount}
                    className="bg-green-500 font-lucky text-white rounded-full px-4 py-2 transform hover:scale-110"
                  >
                    Crear cuenta
                  </button>
                  <button
                    onClick={handleContinue}
                    className="bg-lorange font-lucky text-white rounded-full px-4 py-2 transform hover:scale-110"
                  >
                    Recorrido
                  </button>
                </div>
              </div>
            )}
            {tourStep === 2 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="Puedes modificar tu avatar y nombre si estas registrado "
                  className="text-xs"
                />
                <button
                  onClick={handleUnderstood}
                  className="bg-lorange font-lucky text-white rounded-full px-4 py-2 transform hover:scale-110 mt-4"
                >
                  Entendido
                </button>
              </div>
            )}
            {tourStep === 3 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="y como explorador puedes ver tus ♥ / vistos (no los perdás al registrarte)"
                  className="text-xs"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handlePlay}
                    className="bg-green-500 text-lg font-lucky text-white rounded-full px-4 py-2 transform hover:scale-110"
                  >
                    Jugar
                  </button>
                </div>
              </div>
            )}
          </Burbuja>
        </div>
      )}
    </main>
  );
}
