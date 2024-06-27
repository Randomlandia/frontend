import Navbar from "@/components/Navbar";
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
        <div className="flex-col bg-grey/50 rounded-xl w-fit p-3">
          <p className="font-lucky text-dgreen text-center text-4xl">
            MEDALLAS
          </p>
        </div>
      </div>
      {/* AQUÍ VAN LOS MODALES */}

      <div></div>

      {/* AQUÍ VA UN RANDY  QUE PUEDA HABLAR */}
      <div className="flex absolute bottom-0 p-10">
        <img src="/randy_wink.svg" alt="" className="h-28" />
      </div>
    </div>
  );
}
