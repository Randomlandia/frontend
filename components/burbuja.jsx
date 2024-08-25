import React from "react";

export default function Burbuja({ id, children }) {
  return (
    <div
      id={id}
      className="relative mx-auto z-[1000] h-[420px] w-[450px] md:h-[500px] md:w-[500px] flex items-center justify-center rounded-full shadow-amber-100 shadow-lg"
    >
      {/* Capa de la burbuja con opacidad y efectos */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-20"
        style={{
          backgroundBlendMode: "screen",
          boxShadow: "0 0 60px 20px rgba(255, 223, 0, 0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="absolute top-5 left-5 h-40 w-40 bg-white/50 rounded-full blur-[30px] opacity-40"></div>
        <div className="absolute bottom-10 right-10 h-24 w-24 bg-white/30 rounded-full blur-[20px] opacity-20"></div>
      </div>

      {/* Segunda capa transparente para el contenido */}
      <div className="relative flex items-center justify-center h-full w-full rounded-full">
        <div className="relative  text-white text-center z-[1000]">
          {children}
        </div>
      </div>
    </div>
  );
}
