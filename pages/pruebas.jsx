import Navbar from "../components/Navbar";

import CardSandiaFront from "@/backups/cards sandia/CardSandiaFront";
import CardSandiaBack from "@/backups/cards sandia/CardSandiaBack";

export default function Pruebas() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Navbar />
      <div className=" flex text-orange-600 font-semibold justify-center mt-8 text-5xl">
        PRUEBAS
      </div>
      <div className="flex justify-center p-2">
        <CardSandiaFront />
      </div>
    </main>
  );
}
