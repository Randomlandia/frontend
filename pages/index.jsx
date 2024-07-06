import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
import { useRouter } from "next/router";
export default function Home(props) {
  const router = useRouter();
  const menu = () => {
    router.push(`/menu`);
  };
  return (
    <div className="  relative max-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col font-mont font-bold overflow-hidden  bg-[url('/backgrounds/bg-5.webp')]">
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
          <div className="z-[1000] absolute pt-[100px] pr-[150px] md:pr-[300px] md:pt-[100px] xl:pt-[225px] xl:pr-[0px] flex max-h-screen  align-bottom justify-self-end">
            <img
              className="h-[300px]  w-[344px]  md:h-[400px] md:w-[444px] xl:h-[500px] xl:w-[544px] hover:"
              src="/RANDY_08.svg"
              alt="RANDY_08"
            />
          </div>
        }
      ></Luz>
    </div>
  );
}
{
  /*<button
              onClick={true}
              type="submit"
              className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
            >
              Jugar
            </button> */
}
{
  /*bg-[url('/backgrounds/bg-5.webp')] 
  <div className="h-96 w-72 absolute bg-[url('/speech_bubble.png')"></div> */
}
