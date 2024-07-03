import ModalAvatar from "./modalAvatar";
import { Fragment } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Avatar(props) {
  const [showModal, setShowModal] = useState(false);
  const [avatarValue, setAvatarValue] = useState();
  console.log(props.avatar);

  async function onSubmit(avatarValue) {
    if (!avatarValue) {
      return (
        <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
      );
    }

    fetch(`http://localhost:3005/users/${props.id}`, {
      method: "Put",
      body: JSON.stringify({
        avatar: avatarValue,
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

    return;
  }

  const {
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
          {props.avatar == 0 && (
            <img
              src="/randy_icon.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}
          {props.avatar == 1 && (
            <img
              src="/B_NERD.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}
          {props.avatar == 2 && (
            <img
              src="/B_DEPORTE.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}
          {props.avatar == 3 && (
            <img
              src="/B_ARTE.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}
          {props.avatar == 4 && (
            <img
              src="/B_CIENCIA.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}
          {props.avatar == 5 && (
            <img
              src="/B_IDIOMAS.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}
          {props.avatar == 6 && (
            <img
              src="/B_MATE.svg"
              alt="randy default icon"
              className="h-32 w-32 "
            />
          )}

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

        <ModalAvatar
          className="flex align-bottom"
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <div>
            <form
              name="formRegister"
              onSubmit={onSubmit(avatarValue)}
              className="mx-auto py-12 bg-grey/50 rounded-3xl grid gap-7 text-sm font-bold"
            >
              <div className="inline-flex justify-center relative">
                {/* BOTÓN CERRAR */}

                <div className="absolute  top-0 right-0 ">
                  <button
                    onClick={() => onClose()}
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
                    {" "}
                    <img
                      src="/randy_icon.svg"
                      alt="randy default icon"
                      className="h-28 w-28"
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(2)}
                  name="boton2"
                  {...register("boton2")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    {" "}
                    <img
                      src="/B_DEPORTE.svg"
                      alt="randy default icon"
                      className="h-28 w-28"
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(3)}
                  name="boton3"
                  {...register("boton3")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    {" "}
                    <img
                      src="/B_ARTE.svg"
                      alt="randy default icon"
                      className="h-28 w-28"
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(4)}
                  name="boton4"
                  {...register("boton4")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    {" "}
                    <img
                      src="/B_CIENCIA.svg"
                      alt="randy default icon"
                      className="h-28 w-28"
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(5)}
                  name="boton5"
                  {...register("boton5")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    {" "}
                    <img
                      src="/B_IDIOMAS.svg"
                      alt="randy default icon"
                      className="h-28 w-28"
                    />
                  </div>
                </button>

                <button
                  onClick={() => setAvatarValue(6)}
                  name="boton6"
                  {...register("boton6")}
                >
                  <div className="rounded-full border-4 border-transparent hover:border-dorange">
                    {" "}
                    <img
                      src="/B_MATE.svg"
                      alt="randy default icon"
                      className="h-28 w-28"
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
          </div>
          <br />
        </ModalAvatar>
        {/* USER NAME +  SETTING ICON */}
        <div className="inline-flex gap-2">
          <div className="bg-lorange p-2 rounded-lg w-fit">
            <span className="font-lucky text-black "> {props.userName}</span>
          </div>
          <div className="content-center">
            <img
              src="/icon_purplesetting.svg"
              alt="setting"
              className="h-6 w-6"
            />
          </div>
          <ModalAvatar
            className="flex align-bottom"
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          ></ModalAvatar>
        </div>
      </div>
    </Fragment>
  );
}
