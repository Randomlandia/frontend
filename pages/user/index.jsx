import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import ContactoFooter from "@/components/ContactoFooter";

export default function User() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* CARD CONTAINER */}
      <div className=" bg-oldwhite rounded-xl p-6 m-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
        {/* AVATAR COMPONENT Y NOMBRE USER*/}
        <div className="border border-black ">
          <Avatar />
        </div>
        <div className="border border-black grid gap-4 w-full py-4 px-10">
          {/* SCORE */}
          <div className="border-4 border-lorange rounded-lg py-2 px-4 grid grid-rows-2 gap-2 place-items-center">
            {" "}
            <p className="font-lucky text-dgreen text-2xl ">SCORE</p>
            <p className="font-mont font-semibold text-black text-5xl ">
              9,999
            </p>
          </div>
        </div>
        {/* BOTONES HACIA SUBMENUS */}
        <div className="border border-black grid gap-4 w-fit py-4 px-10">
          <div className="bg-lorange rounded-lg py-2 px-4 grid grid-cols-2 gap-2 place-items-center">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />

            <span className="font-lucky text-black text-xl ">FAVS</span>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 grid grid-cols-2  gap-2 place-items-center">
            <img src="/icon_userachieve.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl ">LOGROS</span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 grid grid-cols-2  gap-2 place-items-center">
            <img src="/icon_userview.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl ">VISTOS</span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 grid grid-cols-2  gap-2 place-items-center">
            <img src="/icon_userabt.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl ">NOSOTROS</span>
          </div>
        </div>
      </div>

      {/* FOOTER CONTACTO */}
      <ContactoFooter />
    </main>
  );
}
