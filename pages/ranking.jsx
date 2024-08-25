import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';

import API from '@/utils/api/globals.api';
import SeleccionaAvatar from '@/components/SeleccionaAvatar';

export default function RankingPage() {
  const router = useRouter();
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const rank = await API.getRanking();
      setRanking(rank);
    };

    getData();
  }, [ranking]);

  const handleRouterHome = () => {
    router.push('/');
  };

  return (
    <>
      {ranking.length > 0 ? (
        <main className="min-h-screen w-screen bg-[url('/backgrounds/ranking.jpg')] bg-cover bg-left-bottom bg-no-repeat flex flex-col justify-center gap-6 py-5 items-center">
          <ButtonHome goHome={handleRouterHome} />
          <h1 className="font-lucky text-2xl md:text-4xl text-dorange flex justify-center items-center md:gap-3 bg-grey/75 p-4 rounded-3xl shadow-lg">
            <Image
              src="/ranking/flag.svg"
              width={40}
              height={40}
            />
            <span>Tabla de posiciones</span>
          </h1>
          <ul className="w-11/12 max-w-[500px] flex flex-col justify-center items-center bg-grey/80 shadow-lg border-lorange border-[7px] rounded-3xl text-black relative p-2">
            {ranking?.map(({ name, score, avatar }, index) => {
              return (
                <Row key={`rank-${index}`}>
                  <CellMedal index={index} />
                  <CellAvatar avatarUser={avatar} />
                  <CellName nameUser={name} />
                  <CellScore scoreUser={score} />
                </Row>
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

function Row({ children }) {
  return (
    <li className="relative grid grid-cols-7 gap-3 [&_span]:block [&_span]:w-full [&_span]:h-fit [&_span]:overflow-hidden [&_span]:text-ellipsis [&_span]:whitespace-nowrap py-1 px-3 text-center font-mont w-11/12 items-center">
      {children}
    </li>
  );
}

function CellMedal({ index }) {
  return (
    <>
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
    </>
  );
}

function CellAvatar({ avatarUser }) {
  return (
    <span className="col-span-1 [&_img]:w-full [&_img]:h-10">
      <SeleccionaAvatar avatar={avatarUser || 0} />
    </span>
  );
}

function CellName({ nameUser }) {
  return <span className="col-span-3 text-start font-bold">{nameUser}</span>;
}

function CellScore({ scoreUser }) {
  return (
    <span className="col-span-2 overflow-hidden font-extrabold">
      {scoreUser}pts
    </span>
  );
}

function ButtonHome({ goHome }) {
  return (
    <div
      className="absolute top-3 start-5 lg:top-10 lg:start-10 bg-black z-[1000] mr-2 md:mr-6 xl:mr-10 h-12 w-12 xl:h-16 xl:w-16  justify-center text-center align-middle
      flex bg-grey/50 rounded-full">
      <button
        className=" flex justify-end items-center"
        onClick={goHome}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </div>
  );
}
