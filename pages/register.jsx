import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Register() {
  const [background, setBackground] = useState("bg-booksflying.webp");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  useEffect(() => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(`/backgrounds/${bgNew}`);
    } else {
      setBackground("/backgrounds/bg-booksflying.webp");
    }
  }, []);

  async function onSubmit(dataRegistro) {
    const noEmail = !dataRegistro.correoRegistro;
    const noPassword = !dataRegistro.contraseñaRegistro; // Corregido de correoRegistro a contraseñaRegistro
    const noName = !dataRegistro.userRegistro;
    const noBirthday = !dataRegistro.fechaNacimiento;
  
    const isMissingFields = noEmail || noPassword || noName || noBirthday;
    try {
      if (isMissingFields) {
        setShowError(true);
        return; // Termina la función si hay campos faltantes
      }
  
      setShowError(false);
  
      // Registro del usuario
      const registroResponse = await fetch(`${process.env.NEXT_PUBLIC_RANDOM_API}users`, {
        method: "POST",
        body: JSON.stringify({
          name: dataRegistro.userRegistro,
          email: dataRegistro.correoRegistro,
          password: dataRegistro.contraseñaRegistro,
          fechaNacimiento: dataRegistro.fechaNacimiento,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      if (!registroResponse.ok) {
        throw new Error("Error en el registro");
      }
  
      const registroJson = await registroResponse.json();
  
      if (registroJson) {
        // Autenticación del usuario después del registro
        const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_RANDOM_API}users/login`, {
          method: "POST",
          body: JSON.stringify({
            email: dataRegistro.correoRegistro,
            password: dataRegistro.contraseñaRegistro,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
  
        if (!loginResponse.ok) {
          throw new Error("Usuario o contraseña inválidos");
        }
  
        const loginJson = await loginResponse.json();
  
        if (loginJson?.data?.token) {
          localStorage.setItem("token", loginJson.data.token);
          localStorage.setItem("userID", loginJson.data.userID);
          console.log("Login Exitoso");
  
          const userID = loginJson.data.userID;
  
          // Obtener la información del usuario
          const userResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}users/${userID}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );
  
          if (!userResponse.ok) {
            throw new Error("No se pudieron obtener los datos del usuario");
          }
  
          const userJson = await userResponse.json();
  
          if (userJson?.data) {
            localStorage.setItem(
              "favs",
              JSON.stringify(userJson.data.users.sandiasFavoritas)
            );
            localStorage.setItem(
              "view",
              JSON.stringify(userJson.data.users.sandiasVistas)
            );
            localStorage.setItem(
              "achieve",
              JSON.stringify(userJson.data.users.achievements)
            );
            localStorage.setItem(
              "score",
              JSON.stringify(userJson.data.users.score)
            );
            localStorage.setItem(
              "username",
              userJson.data.users.name
            );
  
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              router.push("/");
            }, 2000);
          } else {
            console.log("No se pudieron obtener los datos del usuario");
          }
  
          return;
        } else {
          console.log("Usuario o contraseña inválidos");
          setError("root", { message: "Usuario o contraseña inválidos" });
        }
      } else {
        console.log("Error en el registro");
      }
    } catch (error) {
      console.log("Error:", error.message);
      setShowError(true);
    }
  }
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
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Solo se permiten letras",
                      },
                    })}
                  />
                </div>
                {errors.userRegistro && (
                  <p className="text-red-500 text-center">
                    {errors.userRegistro.message}
                  </p>
                )}
              </div>
              <div className="grid gap-0.5">
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/icon_cumple.svg" alt="" className="w-9 h-9" />
                  <input
                    type="date"
                    name="fechaNacimiento"
                    className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                    {...register("fechaNacimiento")}
                  />
                  {/* {errors.fechaNacimiento && (
                    <p className="text-red-500 text-center">
                      {errors.fechaNacimiento.message}
                    </p>
                  )} */}
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
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Correo no válido",
                      },
                    })}
                  />
                </div>
                {errors.correoRegistro && (
                  <p className="text-red-500 text-center">
                    {errors.correoRegistro.message}
                  </p>
                )}
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
                        message: "Contraseña debe contener mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "Contraseña debe contener máximo 50 caracteres",
                      },
                      validate: {
                        matches: (value) =>
                          value === watch("contraseñaRegistro") ||
                          "Las contraseñas no coinciden",
                      },
                    })}
                  />
                </div>
                {errors.contraseñaRegistro && (
                  <p className="text-red-500 text-center">
                    {errors.contraseñaRegistro.message}
                  </p>
                )}
              </div>
              <div className="grid gap-0.5">
                <div className="flex gap-2 font-bold justify-center">
                  <img src="/password.svg" alt="" className="w-9 h-9" />
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="Repite tu contraseña"
                    className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                    {...register("confirmPassword", {
                      validate: {
                        matches: (value) =>
                          value === watch("contraseñaRegistro") ||
                          "Las contraseñas no coinciden",
                      },
                    })}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-center">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid justify-center gap-3">
              <button
                type="submit"
                className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
              >
                enviar
              </button>
              {showError && (
                <p className=" text-red-500 text-center" id="letra">
                  {"⚠ Llena los campos por favor"}
                </p>
              )}
              <Link href="./login" className="text-natD underline text-center">
                INICIAR SESIÓN
              </Link>
            </div>
          </form>

          {/* REGISTRO CON CLERK */}
          {/* <SignInButton mode="modal" forceRedirectUrl="/randomlandia">
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
          </SignInButton> */}
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-oldwhite/70 bg-opacity-75">
          <p className="text-ram text-center text-3xl font-bold text-dgreen">
            ¡Bienvenido!
            <br /> Ya estas listo para la aventura.
          </p>
        </div>
      )}
    </div>
  );
}
