import Link from "next/link";

export default function ContactoFooter() {
  return (
    <div className="grid grid-flow-row justify-items-center md:grid-flow-col md:place-items-center h-4/5 w-[350px] md:w-4/5  lg:w-1/2  mx-auto p-4">
      {/* RANDY! */}

      <img src="/RANDY_08.svg" alt="Randy" className="h-28" />

      <div>
        {/* TITLE + SUBTITLE */}
        <div className="grid-flow-col p-3">
          <h2 className="font-lucky text-dgreen text-3xl text-center">
            CONTÁCTANOS
          </h2>
          <p className="font-mont text-black font-semibold text-center">
            ¡Síguenos en nuestras redes sociales!
          </p>
        </div>

        {/* ICONOS SOCIAL MEDIA */}
        <div className="flex grid-flow-col gap-6 justify-center p-3">
          <button className="bg-blue-200 p-3 rounded-full">
            <a href="https://www.facebook.com/">
              <img src="/facebookblue.svg" alt="G" className="h-8 w-8" />
            </a>
          </button>
          <button className="bg-black p-3 rounded-full">
            <a href="https://www.tiktok.com/">
              <img src="/tiktok.svg" alt="G" className="h-8 w-8" />
            </a>
          </button>
          <button className="bg-green-500 p-3 rounded-full">
            <a href="https://www.spotify.com/">
              <img src="/spotify.svg" alt="G" className="h-8 w-8" />
            </a>
          </button>
        </div>

        {/* LINKS A AVISOS  */}
        <div className="flex grid-flow-col gap-6 justify-center p-3">
          <a
            href=""
            className="font-mont text-black text-center text-xs hover:font-semibold hover:text-dorange hover:underline"
          >
            Privacidad
          </a>
          <a
            href=""
            className="font-mont text-black text-center text-xs hover:font-semibold hover:text-dorange hover:underline"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  );
}
