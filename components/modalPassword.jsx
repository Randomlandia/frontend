import { useForm } from "react-hook-form";

export default function ModalPassword() {
  return (
    <div className="bg-oldwhite/60 p-5 rounded-md">
      <div className="flex-col justify-center">
        <p className="font-lucky text-dgreen text-3xl text-center text-wrap">
          ¿Olvidaste tu contraseña?
        </p>
        <p className="font-mont text-black font-semibold text-sm text-wrap text-center">
          Ingresa tu correo y cumpleaños para poder generar una nueva contraseña
        </p>
      </div>
      <div className="flex gap-8 flex-col p-4">
        <div className="grid gap-4">
          <div className="flex gap-2 font-bold justify-center">
            <img src="/mail.svg" alt="" className="w-9 h-9" />
            <input
              type="email"
              name=""
              id=""
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <img src="/icon_cumple.svg" alt="" className="w-9 h-9" />
            <input
              type="date"
              name=""
              id=""
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <img src="/lock.svg" alt="" className="w-9 h-9" />
            <input
              type="password"
              name=""
              id=""
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <img src="/password.svg" alt="" className="w-9 h-9" />
            <input
              type="text"
              name=""
              id=""
              className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
