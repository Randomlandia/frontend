import Image from "next/image";
import React from "react";

export default function CardNosotrosDescri(props) {
  return (
    <div className="md:mx-auto flex pr-[120px]  md:pr-0 h-[300px]  md:bg-[#f6ead7]/75 flex-col rounded-3xl m-[5px] md:w-[250px] md:h-[320px]  gap-[10px] pt-[30px]  items-center align-middle text-center md:shadow-md">
      <div className="flex-col ">
        <div className=" flex m-auto flex-col h-[60px] w-[60px] items-center align-middle">
          <Image
            src={props.icono}
            alt={props.alt}
            width={60}
            height={60}
            className="flex align-middle items-center rounded-full hover:shadow-xl hover:shadow-amber-500 hover:rounded-full "
          />
        </div>

        <div className="flex flex-col font-lucky  text-dgreen text-[24px]">
          <div className="text-dgreen ">{props.nombre}</div>
          <div className="flex font-lucky justify-center  text-dorange text-[16px] px-3">
            {props.titulo}
          </div>
        </div>
      </div>

      <div
        className="
            flex font-mont font-semibold text-slate-950 text-[12px] text-left pl-5 w-[228px]"
      >
        {props.contenido}
      </div>
    </div>
  );
}
