import { useRouter } from "next/router";
export default function RandyBurbuja() {
  const router = useRouter();
  const index = () => {
    router.push(`/`);
  };
  return (
    <div className=" flex mt-[620px] md:mt-[800px] xl:mt-[620px]  fixed">
      <div
        id="burbujaLanding"
        className="fixed  bg-black z-[1000] border-cyan-950 h-[80px] w-[80px]   pt-16
flex  bg-grey/40 rounded-full  items-end shadow-amber-200 shadow-xl"
      >
        <div
          className="bg-black z-[1000] border-cyan-950 h-[80px] w-[80px]   pt-16
flex  bg-grey/40 rounded-full  items-end shadow-black shadow-sm"
        >
          <button onClick={index} type="submit">
            <img
              className="  h-[50px] w-[94px] "
              src="/RANDY_08.svg"
              alt="RANDY_08"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
