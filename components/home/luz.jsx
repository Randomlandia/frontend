import { propTypesChildren } from "@material-tailwind/react/types/components/accordion";

export default function Luz(props) {
  return (
    <div className=" relative z-20 min-h-[100vh] m-0 p-0">
      <div className="flex absolute z-10 bg-transparent align-middle  w-[100%] h-[100%] justify-center items-center">
        {props.children}
      </div>
      <div
        id="contenedorLuz"
        className="relative w-[100%] z-30 h-[100vh] overflow-hidden "
      >
        <div class="burbujas" className=" flex relative">
          <div class="burbuja" className=" "></div>
          <div class="burbujaDos" className=""></div>
          <div class="burbujaTres" className=""></div>
          <div class="burbujaCuatro" className=""></div>
          <div class="burbujaCinco" className=""></div>
          <div class="burbujaSeis" className=""></div>
          <div class="burbujaSiete" className=" "></div>
          <div class="burbujaOcho" className=" "></div>
          <div class="burbujaNueve" className=" "></div>
          <div class="burbujaDiez" className=" "></div>
          <div class="burbujaOnce" className=" "></div>
          <div class="burbujaDoce" className=" "></div>
          <div class="burbujaBurbuja" className=" "></div>
          <div class="burbujaDosDos" className=""></div>
          <div class="burbujaTresTres" className=""></div>
          <div class="burbujaCuatroCuatro" className=""></div>
          <div class="burbujaCincoCinco" className=""></div>
          <div class="burbujaSeisSeis" className=""></div>
          <div class="burbujaSieteSiete" className=" "></div>
          <div class="burbujaOchoOcho" className=" "></div>
          <div class="burbujaNueveNueve" className=" "></div>
          <div class="burbujaDiezDiez" className=" "></div>
          <div class="burbujaOnceOnce" className=" "></div>
          <div class="burbujaDoceDoce" className=" "></div>
        </div>
      </div>
    </div>
  );
}
