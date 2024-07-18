import Navbar from "@/components/Navbar";
import { useFavorites } from "@/utils/useFavorites";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingState from "@/components/LoadingState";
import TemaContainer from "@/components/TemaContainer";
import SpeechBubble from "@/components/SpeechBubble";
import ModalTest from "@/components/ModalTest";

// 1) guardar cada numero que salga en random en un arreglo
// 2 un contador que llegue a 10

export default function Sandia() {
  const router = useRouter();
  const { toggleFavorite } = useFavorites();
  const [sandiasByTopic, setSandiasByTopic] = useState([]);
  const [seenSandias, setSeenSandias] = useState([]);
  const [favs, setFavs] = useState([]);
  const [background, setBackground] = useState(null);
  const [favIcon, setFavIcon] = useState("/icon_redheart.svg");
  const [lastSandia, setLastSandia] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  const [loading, setLoading] = useState(true); // regresar a true al finalizar logica
  const [testCt, setTestCt] = useState(1); //regresar a uno al terminar de maquetar
  const [showReference, setShowReference] = useState(false);
  const [showTest, setShowTest] = useState(false); //CAMBIAR A FALSE TERMINANDO MAQUETADO
  const [current, setCurrent] = useState(null);
  let { topic } = router.query;

  useEffect(() => {
    const updateBackground = () => {
      const bgNew = localStorage.getItem("bg");
      if (bgNew) setBackground(bgNew);
    };

    const loadStoredData = () => {
      const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
      setFavs(storedFavs);
      const storedSeenSandias = JSON.parse(localStorage.getItem("view")) || [];
      setSeenSandias(storedSeenSandias);
      const token = localStorage.getItem("token");
      if (token) setLoggedUser(true);
    };

    const filterSandiasByTopic = () => {
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
          !seenSandias.some((seenSandia) => seenSandia?._id === sandia._id)
      );

      setSandiasByTopic(filterSandiasExcSeen);
    };

    updateBackground();
    loadStoredData();
    if (topic) filterSandiasByTopic();

    setTimeout(() => setLoading(false), 3000);
  }, [topic]);

  useEffect(() => {
    if (current && current?.id !== "null") {
      const isFav = favs.some((fav) => fav._id === current?._id);
      setFavIcon(isFav ? "/icon_redheartfill.svg" : "/icon_redheart.svg");
    } else {
      setFavIcon("/icon_redheart.svg");
    }
  }, [current, favs]);

  useEffect(() => {
    if (seenSandias.length > 0 && sandiasByTopic.length === 0) {
      setCurrent({
        id: "null",
        content:
          "Parece que ya has visto todo, ¿Te parece si echamos un vistazo a lo que aprendimos?"
      });
    }
    if (sandiasByTopic.length > 0 && !current) {
      handleNextButton();
    }
  }, [sandiasByTopic]);

  const addSandia = (newSandia) => {
    setSeenSandias((prevSeenSandias) => {
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

  const reverseSandia = () => {
    let filteredSeenSandias;
    if (topic === "default") {
      filteredSeenSandias = seenSandias;
    } else if (topic !== "default") {
      filteredSeenSandias = seenSandias.filter(
        (sandia) => sandia.topic.name === topic
      );
    }

    const currentIndex = filteredSeenSandias.findIndex(
      (sandia) => sandia?._id === current?._id
    );

    if (currentIndex <= 0) {
      setCurrent({ id: "null", content: "No hay más sandías antes que esta." });
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

  const handleLike = () => {
    if (current.id === "null") return;
    const isFav = favs.some((fav) => fav._id === current?._id);
    if (isFav) {
      const updatedFavs = favs.filter((fav) => fav._id !== current?._id);
      setFavs(updatedFavs);
      toggleFavorite(current);
      setFavIcon("/icon_redheart.svg");
    } else {
      const updatedFavs = [...favs, current];
      setFavs(updatedFavs);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      toggleFavorite(current);
      setFavIcon("/icon_redheartfill.svg");
    }
  };

  const loadRandomSandia = () => {
    const randomSandia = getRandomSandia();
    addSandia(randomSandia);
    setCurrent(randomSandia);
    updatedSandiasByTopic(randomSandia);
  };

  const handleTestCounter = ()=>{
    setTestCt((prevTestCt) =>
      prevTestCt === 10 ? (setShowTest(true), 1) : prevTestCt + 1
    );
  }

  const handleNextButton = () => {
    if ((!current || current.id === "null") && seenSandias.length === 0) {
      loadRandomSandia();
      handleTestCounter()
      setLastSandia(true)
    } else if (seenSandias.length >= 1) {
      let filteredSeenSandias;
      if (topic === "default") {
        filteredSeenSandias = seenSandias;
      } else {
        filteredSeenSandias = seenSandias.filter(
          (sandia) => sandia?.topic?.name === topic
        );
        if (filteredSeenSandias.length === 0) {
          loadRandomSandia();
          handleTestCounter()
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
        handleTestCounter()
      } else if (sandiasByTopic.length === 0 && seenSandias.length > 1) {
        setCurrent({
          id: "null",
          content:
            "Parece que acabaste con todo, ¿Te parece si vemos lo anterior?."
        });
        setTimeout(()=>{
          setSandiasByTopic(seenSandias)
          handleNextButton()
          setTestCt()
          handleTestCounter()
          return;
        }, 1000)
      } else if (sandiasByTopic === 0 && lastSandia) {
        setCurrent({
          id: "null",
          content:
            "Parece que ya terminaste, ¿Te parece si echamos un vistazo a lo que aprendimos?"
        });
        handleNextButton()
        setTestCt()
      }
    }
  };

  const handleToggleReference = () => {
    setShowReference((prev) => !prev);
  };

  const handleUpdateUser = () => {
    setLoading(true);
    if (loggedUser) {
      const seenSandiaIds = seenSandias.map((sandia) => sandia._id);
      const favsIds = favs.map((sandia) => sandia._id);
      // Add any additional user update logic here
    }
    // sandiasData()
  };
  // if (!sandiasByTopic.data || sandiasByTopic.data.sandias.length === 0) {
  //   return (
  //     <main className="w-full h-full bg-white min-h-screen min-w-full">
  //       <Navbar />
  //       <div className="flex items-center justify-center min-h-screen">
  //         <p>No sandias found for this topic.</p>
  //       </div>
  //     </main>
  //   );

  return loading ? (
    <div className="bg-oldwhite h-screen flex justify-center items-center">
      <LoadingState />
    </div>
  ) : (
    // return (
    <div
      className="max-w-screen overflow-hidden flex flex-col sm:gap-5 relative h-screen max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat font-mont font-semibold text-xl sm:text-2xl"
      style={{
        backgroundImage: `url('${
          background
            ? `/backgrounds/${background}`
            : "/backgrounds/bg-booksflying.webp"
        }')`
      }}
    >
      <Navbar />
      {showTest ? (
        <ModalTest setShowTest={setShowTest} setTestCt={setTestCt} />
      ) : (
        <div className="sm:p-4 min-h-screen bg-oldwhite/50 sm:bg-transparent">
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
                          showReference ? current?.reference : current?.content
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
                      <div className="flex flex-col gap-3 pr-5">
                        <div className="flex justify-between gap-4 sm:gap-10">
                          <button
                            key="turnIcon"
                            onClick={handleToggleReference}
                            className="hover:transform hover:scale-125"
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
                            className="hover:transform hover:scale-125"
                          >
                            <img
                              src={favIcon}
                              alt="Red Heart Icon"
                              className="w-12 h-12 sm:w-24"
                            />
                          </button>
                        </div>
                        <div className="flex justify-between gap-4 sm:hidden">
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
    </div>
  );
}

{
  /* async function likeSandia(sandia) {
    console.log("im clicked");
    const userID = localStorage.getItem("userID");
    addSandia(sandia); //add sandia to localStorage

    fetch(`http://localhost:3005/users/${userID}`, {
      method: "PUT",
      body: JSON.stringify({
        sandiasFavoritas: updatedFavs,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.log("Error", error);
      });
  } */
}
