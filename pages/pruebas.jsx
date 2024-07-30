import React from "react";
import Navbar from "@/components/Navbar";
import ModalPassword from "@/components/modalPassword";
export default function Pruebas() {
  return (
    <div className=" flex min-h-screen font-mont flex-col font-bold overflow-hidden items-center bg-white">
      <Navbar />
      <div className="m-5">
        <ModalPassword />
      </div>
    </div>
  );
}
