import React from "react";
export default function Unicos(props) {
  return (
    <div className="flex flex-col rounded-3xl   md:h-[400px]  gap-[10px] pt-[25px]  items-center align-middle justify-center text-center">
      <div className="flex flex-col">
        <div className=" flex m-auto  justify-center h-[100px] animate-bounce items-center align-middle">
          <img
            src={props.icono}
            alt={props.alt}
            className="flex w-[60px]  h-[60px] align-middle items-center hover:shadow-xl hover:shadow-amber-500 hover:rounded-full "
          />
        </div>
        <div className="flex font-lucky  text-dgreen text-[24px]  ">
          {props.tema}
        </div>
      </div>

      <div
        className="
            flex font-mont font-semibold text-slate-950 text-[16px] md:w-[228px] md:h-[284px] p-[10px] "
      >
        {props.contenido}
      </div>
    </div>
  );
}
