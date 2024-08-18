import React from "react";
import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import ContactoFooter from "@/components/ContactoFooter";
import { useRouter } from "next/router";
import { useState } from "react";

import SpeechBubble from "@/components/SpeechBubble";

export default function User() {
  const router = useRouter();
  const [user, setPost] = useState([]);
  let id = router.query.id;

  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      {/* NAVBAR COMPONENT */}
      <Navbar />

      {/* CARD CONTAINER */}
      <div className=" bg-oldwhite rounded-xl blur-sm p-6 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
        <div className="md:grid grid-cols-2 ">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <div className="p-4 px-10 lg:px-2">
            <img
              src="/avatars/A_RANDY_DED.svg"
              alt="RANDY_DED"
              className="h-32 w-32 animate-spin"
            />
          </div>

          {/* SCORE */}
          <div className="py-4 px-10 grid grid-cols-1 place-items-center lg:px-2">
            <div className="border-4 border-lorange rounded-lg py-2 px-4 grid grid-rows-2 gap-2 w-fit">
              {" "}
              <p className="font-lucky animate-heartbeat text-dgreen text-2xl  text-center">
                SCORE
              </p>
              <p className="font-mont font-semibold text-black text-5xl text-center ">
                9,999
              </p>
            </div>
          </div>
        </div>

        {/* BOTONES HACIA SUBMENUS */}
        <div className="grid gap-4 w-full py-4 px-10 md:px-32 lg:grid-cols-2 lg:gap-2 lg:px-2 xl:grid-cols-4 ">
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img
              src="/icon_userheart.svg"
              alt=""
              className="h-8 w-8 "
            />
            <span className="font-lucky text-black text-xl xl:text-lg">
              FAVS
            </span>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img
              src="/icon_userachieve.svg"
              alt=""
              className="h-8 w-8 "
            />
            <span className="font-lucky text-black text-xl xl:text-lg">
              LOGROS
            </span>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img
              src="/icon_userview.svg"
              alt=""
              className="h-8 w-8 "
            />
            <span className="font-lucky text-black text-xl xl:text-lg ">
              VISTOS
            </span>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img
              src="/icon_userabt.svg"
              alt=""
              className="h-8 w-8"
            />

            <span className="font-lucky text-black text-xl xl:text-lg">
              RANKING
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER CONTACTO */}

      <ContactoFooter>
        <div className="relative pb-11 lg:absolute lg:bottom-[90%] lg:end-[60%] [&>div>div>p]:text-natD [&>div>div>p]:font-ram [&>div>div>p]:text-xs  [&>div]:shadow-none ">
          <SpeechBubble
            text="Hey tú!!! registrate para ver más ♥"
            trianglePosition="left"
            width="200px"
            height="150px"
          />
        </div>
      </ContactoFooter>
    </main>
  );
}
