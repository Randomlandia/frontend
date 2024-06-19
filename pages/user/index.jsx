import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import ContactoFooter from "@/components/ContactoFooter";

export default function User() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* BODY */}
      <div className="flex-col m-10 bg-oldwhite rounded-xl p-10">
        <div className="inline-flex justify-center">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <div className="">
            <Avatar />
          </div>

          {/* SCORE */}
          <div className="border-4 p-4 rounded-xl border-lorange text-center">
            {" "}
            <p className="font-lucky text-dgreen text-3xl">SCORE</p>
            <p className="font-mont font-semibold text-black text-6xl">9,999</p>
          </div>
        </div>

        {/* BOTONES HACIA SUBMENUS */}
        <div className="flex-row inline-flex gap-3 p-10 justify-center">
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 align-middle">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              FAVS
            </span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 align-middle">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              FAVS
            </span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 align-middle">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              FAVS
            </span>
          </div>
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 align-middle">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl text-center">
              FAVS
            </span>
          </div>
        </div>
      </div>
      {/* FOOTER CONTACTO */}
      <div className="p-4">
        <ContactoFooter />
      </div>
    </main>
  );
}
