import Navbar from "@/components/Navbar";
import RandySpeechBubble from "@/components/RandySpeechBubble";
import SpeechBubble from "@/components/SpeechBubble";
import Image from "next/image";

export default function Sandia() {
  return (
    <>
      <Navbar />

      <section
        id="card-sandia"
        className="bg-cream/40 min-h-[656px] min-w-[360px] p-3"
      >
        <div className="max-w-sm mx-auto flex flex-col justify-center items-center">
          <div className="flex justify-between mb-10 w-[95%]">
            <SandiaIcon src="/yellow.png" width={77} height={77}></SandiaIcon>
            <SandiaIcon src="/close.svg" width={40} height={40}></SandiaIcon>
          </div>
          <RandySpeechBubble text="Sabías que... una piña tarda de 1.5 a 3 años en crecer? ... TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT TESTING LONG TEXT"></RandySpeechBubble>

          <div className="grid grid-cols-2 gap-2 ml-auto h-32 w-36 h">
            <SandiaIcon src="/icon_turn.svg" alt="Turn" />
            <SandiaIcon src="/icon_redheart.svg" alt="Red Heart" />
            <SandiaIcon src="/icon_arrowleft.svg" alt="Arrow Left" />
            <SandiaIcon src="/icon_turnright.svg" alt="Turn Right" />
          </div>
        </div>
      </section>
    </>
  );
}

const SandiaIcon = ({ src, alt }) => (
  <div className="flex justify-center items-center">
    <button>
      <Image src={src} width={40} height={40} alt={alt} />
    </button>
  </div>
);
