import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function achv() {
  const defaultBackground = "bg-booksflying.webp";
  const [background, setBackground] = useState("bg-booksflying.webp");
  const [usertopic, setTopic] = useState("");

  useEffect(() => {
    router.push(`/user/achv/${usertopic}`);
  }, [usertopic]);

  const router = useRouter();
  let topic = router.query.topic;
  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col  overflow-hidden"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />
      {/* TÍTULO  */}
      <div className="flex justify-center p-5">
        <div className="inline-flex gap-4 bg-oldwhite/60 rounded-xl shadow-md px-5 py-3">
          <img src="/icon_userachieve.svg" alt="logros" className="h-12" />
          <p className="flex  justify-center font-lucky text-dgreen text-5xl  ">
            LOGROS
          </p>
        </div>
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
            <button onClick={() => setTopic("idiomas")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-langL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_IDIOMASgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
          </div>

          {/* CONTAINER MATE */}
          <div className="flex-col justify-center">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-mathD text-2xl text-center">MATE</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("mate")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-mathL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_MATEgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
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
            <button onClick={() => setTopic("ciencias")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-natL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_CIENCIAgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
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
            <button onClick={() => setTopic("mundo")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-worldL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_MUNDOgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
          </div>
          {/* CONTAINER NERD */}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-nerdD text-2xl text-center">NERD</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("nerd")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-nerdL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_NERDgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
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
            <button onClick={() => setTopic("deportes")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-sportL bg-white/35 p-2  rounded-xl">
                <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_DEPORTEgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
          </div>
          {/* CONTAINER VIDA */}
          <div className="flex-col justify-center ">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-lifeD text-2xl text-center">VIDA</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("vida")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-lifeL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_VIDAgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
          </div>
          {/* CONTAINER ARTE*/}
          <div className="flex-col justify-center">
            {/* TITLE DEL TOPIC */}
            <div className="flex-col p-2">
              <p className="font-lucky text-artD text-2xl text-center">ARTE</p>
            </div>

            {/* CARD MEDALLAS */}
            <button onClick={() => setTopic("arte")}>
              <div className=" grid grid-cols-2 gap-2 border-4 border-artL bg-white/35 p-2  rounded-xl shadow-md">
                <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
                <img src="/B_ARTEgrey.svg" alt="" className="h-10 w-10" />
              </div>
            </button>
          </div>
        </div>

        {/* AQUÍ VA UN RANDY  QUE PUEDA HABLAR */}
        <div className="flex absolute bottom-0 p-5"></div>
      </div>
    </div>
  );
}
