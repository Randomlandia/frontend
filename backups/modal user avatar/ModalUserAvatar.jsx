import React from "react";
export default function AvatarContainer() {
  return (
    <div className=" flex flex-col bg-oldwhite rounded-xl p-4 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
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
            ¡Elige tu estilo!
          </p>
        </div>
      </div>

      {/* GALERÍA AVATARES */}
      <div className="grid grid-cols-3 gap-3 py-4 px-10 justify-items-center">
        <div className="rounded-full border-4 border-transparent  hover:border-dorange">
          {" "}
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-28 w-28"
          />
        </div>
        <div className="rounded-full border-4 border-transparent hover:border-dorange">
          {" "}
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-28 w-28"
          />
        </div>
        <div className="rounded-full border-4 border-transparent hover:border-dorange">
          {" "}
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-28 w-28"
          />
        </div>
        <div className="rounded-full border-4 border-transparent hover:border-dorange">
          {" "}
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-28 w-28"
          />
        </div>
        <div className="rounded-full border-4 border-transparent hover:border-dorange">
          {" "}
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-28 w-28"
          />
        </div>
        <div className="rounded-full border-4 border-transparent hover:border-dorange">
          {" "}
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-28 w-28"
          />
        </div>
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
