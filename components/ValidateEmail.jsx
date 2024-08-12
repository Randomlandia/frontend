import React from "react";
import Image from "next/image";
import Luz from "./home/luz";

export default function ValidatePage({ status }) {
  return (
    <>
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(0%);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0.1;
          }
        }

        @keyframes sideWays {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(200px);
          }
        }

        @keyframes bounce-and-rotate {
          0% {
            top: 0;
            left: 0;
            transform: rotate(360deg);
          }
          60% {
            top: 60%;
            left: 50%;
            transform: rotate(270deg);
          }
          70% {
            top: 30%;
            left: 75%;
            transform: rotate(340deg);
          }
          100% {
            top: 0;
            left: 0;
            transform: rotate(0deg);
          }
        }
      `}</style>
      <main className="relative min-h-screen w-screen overflow-hidden bg-[url('/backgrounds/ocean.jpg')] bg-cover bg-left-bottom bg-no-repeat [&>div>div>div>div]:bg-teal-300/30 [&>div>div>div>div]:shadow-none">
        <Luz>
          <div className="flex justify-center items-center fixed bg-black z-[1000] border-cyan-950 h-96 w-96 bg-grey/40 rounded-full shadow-teal-300 shadow-xl animate-[bounce-and-rotate_10s_linear_infinite]">
            <h1 className="absolute start-1/2 transition -translate-x-1/2 bottom-full text-4xl bg-white p-5 px-10 rounded-full text-dorange font-ram">
              {status || "Validando..."}
            </h1>
            <div className="blur-[2px] absolute z-[1000] border-cyan-950 h-96 w-96 rounded-full shadow-black shadow-sm"></div>
            <Image
              src="/RANDY_08.svg"
              width={250}
              height={250}
              alt="Rotating and bouncing image"
            />
          </div>
        </Luz>
      </main>
    </>
  );
}
