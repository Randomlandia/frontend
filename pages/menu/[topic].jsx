import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useFavorites } from "@/utils/useFavorites";
import { useRouter } from "next/router";
import LoadingState from "@/components/LoadingState";
import TemaContainer from "@/components/TemaContainer";
import SpeechBubble from "@/components/SpeechBubble";
import ModalTest from "@/components/ModalTest";
import { MusicContext } from "@/components/home/musicContex";
import Burbuja from "@/components/burbuja";
import RandyTextLeft from "@/components/RandyTextLeft";
import BurbujaAdaptable from "@/components/BurbujaAdaptable";

export default function Sandia() {
  const router = useRouter();
  const { toggleFavorite } = useFavorites();
  const [sandiasByTopic, setSandiasByTopic] = useState([]);
  const [seenSandias, setSeenSandias] = useState([]);
  const [favs, setFavs] = useState([]);
  const [background, setBackground] = useState("../backgrounds/3.png");
  const [favIcon, setFavIcon] = useState("/icon_redheart.svg");
  const [lastSandia, setLastSandia] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [testCt, setTestCt] = useState(1);
  const [showReference, setShowReference] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [testAvail, setTestAvail] = useState(false);
  const [current, setCurrent] = useState(null);
  const { musica, setMusica } = useContext(MusicContext);

  // Estado del recorrido
  const [tourStep, setTourStep] = useState(0);

  let { topic } = router.query;

  useEffect(() => {
    const tourMenu = localStorage.getItem("tourMenu");
    if (!tourMenu) {
      setTourStep(1); // Inicia el tour si no existe en localStorage
    }

    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
    const storedSeenSandias = JSON.parse(localStorage.getItem("view")) || [];
    setSeenSandias(storedSeenSandias);
    const token = localStorage.getItem("token");
    if (token) setLoggedUser(true);

    if (topic) {
      const sandias = JSON.parse(localStorage.getItem("Sandias")) || [];
      let filteredSandias;
      if (topic === "default") {
        filteredSandias = sandias;
      } else {
        filteredSandias = sandias.filter(
          (sandia) => sandia?.topic?.name === topic
        );
      }

      const filterSandiasExcSeen = filteredSandias?.filter(
        (sandia) =>
          !storedSeenSandias.some((seenSandia) => seenSandia?._id == sandia._id)
      );

      setSandiasByTopic(filterSandiasExcSeen);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [topic]);

  useEffect(() => {
    updateBackground();
    if (current && current?.id !== "null") {
      const isFav = favs.some((fav) => fav._id === current?._id);
      setFavIcon(isFav ? "/icon_redheartfill.svg" : "/icon_redheart.svg");
    } else {
      setFavIcon("/icon_redheart.svg");
    }
  }, [current, favs]);

  useEffect(() => {
    if (sandiasByTopic.length > 0 && !current) {
      handleNextButton();
    }
  }, [sandiasByTopic]);

  const addSandia = (newSandia) => {
    if (!newSandia || newSandia._id === "null") return;
    setSeenSandias((prevSeenSandias) => {
      const sandiaExists = prevSeenSandias.some(
        (sandia) => sandia._id === newSandia._id
      );
      if (sandiaExists) return prevSeenSandias;
      const updatedSeenSandias = [...prevSeenSandias, newSandia];
      localStorage.setItem("view", JSON.stringify(updatedSeenSandias));
      return updatedSeenSandias;
    });
  };

  const getRandomSandia = () => {
    if (sandiasByTopic.length === 0) return;
    const randomSandiaIndex = Math.floor(Math.random() * sandiasByTopic.length);
    const randomSandia = sandiasByTopic[randomSandiaIndex];
    if (testCt === 10 && topic !== "default") {
      setShowTest(true);
    }
    return randomSandia;
  };

  const getRandomSeenSandia = () => {
    let filteredSeenSandias;
    if (topic === "default") {
      filteredSeenSandias = seenSandias;
    } else {
      filteredSeenSandias = seenSandias.filter(
        (sandia) => sandia?.topic.name === topic
      );
    }

    if (filteredSeenSandias.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * filteredSeenSandias.length);
    return filteredSeenSandias[randomIndex];
  };

  const handleLike = () => {
    let newFav = current;
    if (current.id === "null") return;
    const isFav = favs?.some((fav) => fav._id === current?._id);

    if (favs.length > 0 && isFav) {
      const updatedFavs = favs.filter((fav) => fav._id !== current?._id);
      setFavs(updatedFavs);
      toggleFavorite(newFav);
      setFavIcon("/icon_redheart.svg");
    } else {
      const updatedFavs = [...favs, newFav];
      setFavs(updatedFavs);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      toggleFavorite(newFav);
      setFavIcon("/icon_redheartfill.svg");
    }

    if (tourStep === 1) {
      setTourStep(2); // Avanza al siguiente paso del tour
    }
  };

  const handleToggleReference = () => {
    setShowReference((prev) => !prev);

    if (tourStep === 2) {
      setTourStep(3); // Avanza al siguiente paso del tour
    }
  };

  const handleTourNavigation = () => {
    if (tourStep === 3) {
      setTourStep(4); // Avanza al último paso del tour
    }
  };

  const handleTourFinal = (option) => {
    if (option === "play") {
      localStorage.setItem("tourMenu", "true");
      setTourStep(0); // Finaliza el tour
    } else if (option === "tour") {
      localStorage.setItem("tourMenu", "true");
      router.push("/user");
    }
  };

  const handleNextButton = () => {
    const seenSandiasByTopic = seenSandias?.filter(
      (sandia) => sandia?.topic?.name == topic
    );
    if (seenSandiasByTopic.length >= 10) {
      setTestAvail(true);
    }
    if ((!current || current.id === "null") && seenSandias.length === 0) {
      loadRandomSandia();
    } else if (seenSandias.length >= 1) {
      let filteredSeenSandias;
      if (topic === "default") {
        filteredSeenSandias = seenSandias;
      } else {
        filteredSeenSandias = seenSandias?.filter(
          (sandia) => sandia?.topic?.name === topic
        );
        if (filteredSeenSandias.length === 0) {
          loadRandomSandia();
          return;
        }
      }

      const currentIndex = filteredSeenSandias.findIndex(
        (sandia) => sandia?._id === current?._id
      );

      if (current?.id === "null" && filteredSeenSandias.length > 0) {
        setCurrent(filteredSeenSandias[0]);
      } else if (
        currentIndex >= 0 &&
        currentIndex < filteredSeenSandias.length - 1
      ) {
        setCurrent(filteredSeenSandias[currentIndex + 1]);
      } else {
        loadRandomSandia();
      }
    }
    if (topic !== "default") {
      setTestCt((prevTestCt) =>
        prevTestCt === 10 ? 1 && setShowTest(true) : prevTestCt + 1
      );
    }
  };

  const loadRandomSandia = () => {
    let randomSandia = getRandomSandia();
    if (!randomSandia) {
      setTimeout(() => {
        setLastSandia(true);
        setTimeout(() => {
          setLastSandia(false);
        }, 3000);
      }, 2000);
      randomSandia = getRandomSeenSandia();
    }
    addSandia(randomSandia);
    setCurrent(randomSandia);
    updatedSandiasByTopic(randomSandia);
  };

  const reverseSandia = () => {
    let filteredSeenSandias;
    if (topic === "default") {
      filteredSeenSandias = seenSandias;
    } else {
      filteredSeenSandias = seenSandias.filter(
        (sandia) => sandia.topic.name === topic
      );
    }

    const currentIndex = filteredSeenSandias.findIndex(
      (sandia) => sandia._id === current?._id
    );

    if (currentIndex <= 0) {
      setCurrent({ id: "null", content: "No hay más sandías antes que esta." });
      return;
    } else {
      setCurrent(filteredSeenSandias[currentIndex - 1]);
    }
  };

  const updatedSandiasByTopic = (viewedSandia) => {
    const newList = sandiasByTopic.filter(
      (sandia) => sandia._id !== viewedSandia._id
    );
    setSandiasByTopic(newList);
  };

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  return (
    <div
      className={`${
        tourStep > 0 ? "pointer-events-none filter blur-[2] " : ""
      } max-w-screen overflow-hidden flex flex-col sm:gap-5 relative h-screen max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat font-mont font-semibold sm:text-2xl`}
      style={{
        backgroundImage: `url('${
          background
            ? `/backgrounds/${background}`
            : "/backgrounds/bg-booksflying.webp"
        }')`,
      }}
    >
      <Navbar />

      {tourStep > 0 && (
        <div className="fixed inset-0 backdrop-blur-[2px] pointer-events-none z-10"></div>
      )}

      <div className="flex absolute bottom-3 start-10 sm:bottom-8  sm:start-1/2 sm:transition sm:-translate-x-1/2 lg:start-16 z-[5000] bg-transparent">
        <div id="burbuja2" className="rounded-full">
          <BurbujaAdaptable className="aspect-square h-12 md:h-20">
            <button onClick={() => setMusica((prev) => !prev)}>
              <img
                className="aspect-square h-12 md:h-20"
                src={
                  musica
                    ? "/home/encendidoVolumen.svg"
                    : "/home/apagadoVolumen.svg"
                }
              />
            </button>
          </BurbujaAdaptable>
        </div>
      </div>

      {showTest && testAvail ? (
        <ModalTest setShowTest={setShowTest} setTestCt={setTestCt} />
      ) : (
        <div className="sm:p-4 min-h-screen sm:bg-transparent">
          <div
            id="card-sandia"
            className="w-full h-full lg:w-[85%]  sm:bg-cream/50 px-3 py-5 lg:mx-auto sm:rounded-xl"
          >
            <div
              className={`w-full sm:w-full sm:max-w-full flex flex-col items-center gap-4 sm:px-6 sm:gap-16`}
            >
              <div className="flex justify-between w-full lg:hidden">
                <div className="w-14 sm:w-20">
                  <TemaContainer />
                </div>
                <button
                  onClick={() => router.push("/menu")}
                  className="hover:transform hover:scale-125"
                >
                  <img
                    src="/close.svg"
                    alt="Close Icon"
                    className="w-10 h-10 "
                  />
                </button>
              </div>
              <div className="flex gap-3">
                <div className=" hidden lg:grid">
                  <div className="flex justify-start items-start">
                    <div className="w-14 sm:w-20 sm:h-20">
                      <TemaContainer />
                    </div>
                  </div>

                  <button
                    key="arrowLeftIcon"
                    onClick={reverseSandia}
                    className="hover:transform hover:scale-125 hidden lg:flex"
                  >
                    <img
                      src="/icon_arrowleft.svg"
                      alt="Arrow Left Icon"
                      className="w-16"
                    />
                  </button>
                </div>
                <div className="lg:pt-16">
                  <div className="grid gap-10 sm:border-4 border-yellow-600 rounded-lg sm:bg-white w-full">
                    <div className="sm:pl-20 sm:pr-8 sm:pt-7 text-center">
                      <SpeechBubble
                        text={
                          showReference ? (
                            <div className="flex p-3 text-center text-gray-600 italic">
                              <p className="before:content-['“'] after:content-['”']">
                                {current?.reference}
                              </p>
                            </div>
                          ) : (
                            current?.content ||
                            "Hola!!! soy Ranndy y me encanta explorar el mundo"
                          )
                        }
                        height=""
                        width=""
                      />
                    </div>
                    <div className="flex justify-between items-center px-3">
                      <img
                        src={"/RANDY_08.svg"}
                        alt="randy"
                        className="w-32 sm:w-40"
                      />
                      <div className="flex flex-col gap-3">
                        {current?.content && (
                          <div className="flex justify-between gap-4 sm:gap-10">
                            <button
                              key="turnIcon"
                              onClick={handleToggleReference}
                              className="hover:transform hover:scale-125 shadow-[0_0_10px_5px_rgba(255,255,255,0.8)] rounded-full p-3 bg-gray-400/50 sm:shadow-none sm:bg-transparent"
                            >
                              <img
                                src="/icon_turn.svg"
                                alt="Turn Icon"
                                className="w-14 h-14 sm:w-24"
                              />
                            </button>

                            <button
                              key="redHeartIcon"
                              onClick={handleLike}
                              className="hover:transform hover:scale-125 hover:animate-heartbeat shadow-[0_0_10px_5px_rgba(255,255,255,0.8)] rounded-full p-3 bg-gray-400/50 sm:shadow-none sm:bg-transparent"
                            >
                              <img
                                src={favIcon}
                                alt="Red Heart Icon"
                                className="w-14 h-14 sm:w-24 "
                              />
                            </button>
                          </div>
                        )}
                        <div className="flex justify-between gap-4 sm:hidden">
                          <button
                            key="arrowLeftIcon"
                            onClick={reverseSandia}
                            className="hover:transform hover:scale-125 shadow-[0_0_10px_5px_rgba(255,255,255,0.8)] rounded-full p-3 bg-gray-400/50"
                          >
                            <img
                              src={"/icon_arrowleft.svg"}
                              alt="Arrow Left Icon"
                              className="w-12 h-12"
                            />
                          </button>
                          <button
                            key="turnRightIcon"
                            onClick={handleNextButton}
                            className="hover:transform hover:scale-125 shadow-[0_0_10px_5px_rgba(255,255,255,0.8)] rounded-full p-3 bg-gray-400/50"
                          >
                            <img
                              src={"/icon_turnright.svg"}
                              alt="Turn Right Icon"
                              className="w-12 h-12"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:grid ">
                  <div id="forlg" className="w-20 flex justify-end items-start">
                    <button
                      onClick={() => router.push("/menu")}
                      className="hover:transform hover:scale-125"
                    >
                      <img
                        src="/close.svg"
                        alt="Close Icon"
                        className="w-10 h-10 "
                      />
                    </button>
                  </div>
                  <button
                    key="turnRightIcon"
                    onClick={handleNextButton}
                    className="hidden lg:flex hover:transform hover:scale-125 justify-end"
                  >
                    <img
                      src="/icon_turnright.svg"
                      alt="Turn Right Icon"
                      className="w-16 h-16"
                    />
                  </button>
                </div>
              </div>
              <div className="hidden w-full gap-4 sm:flex justify-between lg:hidden">
                <button
                  key="arrowLeftIcon"
                  onClick={reverseSandia}
                  className="hover:transform hover:scale-125"
                >
                  <img
                    src={"/icon_arrowleft.svg"}
                    alt="Arrow Left Icon"
                    className="w-12 h-12"
                  />
                </button>
                <button
                  key="turnRightIcon"
                  onClick={handleNextButton}
                  className="hover:transform hover:scale-125"
                >
                  <img
                    src={"/icon_turnright.svg"}
                    alt="Turn Right Icon"
                    className="w-12 h-12"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="bg-oldwhite h-screen flex justify-center items-center">
          <LoadingState />
        </div>
      )}
      {lastSandia && !showTest && (
        <div className="fixed inset-0 bg-oldwhite flex items-center justify-center">
          <div className="bg-white w-2/3 h-80 p-6 rounded-xl shadow-xl flex justify-center items-center border-4 shadow-lorange/70">
            <div className="flex gap-16">
              <div>
                <img src="/RANDY_02.svg" alt="randy" className="w-36" />
              </div>
              <div className="grid text-center text-dgreen">
                <h2 className="text-4xl font-bold mb-4 font-ram text-dorange">
                  ¡Oye!
                </h2>
                <p>Parece que te acabaste mis sandias...</p>
                <p>¡Pero no te preocupes, aun podemos repasar!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Burbuja del tour */}
      {tourStep > 0 && (
        <div className="fixed inset-x-0 bottom-16 flex justify-center items-center pb-24 z-50 pointer-events-auto">
          <Burbuja id="burbuja2">
            {tourStep === 1 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="Con el botón me gusta podrás guardar tus favs ♥"
                  className="text-xs"
                />
                <button
                  onClick={() => setTourStep(2)}
                  className=" bg-amber-200/50 w-28 mt-4 h-12 px-5 rounded-[10px] flex items-center transform hover:scale-110 text-xl justify-center align-middle font-lucky"
                >
                  <img
                    src="/icon_redheart.svg"
                    alt="Like"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            )}
            {tourStep === 2 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="Con el botón de reversa podras ver las referencias"
                  className="text-xs"
                />
                <button
                  onClick={() => setTourStep(3)}
                  className=" bg-amber-200/50 w-28 mt-4 h-12 px-5 rounded-[10px] flex items-center transform hover:scale-110 text-xl justify-center align-middle font-lucky"
                >
                  <img src="/icon_turn.svg" alt="Reversa" className="w-6 h-6" />
                </button>
              </div>
            )}
            {tourStep === 3 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="Puedes ir hacia adelante o hacia atrás."
                  className="text-xs"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setTourStep(4)}
                    className="bg-amber-200/50 justify-between flex w-28 mt-4 h-12 rounded-full px-4 py-2 transform hover:scale-110 flex items-center"
                  >
                    <img
                      src="/icon_arrowleft.svg"
                      alt="Arrow Left Icon"
                      className="w-6 h-6 mr-2"
                    />

                    <img
                      src="/icon_turnright.svg"
                      alt="Turn Right Icon"
                      className="w-6 h-6 mr-2"
                    />
                  </button>
                </div>
              </div>
            )}
            {tourStep === 4 && (
              <div className="flex flex-col items-center">
                <RandyTextLeft
                  img={"/RANDY_08.svg"}
                  text="¿Quieres quedarte? ♥ Estás en Ciencias o puedes seguir con el recorrido."
                  className="text-xs"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleTourFinal("play")}
                    className="bg-green-500 text-lg font-lucky text-white rounded-full px-4 py-2 transform hover:scale-110"
                  >
                    Jugar
                  </button>
                  <button
                    onClick={() => handleTourFinal("tour")}
                    className="bg-lorange text-lg font-lucky text-white rounded-full px-4 py-2 transform hover:scale-110"
                  >
                    Recorrido
                  </button>
                </div>
              </div>
            )}
          </Burbuja>
        </div>
      )}
    </div>
  );
}
