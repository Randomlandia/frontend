import { unicos } from "../constants/unicos";

export default function CarruselTemas(props) {
  return (
    <div className="flex flex-col rounded-3xl m-[5px]  md:min-w-[340px] md:min-h-[486px]  p-[10px]  items-center justify-center align-middle ">
      <div className="md:min-w-[340px] md:min-h-[486px]  ">
        <div className="flex justify-center animate-bounce">
          <img
            src={props.icono}
            alt={props.alt}
            className=" w-[60px] h-[60px] hover:shadow-xl hover:shadow-amber-500  hover:rounded-full"
          />
        </div>
        <div className="p-2">
          <img src="/landing/Line 14.svg" alt="linea" className="m-auto" />
        </div>
        <div className="flex font-lucky justify-center p-2 text-dgreen text-[20px]  ">
          {props.tema}
        </div>
      </div>

      <div
        className="
                flex justify-centerfont-mont font-semibold text-slate-950 text-[16px] w-[228px] h-[120px] p-[10px] "
      >
        {props.contenido}
      </div>
    </div>
  );
}
