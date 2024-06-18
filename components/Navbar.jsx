import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogged(true);
  }, []);

  return (
    <>
      <nav className="w-full h-14 bg-lorange  flex justify-between text-white font-lucky text-xl">
        <div>logo</div>
        <div className="flex">
          <div className="hidden lg:flex gap-7 items-center px-3">
            <button>NOSOTROS</button>
            <button>INICIAR SESIÓN</button>
            <button className="bg-dorange h-9 px-5 rounded-[10px]">
              CREAR CUENTA
            </button>
            <button className="bg-natL h-9 px-5 rounded-[10px]">¡JUGAR!</button>
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <button className="text-sm leading-4 bg-dorange px-6 py-1.5 rounded-[10px]">
              INICIAR
              <br />
              SESIÓN
            </button>
            <img src="/menu.svg" alt="menu" className="w-14 h-16" />
          </div>
        </div>
      </nav>
    </>
  );
}
