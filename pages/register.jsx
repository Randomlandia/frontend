import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Register() {
  const defaultBackground = "bg-booksflying.webp";
  const [background, setBackground] = useState("bg-booksflying.webp");

  return (
    <div
      className=" min-h-screen bg-cover bg-left-bottom lg:bg-center  bg-no-repeat"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <div className="w-full min-h-screen flex flex-col gap-5 font-mont font-bold">
        <Navbar />

        <div className="grid mx-auto h-4/5 w-[350px] md:w-4/5 lg:w-1/2 pt-12 pb-4 bg-grey/30  rounded-[50px] ">
          <div className="grid gap-7 justify-center items-center text-white ">
            <SignInButton mode="modal" forceRedirectUrl="/randomlandia">
              <button className="flex gap-2">
                <img src="/google.svg" alt="G" className="h-8 w-8" />

                <p className="bg-natD/60 text-sm text-center max-w-80 w-60 md:w-96 py-2 px-4 rounded-xl">
                  CONTINUA CON GOOGLE
                </p>
              </button>
            </SignInButton>

            <SignInButton mode="modal" forceRedirectUrl="/randomlandia">
              <button className="flex gap-2">
                <img
                  src="/facebookblue.svg"
                  alt="G"
                  className="h-8 w-8 rounded-xl"
                />
                <button className=" bg-natD/60 text-sm text-center max-w-80 w-60 md:w-96 py-2 px-4 rounded-xl">
                  CONTINUA CON FACEBOOK
                </button>
              </button>
            </SignInButton>

            <SignInButton mode="modal" forceRedirectUrl="/randomlandia">
              <button className="flex gap-2">
                <img src="/tiktok.svg" alt="G" className="h-8 w-8" />
                <p className="font-mont font-bold bg-natD/60 text-sm text-center w-60 max-w-80 md:w-96 py-2 px-4 rounded-lg">
                  CONTINUA CON TIKTOK
                </p>
              </button>
            </SignInButton>

            <div className="flex">
              <div className="border-t-2 border-gray-800 w-full max-w-xs"></div>
              <p className="w-auto text-black -translate-y-2.5 text-center px-2">
                OR
              </p>
              <div className="border-t-2 border-gray-800 w-full max-w-xs"></div>
            </div>
          </div>
          <form className="mx-auto py-12  grid gap-7 text-sm font-bold">
            <div className="grid gap-2">
              <div className="grid gap-0.5">
                <label htmlFor="user" className="px-16">
                  USUARIO
                </label>
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/account_circle.svg" alt="" className="w-9 h-9" />
                  <input
                    type="text"
                    name="user"
                    placeholder="Tu nickname"
                    className="bg-lorange/90 w-60 rounded-xl px-3"
                  />
                </div>
              </div>
              <div className="grid gap-0.5">
                <label htmlFor="email" className="px-16">
                  EMAIL
                </label>
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/mail.svg" alt="" className="w-9 h-9" />
                  <input
                    type="email"
                    name="email"
                    placeholder="ejemplo@email.com"
                    className="bg-lorange/90 w-60 rounded-xl px-3"
                  />
                </div>
              </div>
              <div className="grid gap-0.5">
                <label htmlFor="password" className="px-16">
                  CONTRASEÑA
                </label>
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/lock.svg" alt="" className="w-9 h-9" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Min 8 caracteres"
                    className="bg-lorange/90 w-60 rounded-xl px-3"
                  />
                </div>
              </div>
              <div className="grid gap-0.5">
                <label htmlFor="password2" className="px-16">
                  EMAIL
                </label>
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/password.svg" alt="" className="w-9 h-9" />
                  <input
                    type="password"
                    name="password2"
                    placeholder="Repite tu contraseña"
                    className="bg-lorange/90 w-60 rounded-xl px-3"
                  />
                </div>
              </div>
            </div>
            <div className="grid justify-center gap-3">
              <button
                type="submit"
                className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
              >
                enviar
              </button>
              <Link href="./login" className="text-natD underline text-center">
                INICIAR SESIÓN
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
