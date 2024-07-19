import { useForm } from "react-hook-form";

export default function ModalPassword() {
  return (
    <div className="bg-oldwhite/60 p-5 rounded-md">
      <div>
        <p className="font-lucky text-dgreen text-3xl">
          ¿Olvidaste tu contraseña?
        </p>
      </div>
      <div className="flex gap-8 flex-col">
        <div className="grid gap-0.5">
          <div className="flex gap-2 font-bold justify-center">
            <input type="text" name="" id="" />
          </div>
          <div className="flex gap-2 font-bold justify-center">
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
}
