import React from "react";
import Image from "next/image";

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
            transform: rotate(0deg);
          }
          60% {
            top: 60%;
            left: 75%;
            transform: rotate(270deg);
          }
          70% {
            top: 30%;
            left: 90%;
            transform: rotate(340deg);
          }
          100% {
            top: 0;
            left: 0;
            transform: rotate(360deg);
          }
        }
      `}</style>
      <main className="relative min-h-screen w-screen bg-gradient-to-t from-[#182848] to-[#2980b9] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center pointer-events-none">
          <div className="bubble top-1/2 w-8 h-8 animate-bubble-1"></div>
          <div className="bubble top-1/4 end-1/4 w-4 h-4 animate-bubble-2"></div>
          <div className="bubble w-3 h-3 animate-bubble-3"></div>
          <div className="bubble w-6 h-6 animate-bubble-4"></div>
          <div className="bubble w-8 h-8 animate-bubble-5"></div>
          <div className="bubble w-3 h-3 animate-bubble-6"></div>
          <div className="bubble w-4 h-4 animate-bubble-7"></div>
          <div className="bubble top-1/4 end-0 w-5 h-5 animate-bubble-8"></div>
          <div className="bubble w-10 h-10 animate-bubble-9"></div>
          <div className="bubble w-8 h-8 animate-bubble-10"></div>
          <div className="bubble w-6 h-6 animate-bubble-11"></div>
        </div>

        <div className="flex justify-center items-center fixed bg-black z-[1000] border-cyan-950 h-96 w-96 bg-grey/40 rounded-full shadow-amber-200 shadow-xl animate-[bounce-and-rotate_10s_linear_infinite]">
          <h1 className="absolute start-[80%] bottom-[80%] text-4xl bg-white p-5 px-10 rounded-full text-dorange font-ram">
            {status || "Validando..."}
          </h1>
          <div className="absolute bg-black z-[1000] border-cyan-950 h-96 w-96 bg-grey/40 rounded-full shadow-black shadow-sm"></div>
          <Image
            src="/RANDY_08.svg"
            width={250}
            height={250}
            alt="Rotating and bouncing image"
          />
        </div>
      </main>

      <style
        jsx
        global
      >{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background-color: white;
          opacity: 0.2;
          bottom: -30px;
          animation: bubble 15s ease-in-out infinite,
            sideWays 4s ease-in-out infinite alternate;
        }

        .animate-bubble-1 {
          left: 10%;
          animation-delay: 0.5s;
          animation-duration: 16s;
        }

        .animate-bubble-2 {
          left: 40%;
          animation-delay: 1s;
          animation-duration: 10s;
        }

        .animate-bubble-3 {
          left: 30%;
          animation-delay: 5s;
          animation-duration: 20s;
        }

        .animate-bubble-4 {
          left: 40%;
          animation-delay: 8s;
          animation-duration: 17s;
        }

        .animate-bubble-5 {
          left: 60%;
          animation-delay: 10s;
          animation-duration: 15s;
        }

        .animate-bubble-6 {
          left: 80%;
          animation-delay: 3s;
          animation-duration: 30s;
        }

        .animate-bubble-7 {
          left: 90%;
          animation-delay: -7s;
          animation-duration: 25s;
        }

        .animate-bubble-8 {
          left: 50%;
          animation-delay: -5s;
          animation-duration: 19s;
        }

        .animate-bubble-9 {
          left: 30%;
          bottom: 30px;
          animation-delay: -21s;
          animation-duration: 16s;
        }

        .animate-bubble-10 {
          left: 60%;
          bottom: 30px;
          animation-delay: -13.75s;
          animation-duration: 20s;
        }

        .animate-bubble-11 {
          left: 90%;
          bottom: 30px;
          animation-delay: -10.5s;
          animation-duration: 19s;
        }
      `}</style>
    </>
  );
}
