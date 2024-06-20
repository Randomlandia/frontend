import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import ContactoFooter from "@/components/ContactoFooter";

export default function User() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* NAVBAR COMPONENT */}
      <Navbar />

      <div className="m-10 p-6 grid rounded-xl justify-items-center bg-oldwhite h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
        <div className="flex-col gap-4 p-4 border border-black">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <Avatar />
          {/* SCORE */}
          <div className="border-4  p-2 rounded-xl border-lorange ">
            {" "}
            <p className="font-lucky text-dgreen text-2xl text-center">SCORE</p>
            <p className="font-mont font-semibold text-black text-5xl text-center">
              9,999
            </p>
          </div>
        </div>

        {/* BOTONES HACIA SUBMENUS */}
        <div className="w-fit flex flex-col gap-4 p-2 md:flex-col lg:flex-row">
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 ">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              FAVS
            </span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 ">
            <img src="/icon_userachieve.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              LOGROS
            </span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 ">
            <img src="/icon_userview.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              VISTOS
            </span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 ">
            <img src="/icon_userabt.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              NOSOTROS
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER CONTACTO */}
      <ContactoFooter />
    </main>
  );
}
