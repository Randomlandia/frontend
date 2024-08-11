import React from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import ModalPassword from "@/components/modalPassword";
export default function Pruebas() {
  return (
    <div className=" flex min-h-screen font-mont flex-col font-bold overflow-hidden items-center bg-white">
      <Navbar />
      <div className="m-5">
        Randy is love ♥ Randy is love ♥ Randy is love ♥ Randy is love ♥ Randy is
        love ♥ Randy is love ♥ .env .env.local .env.development.local
        .env.test.local .env.production.local .env .env.local
        .env.development.local .env.test.local .env.production.local .env
        .env.local .env.development.local .env.test.local
        .env.production.local.env .env.local .env.development.local
        .env.test.local .env.production.local
        <ModalPassword />
      </div>
    </div>
  );
}
