import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
import { useRouter } from "next/router";
export default function Home(props) {
  const router = useRouter();
  const menu = () => {
    router.push(`/menu`);
  };
  return (
    <div className=" max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col font-mont font-bold overflow-hidden bg-[url('/backgrounds/randyBosque.svg')] xl:bg-center xl:bg-[url('/backgrounds/bg-6.webp')]">
      <Navbar />

      <button
        onClick={menu}
        type="submit"
        className=" absolute w-56 h-20  z-[100] pl-[170px] pt-[250px] md:pl-[500px] md:pt-[300px] 
         xl:pt-[400px] xl:pl-[1200px]  font-lucky text-white text-5xl tracking-wider  "
      >
        <div className=" flex w-56 h-20 md:w-60 md:h-28 bg-agreen m-auto font-lucky items-center text-center justify-center tracking-wider rounded-full">
          {" "}
          Jugar
        </div>
      </button>
      <Luz
        className="min-h-full relative  "
        children={
          <div
            id="burbuja"
            className="bg-black z-[1000] absolute  h-[300px] w-[300px] align-middle
          flex  bg-grey/20 rounded-full justify-center  items-end shadow-amber-100 shadow-lg"
          >
            <img
              className="  h-[100px] w-[144px] xl:h-[200px] xl:w-[244px] "

              src="/RANDY_08.svg"
              alt="RANDY_08"
            />
          </div>
        }
      ></Luz>
      <div
        className="flex  absolute bg-transparent w-screen h-screen z-[100]  
        font-lucky text-white text-5xl"
      >
        <button
          onClick={menu}
          type="submit"
          className=" m-auto w-60 h-28 hover:shadow-xl hover:translate-y-3 hover:translate-x-2  hover:shadow-orange-300 bg-agreen  font-lucky items-center text-center justify-center  rounded-3xl"
        >
          Jugar
        </button>
      </div>
    </div>
  );
}

