import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Avatar from '@/components/Avatar';
import ContactoFooter from '@/components/ContactoFooter';
import { useRouter } from 'next/router';
// import SpeechBubble from '@/components/SpeechBubble';

import API from '@/utils/api/account.api';

export default function User() {
  const router = useRouter();
  const [user, setData] = useState([]);
  const [emailIsValidate, setEmailIsValidate] = useState(false);
  let id = router.query.id;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${id}`, {
      method: 'Get',
    })
      .then((response) => response?.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [id]);

  useEffect(() => {
    const getValidateEmail = async (id) => {
      const r = await API.verifyValidateEmail(id);
      setEmailIsValidate(r);
    };
    getValidateEmail(id);
  }, [id]);

  {
    /* animate pulse temporal*/
  }
  if (!user?.data) {
    return (
      <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
    );
  }

  const favs = () => {
    router.push(`/user/favs`);
  };
  const logros = () => {
    router.push(`/user/achv`);
  };
  const vistos = () => {
    router.push(`/user/ackn`);
  };
  const nosotros = () => {
    router.push(`/about`);
  };
  const botonClass =
    "bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly hover:shadow-xl hover:translate-y-1 hover:translate-x-1 hover:shadow-orange-300 ";
  return (
    <main className="w-full min-h-screen bg-oldwhite/70 overflow-hidden">
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* CARD CONTAINER */}
      <div className=" bg-oldwhite rounded-xl p-6 mt-5 md:mt-10  xl:mt-16 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
        <div className="md:grid grid-cols-2 ">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <div className="p-4 px-10 lg:px-2">
            <Avatar
              userName={user.data.users.name}
              id={user.data.users._id}
              avatar={user.data.users.avatar}
            />

            {/*prueba*/}
          </div>

          {/* SCORE */}
          <div className="py-4 px-10 grid grid-cols-1 place-items-center lg:px-2">
            <div className="border-4 border-lorange rounded-lg py-2 px-4 grid grid-rows-2 gap-2 w-fit">
              {" "}
              <p className="relative  font-lucky text-dgreen text-2xl  text-center animate-heartbeat">
                SCORE
              </p>
              <p className="font-mont font-semibold text-black text-5xl text-center min-w-[140px] ">
                {user.data.users.score || "0"}
              </p>
            </div>
          </div>
        </div>

        {/* BOTONES HACIA SUBMENUS */}

        <div className="grid gap-4 w-full py-4 px-10 md:px-32 lg:grid-cols-2 lg:gap-2 lg:px-2 xl:grid-cols-4 ">
          <button onClick={favs} className={botonClass}>
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8 " />
            <span className="font-lucky text-black text-xl xl:text-lg">
              FAVS
            </span>
          </button>

          <button onClick={logros} className={botonClass}>
            <img src="/icon_userachieve.svg" alt="" className="h-8 w-8 " />
            <span className="font-lucky text-black text-xl xl:text-lg">
              LOGROS
            </span>
          </button>

          <button onClick={vistos} className={botonClass}>
            <img src="/icon_userview.svg" alt="" className="h-8 w-8 " />
            <span className="font-lucky text-black text-xl xl:text-lg ">
              VISTOS
            </span>
          </button>

          <button onClick={nosotros} className={botonClass}>
            <img src="/icon_userabt.svg" alt="" className="h-8 w-8" />
            <span className="font-lucky text-black text-xl xl:text-lg">
              NOSOTROS
            </span>
          </button>
        </div>
      </div>

      {/* FOOTER CONTACTO */}
      <div className=" md:m-20">
        <ContactoFooter />
      </div>
    </main>
  );
}
