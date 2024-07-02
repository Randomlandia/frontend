import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function Login() {
  const [background, setBackground] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const bgNew = localStorage.getItem("bg")
    if (bgNew) {
      setBackground(`${bgNew}`)
    } else {
      setBackground("/backgrounds/bg-booksflying.webp")
    }
  }, [])

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm()

  async function onSubmit(dataLogIn) {
    const response = await fetch("http://localhost:3005/users/login", {
      method: "Post",
      body: JSON.stringify({
        email: dataLogIn.email,
        password: dataLogIn.password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).catch((error) => {
      console.log("Error", error)
    })

    const json = await response?.json()
    if (json?.data?.token) {
      localStorage.setItem("token", json.data.token)
      localStorage.setItem("userID", json.data.userID)
      console.log(json)
      console.log("Login Exitoso")

      const userID = localStorage.getItem("userID")

      // SEGUNDO FETCH (estoy obteniendo la informacion de username, avatar, favoritas, logros y vistos)
      const userResponse = await fetch(
        `http://localhost:3005/users/${userID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }
      )

      const userJson = await userResponse.json()
      if (userJson?.data) {
        const exp = new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        const user = {
          username: userJson.data.users.name,
          avatar: userJson.data.users.avatar
        }
        console.log("Usuario obtenido con éxito", userJson.data)
        localStorage.setItem("exp", JSON.stringify(exp))
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("favs", JSON.stringify(userJson.data.users.sandiasFavoritas))
        localStorage.setItem("view", JSON.stringify(userJson.data.users.sandiasVistas))
        localStorage.setItem(
          "achieve",
          JSON.stringify(userJson.data.users.achievements)
        )
      } else {
        console.log("No se pudieron obtener los datos del usuario")
      }

      router.push("/menu")
      return
    }
    console.log("Usuario o contraseña inválidos")
    setError("root", { message: "Usuario o contraseña inválidos" })
  }

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="grid justify-items-center bg-grey/30 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 py-14 md:py-24 px-8 mx-auto rounded-[50px]">
        <div className="grid gap-7  text-white ">
          <SignInButton mode="modal" forceRedirectUrl="/randomlandia">
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
                placeholder="ejemplo@mail.com"
                className="bg-lorange/50  outline-lorange/50 outline-offset-1  text-white p-2 rounded-lg shadow-md "
                {...register("email", {
                  minLength: {
                    value: 3,
                    message: "Email o password inválido"
                  },
                  maxLength: {
                    value: 50,
                    message: "Usuario debe contener a máximo 50 caracteres"
                  }
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
                placeholder="********"
                className="bg-lorange/50 outline-lorange/50 outline-offset-1 text-white p-2 rounded-lg shadow-md"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Email o password inválido"
                  },
                  maxLength: {
                    value: 50,
                    message: "Usuario debe contener a máximo 50 caracteres"
                  }
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
            <Link href="./register" className="text-natD underline text-center">
              CREAR CUENTA
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
