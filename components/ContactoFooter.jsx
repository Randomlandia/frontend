export default function ContactoFooter() {
  return (
    <div className="bg-oldwhite p-8 rounded-2xl ">
      <div className="justify-center">
        {/* TITLE + SUBTITLE */}
        <div className="flex-col">
          <h2 className="font-lucky text-dgreen text-3xl text-center">
            CONTÁCTANOS
          </h2>
          <p className="font-mont text-black font-semibold text-center">
            ¡Síguenos en nuestras redes sociales!
          </p>
        </div>

        {/* ICONOS SOCIALMEDIA */}
        <div className="inline-flex gap-5">
          <div className="size-16 rounded-full bg-blue-500"></div>
          <div className="size-16 rounded-full bg-black"></div>
          <div className="size-16 rounded-full bg-green-500"></div>
        </div>

        {/* LINKS A AVISOS  */}
        <div className="inline-flex gap-5">
          <p className="font-mont text-black text-sm">Privacidad</p>
          <p className="font-mont text-black text-sm">Términos y condiciones</p>
        </div>
      </div>
    </div>
  );
}
