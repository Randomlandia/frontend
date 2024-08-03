import React from "react";

export default function ContactoFooter() {
  return (
    <div className="grid grid-flow-row justify-items-center md:grid-flow-col md:place-items-center h-4/5 w-[350px] md:w-4/5  lg:w-1/2  mx-auto p-4">
      {/* RANDY! */}

      <img src="/RANDY_08.svg" alt="Randy" className="h-[222px]" />

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
          <button className="rounded-full hover:animate-ping">
            <a
              href="https://www.facebook.com/randomlandia.juego/"
              target="_blank"
            >
              <img
                src="/landing/facebook.png"
                alt="FaceBook"
                className="h-[60px] w-[60px]"
              />
            </a>
          </button>
          <button className="rounded-full hover:animate-ping">
            <a href="https://www.tiktok.com/@randyrandomcat" target="_blank">
              <img
                src="/landing/tiktok.png"
                alt="TikTok"
                className="h-[60px] w-[60px]"
              />
            </a>
          </button>
          <button className="rounded-full hover:animate-ping">
            <a
              href="https://open.spotify.com/user/31ux5pywufhwh6gexijksz7r5ztq?si=0e013d965ce148d5"
              target="_blank"
            >
              <img
                src="/landing/spoty.png"
                alt="Spotify"
                className="h-[60px] w-[60px]"
              />
            </a>
          </button>
        </div>

        {/* LINKS A AVISOS  */}
        <div className="flex grid-flow-col gap-6 justify-center p-3 ">
          <a
            href="/avisoprivacidad"
            target="_blank"
            className="font-mont text-black text-center text-xs hover:font-semibold hover:text-dorange hover:underline"
          >
            Aviso de Privacidad
          </a>
        </div>
      </div>
    </div>
  );
}
