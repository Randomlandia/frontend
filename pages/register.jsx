import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Register() {
  const [background, setBackground] = useState("bg-booksflying.webp");

  useEffect(() => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(`${bgNew}`);
    } else {
      setBackground("/backgrounds/bg-booksflying.webp");
    }
  }, []);

  async function onSubmit(dataRegistro) {
    fetch("http://localhost:3005/users", {
      method: "Post",
      body: JSON.stringify({
        name: dataRegistro.userRegistro,
        email: dataRegistro.correoRegistro,
        password: dataRegistro.contraseñaRegistro,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response?.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.log("Error", error);
      });

    if (dataRegistro) {
      localStorage.setItem("dataRegistro", JSON.stringify(dataRegistro));
    }
    reset();
    router.push("/randomlandia");
    return;
  }

  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full min-h-screen flex flex-col gap-5 font-mont font-bold">
        <Navbar />

        <div className="grid mx-auto h-4/5 w-[350px] md:w-4/5 lg:w-1/2  pb-4 bg-grey/50    rounded-[50px] mt-[35px]">
          <form
            name="formRegister"
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto py-12  grid gap-7 text-sm font-bold"
          >
            <p className="text-[#2E7D32] font-lucky text-2xl text-center">
              se parte de nosotros
            </p>
            <div className="flex gap-8 flex-col">
              <div className="grid gap-0.5">
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/account_circle.svg" alt="" className="w-9 h-9" />
                  <input
                    type="text"
                    name="userRegistro"
                    placeholder="Nombre del usuario"
                    className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                    {...register("userRegistro", {
                      minLength: {
                        value: 3,
                        message: "Usuario debe contener a mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Usuario debe contener a máximo 50 caracteres",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="grid gap-0.5">
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/mail.svg" alt="" className="w-9 h-9" />
                  <input
                    type="email"
                    name="correoRegistro"
                    placeholder="correo"
                    className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                    {...register("correoRegistro", {
                      minLength: {
                        value: 3,
                        message: "Correo debe contener a mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Correo debe contener a máximo 50 caracteres",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="grid gap-0.5">
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/lock.svg" alt="" className="w-9 h-9" />
                  <input
                    type="password"
                    name="password"
                    placeholder="contraseñaRegistro"
                    className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                    {...register("contraseñaRegistro", {
                      minLength: {
                        value: 3,
                        message:
                          "Contraseña debe contener a mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "Contraseña debe contener a máximo 50 caracteres",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="grid gap-0.5">
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/password.svg" alt="" className="w-9 h-9" />
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="Repite tu contraseña"
                    className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
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

          <SignInButton mode="modal" forceRedirectUrl="/randomlandia">
            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
              <p className="text-[#2E7D32] font-lucky text-2xl">
                O registrate con
              </p>
              <div className="flex gap-6 mb-4">
                <Image src="fb_icon.svg" width={40} height={40}></Image>
                <Image src="google_icon.svg" width={40} height={40}></Image>
                <Image src="tiktok_icon.svg" width={40} height={40}></Image>
                <Image src="randy_wink.svg" width={40} height={40}></Image>
              </div>
            </div>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}
