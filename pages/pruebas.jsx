import Navbar from "@/components/Navbar";
import ModalPassword from "@/components/modalPassword";
export default function Pruebas() {
  return (
    <div className=" flex min-h-screen font-mont flex-col font-bold overflow-hidden items-center bg-white">
      {/*nav */}
      <div className=" fixed w-full h-14 z-[4000] bg-lorange flex justify-between items-center text-white font-lucky text-xl py-3">
        <Navbar />
      </div>{" "}
      <div className="p-20">
        <ModalPassword />
      </div>
    </div>
  );
}
