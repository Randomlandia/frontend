export default function Perspectiva(props) {
  return (
    <div className="flex flex-col rounded-3xl m-[5px]  md:w-[228px] md:h-[284px]  gap-[10px] p-[10px]  items-center align-middle ">
      <div className="">
        <div className="flex justify-center animate-bounce">
          <img
            src={props.icono}
            alt={props.alt}
            className=" w-[60px] h-[60px] hover:shadow-xl hover:shadow-amber-500  hover:rounded-full"
          />
        </div>
        <div className="p-2 justify-center">
          <img src="/landing/Line 14.svg" alt="linea" className=" " />
        </div>
        <div className="flex font-lucky justify-center p-2 text-dgreen text-[24px]  ">
          {props.tema}
        </div>
      </div>

      <div
        className="
              flex justify-centerfont-mont font-semibold text-slate-950 text-[16px] md:w-[228px] md:h-[284px] p-[10px] "
      >
        {props.contenido}
      </div>
    </div>
  );
}
