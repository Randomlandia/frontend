export default function CardSandiaBack() {
  return (
    // CARD CON TRANSPARENCIA
    <div className="flex flex-col gap-2 bg-oldwhite/70 rounded-xl p-6 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
      <div className="grid grid-cols-2 p-2">
        {/* BADGE TOPIC */}
        <div className="flex justify-start ">
          <img src="/B_ARTE.svg" alt="" className="h-12 w-12" />
        </div>{" "}
        {/* BOTÓN CERRAR */}
        <div className="flex justify-end ">
          <button type="">
            <img src="/close.svg" alt="close" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* CARD  */}
      <div className="flex flex-col gap-6 bg-white border-4 border-dorange p-4  rounded-lg shadow-md">
        {/* CITA FORMATO APA DE LAS SANDIAS  */}
        <div className=" flex-wrap justify-center p-3 rounded-lg bg-peach shadow-md">
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

        <div className=" relative p-5">
          <div className="flex absolute bottom-0 right-0">
            <img src="icon_turn.svg" alt="" className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
