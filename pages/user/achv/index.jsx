import Navbar from "@/components/Navbar";
import MedallaDetail from "@/components/modalsMedals/MedallaDetail";
import { useState } from "react";

export default function achv() {
  const defaultBackground = "bg-booksflying.webp";
  const [background, setBackground] = useState("bg-booksflying.webp");

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col  overflow-hidden"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />
      {/* TÍTULO  */}
      <div className="flex justify-center p-5">
        <div className="flex-col bg-oldwhite/50 rounded-xl shadow-md w-fit p-3">
          <p className="font-lucky text-dgreen text-center text-4xl">
            MEDALLAS
          </p>
        </div>
      </div>

      <div>
        <MedallaDetail />
      </div>

      <div className="flex justify-center p-5">
        {/* CONTAINER DE MEDALLAS X TOPIC*/}
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 md:p-10 md:gap-6 lg:grid-cols-4 lg:gap-3 lg:p-5 justify-items-center bg-oldwhite/70 shadow-md rounded-xl p-5 ">
          {/* CONTAINER IDIOMAS */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER MATE */}
          <div className="flex-col justify-center">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-mathD text-2xl text-center">MATE</p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-mathL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER CIENCIAS*/}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-natD text-2xl text-center">
                CIENCIAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-natL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER MUNDO */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-worldD text-2xl text-center">
                MUNDO
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-worldL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER NERD */}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-nerdD text-2xl text-center">NERD</p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-nerdL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER DEPORTES*/}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-sportD text-2xl text-center">
                DEPORTES
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-sportL bg-white/35 p-2  rounded-xl">
              <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER VIDA */}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-lifeD text-2xl text-center">VIDA</p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-lifeL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
          {/* CONTAINER ARTE*/}
          <div className="flex-col justify-center">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-artD text-2xl text-center">ARTE</p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-artL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
              <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* AQUÍ VA UN RANDY  QUE PUEDA HABLAR */}
        <div className="flex absolute bottom-0 p-5"></div>
      </div>
    </div>
  );
}
