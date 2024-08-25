import Link from 'next/link';
import React from 'react';
import Luz from '@/components/home/luz';
import { useRouter } from 'next/router';

export default function ErrorPage() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-[url('/backgrounds/error.jpg')] bg-cover bg-left-bottom bg-no-repeat">
      <Luz>
        <div className="absolute inset-0 overflow-hidden">
          <Luz />
        </div>
        <div className="absolute inset-0 overflow-hidden z-[101]">
          <Luz />
        </div>
        <div className="absolute z-[100] top-1/2 start-1/2 transition -translate-x-1/2 -translate-y-1/2 bg-yellow-200/50 rounded-3xl">
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

          <div className="flex justify-center py-5">
            <button
              onClick={() => router.push('/')}
              className="font-lucky md:text-xl text-amber-900 hover:text-yellow-900 hover:underline text-center text-lg ">
              Regresar al inicio
            </button>
          </div>
        </div>
      </Luz>
    </main>
  );
}
