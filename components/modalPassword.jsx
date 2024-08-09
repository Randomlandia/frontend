import React, { useState } from "react";
import { useRouter } from "next/router";

export default function ModalPassword({ setRecovery }) {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const closeModal = () => {
    setRecovery(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      // First fetch to validate email and birthdate
      const response1 = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/decodedate`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, fechaNacimiento })
        }
      );

      const data1 = await response1.json();

      if (!response1.ok) {
        throw new Error(data1.message || "Error al validar los datos");
      }

      const userId = data1.data.user;

      // Second fetch to update the password
      const response2 = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ password: newPassword })
        }
      );

      const data2 = await response2.json();

      if (!response2.ok) {
        throw new Error(data2.message || "Error al actualizar la contraseña");
      }
      // Third fetch to log in with the new password
      const loginResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({
            email: email,
            password: newPassword
          })
        }
      );

      const loginData = await loginResponse.json();

      if (loginResponse.ok && loginData.data?.token) {
        localStorage.setItem("token", loginData.data.token);
        localStorage.setItem("userID", loginData.data.userID);

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
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-oldwhite/70 bg-opacity-75">
          <p className="text-ram text-center text-3xl font-bold text-dgreen">
            ¡Bienvenido!
            <br /> Ya estas listo para la aventura.
          </p>
        </div>
      )}
      <div className="flex flex-col bg-oldwhite/60 p-5 rounded-md">
        <div className="flex flex-col p-4">
          <div className="flex-col justify-center">
            <p className="font-lucky text-dgreen text-3xl text-center text-wrap">
              ¿Olvidaste tu contraseña?
            </p>
            <p className="font-mont text-black text-center">
              Ingresa los siguientes datos
            </p>
          </div>

          <form
            name="formRegister"
            className="mx-auto py-12  grid gap-7 text-sm font-bold"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4">
              {/* CORREO */}
              <div className="flex gap-2 font-bold justify-center">
                <img src="/mail.svg" alt="" className="w-9 h-9" />
                <input
                  type="email"
                  name="correoRegistro"
                  placeholder="Ingresa tu correo"
                  className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* FECHA DE NACIMIENTO */}
              <div className="flex gap-2 font-bold justify-center">
                <img src="/icon_cumple.svg" alt="" className="w-9 h-9" />
                <input
                  type="date"
                  name="fechaNacimiento"
                  className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                />
              </div>

              {/* NEW PASSWORD */}
              <div className="flex gap-2 font-bold justify-center">
                <img src="/lock.svg" alt="" className="w-9 h-9" />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Nueva contraseña"
                  className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              {/* NEW PASSWORD CONFIRM */}
              <div className="flex gap-2 font-bold justify-center">
                <img src="/password.svg" alt="" className="w-9 h-9" />
                <input
                  type="password"
                  name="confirm-newPassword"
                  placeholder="Repite tu contraseña"
                  className="w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
              </div>
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
          </form>
        </div>
      </div>
    </>
  );
}
