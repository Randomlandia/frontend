export default function CardSandiaFront() {
  return (
    // CARD CON TRANSPARENCIA
    <div className="flex flex-col gap-3 bg-oldwhite rounded-lg p-3 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto ">
      <div className="grid grid-cols-2 px-2 py-4">
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

      <div className="grid gap-2 justify-center ">
        {/* CARD  */}
        <div className=" flex flex-col px-2 py-4 rounded-xl gap-4  ">
          <div className="p-4 flex flex-col rounded-md bg-white border-4 border-dorange">
            <div className="flex-wrap justify-center p-3 rounded-lg bg-peach">
              <p className="font-mont text-black font-bold">Sabias que . . .</p>
              <p className="font-mont text-black">
                Las piñas tardan de 3 a 5 años en crecer.
              </p>
            </div>

            {/* BOTONES */}
            <div className="grid grid-col">
              {/* BTNS ACCIONES CARD SANDÍA */}
              <div className="grid grid-cols-2 px-2 py-4 ">
                {/* BTN TURN */}
                <div className="flex justify-start ">
                  <button>
                    <img src="icon_turn.svg" alt="" className="h-10 w-10" />
                  </button>
                </div>
                {/* BTN HEART */}
                <div className="flex justify-end ">
                  <button>
                    <img src="icon_redheart.svg" alt="" className="h-10 w-10" />
                  </button>
                </div>
              </div>

              {/* BTNS ACCIONES PARA VER SANDÍA */}
              <div className="grid grid-cols-2  px-2 py-4">
                {/* BTN L <-- */}
                <div className="flex justify-start">
                  <button>
                    <img
                      src="/icon_arrowleft.svg"
                      alt=""
                      className="h-10 w-10"
                    />
                  </button>
                </div>
                {/* BTN R -->  */}
                <div className="flex justify-end ">
                  <button>
                    <img
                      src="/icon_arrowright.svg"
                      alt=""
                      className="h-10 w-10"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
