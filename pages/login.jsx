import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { getCookieValueByName } from "@/components/utils/getCookieValueByName";
export default function Login() {
  const router = useRouter();
  const { isLoaded, user } = useUser([]);
  const [background, setBackground] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  useEffect(() => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(`/backgrounds/${bgNew}`);
    } else {
      setBackground("/backgrounds/bg-booksflying.webp");
    }
  }, []);

  //funcionalidad para recordar al user
  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem('rememberMe', true);
    } else {
      localStorage.removeItem('rememberMe', false);
    }
  }, [rememberMe]);

  // Clerk: guardar datos del usuario en localStorage
  useEffect(() => {
    if (isLoaded && user) {
      const saveClerkUserDataOnLocalHost = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}users/email`,
            {
              method: "POST",
              body: JSON.stringify({
                email: user.emailAddresses[0].emailAddress
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            }
          );

          if (!response.ok) {
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
              router.push("/register");
            }, 5000);
            return;
          }

          const data = await response.json();

          const cookieName = "__clerk_db_jwt";
          const cookieValue = getCookieValueByName(cookieName);
          const idUser = data?.data?._id;
          if (cookieValue && data) {
            localStorage.setItem("token", cookieValue);
            localStorage.setItem("userID", idUser);
            localStorage.setItem("username", data.data.name);
            localStorage.setItem("avatar", data.data.avatar);
            localStorage.setItem(
              "favs",
              JSON.stringify(data.data.sandiasFavoritas)
            );
            localStorage.setItem(
              "view",
              JSON.stringify(data.data.sandiasVistas)
            );
            localStorage.setItem(
              "achieve",
              JSON.stringify(data.data.achievements)
            );
            localStorage.setItem("score", JSON.stringify(data.data.score));
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      };

      saveClerkUserDataOnLocalHost();
    }
  }, [isLoaded, user]);
  const handleToggleChange = () => {
    setRememberMe(!rememberMe);
  };
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm();

  async function onSubmit(dataLogIn) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}users/login`,
      {
        method: "POST",
        body: JSON.stringify({
          email: dataLogIn.email,

          password: dataLogIn.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    ).catch((error) => {
      console.log("Error", error);
    });

    const json = await response?.json();

    if (json?.data?.token) {
      localStorage.setItem("token", json.data.token);
      localStorage.setItem("userID", json.data.userID);
      console.log("Login Exitoso");

      const userID = localStorage.getItem("userID");

      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${userID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }
      );

      const userJson = await userResponse.json();
      if (userJson?.data) {
        const exp = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem("exp", exp.toString());
        localStorage.setItem("username", userJson.data.users.name);
        localStorage.setItem("avatar", userJson.data.users.avatar);
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

        setTimeout(() => {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            router.push("/");
          }, 2000);
        }, 2000);
      } else {
        console.log("No se pudieron obtener los datos del usuario");
      }
    } else {
      console.log("Usuario o contraseña inválidos");
      setError("root", { message: "Usuario o contraseña inválidos" });
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="grid justify-items-center bg-grey/50 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 py-14 md:py-24 px-8 mx-auto rounded-[50px]">
        {showError && (
          <div className="fixed z-20 inset-0 bg-white bg-opacity-70 flex items-center justify-center">
            <div className="w-4/5 bg-oldwhite grid gap-6 p-6 rounded-xl shadow-2xl shadow-lorange/70">
              <h2 className="text-4xl text-center font-bold font-ram text-dorange mb-4">
                ¡Ay no!
              </h2>
              <p className="text-center text-dgreen grid gap-2">
                Parece ser que aún no te has registrado, pero no te preocupes,
                ¡yo te llevo!
              </p>
              <div className="grid sm:flex gap-10 justify-center items-center py-3">
                <img
                  src={"/RANDY_06.svg"}
                  alt="randy"
                  className="w-40 sm:w-56"
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-7  text-white ">
          <SignedIn>
            <div className="flex h-28 w-28 bg-[url('/avatars/A_RANDY.svg')] rounded-full items-end justify-center">
              <UserButton afterSignOutUrl="/" id="icono" style="whith: 100px" />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/login">
              <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                <p className="text-natD font-lucky text-3xl">
                  Vincula tu cuenta con:
                </p>
                <div className="flex gap-6 mb-4">
                  <Image src="fb_icon.svg" width={40} height={40}></Image>
                  <Image src="google_icon.svg" width={40} height={40}></Image>
                  <Image src="tiktok_icon.svg" width={40} height={40}></Image>
                </div>
              </div>
            </SignInButton>
          </SignedOut>
          <div className="flex">
            <div className="border-t-2 border-gray-800 w-full max-w-xs"></div>
            <p className="w-auto text-black -translate-y-2.5 text-center px-2">
              O
            </p>
            <div className="border-t-2 border-gray-800 w-full max-w-xs"></div>
          </div>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          name="formLogIn"
          className="w-full md:w-[424px] pt-3 flex flex-col text-sm gap-2"
        >
          <div className="flex flex-col gap-2">
            <div className="grid gap-0.5">
              <label name="email" className=" b-0 px-2 py-4 text-natD font-ram">
                EMAIL
              </label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                required
                placeholder="ejemplo@mail.com"
                className="bg-lorange/50  outline-lorange/50 outline-offset-1  text-white p-2 rounded-lg shadow-md "
                {...register("email", {
                  minLength: {
                    value: 3,
                    message: "Correo debe contener a mínimo 3 caracteres"
                  },
                  maxLength: {
                    value: 50,
                    message: "Correo debe contener a máximo 50 caracteres"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Correo no válido"
                  }
                })}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-center" id="letra">
                {"⚠ "} {errors.email.message}
              </p>
            )}
            <div className="grid gap-0.5">
              <label name="password" className="px-2 py-4 text-natD font-ram">
                CONTRASEÑA
              </label>

              <input
                type="password"
                name="password"
                autoComplete="off"
                required
                placeholder="********"
                className="bg-lorange/50 outline-lorange/50 outline-offset-1 text-white p-2 rounded-lg shadow-md"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Mínimo tres caracteres"
                  },
                  maxLength: {
                    value: 50,
                    message: "Usuario debe contener a máximo 50 caracteres"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Solo puedes usar letras y números"
                  }
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-center" id="letra">
                {"⚠ "} {errors.password.message}
              </p>
            )}
          </div>

          <div id="errorPasswordEmail" className="p-1">
            {errors.root && (
              <p className=" text-red-500 text-center" id="letra">
                {"⚠ "} {errors.root.message}
              </p>
            )}
          </div>

          {showSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-oldwhite/70 bg-opacity-75">
              <p className="text-ram text-center text-3xl font-bold text-dgreen">
                ¡Bienvenido!
                <br /> Ya estas listo para la aventura.
              </p>
            </div>
          )}

          <button
            className="w-full bg-lorange rounded-[50px] px-6 py-3 mb-4 text-white text-xl"
            type="submit"
          >
            <p className=" font-ram tracking-wider">Login</p>
          </button>
        </form>

        {/*<SignedOut>
          <SignInButton />
        </SignedOut>*/}

        <button onClick={()=> router.push("/register")}>
          <div className="text-natD hover:text-lorange font-mont font-semibold">
            Aún no tengo cuenta
          </div>
        </button>
        <div className="mt-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <div className="relative">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={handleToggleChange}
              className="sr-only"
            />
            <div className="block bg-lorange/20 w-10 h-6 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1 bg-lorange w-4 h-4 rounded-full transition ${
                rememberMe ? 'transform translate-x-full bg-natL' : ''
              }`}
            ></div>
          </div>
          <span className="text-natD font-mont font-semibold">Recuérdame</span>
        </label>
      </div>

      </div>
    </div>
  );
}
