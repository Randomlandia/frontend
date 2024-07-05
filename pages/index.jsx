import Navbar from "../components/Navbar";
import Luz from "@/components/home/luz";
export default function Home() {
  return (
    <div className="max-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden  bg-[url('/backgrounds/bg-5.webp')]">
      <Navbar />
      <Luz className="min-h-full"></Luz>
    </div>
  );
}
{
  /*bg-[url('/backgrounds/bg-5.webp')]  */
}
