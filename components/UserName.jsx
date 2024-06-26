export default function UserName() {
  return (
    <div className="flex flex-col bg-dorange bg-opacity-45 rounded-xl p-6 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
      <div className="flex flex-row justify-end">
        <img src="/close.svg" alt="close" className="h-4 w-4" />
      </div>

      {/* TITULO DEL MODAL */}
      <div className="flex flex-row p-4 justify-center">
        <p className="font-lucky text-dgreen text-center text-3xl">
          ¡Escribe tu nombre!
        </p>
      </div>

      {/* INPUT PARA NOMBRE USER */}
      <div className=" flex flex-col rounded-xl border-4 border-lorange bg-white bg-opacity-45 p-2">
        <p className="font-mont text-black font-semibold text-center text-4xl">
          Gatito-3000
        </p>
      </div>

      {/* BOTÓN GUARDAR */}
      <div></div>
    </div>
  );
}
