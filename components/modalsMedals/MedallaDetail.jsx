export default function MedallaDetail() {
  return (
    <div className="flex flex-col gap-2  bg-oldwhite/75 border-4 border-natL rounded-xl shadow-lg p-6 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
      {/* NOMBRE DEL TOPIC */}
      <div className="flex justify-center">
        <p className="font-lucky text-natD text-center text-4xl p-4">
          CIENCIAS
        </p>
      </div>

      {/* MEDALLAS */}
      <div className="grid grid-cols-2 gap-10">
        <div>
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
        <div className="grid grid-cols-5 justify-items-center gap-4">
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/B_CIENCIAgrey.svg" alt="" />
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-4">
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/B_CIENCIAgrey.svg" alt="" />
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-4">
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/stargrey.svg" alt="" />
          <img src="/B_CIENCIAgrey.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
