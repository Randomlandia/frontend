import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
export default function Home(props) {
  return (
    <div className="  relative max-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col font-mont font-bold overflow-hidden  bg-[url('/backgrounds/bg-5.webp')]">
      <Navbar />

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
  /*bg-[url('/backgrounds/bg-5.webp')]  */
}
