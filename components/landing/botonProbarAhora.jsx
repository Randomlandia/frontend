import React from "react";
import { useRouter } from "next/router";
export default function ProbarAhora() {
  const router = useRouter();
  const index = () => {
    router.push(`/`);
  };
  return (
    <div className="flex pt-[50px] ">
      <button
        onClick={index}
        type="submit"
        className=" text-basemd:text-lg m-auto h-[60px] w-[226px] md:h-[78px] md:w-[226px] animate-bounce  hover:shadow-xl hover:translate-y-3 hover:translate-x-2  hover:shadow-orange-300 bg-natL  font-lucky items-center text-center justify-center  rounded-[100px]"
      >
        ¡Probar ahora!
      </button>
    </div>
  );
}
