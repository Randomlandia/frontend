import React, { useEffect, useState } from "react";

import API from "@/utils/api/globals.api";

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
    <main className="h-screen w-screen bg-oldwhite flex flex-col gap-12 justify-center items-center">
      <h1 className="font-lucky text-4xl text-dorange">Tabla de posiciones</h1>
      <ul className="w-full max-w-96 flex flex-col justify-center items-center bg-white border-4 border-lorange rounded-2xl text-black relative">
        <li className="relative w-full grid grid-cols-6 gap-8 [&_span]:block [&_span]:w-full [&_span]:overflow-hidden [&_span]:text-ellipsis [&_span]:whitespace-nowrap p-3 text-center font-lucky text-dorange">
          <span className="col-span-1">Top</span>
          <span className="col-span-3 text-start">Nombre</span>
          <span className="col-span-2">Score</span>
        </li>
        {ranking?.map(({ name, score }, index) => {
          return (
            <li
              key={`rank-${index}`}
              className="relative grid grid-cols-6 gap-8 [&_span]:block [&_span]:w-full [&_span]:overflow-hidden [&_span]:text-ellipsis [&_span]:whitespace-nowrap p-3 text-center font-mont bg-oldwhite w-11/12 rounded-3xl my-2"
            >
              <span className="col-span-1 h-full rounded-full text-sm bg-yellow-300 shadow-2xl shadow-yellow-900 text-yellow-600 font-bold">
                {index + 1}
              </span>
              <span className="col-span-3 text-start uppercase">{name}</span>
              <span className="col-span-2 overflow-hidden">{score}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
