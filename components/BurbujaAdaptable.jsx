import React from "react";

export default function BurbujaAdaptable({ id, children, className = "" }) {
  return (
    <div
      id={id}
      className={`relative mx-auto flex items-center justify-center rounded-full shadow-amber-100 shadow-lg ${className}`}
    >
      {/* Capa de la burbuja con opacidad y efectos */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-20"></div>

      {/* Segunda capa transparente para el contenido */}
      <div className="relative flex items-center justify-center h-full w-full rounded-full">
        <div className="relative text-white text-center z-[1000]">
          {children}
        </div>
      </div>
    </div>
  );
}
