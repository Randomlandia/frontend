export default function CardSandiaFront() {
  return (
    // CARD CON TRANSPARENCIA
    <div className="flex flex-col gap-3 bg-oldwhite/70 rounded-lg p-3 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto ">
      <div className="grid grid-cols-2 p-2">
        {/* BADGE TOPIC */}
        <div className="flex justify-start ">
          <img src="/B_ARTE.svg" alt="" className="h-10 w-10" />
        </div>{" "}
        {/* BOTÓN CERRAR */}
        <div className="flex justify-end ">
          <button type="">
            <img src="/close.svg" alt="close" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="inline-flex gap-2 justify-center  ">
        {/* BTN L <-- */}
        <div className="flex justify-start ">
          <button>
            <img src="/icon_arrowleft.svg" alt="" className="h-10 w-10" />
          </button>
        </div>
        {/* CARD  */}
        <div className="flex flex-col gap-4 bg-white border-4 border-dorange px-2 py-4 rounded-xl ">
          {/* CITA FORMATO APA DE LAS SANDIAS  */}
          <div className=" flex-wrap justify-center p-3 rounded-lg bg-peach ">
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

          <div className="grid grid-cols-2 p-2">
            {/* BTN TURN */}
            <div className="flex justify-start ">
              <button>
                <img src="icon_turn.svg" alt="" className="h-10 w-10" />
              </button>
            </div>
            {/* BTN HEART */}
            <div className="flex justify-end">
              <button>
                <img src="icon_redheart.svg" alt="" className="h-10 w-10" />
              </button>
            </div>
          </div>
        </div>
        {/* BTN R -->  */}
        <div className="flex justify-end ">
          <button>
            <img src="/icon_arrowright.svg" alt="" className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
