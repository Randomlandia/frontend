export default function CardSandiaBack() {
  return (
    <div className="flex flex-col h-64 w-72 gap-6 bg-white border-4 border-dorange p-4  rounded-lg ">
      {/* CITA FORMATO APA DE LAS SANDIAS  */}
      <div className=" flex-wrap justify-center p-3 rounded-lg bg-peach shadow-md">
        {/* APELLIDO, INCIALES */}
        <span className="font-mont text-black">Aguirre S.</span>
        {/* FECHA DE PUBLICACIÓN */}
        <span className="font-mont text-black">(2024, 4 de julio)</span>
        {/* TITULO */}
        <p className="font-mont text-black font-bold text-xl">
          "Hacer una referencia APA"
        </p>
        {/* NOMBRE DE DONDE SE PUBLICÓ*/}
        <p className="font-mont text-black">RandomLandia News</p>
        {/* URL */}
        <a href="http://google.com" className="font-mont text-black">
          Google
        </a>
      </div>

      <div className=" relative p-5">
        <div className="flex absolute bottom-0 right-0">
          <img src="icon_turn.svg" alt="" className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
