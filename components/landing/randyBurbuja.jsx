import React from 'react';
import { useRouter } from 'next/router';
import BurbujaAdaptable from '../BurbujaAdaptable';
export default function RandyBurbuja() {
  const router = useRouter();
  const index = () => {
    router.push(`/`);
  };
  return (
    <div className="flex mt-[620px] md:mt-[800px] xl:mt-[620px] fixed">
      <BurbujaAdaptable
        id="burbujaLanding"
        className="z-[1000] h-[80px] w-[80px] flex rounded-full shadow-amber-300 shadow-md">
        <button
          onClick={index}
          type="submit">
          <img
            className="  h-[50px] w-[94px] "
            src="/RANDY_08.svg"
            alt="RANDY_08"
          />
        </button>
      </BurbujaAdaptable>
    </div>
  );
}
