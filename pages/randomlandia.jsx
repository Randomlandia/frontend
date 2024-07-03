import Navbar from "../components/Navbar";
import Link from "next/link";

const Randomlandia = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      <div className=" flex text-orange-600 font-semibold justify-center mt-8 text-5xl">
        RAMDOMLANDIA
      </div>
      <br />
      {/* TODO: temporal en lo que ponemos el de user real */}
      <Link
        href="/menu"
        className="flex bg-dorange h-9 w-32 px-5 rounded-[10px]"
      >
        <button> menu </button>
      </Link>
    </main>
  );
};
export default Randomlandia;
