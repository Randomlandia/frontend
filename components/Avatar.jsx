import React from "react";
import ModalAvatar from "./modalAvatar";
import ModalAvatarNombre from "./modalNombre";
import SeleccionaAvatar from "./SeleccionaAvatar";
import { Fragment } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Avatar(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalName, setShowModalName] = useState(false);
  const [avatarValue, setAvatarValue] = useState();
  const [nombreNuevo, setNombreNuevo] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const router = useRouter();

  async function onSubmit(e) {
    if (!e) {
      return (
        <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
      );
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${props.id}`, {
      method: "Put",
      body: JSON.stringify({
        avatar: avatarValue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response?.json())
      .then((json) => console.log("Avatar actualizado"))
      .catch((error) => {
        console.log("Error", error);
      });
    localStorage.setItem("avatar", avatarValue);
    setShowAvatar(true);
    setTimeout(() => {
      setShowAvatar(false);
      router.push("/menu");
    }, 2000);
    return;
  }

  async function onSubmitName(nameUser) {
    if (!nameUser) {
      return (
        <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
      );
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${props.id}`, {
      method: "Put",
      body: JSON.stringify({
        name: nameUser.name,
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

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      router.push("/menu");
    }, 2000);
    setShowModalName(false);
    setNombreNuevo(nameUser.name);
    localStorage.setItem("username", nameUser.name);

    return;
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  if (!props) {
    return (
      <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full "></main>
    );
  }
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 place-items-center">
        {/* RANDY ICON FOR USER DEFAULT ONLY*/}

        <div className=" inline-flex gap-2">
          <SeleccionaAvatar avatar={props.avatar}></SeleccionaAvatar>
          <button onClick={() => setShowModal(true)}>
            <div className="content-center">
              <img
                src="/icon_redsetting.svg"
                alt="setting"
                className="h-6 w-6"
              />
            </div>
          </button>
        </div>
        {/* USER AVATAR */}

        <ModalAvatar className="flex align-bottom" isVisible={showModal}>
          <div>
            <form
              name="formRegister"
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto py-12 bg-grey/50 rounded-3xl grid gap-7 text-sm font-bold"
            >
              <div className="inline-flex justify-center relative">
                {/* BOTÓN CERRAR */}

                <div className="absolute  top-0 right-0 ">
                  <button
                    onClick={() => setShowModal(false)}
                    type=""
                    className="rounded-full w-fit border-2 border-transparent
              hover:border-red-500 p-2"
                  >
                    <img src="/close.svg" alt="close" className="h-4 w-4" />
                  </button>
                </div>
                {/* TITULO DEL MODAL */}
                <div className="flex p-4 ">
                  <p className="font-lucky text-dgreen text-center text-3xl">
                    ¡Elige tu estilo!
                  </p>
                </div>
              </div>

              {/* GALERÍA AVATARES */}
              <div className="grid grid-cols-3 gap-3 py-4 px-10 justify-items-center">
                <button
                  onClick={() => setAvatarValue(1)}
                  name="boton1"
                  {...register("boton1")}
                >
                  <div className="rounded-full border-4 border-transparent  hover:border-dorange">
                    <img
                      src="/avatars/A_RANDY_DED.svg"
                      alt="RANDY_DED"
                      className="h-32 w-32 "
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(2)}
                  name="boton2"
                  {...register("boton2")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    <img
                      src="/avatars/A_RANDY_OH.svg"
                      alt="RANDY_OH"
                      className="h-32 w-32 "
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(3)}
                  name="boton3"
                  {...register("boton3")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    <img
                      src="/avatars/A_RANDY_SAD.svg"
                      alt="RANDY_SAD."
                      className="h-32 w-32 "
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(4)}
                  name="boton4"
                  {...register("boton4")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    <img
                      src="/avatars/A_RANDY_SMILE.svg"
                      alt="RANDY_SMILE"
                      className="h-32 w-32 "
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(5)}
                  name="boton5"
                  {...register("boton5")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    <img
                      src="/avatars/A_RANDY-WINK.svg"
                      alt="RANDY-WINK"
                      className="h-32 w-32 "
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(6)}
                  name="boton6"
                  {...register("boton6")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    <img
                      src="/avatars/A_RANDY_ANGRY.svg"
                      alt="RANDY_ANGRY"
                      className="h-32 w-32 "
                    />
                  </div>
                </button>
              </div>

              {/* BOTÓN GUARDAR 
              <div className="flex justify-center p-2">
                <button className="p-2 w-fit rounded-lg border-2 bg-pcyan hover:border-blue-600  ">
                  <p className="font-lucky text-white text-center">GUARDAR</p>
                </button>
              </div>
*/}
            </form>
            {showAvatar && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-oldwhite/90 ">
                <p className="text-ram text-center text-3xl font-bold text-dgreen">
                  Me encanta tu nuevo estilo:
                  <br />
                  <SeleccionaAvatar avatar={avatarValue}></SeleccionaAvatar>
                </p>
              </div>
            )}
          </div>
          <br />
        </ModalAvatar>
        {/* USER NAME +  SETTING ICON */}
        <div className="inline-flex gap-2">
          <div className="bg-lorange p-2 rounded-lg w-fit">
            <span className="font-lucky text-black "> {props.userName}</span>
          </div>
          <div className="content-center">
            <button onClick={() => setShowModalName(true)}>
              <img
                src="/icon_purplesetting.svg"
                alt="setting"
                className="h-6 w-6"
              />
            </button>
          </div>
          <ModalAvatarNombre
            className="flex align-bottom"
            isVisibleName={showModalName}
          >
            <form
              className="mx-auto py-12 bg-grey/80 rounded-3xl grid gap- text-sm font-bold"
              autocomplete="off"
              onSubmit={handleSubmit(onSubmitName)}
              name="formName"
            >
              <div className="inline-flex justify-center relative">
                {/* BOTÓN CERRAR */}
                <div className="absolute top-0 right-0 ">
                  <button
                    type=""
                    className="rounded-full w-fit border-2   border-transparent
              hover:border-red-500 p-2"
                    onClick={() => setShowModalName(false)}
                  >
                    <img src="/close.svg" alt="close" className="h-4 w-4" />
                  </button>
                </div>

                {/* TITULO DEL MODAL */}
                <div className="flex p-4 ">
                  <p className="font-lucky text-dgreen text-center mt-6  text-3xl">
                    ¡Escribe tu nombre!
                  </p>
                </div>
              </div>

              {/* INPUT PARA NOMBRE USER */}
              <div className=" flex flex-col rounded-xl border-4 border-lorange p-2">
                <input
                  type="name"
                  className="text-black font-mont font-black placeholder:text-dorange placeholder:font-mont bg-transparent text-center text-xl focus:outline-none focus:ring-2 focus:ring-lorange"
                  placeholder="Randy es genial"
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Nombre muy pequeño",
                    },
                    maxLength: {
                      value: 20,
                      message: "Nombre muy grande",
                    },
                  })}
                />
              </div>
              {/*div error*/}
              <div id="errorName" className="p-1">
                {errors.name && (
                  <p
                    className="bg-lorange/50 text-white p-2 rounded-lg flex justify-center items-center"
                    id="letra"
                  >
                    {"⚠ "} {errors.name.message}
                  </p>
                )}
              </div>

              {/* BOTÓN GUARDAR */}
              <div className="flex justify-center p-2">
                <button
                  className="p-2 w-fit rounded-lg border-2 bg-pcyan hover:border-blue-600  "
                  type="submit"
                >
                  <p className="font-lucky text-white text-center">GUARDAR</p>
                </button>
              </div>
            </form>
          </ModalAvatarNombre>
          {showSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-oldwhite/70 bg-opacity-75">
              <p className="text-ram text-center text-3xl font-bold text-dgreen">
                Me encanta tu nuevo nombre:
                <br />
                <p className="text-[50px] font-extrabold">{nombreNuevo}</p>
              </p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
