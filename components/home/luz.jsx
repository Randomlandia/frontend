import React from "react";
export default function Luz({ children, active }) {
  return (
    <div className="relative z-20 min-h-screen m-0 p-0">
      <div className="flex absolute z-10 bg-transparent w-[100%] h-[100%]"></div>
      {children}
      <div
        id="contenedorLuz"
        className={`relative w-[100%] z-30 h-[100vh] overflow-hidden xl:justify-center align-bottom ${
          active ? "active" : ""
        }`}
      >
        <div className="burbujas">
          <div className="burbuja"></div>
          <div className="burbujaDos"></div>
          <div className="burbujaTres"></div>
          <div className="burbujaCuatro"></div>
          <div className="burbujaCinco"></div>
          <div className="burbujaSeis"></div>
          <div className="burbujaSiete"></div>
          <div className="burbujaOcho"></div>
          <div className="burbujaNueve"></div>
          <div className="burbujaDiez"></div>
          <div className="burbujaOnce"></div>
          <div className="burbujaDoce"></div>
          <div className="burbujaBurbuja"></div>
          <div className="burbujaDosDos"></div>
          <div className="burbujaTresTres"></div>
          <div className="burbujaCuatroCuatro"></div>
          <div className="burbujaCincoCinco"></div>
          <div className="burbujaSeisSeis"></div>
          <div className="burbujaSieteSiete"></div>
          <div className="burbujaOchoOcho"></div>
          <div className="burbujaNueveNueve"></div>
          <div className="burbujaDiezDiez"></div>
          <div className="burbujaOnceOnce"></div>
          <div className="burbujaDoceDoce"></div>
        </div>
      </div>
    </div>
  );
}
