import Link from 'next/link';
import React from 'react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center p-10 overflow-hidden">
      {/* TITULO DEL ERROR 404 */}
      <div className="flex-wrap justify-center p-3">
        <p className="font-mono text-zinc-500 text-center font-extrabold text-8xl">
          4 0 4
        </p>
        <p className="font-mono text-zinc-500 text-center  text-lg">
          Randy no pudo encontrar la página que estabas buscando
        </p>
      </div>
      {/* RANDY */}
      <div className="flex justify-center p-4">
        <img
          src="/RANDY_NOTFOUND.svg"
          alt="RandyNotFound"
          className="h-52 w-auto"
        />
      </div>
      <div className="flex justify-center ">
        <Link
          href="/"
          className="font-mont font-semibold text-zinc-500 hover:text-pcyan hover:underline text-center text-lg "
        >
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
}
