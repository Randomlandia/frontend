import Navbar from "@/components/Navbar";
import RandySpeechBubble from "@/components/RandySpeechBubble";
import SandiaIcon from "@/components/SandiaIcon";

export default function Sandia() {
  const icons = [
    { src: "/icon_turn.svg", alt: "Turn Icon" },
    { src: "/icon_redheart.svg", alt: "Red Heart Icon" },
    { src: "/icon_arrowleft.svg", alt: "Arrow Left Icon" },
    { src: "/icon_turnright.svg", alt: "Turn Right Icon" },
  ];

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
          <RandySpeechBubble text="Sabías que... una piña tarda de 1.5 a 3 años en crecer?" />
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
