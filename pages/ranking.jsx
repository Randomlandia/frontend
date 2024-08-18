import React, { useEffect, useState } from "react";
import Image from "next/image";

import API from "@/utils/api/globals.api";
import SeleccionaAvatar from "@/components/SeleccionaAvatar";

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rank = await API.getRanking();
      setRanking(rank);
    };

    getData();
  }, [ranking]);

  return (
    <>
      {ranking.length > 0 ? (
        <main className="min-h-screen w-screen bg-oldwhite flex flex-col justify-center gap-6 py-5 items-center">
          <h1 className="font-lucky text-2xl md:text-4xl text-dorange flex justify-center items-center md:gap-3 bg-white/30 p-4 rounded-3xl shadow-lg">
            <Image
              src="/ranking/flag.svg"
              width={40}
              height={40}
            />
            <span>Tabla de posiciones</span>
          </h1>
          <ul className="w-full max-w-[700px] flex flex-col justify-center items-center bg-white/30 shadow-lg border-4 border-lorange rounded-3xl text-black relative p-2">
            {ranking?.map(({ name, score, avatar }, index) => {
              return (
                <li
                  key={`rank-${index}`}
                  className="relative grid grid-cols-7 gap-3 [&_span]:block [&_span]:w-full [&_span]:h-fit [&_span]:overflow-hidden [&_span]:text-ellipsis [&_span]:whitespace-nowrap py-1 px-3 text-center font-mont w-11/12 items-center"
                >
                  {index < 3 ? (
                    <Image
                      src={`/ranking/medal-${index + 1}.svg`}
                      height={40}
                      width={40}
                      className="mx-auto"
                    />
                  ) : (
                    <span className="col-span-1 text-sm text-dgreen font-ram">
                      {index + 1}
                    </span>
                  )}
                  <span className="col-span-1 [&_img]:w-full [&_img]:h-10">
                    <SeleccionaAvatar avatar={avatar || 0} />
                  </span>
                  <span className="col-span-3 text-start font-bold">
                    {name}
                  </span>
                  <span className="col-span-2 overflow-hidden font-extrabold">
                    {score}pts
                  </span>
                </li>
              );
            })}
          </ul>
        </main>
      ) : (
        <main>
          <h1>Calculando...</h1>
        </main>
      )}
    </>
  );
}
