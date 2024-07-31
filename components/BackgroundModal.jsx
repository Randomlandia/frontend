import React from "react";
import { useState, useEffect } from "react";
import RandyTextRight from "./RandyTextRight";
import BackgroundSlider from "@/components/BackgroundSlider";
import BackgroundsList from "@/constants/BackgroundsList";
import BackgroundCard from "./BackgroundCard";

export default function ModalComponent({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBg, setSelectedBg] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [stored, setStored] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    localStorage.removeItem("bg2");
    if (onClose) {
      onClose();
    }
  };

  const handleBgSelect = (img) => {
    setSelectedBg(img.bg);
  };

  useEffect(() => {
    if (selectedBg) {
      localStorage.setItem("bg2", selectedBg);
    }
  }, [selectedBg]);

  const saveHandler = (e) => {
    e.preventDefault();
    const bg = localStorage.getItem("bg");
    const bg2 = localStorage.getItem("bg2");

    if (!bg && !bg2) {
      setStored(false);
      setShowError(true);
      return;
    }

    if (bg2) {
      setStored(true);
      localStorage.setItem("bg", bg2);
      setShowError(false);
      setTimeout(() => {
        setShowSuccess(true);
        setTimeout(() => {
          closeModal();
          setShowSuccess(false);
        }, 2000);
        localStorage.removeItem("bg2");
      }, 1000);
    }
    return;
  };

  const checkLocalStorage = () => {
    const bg2 = localStorage.getItem("bg2");
    if (!bg2) {
      setIsDisabled(true);
      setShowError(true);
    } else {
      setIsDisabled(false);
      setShowError(false);
    }
  };

  useEffect(() => {
    checkLocalStorage();

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      checkLocalStorage();
    };

    window.addEventListener("click", handleStorageChange);

    return () => {
      window.removeEventListener("click", handleStorageChange);
    };
  }, []);

  return (
    <div className="max-h-screen">
      <button
        className="h-10 px-6 flex justify-end items-center"
        onClick={openModal}
      >
        <img src="/icon_edit.svg" alt="edit" className="h-8 w-8" />
      </button>

      {isOpen && (
        <div
          className={`fixed w-full h-svh inset-0 z-40 overflow-hidden flex justify-center items-start animated fadeIn faster py-5 md:px-10`}
          style={{ background: "white" }}
        >
          <div className="border-lgreen border-2 shadow-lg h-full max-h-3/4 max-h-screen bg-oldwhite/70 w-11/12 md:w-full lg:max-w-1/2 mx-auto rounded-lg z-50">
            <div className="py-2 px-4 h-full  flex flex-col">
              {/* logica del titulo */}
              <div className="flex flex-col">
                <div
                  className="cursor-pointer flex justify-end"
                  onClick={closeModal}
                >
                  <img src="/close.svg" alt="X" className="w-5 h-5" />
                </div>
                <p className="text-5xl font-bold font-lucky text-center text-dgreen">
                  ¡ELIGE TU ESCENARIO!
                </p>
              </div>

              {/* logica del slider o cuadricula */}
              <div>
                {/* Aquí estoy insertando el slider para páginas móviles */}
                <div className="my-5 sm:hidden" name="activador">
                  <BackgroundSlider />
                </div>

                {/* Aqui esta el mapeo para tablets y desktop */}
                <div className="hidden py-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 w-auto sm:gap-2 lg:gap-6">
                  {BackgroundsList.map((image, index) => (
                    <div key={index} className="w-full max-w-lg mx-auto">
                      <BackgroundCard
                        img={`/backgrounds/${image.bg}`}
                        onSelect={() => handleBgSelect(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lógica botón save y Randy */}
              <div className="flex items-center justify-around h-auto">
                <RandyTextRight
                  img={"/RANDY_08.svg"}
                  text="¿Cuál será mi hogar?"
                />
                <div className="flex flex-col lg:pr-96">
                  <button
                    onClick={saveHandler}
                    className={`focus:outline-none px-4 p-2 rounded-lg text-white font-lucky sm:text-2xl ${
                      isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-pcyan hover:bg-sportL"
                    }`}
                    disabled={isDisabled}
                  >
                    Guardar
                  </button>
                  {showError && (
                    <p className="text-red-500 mt-2 font-mont font-semibold text-center text-xs sm:text-lg">
                      ¡Oye! No has
                      <br />
                      elegido uno.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-oldwhite/70 bg-opacity-75">
          <p className="text-ram text-center text-3xl font-bold text-dgreen">
            ¡Perfecto!
            <br /> Ya tenemos casa.
          </p>
        </div>
      )}
    </div>
  );
}
