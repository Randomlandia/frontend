import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
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

      <div className="flex justify-center p-5">
        {/* CONTAINER DE MEDALLAS X TOPIC*/}
        <div className=" grid grid-cols-4 gap- justify-items-center gap-2 bg-oldwhite/70 shadow-md rounded-xl p-5 w-fit">
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl shadow-md">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
          {/* CONTAINER */}
          <div className="flex-col justify-center w-fit">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-langD text-2xl text-center">
                IDIOMAS
              </p>
            </div>

            {/* CARD MEDALLAS */}
            <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl">
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
              <img src="/B_IDIOMASgrey.svg" alt="" />
            </div>
          </div>
        </div>

        {/* AQUÍ VA UN RANDY  QUE PUEDA HABLAR */}
        <div className="flex absolute bottom-0 p-5"></div>
      </div>
    </div>
  );
}
