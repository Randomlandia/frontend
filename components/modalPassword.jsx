import { useForm } from "react-hook-form";

export default function ModalPassword() {
  return (
    <div className="flex flex-col bg-oldwhite/60 p-5 rounded-md">
      {/* TITLE + SUBTITLE  */}
      <div className="flex-col justify-center">
        <p className="font-lucky text-dgreen text-3xl text-center text-wrap">
          ¿Olvidaste tu contraseña?
        </p>
        <p className="font-mont text-black text-center">
          Ingresa los siguientes datos
        </p>
      </div>

      {/* FORMULARIO */}
      <div className="flex gap-8 flex-col p-4">
        <div className="grid gap-4">
          <div className="flex gap-2 font-bold justify-center">
            <img src="/mail.svg" alt="" className="w-9 h-9" />
            <input
              type="email"
              name="correoRegistro"
              placeholder="Ingresa tu correo"
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <img src="/icon_cumple.svg" alt="" className="w-9 h-9" />
            <input
              type="date"
              name="fechaNacimiento"
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <img src="/lock.svg" alt="" className="w-9 h-9" />
            <input
              type="password"
              name="newPassword"
              placeholder="Nueva contraseña"
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <img src="/password.svg" alt="" className="w-9 h-9" />
            <input
              type="text"
              name="confirm-newPassword"
              placeholder="Repite tu contraseña"
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>

          {/* BTN SUBMIT  */}
          <div className="grid justify-center gap-3">
            <button
              type="submit"
              className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full"
            >
              enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
