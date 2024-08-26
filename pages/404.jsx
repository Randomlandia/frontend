import Link from 'next/link';
import React from 'react';
import Luz from '@/components/home/luz';
import { useRouter } from 'next/router';

import BurbujaAdaptable from '@/components/BurbujaAdaptable';

export default function ErrorPage() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-[url('/backgrounds/error.jpg')] bg-cover bg-left-bottom bg-no-repeat">
      <div
        className="absolute bottom-10 start-5 lg:bottom-3/4 lg:end-3/4 z-[105]"
        id="burbuja2">
        <BurbujaAdaptable className="h-28 aspect-square">
          <button
            onClick={() => router.push('/')}
            className="relative font-lucky md:text-xl text-white hover:text-yellow-200 hover:underline text-center text-lg z-[102]">
            <span className="inline-block shadow-[2px_2px_0px_#8B4513, -2px_2px_0px_#8B4513, 2px_-2px_0px_#8B4513, -2px_-2px_0px_#8B4513]">
              Regresar al inicio
            </span>
          </button>
        </BurbujaAdaptable>
      </div>
      <Luz>
        <div className="absolute inset-0 overflow-hidden z-[4]">
          <Luz />
        </div>
        <div className="absolute inset-0 overflow-hidden z-[6]">
          <Luz />
        </div>
        <div className="absolute z-[5] top-1/2 start-1/2 transition -translate-x-1/2 -translate-y-1/2 bg-yellow-200/50 rounded-3xl w-full max-w-[500px]">
          <div className="flex-wrap justify-center p-3">
            <p className="font-mono text-amber-900 text-center font-extrabold text-8xl">
              4 0 4
            </p>
            <p className="p-5 font-mono text-amber-900 text-xl text-center">
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
        </div>
      </Luz>
    </main>
  );
}
