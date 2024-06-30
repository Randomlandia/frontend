import ModalAvatar from "./modalAvatar";
import { Fragment } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Avatar(props) {
  const [showModal, setShowModal] = useState(false);
  const [avatarValue, setAvatarValue] = useState();
  console.log(avatarValue);

  async function onSubmit(avatarValue) {
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
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 place-items-center">
        {/* RANDY ICON FOR USER DEFAULT ONLY*/}
        <div className=" inline-flex gap-2">
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-32 w-32"
          />
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
        modalAvatarUser
        <ModalAvatar
          className="flex align-bottom"
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <div>
            <form
              name="formRegister"
              onSubmit={onSubmit(avatarValue)}
              className="mx-auto py-12  grid gap-7 text-sm font-bold"
            >
              <div className="flex gap-8 flex-col">
                <div className="grid gap-0.5">
                  <div className="flex gap-2 font-bold justify-center">
                    <img src="/account_circle.svg" alt="" className="w-9 h-9" />
                    <input
                      type="text"
                      placeholder="Nombre del usuario"
                      className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                      {...register("userRegistro")}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => setAvatarValue(1)}
                name="boton"
                className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
                {...register("boton")}
              >
                1
              </button>
              <button
                onClick={() => setAvatarValue(2)}
                name="boton"
                className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
                {...register("boton")}
              >
                2
              </button>

              <button
                onClick={() => setAvatarValue(3)}
                name="boton"
                className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
                {...register("boton")}
              >
                3
              </button>
              <button
                onClick={() => setAvatarValue(4)}
                name="boton"
                className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
                {...register("boton")}
              >
                4
              </button>
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
        </div>
      </div>
    </Fragment>
  );
}
