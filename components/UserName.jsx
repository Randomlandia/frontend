import React from "react";
export default function UserName() {
  return (
    <div className="flex flex-col gap-2 bg-oldwhite rounded-xl p-6 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
      <div className="inline-flex justify-center relative">
        {/* BOTÓN CERRAR */}
        <div className="absolute top-0 right-0 ">
          <button
            type=""
            className="rounded-full w-fit border-2 border-transparent
            hover:border-red-500 p-2"
          >
            <img src="/close.svg" alt="close" className="h-4 w-4" />
          </button>
        </div>

        {/* TITULO DEL MODAL */}
        <div className="flex p-4 ">
          <p className="font-lucky text-dgreen text-center text-3xl">
            ¡Escribe tu nombre!
          </p>
        </div>
      </div>

      {/* INPUT PARA NOMBRE USER */}
      <div className=" flex flex-col rounded-xl border-4 border-lorange p-2">
        <input
          type="text"
          className="text-black font-mont font-black placeholder:text-dorange placeholder:font-mont bg-transparent text-center text-xl focus:outline-none focus:ring-2 focus:ring-lorange"
          placeholder="Ranndy es genial"
        />
      </div>

      {/* BOTÓN GUARDAR */}
      <div className="flex justify-center p-2">
        <button className="p-2 w-fit rounded-lg border-2 bg-pcyan hover:border-blue-600  ">
          <p className="font-lucky text-white text-center">GUARDAR</p>
        </button>
      </div>
    </div>
  );
}
