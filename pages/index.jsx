import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
import { useRouter } from "next/router";
export default function Home(props) {
  const router = useRouter();
  const menu = () => {
    router.push(`/menu`);
  };
  return (
    <div className=" max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col font-mont font-bold overflow-hidden bg-[url('/backgrounds/randyBosque.svg')] xl:bg-center xl:bg-[url('/backgrounds/bg-5.webp')]">
      <Navbar />

      <div
        className="flex absolute bg-transparent w-screen h-screen z-[100]  
       pt-[50%] pl-[20%] md:pt-[20%] md:pl-[70%]   font-lucky text-white text-5xl"
      >
        <button
          onClick={menu}
          type="submit"
          className="  w-56 h-20 md:w-60 md:h-28 hover:shadow-xl hover:translate-y-3 hover:translate-x-2  hover:shadow-orange-300 bg-agreen  font-lucky items-center text-center justify-center  rounded-full"
        >
          Jugar
        </button>
      </div>
      <Luz
        className="min-h-full relative  "
        children={
          <div
            id="burbuja"
            className="bg-black z-[1000] absolute  h-[300px] w-[300px] align-middle
          flex  bg-grey/20 rounded-full justify-center items-center md:items-end shadow-amber-100 shadow-md"
          >
            <img
              className="  h-[100px] w-[144px] xl:h-[200px] xl:w-[244px] "
              src="/RANDY_08.svg"
              alt="RANDY_08"
            />
          </div>
        }
      ></Luz>
    </div>
  );
}
