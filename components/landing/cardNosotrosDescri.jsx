export default function CardNosotrosDescri(props) {
  return (
    <div className="flex pr-[120px] h-[300px] md:pr-0 md:bg-[#f6ead7]/75 flex-col rounded-3xl m-[5px] md:w-[250px] md:h-[320px]  gap-[10px] pt-[30px]  items-center align-middle text-center">
      <div className="flex-col ">
        <div className=" flex m-auto flex-col h-[60px] w-[60px] items-center align-middle">
          <img
            src={props.icono}
            alt={props.alt}
            className="flex w-[60px] h-[60px] align-middle items-center hover:shadow-xl hover:shadow-amber-500 hover:rounded-full "
          />
        </div>

        <div className="flex flex-col font-lucky  text-dgreen text-[24px]">
          <div className="text-dgreen ">{props.nombre}</div>
          <div className="flex font-lucky justify-center  text-dorange text-[16px]">
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
