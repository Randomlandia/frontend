export default function MedallaDetail() {
  return (
    <div className="flex flex-col gap-2  bg-oldwhite/75 border-4 border-natL rounded-xl shadow-lg px-6 py-4 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
      <div className="inline-flex justify-center gap-6 ">
        {/* MEDALLA GRANDE TOPIC */}
        <div className="flex justify-start">
          <img
            src="/M_CIENCIA_GREY.svg"
            alt="MEDALLA CIENCIA"
            className="h-16"
          />
        </div>{" "}
        {/* NOMBRE DEL TOPIC */}
        <div className="flex place-items-center">
          <p className="font-lucky text-natD text-center text-4xl">CIENCIAS</p>
        </div>
      </div>

      {/* CAMINO BADGES + ESTRELLAS  */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 object-center  lg:gap-10 py-2">
        {/* PRINCIPIANTE */}
        <div className="">
          <div className="grid grid-cols-5 justify-items-center gap-4">
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/B_CIENCIAgrey.svg" alt="" />
          </div>
          <div className="flex justify-center">
            <p className="font-lucky text-natD text-center p-2">PRINCIPIANTE</p>
          </div>
        </div>

        {/* INTERMEDIO */}
        <div className="">
          <div className="grid grid-cols-5 justify-items-center gap-4">
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/B_CIENCIAgrey.svg" alt="" />
          </div>
          <div className="flex justify-center">
            <p className="font-lucky text-natD text-center p-2">INTERMEDIO</p>
          </div>
        </div>

        {/* AVANZADO */}
        <div className="">
          <div className="grid grid-cols-5 justify-items-center gap-4">
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/B_CIENCIAgrey.svg" alt="" />
          </div>
          <div className="flex justify-center">
            <p className="font-lucky text-natD text-center p-2">AVANZADO</p>
          </div>
        </div>

        {/* EXPERTO */}
        <div className="">
          <div className="grid grid-cols-5 justify-items-center gap-4">
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/stargrey.svg" alt="" />
            <img src="/B_CIENCIAgrey.svg" alt="" />
          </div>
          <div className="flex justify-center">
            <p className="font-lucky text-natD text-center p-2">EXPERTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
