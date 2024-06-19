import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogged(true);
  }, []);

  return (
    <>
      <nav className="w-full h-14 bg-lorange  flex justify-between text-white font-lucky text-xl">
        <Link href="/randomlandia">
          <div>logo</div>
        </Link>
        <div className="flex">
          <div className="hidden lg:flex gap-7 items-center px-3">
            <Link href="/about">
              <button>NOSOTROS</button>
            </Link>
            <Link href="/login">
              <button>INICIAR SESIÓN</button>
            </Link>

            <Link
              href="/register"
              className="bg-dorange h-9 px-5 rounded-[10px]"
            >
              <button>CREAR CUENTA</button>
            </Link>
            <Link href="/randomlandia">
              <button className="bg-natL h-9 px-5 rounded-[10px]">
                ¡JUGAR!
              </button>
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/login">
              <button className="text-sm leading-4 bg-dorange px-6 py-1.5 rounded-[10px]">
                INICIAR
                <br />
                SESIÓN
              </button>
            </Link>
            <img src="/menu.svg" alt="menu" className="w-14 h-16" />
          </div>
        </div>
      </nav>
    </>
  );
}
