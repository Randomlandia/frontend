export default function CardRandyIcono(props) {
  return (
    <div className="flex flex-col rounded-3xl  gap-[10px]   items-center align-middle justify-center text-center">
      <div className="">
        <div className="flex font-lucky  text-dorange text-[24px]  ">
          {props.tema}
        </div>
      </div>

      <div
        className="
                  flex font-mont font-semibold text-slate-950 text-[16px] md:w-[400px] md:h-[150px] xl:w-[300px] xl:h-[200px] p-[10px]  justify-center "
      >
        {props.contenido}
      </div>
      <div className=" flex justify-center h-auto w-auto pt-4 ms:pt-1 animate-bounce items-center align-middle">
        <img
          src="/about/RANDY_CIRCLE_SANS.svg"
          alt="randyBurbujaIcono"
          className="flex w-[100px] h-[100px] align-middle items-center"
        />
        <img
          src={props.icono}
          alt={props.alt}
          className="absolute  w-[30px] h-[30px] mt-11 align-middle items-center  hover:animate-spin"
        />
      </div>
    </div>
  );
}
