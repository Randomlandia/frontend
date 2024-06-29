export default function MedallaDetail() {
  return (
    <div className="flex flex-col  gap-2  bg-oldwhite/75 border-4 border-natL rounded-xl shadow-lg px-6 py-4 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
      {/* NOMBRE DEL TOPIC */}
      <div className="flex justify-center py-2">
        <p className="font-lucky text-natD text-center text-4xl">CIENCIAS</p>
      </div>
      <img src="/M_CIENCIA_GREY.svg" alt="" />
      {/* MEDALLAS */}
      <div className="grid grid-cols-2 object-center gap-10 py-2">
        {/* PRINCIPIANTE */}
        <div className="order-1">
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
        <div className="order-2">
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
        <div className="-order-2">
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
        <div className="-order-1">
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
