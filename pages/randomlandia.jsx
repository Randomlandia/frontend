import Navbar from "../components/Navbar";
import Link from "next/link";
import Luz from "@/components/home/luz";

const Randomlandia = () => {
  return (
    <div className="  relative max-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col font-mont font-bold overflow-hidden  bg-[url('/backgrounds/bg-5.webp')]">
      <Navbar />
      <Link
        href="/menu"
        className="flex bg-dorange h-9 w-32 px-5 rounded-[10px]"
      >
        <button> menu </button>
      </Link>
      <Luz
        className="min-h-full relative "
        children={
          <div className="z-[1000] absolute pt-[100px] pr-[100px] md:pr-[300px] md:pt-[100px] xl:pt-[200px] xl:pr-[0px] flex max-h-screen  align-bottom justify-self-end">
            <img
              className="h-[300px] w-[344px]  md:h-[400px] md:w-[444px] xl:h-[500px] xl:w-[544px]"
              src="/RANDY_08.svg"
              alt="RANDY_08"
            />
          </div>
        }
      ></Luz>
    </div>
  );
};
export default Randomlandia;
