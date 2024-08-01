import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useFavorites } from "@/utils/useFavorites";
import SandiaCardPreview from "@/components/SandiaCardPreview";
import Navbar from "@/components/Navbar";
import RandyTextLeft from "@/components/RandyTextLeft";
import TemaContainer from "@/components/TemaContainer";
import ScrollableBox from "@/utils/scrollableBox";
// import { ButtonGroup } from "rsuite";

const SandiaList = () => {
  const router = useRouter();
  const { topic } = router.query;
  const { favorites, toggleFavorite } = useFavorites();
  const [sandias, setSandias] = useState([]);
  const [background, setBackground] = useState("../backgrounds/3.png");
  const [isHover, setISHover] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showRandy, setShowRandy] = useState("/RANDY_favs.svg");

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  const handleMouseEnter = () => {
    setISHover(true);
  };

  const handleMouseLeave = () => {
    setISHover(false);
  };
  const handleToggleReference = () => {
    setShowReference((prev) => !prev);
  };

  const handleLikeAnimation = () => {
    setShowRandy((prev) =>
      prev === "/RANDY_favs.svg" ? "/RANDY_toggle.svg" : "/RANDY_favs.svg"
    );
  };

  const isFavRoute = router.pathname.includes("/favs");
  const isAcknRoute = router.pathname.includes("/ackn");
  const isMenuRoute = router.pathname.includes("/menu");

  const handleClick = () => {
    if (isMenuRoute) {
      router.push(`/menu`);
    } else if (isFavRoute) {
      router.push(`/user/favs`);
    } else if (isAcknRoute) {
      router.push(`/user/ackn`);
    }
  };

  useEffect(() => {
    updateBackground();
    const storedSandias = (() => {
      if (router.pathname.includes("/favs")) {
        const favs = localStorage.getItem("favs");
        return favs ? JSON.parse(favs) : [];
      } else if (router.pathname.includes("/ackn")) {
        const view = localStorage.getItem("view");
        return view ? JSON.parse(view) : [];
      } else {
        return [];
      }
    })();
    setSandias(storedSandias);
  }, [router.pathname, favorites]);

  const filteredSandias = useMemo(() => {
    if (!topic || topic === "default" || topic === "[topic]") {
      return sandias;
    }
    return sandias.filter((sandia) => sandia?.topic?.name === topic);
  }, [topic, sandias]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div
        className="relative min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat bg-fixed py-6"
        style={{
          backgroundImage: `url('${
            background
              ? `/backgrounds/${background}`
              : "/backgrounds/bg-booksflying.webp"
          }')`,
        }}
      >
        <div className="flex flex-col w-auto mx-10 bg-oldwhite/70 px-10 py-6 rounded-xl gap-4 sm:gap-6">
          <div id="titleBtn" className="relative">
            {/* {isHover && (
              <p className="absolute top-0 z-10 capitalize text-dgreen font-bold text-center text-xs">
                De vuelta al menu
              </p>
            )} */}
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              className="flex gap-2  bg-lorange/60 mx-auto py-3 px-10 rounded-full items-center"
            >
              <div className="w-8 sm:w-10 bg-langD rounded-full p-[6px] sm:p-2 flex items-center">
                <img src="/icon_view.svg" alt="👀" className="w-auto" />
              </div>
              <h1 className="font-lucky text-dgreen text-3xl sm:text-5xl tracking-wider">
                randomteca
              </h1>
            </button>
          </div>
          <div className="flex flex-wrap gap-5 justify-around">
            {Array.isArray(filteredSandias) && filteredSandias.length > 0 ? (
              filteredSandias.map((sandia) => (
                <SandiaCardPreview
                  key={sandia._id}
                  sandia={sandia}
                  isFavorite={favorites.some((fav) => fav._id === sandia._id)}
                  onToggleFavorite={() => toggleFavorite(sandia)}
                />
              ))
            ) : (
              <div className="flex flex-col items-center">
                <div className="card flex flex-col h-64 w-72 gap-y-1 bg-oldwhite/80 font-mont font-semibold text-center rounded-lg">
                  <div className="flex rounded-full w-8 mx-auto my-3 shadow-lg shadow-black">
                    <TemaContainer bool={true} name={"default"} />
                  </div>
                  <div className="card-content h-full w-64 overflow-y-auto scrollbar-hide mx-auto">
                    {showReference ? (
                      <ScrollableBox
                        content={
                          "Y aqui podrás ver dónde consultar la información."
                        }
                      />
                    ) : (
                      <ScrollableBox
                        content={
                          "Aqui verás cosas super interesantes, si das click en Randy puedes dejar de recordarlas también."
                        }
                      />
                    )}
                  </div>
                  <div className="flex h-20 gap-1 items-baseline justify-between">
                    <div className="w-28 flex gap-1 justify-around items-baseline">
                      {/* <button className="py-3 relative">
                        <img
                          src={"/icon_vision.svg"}
                          alt="➕"
                          className="w-10 h-10"
                        />
                      </button> */}
                    </div>
                    <div className="flex gap-1 justify-end items-baseline">
                      <button
                        onClick={handleToggleReference}
                        className="py-3 relative"
                      >
                        <img
                          src="/icon_turn.svg"
                          alt="🔄️"
                          className="w-10 h-10"
                        />
                      </button>
                      <div>
                        <button onClick={handleLikeAnimation}>
                          <img src={showRandy} alt="" className="w-20 h-20" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p> </p>
                  <RandyTextLeft
                    img={"/RANDY_08.svg"}
                    text="Reservado para lo que quieras guardar!"
                  />
                </div>
              </div>
            )}
          </div>
          {filteredSandias.length > 0 && (
            <div className="mt-4">
              <p> </p>
              <RandyTextLeft
                img={
                  filteredSandias.length < 3 ? "/RANDY_07.svg" : "/RANDY_08.svg"
                }
                text={
                  filteredSandias.length < 3
                    ? "¡Esto se ve un poco solo!"
                    : "¡Mira todo lo que hemos juntado!"
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SandiaList;
