import Navbar from "@/components/Navbar";
import RandySpeechBubble from "@/components/RandySpeechBubble";
import SandiaIcon from "@/components/SandiaIcon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 1) guardar cada numero que salga en random en un arreglo
// 2 un contador que llegue a 10

export default function Sandia() {
  const [seenSandias, setSeenSandias] = useState([]);
  const [counter, setCounter] = useState(0);
  const [favs, setFavs] = useState([]);
  const [reverseSandias, setReverseSandias] = useState([]);
  const [flecha, setFlecha] = useState(false);
  const [contador, setContador] = useState(1);
  const [texto, setTexto] = useState("no hay mas por mostrar!!!");
  const addSandia = (newSandia) => {
    setSeenSandias((prevSeenSandias) => [...prevSeenSandias, newSandia]);
  };

  const addReverseSandias = (newSandia) => {
    setReverseSandias((prevSeenSandias) => [newSandia, ...prevSeenSandias]);
  };

  const getRandomSandia = () => {
    const sandias = sandiasByTopic.data.sandias;
    const randomSandiaIndex = Math.floor(Math.random() * sandias.length);
    const randomSandia = sandias[randomSandiaIndex];
    addSandia(randomSandia);
    addReverseSandias(randomSandia);
    setFlecha(true);
    setContador(1);
  };
<<<<<<< HEAD

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
=======
  const reverseSandia = () => {
    setContador(1);
    setContador(contador + 1);
    let textoReverse = reverseSandias[contador];
    setTexto(textoReverse);
    setFlecha(false);
>>>>>>> develop
  };

  const icons = [
    { src: "/icon_turn.svg", alt: "Turn Icon" },
    { src: "/icon_redheart.svg", alt: "Red Heart Icon" },
    {
      src: "/icon_arrowleft.svg",
      alt: "Arrow Left Icon",
      onClick: reverseSandia,
    },
    {
      src: "/icon_turnright.svg",
      alt: "Turn Right Icon",
      onClick: getRandomSandia,
    },
  ];

  const router = useRouter();
  const [sandiasByTopic, setSandiasByTopic] = useState({
    data: { sandias: [] },
  });
  const [loading, setLoading] = useState(true);
  let topic = router.query.topic;

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);

    if (topic) {
      fetch(`http://localhost:3005/sandias/topic/${topic}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((json) => {
          setSandiasByTopic(json);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [topic]);

  useEffect(() => {
    if (!loading && sandiasByTopic.data.sandias.length > 0) {
      getRandomSandia();
    }
  }, [loading, sandiasByTopic]);

  if (loading) {
    return (
      <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
    );
  }

  if (!sandiasByTopic.data || sandiasByTopic.data.sandias.length === 0) {
    return (
      <main className="w-full h-full bg-white min-h-screen min-w-full">
        <Navbar />
        <section className="flex items-center justify-center min-h-screen">
          <p>No sandias found for this topic.</p>
        </section>
      </main>
    );
  }

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
            <SandiaIcon
              src="/close.svg"
              alt="Close Icon"
              width={40}
              height={40}
            />
          </div>

          {seenSandias[seenSandias.length - 1]?.content && (
            <RandySpeechBubble
              text={
                flecha === true && seenSandias[seenSandias.length - 1].content
              }
              text1={
                (flecha === false && texto.content) || "no hay más que mostrar"
              }
            />
          )}

          <div className="grid grid-cols-2 gap-2 h-32 w-36 ml-[68%]">
            {icons.map((icon, index) => (
              <SandiaIcon
                key={index}
                src={icon.src}
                alt={icon.alt}
                onClick={() =>
                  icon.onClick(seenSandias[seenSandias.length - 1])
                }
              />
            ))}
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
