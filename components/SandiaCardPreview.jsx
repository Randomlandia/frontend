import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import ScrollableBox from "@/utils/scrollableBox";
import TemaContainer from "./TemaContainer";

export default function SandiaCardPreview({
  sandia,
  isFavorite,
  onToggleFavorite,
}) {
  const router = useRouter();
  const [showReference, setShowReference] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleToggleReference = () => {
    setShowReference((prev) => !prev);
  };

  const getHoverText = (icon) => {
    switch (icon) {
      case "icon_vision":
        return "Ver más";
      case "icon_turn":
        return "Refe ren cia";
      case "RANDY_favs":
        return "Si le puchas se me va a olvidar";
      case "RANDY_toggle":
        return "¿La mandamos a favoritos?";
      default:
        return "";
    }
  };

  return (
    <div className="card flex flex-col h-64 w-72 gap-y-1 bg-oldwhite/80 ring ring-lorange/40 font-mont font-semibold text-center rounded-lg">
      <div className="flex rounded-full w-8 mx-auto my-3 shadow-lg shadow-black">
        <TemaContainer bool={true} name={`${sandia?.topic?.name}`} />
      </div>
      <div className="card-content h-full w-64 overflow-y-auto scrollbar-hide mx-auto">
        {showReference ? (
          <ScrollableBox content={sandia.reference} />
        ) : (
          <ScrollableBox content={sandia.content} />
        )}
      </div>
      <div className="flex h-20 gap-1 items-baseline justify-between">
        <div className="w-28 flex gap-1 justify-around items-baseline">
          <button
            // falta definir la ruta para este boton, mostrara la sandia donde estan los botones de next
            // onClick={() => router.push(`/${sandia._id}`)}
            className="py-3 relative hidden"
            onMouseEnter={() => handleMouseEnter("icon_vision")}
            onMouseLeave={handleMouseLeave}
          >
            <img src={"/icon_vision.svg"} alt="➕" className="w-10 h-10" />
            {hoveredIcon === "icon_vision" && (
              <div className="absolute inset-0 flex justify-center items-center bg-white/70 rounded-full">
                <p className="z-10 text-dgreen font-semibold  leading-3 text-center text-xs">
                  {getHoverText("icon_vision")}
                </p>
              </div>
            )}
          </button>
        </div>
        <div className="flex gap-1 justify-end items-baseline">
          <button
            onMouseEnter={() => handleMouseEnter("icon_turn")}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleReference}
            className="py-3 relative"
          >
            <img src="/icon_turn.svg" alt="🔄️" className="w-10 h-10" />
            {hoveredIcon === "icon_turn" && (
              <div className="absolute inset-0 flex justify-center items-center bg-white/70 rounded-full">
                <p className="z-10 text-dgreen font-bold text-csemienter leading-3  text-xs">
                  {getHoverText("icon_turn")}
                </p>
              </div>
            )}
          </button>
          <button
            onClick={onToggleFavorite}
            className="relative"
            onMouseEnter={() =>
              handleMouseEnter(isFavorite ? "RANDY_favs" : "RANDY_toggle")
            }
            onMouseLeave={handleMouseLeave}
          >
            {isFavorite ? (
              <div className="relative cursor-pointer flex justify-center items-center w-full h-full mx-auto">
                <img src="/RANDY_favs.svg" alt="❤️" className="w-20 h-20" />
                {hoveredIcon === "RANDY_favs" && (
                  <div className="absolute inset-0 flex justify-center items-center bg-white/70 rounded-full">
                    <p className="z-10 text-dgreen font-semibold  leading-3 text-center text-xs">
                      {getHoverText("RANDY_favs")}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative cursor-pointer flex justify-center items-center w-full h-full mx-auto">
                <img src="/RANDY_toggle.svg" alt="✅" className="w-20 h-20" />
                {hoveredIcon === "RANDY_toggle" && (
                  <div className="absolute inset-0 flex justify-center items-center bg-white/70 rounded-full">
                    <p className="z-10 text-dgreen font-semibold  leading-3 text-center text-xs">
                      {getHoverText("RANDY_toggle")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
