import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
export default function achv() {
  const defaultBackground = "bg-booksflying.webp";
  const [background, setBackground] = useState("bg-booksflying.webp");

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="flex bg-grey/50 rounded-xl w-fit p-3">
          <p className="font-lucky text-dgreen text-center text-4xl">
            MEDALLAS
          </p>
        </div>
      </div>
    </div>
  );
}
