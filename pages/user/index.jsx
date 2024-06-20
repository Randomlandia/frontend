import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import ContactoFooter from "@/components/ContactoFooter";

export default function User() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* BODY */}
      <div className="m-10 rounded-xl overflow-hidden grid justify-items-center bg-oldwhite h-4/5 w-[350px] md:w-4/5 lg:w-1/2 py-14 md:py-24 px-8 mx-auto">
        <div className="inline-flex">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <div className="">
            <Avatar />
          </div>

          {/* SCORE
          <div className="border-4 h-fit p-4 rounded-xl border-lorange ">
            {" "}
            <p className="font-lucky text-dgreen text-xl text-center">SCORE</p>
            <p className="font-mont font-semibold text-black text-3xl text-center">
              9,999
            </p>
          </div> */}
        </div>

        {/* BOTONES HACIA SUBMENUS
        <div className="p-8 flex gap-4 justify-center">
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
        </div> */}
      </div>

      {/* FOOTER CONTACTO */}
      <ContactoFooter />
    </main>
  );
}
