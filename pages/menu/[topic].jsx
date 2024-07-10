import Navbar from "@/components/Navbar";
import RandySpeechBubble from "@/components/RandySpeechBubble";
import SandiaIcon from "@/components/SandiaIcon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

// 1) guardar cada numero que salga en random en un arreglo
// 2 un contador que llegue a 10

export default function Sandia() {
  const router = useRouter();
  const [sandiasByTopic, setSandiasByTopic] = useState([]);
  const [seenSandias, setSeenSandias] = useState([]);
  const [favs, setFavs] = useState([]);
  const [reverseSandias, setReverseSandias] = useState([]);
  const [flecha, setFlecha] = useState(false);
  const [contador, setContador] = useState(1);
  const [texto, setTexto] = useState("no hay mas por mostrar!!!");
  const [loading, setLoading] = useState(true);
  const [testCt, setTestCt] = useState(0);
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
    if (sandiasByTopic.length === 0) return
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
    if (contador < reverseSandias.length) {
      setContador(1);
      setContador(contador + 1);
      let textoReverse = reverseSandias[contador];
      setTexto(textoReverse);
      setFlecha(false);
    } else {
      setContador(0);
    }
  };

  const updatedSandiasByTopic = (viewedSandia) => {
    const newList = sandiasByTopic.filter(
      (sandia) => sandia._id !== viewedSandia._id
    );
    setSandiasByTopic(newList);
    localStorage.setItem("Sandias", JSON.stringify(newList));
  };

  const handleNextButton = () => {
    const randomSandia = getRandomSandia();
    if (!randomSandia) {
      console.log("No hay más sandías disponibles.");
      setCurrent({ content: "No hay más sandías disponibles. Explora otros temas o revisa lo que ya has visto." });
      return null;
    };

    addSandia(randomSandia);
    addReverseSandias(randomSandia);
    setFlecha(true);
    setContador(1);
    setTestCt(testCt + 1);
    console.log(randomSandia);
    setCurrent(randomSandia);
    updatedSandiasByTopic(randomSandia);
  };

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
    if (sandiasByTopic.length > 0) {
      getRandomSandia();
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

          <RandySpeechBubble text={current?.content} />

          <div className="grid grid-cols-2 gap-2 h-32 w-36 ml-[68%]">
            <button key="turnIcon">
              <img src="/icon_turn.svg" alt="Turn Icon" />
            </button>

            <button key="redHeartIcon">
              <img src="/icon_redheart.svg" alt="Red Heart Icon" />
            </button>

            <button
              key="arrowLeftIcon"
              onClick={() => reverseSandia(seenSandias[seenSandias.length - 1])}
            >
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
