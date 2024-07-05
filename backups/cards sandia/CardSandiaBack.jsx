import SpeechBubble from "@/components/SpeechBubble";
export default function CardSandiaBack() {
  return (
    <div className="flex flex-col bg-white border-4 border-dorange p-5 rounded-lg">
      {/* CITA FORMATO APA DE LAS SANDIAS  */}
      <div className=" flex-wrap justify-center p-5">
        {/* APELLIDO, INCIALES */}
        <span className="font-mont text-black">Aguirre S.</span>
        {/* FECHA DE PUBLICACIÓN */}
        <span className="font-mont text-black">(2024, 4 de julio)</span>
        {/* TITULO */}
        <p className="font-mont text-black font-bold text-xl">
          "Hacer una referencia APA"
        </p>
        {/* NOMBRE DE DONDE SE PUBLICÓ*/}
        <p className="font-mont text-black">RandomLandia News</p>
        {/* URL */}
        <a href="http://google.com" className="font-mont text-black">
          Google
        </a>
      </div>
      <div className=" grid grid-cols-2 align-middle  ">
        <div className="flex justify-start">
          <img src="RANDY_08.svg" alt="" className="h-20 w-20" />
        </div>

        <div className="flex justify-end">
          <img src="icon_turn.svg" alt="" className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
