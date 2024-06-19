import Link from "next/link";

export default function ContactoFooter() {
  return (
    <div className="flex bg-oldwhite p-8 rounded-2xl ">
      <div className="flex-col"></div>
      <div className="flex-col justify-center">
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
        <div className="flex gap-5 justify-center p-4">
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
        <div className="flex justify-center gap-10 p-2">
          <a
            href=""
            className="font-mont text-black text-sm hover:font-semibold hover:text-dorange hover:underline"
          >
            Privacidad
          </a>
          <a
            href=""
            className="font-mont text-black text-sm hover:font-semibold hover:text-dorange hover:underline"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  );
}
