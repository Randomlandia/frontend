export default function Unicos(props) {
  return (
    <div className="flex flex-col rounded-3xl m-[5px]  md:w-[228px] md:h-[284px]  gap-[10px] p-[10px]  items-center align-middle justify-center text-center">
      <div className="">
        <div className="">
          <img
            src={props.icono}
            alt={props.alt}
            className=" w-[60px] h-[60px] m-auto "
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
