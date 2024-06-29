import Navbar from "@/components/Navbar";
import RandySpeechBubble from "@/components/RandySpeechBubble";
import SandiaIcon from "@/components/SandiaIcon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 1) guardar cada numero que salga en random en un arreglo
// 2 un contador que llegue a 10

export default function Sandia() {
  const icons = [
    { src: "/icon_turn.svg", alt: "Turn Icon" },
    { src: "/icon_redheart.svg", alt: "Red Heart Icon" },
    { src: "/icon_arrowleft.svg", alt: "Arrow Left Icon" },
    { src: "/icon_turnright.svg", alt: "Turn Right Icon" },
  ];

  const router = useRouter();
  const [sandiasByTopic, setSandiasByTopic] = useState({
    data: { sandias: [] },
  });
  const [loading, setLoading] = useState(true);
  let topic = router.query.topic;

  useEffect(() => {
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

  const sandias = sandiasByTopic.data.sandias;
  const randomSandiaIndex = Math.floor(Math.random() * sandias.length);
  const randomSandia = sandias[randomSandiaIndex];
  console.log({ randomSandia });

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
          {randomSandia?.content && (
            <RandySpeechBubble text={randomSandia.content} />
          )}
          <div className="grid grid-cols-2 gap-2 h-32 w-36 ml-[68%]">
            {icons.map((icon, index) => (
              <SandiaIcon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
