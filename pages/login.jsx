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
  const [background, setBackground] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { isLoaded, user } = useUser([]);
  const router = useRouter();

  useEffect(() => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(`/backgrounds/${bgNew}`);
    } else {
      setBackground("/backgrounds/bg-booksflying.webp");
    }
  }, []);

  // Clerk: guardar datos del usuario en localStorage
  useEffect(() => {
    if (isLoaded && user) {
      const saveClerkUserDataOnLocalHost = async () => {
        const response = await fetch("http://localhost:3005/users/email", {
          method: "POST",
          body: JSON.stringify({
            email: user.emailAddresses[0].emailAddress,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).catch((error) => {
          console.log("Error: ", error);
        });

        const data = await response?.json();
        if (data) {
          const cookieName = "__clerk_db_jwt";
          const cookieValue = getCookieValueByName(cookieName);
          const idUser = JSON.stringify(data?.data?._id);

          if (cookieValue && data) {
            localStorage.setItem("token", cookieValue);
            localStorage.setItem("userID", idUser.replaceAll('"', ""));
            localStorage.setItem("username", JSON.stringify(data.data.name));
            localStorage.setItem("avatar", JSON.stringify(data.data.avatar));
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
        }
      };

      saveClerkUserDataOnLocalHost();
    }
  }, []);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(dataLogIn) {
    const response = await fetch("http://localhost:3005/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: dataLogIn.email,
        password: dataLogIn.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => {
      console.log("Error", error);
    });

    const json = await response?.json();

    if (json?.data?.token) {
      localStorage.setItem("token", json.data.token);
      localStorage.setItem("userID", json.data.userID);
      console.log("Login Exitoso");

      const userID = localStorage.getItem("userID");

      const userResponse = await fetch(
        `http://localhost:3005/users/${userID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      const userJson = await userResponse.json();
      if (userJson?.data) {
        const exp = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        const user = {
          username: userJson.data.users.name,
          avatar: userJson.data.users.avatar,
        };
        console.log("Usuario obtenido con éxito", userJson?.data);
        localStorage.setItem("exp", JSON.stringify(exp));
        localStorage.setItem(
          "username",
          JSON.stringify(userJson.data.users.name)
        );
        localStorage.setItem(
          "avatar",
          JSON.stringify(userJson.data.users.avatar)
        );
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
            router.push("/menu");
          }, 2000);
        }, 2000);
      } else {
        console.log("No se pudieron obtener los datos del usuario");
        setError("root", { message: "Usuario o contraseña inválidos" });
      }
    } else {
      console.log("Usuario o contraseña inválidos");
    }

    /*const data = await res.json();

    if (res.status === 200) {
      console.log("Autenticación exitosa:", data.message);
    } else {
      console.error("Error en la autenticación:", data.message);
    }
  }*/
  }

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="grid justify-items-center bg-grey/50 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 py-14 md:py-24 px-8 mx-auto rounded-[50px]">
        <div className="grid gap-7  text-white ">
          <SignInButton mode="modal" forceRedirectUrl="/menu">
            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
              <p className="text-natD font-lucky text-3xl">
                inicia sesión con:
              </p>
              <div className="flex gap-6 mb-4">
                <Image src="fb_icon.svg" width={40} height={40}></Image>
                <Image src="google_icon.svg" width={40} height={40}></Image>
                <Image src="tiktok_icon.svg" width={40} height={40}></Image>
              </div>
            </div>
          </SignInButton>
          <div className="flex">
            <div className="border-t-2 border-gray-800 w-full max-w-xs"></div>
            <p className="w-auto text-black -translate-y-2.5 text-center px-2">
              O
            </p>
            <div className="border-t-2 border-gray-800 w-full max-w-xs"></div>
          </div>
        </div>
        <form
          autocomplete="off"
          onSubmit={handleSubmit(onSubmit)}
          name="formLogIn"
          className="w-full md:w-[424px] pt-3 flex flex-col text-sm "
        >
          <div className="flex flex-col gap-2">
            <div className="grid gap-0.5">
              <label name="email" className=" b-0 px-2 py-4 text-natD font-ram">
                EMAIL
              </label>
              <input
                autocomplete="off"
                type="email"
                name="email"
                required
                placeholder="ejemplo@mail.com"
                className="bg-lorange/50  outline-lorange/50 outline-offset-1  text-white p-2 rounded-lg shadow-md "
                {...register("email", {
                  minLength: {
                    value: 3,
                    message: "Email o password inválido",
                  },
                  maxLength: {
                    value: 50,
                    message: "Usuario debe contener a máximo 50 caracteres",
                  },
                })}
              />
            </div>
            <div className="grid gap-0.5">
              <label name="password" className="px-2 py-4 text-natD font-ram">
                CONTRASEÑA
              </label>

              <input
                type="password"
                name="password"
                autocomplete="off"
                required
                placeholder="********"
                className="bg-lorange/50 outline-lorange/50 outline-offset-1 text-white p-2 rounded-lg shadow-md"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Email o password inválido",
                  },
                  maxLength: {
                    value: 50,
                    message: "Usuario debe contener a máximo 50 caracteres",
                  },
                })}
              />
            </div>
          </div>

          <div id="errorPasswordEmail" className="p-1">
            {(errors.password || errors.email) && (
              <p
                className="bg-lorange/50 text-white p-2 rounded-lg flex justify-center items-center"
                id="letra"
              >
                {"⚠ "} {errors.password.message}
              </p>
            )}
          </div>

          <br />
          {errors.root && (
            <p
              className=" my-5 bg-lorange/50 text-white p-2 rounded-lg flex justify-center items-center"
              id="letra"
            >
              {"⚠ "} {errors.root.message}
            </p>
          )}

          <div className="grid justify-center gap-3">
            <button
              type="submit"
              className="bg-[#0288D1] p-1.5 w-56 m-auto font-lucky text-white text-xl shadow-md tracking-wider rounded-full mt-5"
            >
              INICIAR SESIÓN
            </button>
            <div className="flex flex-row gap-5 justify-center">
              <Link
                href="./register"
                className="text-natD underline text-center"
              >
                CREAR CUENTA
              </Link>
              <Link href="/" className="text-natD underline text-center">
                ¿OLVIDASTE TU CONTRASEÑA?
              </Link>
            </div>
          </div>
        </form>
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
