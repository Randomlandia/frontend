import Navbar from "@/components/Navbar";
import RandySpeechBubble from "@/components/RandySpeechBubble";
import SandiaIcon from "@/components/SandiaIcon";
import { useFavorites } from "@/utils/useFavorites";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

// 1) guardar cada numero que salga en random en un arreglo
// 2 un contador que llegue a 10

export default function Sandia() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();
  const [sandiasByTopic, setSandiasByTopic] = useState([]);
  const [seenSandias, setSeenSandias] = useState([]);
  const [favs, setFavs] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favIcon, setFavIcon] = useState("/icon_redheart.svg");
  const [reverseSandias, setReverseSandias] = useState([]);
  const [flecha, setFlecha] = useState(false);
  const [contador, setContador] = useState(1);
  const [texto, setTexto] = useState("no hay mas por mostrar!!!");
  const [loading, setLoading] = useState(true);
  const [testCt, setTestCt] = useState(1);
  const [showReference, setShowReference] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [current, setCurrent] = useState(null);
  let { topic } = router.query;

  const addSandia = (newSandia) => {
    setSeenSandias((prevSeenSandias) => {
      const updatedSeenSandias = [...prevSeenSandias, newSandia];
      localStorage.setItem("view", JSON.stringify(updatedSeenSandias));
      return updatedSeenSandias;
    });
  };

  const addReverseSandias = (newSandia) => {
    setReverseSandias((prevSeenSandias) => [newSandia, ...prevSeenSandias]);
  };

  const getRandomSandia = () => {
    if (sandiasByTopic.length === 0) return;
    const randomSandiaIndex = Math.floor(Math.random() * sandiasByTopic.length);
    const randomSandia = sandiasByTopic[randomSandiaIndex];
    if (testCt === 10 && topic !== "default") {
      setShowTest(true);
    }

    if (showTest) {
      //funcion que ejecuta el test
      setTestCt(0);
      setShowTest(false);
    }
    return randomSandia;
  };

  const reverseSandia = () => {
    let filteredSeenSandias;
    setIsFavorite(false);

    if (topic === "default") {
      filteredSeenSandias = seenSandias;
    } else {
      filteredSeenSandias = seenSandias.filter(
        (sandia) => sandia.topic.name === topic
      );
    }

    const currentIndex = filteredSeenSandias.findIndex(
      (sandia) => sandia._id === current._id
    );

    if (currentIndex <= 0) {
      setCurrent({ id: "null", content: "No hay más sandías antes que esta." });
      console.log(seenSandias);
      return;
    } else {
      setCurrent(filteredSeenSandias[currentIndex - 1]);
      const isAlreadyFavorite = favs.some((fav) => fav._id === current._id);
      setIsFavorite(isAlreadyFavorite);
    }
  };

  const updatedSandiasByTopic = (viewedSandia) => {
    const newList = sandiasByTopic.filter(
      (sandia) => sandia._id !== viewedSandia._id
    );
    setSandiasByTopic(newList);
    localStorage.setItem("Sandias", JSON.stringify(newList));
  };

  const handleLike = () => {
    let newFav = current;
    if (current.id === "null") return;
    const isFav = favs?.some((fav) => fav._id === current._id);

    if (favs.length > 0 && isFav) {
      const updatedFavs = favs.filter((fav) => fav._id !== current._id);
      setFavs(updatedFavs);
      setIsFavorite(false);
      toggleFavorite(newFav);
      setFavIcon("/icon_redheart.svg");
    } else {
      const updatedFavs = [...favs, newFav];
      setFavs(updatedFavs);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      setIsFavorite(true);
      toggleFavorite(newFav);
      setFavIcon("/icon_redheartfill.svg");
    }

    console.log(favs);
  };

  const handleNextButton = () => {
    const loadRandomSandia = () => {
      const randomSandia = getRandomSandia();
      if (!randomSandia) {
        setCurrent({
          content:
            "No hay más sandías disponibles. Explora otros temas o revisa lo que ya has visto."
        });
        return;
      }
      addSandia(randomSandia);
      addReverseSandias(randomSandia);
      setFlecha(true);
      setContador(1);
      setTestCt((prevTestCt) => (prevTestCt === 10 ? 1 : prevTestCt + 1));
      setCurrent(randomSandia);
      updatedSandiasByTopic(randomSandia);
      console.log(testCt);
    };

    if ((!current || current.id === "null") && seenSandias.length === 0) {
      loadRandomSandia();
    } else if (seenSandias.length >= 1) {
      let filteredSeenSandias;
      if (topic === "default") {
        filteredSeenSandias = seenSandias;
      } else {
        filteredSeenSandias = seenSandias.filter(
          (sandia) => sandia.topic.name === topic
        );

        if (filteredSeenSandias.length === 0) {
          loadRandomSandia();
          return;
        }
      }

      const currentIndex = filteredSeenSandias.findIndex(
        (sandia) => sandia._id === current._id
      );

      if (current.id === "null" && filteredSeenSandias.length > 0) {
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
  };

  const handleToggleReference = () => {
    setShowReference((prev) => !prev);
  };

  useEffect(() => {
    if (current && current.id !== "null") {
      const isFav = favs.some((fav) => fav._id === current._id);
      setFavIcon(isFav ? "/icon_redheartfill.svg" : "/icon_redheart.svg");
    } else {
      setFavIcon("/icon_redheart.svg");
    }
  }, [current, favs]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
    const storedSeenSandias = JSON.parse(localStorage.getItem("view")) || [];
    setSeenSandias(storedSeenSandias);

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
      setLoading(false);
    }
  }, [topic]);

  useEffect(() => {
    if (sandiasByTopic.length > 0 && !current) {
      handleNextButton();
    }
  }, [sandiasByTopic]);

  if (loading) {
    return (
      <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
    );
  }

  // if (!sandiasByTopic.data || sandiasByTopic.data.sandias.length === 0) {
  //   return (
  //     <main className="w-full h-full bg-white min-h-screen min-w-full">
  //       <Navbar />
  //       <section className="flex items-center justify-center min-h-screen">
  //         <p>No sandias found for this topic.</p>
  //       </section>
  //     </main>
  //   );

  return (
    <>
      <Navbar />
      <section
        id="card-sandia"
        className="bg-cream/40 min-h-[656px] min-w-[360px] p-3"
      >
        <div className="max-w-sm mx-auto flex flex-col justify-center items-center gap-8">
          <div className="flex justify-between w-[88%]">
            <SandiaIcon
              src="/yellow.png"
              alt="Yellow Icon"
              width={77}
              height={77}
            />
            <Link href={`/menu`}>
              <SandiaIcon
                src="/close.svg"
                alt="Close Icon"
                width={40}
                height={40}
              />
            </Link>
          </div>

          <RandySpeechBubble
            text={showReference ? current?.reference : current?.content}
          />

          <div className="grid grid-cols-2 gap-2 h-32 w-36 ml-[68%]">
            <button key="turnIcon" onClick={handleToggleReference}>
              <img src="/icon_turn.svg" alt="Turn Icon" />
            </button>

            <button key="redHeartIcon" onClick={handleLike}>
              <img src={favIcon} alt="Red Heart Icon" />
            </button>

            <button key="arrowLeftIcon" onClick={reverseSandia}>
              <img src="/icon_arrowleft.svg" alt="Arrow Left Icon" />
            </button>

            <button key="turnRightIcon" onClick={handleNextButton}>
              <img src="/icon_turnright.svg" alt="Turn Right Icon" />
            </button>
          </div>
        </div>
      </section>
    </>
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
