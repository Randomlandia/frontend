import React from "react";
import { useLayoutEffect, useState, Fragment, useEffect } from "react";
import { getCookieValueByName } from "@/components/utils/getCookieValueByName";
import { useUser } from "@clerk/nextjs";
import { handleUpdateUser } from "@/utils/updateUser";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { signOut } = useClerk();
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("Explorador");
  const [userId, setUserId] = useState("Explorador");
  const [userAvatar, setUserAvatar] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [userIdHamburguesa, setUserIdHamburguesa] = useState("");
  const { isLoaded, user } = useUser([]);
  const [cookie, setCookie] = useState(false);

  //clerck
  useEffect(() => {
    if (isLoaded && user) {
      setCookie(true);
    }
  }, []);
  //post
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    const idUser = localStorage.getItem("userID");
    const user = localStorage.getItem("username");
    const avatarValue = localStorage.getItem("avatar");

    if (token || user) {
      setIsLogged(true);
      setUserName(user || "Explorador");
      setUserId(idUser || "Explorador");
      setUserIdHamburguesa(idUser);
      setUserAvatar(avatarValue || 0);
      setCookie(false);
    }
  }, [cookie]);

  const avatarSrc = () => {
    const avatars = [
      "/avatars/A_RANDY.svg",
      "/avatars/A_RANDY_DED.svg",
      "/avatars/A_RANDY_OH.svg",
      "/avatars/A_RANDY_SAD.svg",
      "/avatars/A_RANDY_SMILE.svg",
      "/avatars/A_RANDY-WINK.svg",
      "/avatars/A_RANDY_ANGRY.svg",
    ];
    return avatars[userAvatar] || avatars[0];
  };

  const handleLogout = async () => {
    const keysToRemove = [
      "token",
      "username",
      "tested",
      "avatar",
      "score",
      "view",
      "favs",
      "achieve",
      "exp",
      "userID",
    ];
    try {
      const updateSuccess = await handleUpdateUser(isLogged);
      if (updateSuccess) {
        keysToRemove.forEach((key) => localStorage.removeItem(key));
        await signOut();
        setIsLogged(false);
        router.push("/");
      } else {
        console.log("Failed to update user, logout aborted.");
      }
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <>
      <nav className="w-full h-14 z-[4000] bg-lorange flex justify-between items-center text-white font-lucky text-xl py-3">
        {/* LOGO DE RANDOMLANDIA */}
        <button
          onClick={() => {
            router.push("/");
          }}
          className="py-3 px-3"
        >
          <img src="/logoLarge.svg" alt="Random" className="h-6 sm:h-10" />
        </button>
        <div className="flex">
          {/* SECCION DESKTOP */}
          <div className="hidden lg:flex gap-3 items-center px-3">
            <div className="flex">
              <button onClick={() => router.push("/randomlandia")}>
                <p className="px-5 py-1 rounded-[10px] flex items-center hover:bg-dorange transform hover:scale-110">
                  RANDOMLANDIA
                </p>
              </button>
              <button onClick={() => router.push("/about")}>
                <p className="px-5 py-1 rounded-[10px] flex items-center hover:bg-dorange transform hover:scale-110">
                  NOSOTROS
                </p>
              </button>
            </div>
            {isLogged ? (
              <button
                className="flex items-center transform hover:scale-110"
                onClick={() => {
                  router.push(`/user/${userId}`);
                }}
              >
                {/*botonAvatarImagen */}
                <div className="py-1 px-1">
                  <img src={avatarSrc()} alt="😄" className="h-10 w-10" />
                </div>
                <div className="bg-dorange h-9 px-5 rounded-[10px] flex items-center">
                  <p>{userName}</p>
                </div>
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  <p className="px-5 py-1 rounded-[10px] flex items-center hover:bg-dorange transform hover:scale-110">
                    INICIAR SESIÓN
                  </p>
                </button>
                <button
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  <p className="bg-dorange h-9 px-5 rounded-[10px] flex items-center transform hover:scale-110">
                    CREAR CUENTA
                  </p>
                </button>
              </>
            )}
            <button
              onClick={() => {
                router.push("/menu");
              }}
            >
              <p className="bg-natL h-9 px-5 rounded-[10px] flex items-center transform hover:scale-110">
                ¡JUGAR!
              </p>
            </button>
          </div>
          <div className="relative group hidden lg:inline-block">
            {isLogged && (
              <>
                <button
                  onClick={() => handleLogout()}
                  className="flex items-center pr-2 pt-1"
                >
                  <img src="/icon_close.svg" alt="🚪" className="w-12" />
                </button>
                <div className="absolute right-1 hidden group-hover:block bg-oldwhite border border-gray-200 p-2 rounded-lg shadow-lg mt-3 w-32">
                  <p className="text-sm text-center text-natD">¿Ya te vas?</p>
                </div>
              </>
            )}
          </div>
          {/* SECCION MOBILE Y TABLET */}
          <div className="flex lg:hidden items-center gap-2 transform hover:scale-110">
            {isLogged ? (
              <button
                className="flex items-center"
                onClick={() => {
                  router.push(`/user/${userId}`);
                }}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
              >
                {/*botonAvatarImagen */}
                <div className="py-1 px-1">
                  <img src={avatarSrc()} alt="😄" className="h-10 w-10" />
                </div>
                {hovered && (
                  <div className="bg-dorange h-9 px-5 rounded-[10px] flex items-center">
                    <p>{userName}</p>
                  </div>
                )}
              </button>
            ) : (
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="flex"
              >
                <p className="text-sm leading-4 bg-dorange px-6 py-1.5 rounded-[10px]">
                  INICIAR
                  <br />
                  SESIÓN
                </p>
              </button>
            )}

            {/* SECCION MENU SANDIA */}
            <Menu
              as="div"
              className="relative inline-block text-left z-10 mr-2 mt-2"
            >
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 shadow-sm">
                  <img src="/menu.svg" alt="menu" className="w-14 h-16" />
                </MenuButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 w-44 origin-top-right rounded-md bg-agreen/80 shadow-lg ring-1 ring-natD ring-opacity-50 focus:outline-none">
                  <div className="py-1 flex flex-col">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            router.push(`/user/${userIdHamburguesa}` || "/user")
                          }
                          onTouchStart={() => setSelectedMenu("user")}
                          onTouchEnd={() => setSelectedMenu(null)}
                          className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                            selectedMenu === "user" ? "bg-natD" : ""
                          }`}
                        >
                          <div className="">
                            <img
                              src={avatarSrc()}
                              alt="😄"
                              className="h-6 w-6"
                            />
                          </div>
                          <p>{userName}</p>
                        </button>
                      )}
                    </MenuItem>
                    <hr className="w-full border border-zinc-200 my-1" />
                    {!isLogged && (
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={() => router.push("/register")}
                            onTouchStart={() => setSelectedMenu("register")}
                            onTouchEnd={() => setSelectedMenu(null)}
                            className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                              selectedMenu === "register" ? "bg-natD" : ""
                            }`}
                          >
                            Crear cuenta
                          </button>
                        )}
                      </MenuItem>
                    )}
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => router.push("/about")}
                          onTouchStart={() => setSelectedMenu("about")}
                          onTouchEnd={() => setSelectedMenu(null)}
                          className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                            selectedMenu === "about" ? "bg-natD" : ""
                          }`}
                        >
                          ¿Quiénes somos?
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => router.push("/randomlandia")}
                          onTouchStart={() => setSelectedMenu("randomlandia")}
                          onTouchEnd={() => setSelectedMenu(null)}
                          className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                            selectedMenu === "randomlandia" ? "bg-natD" : ""
                          }`}
                        >
                          Randomlandia
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => router.push("/")}
                          onTouchStart={() => setSelectedMenu("home")}
                          onTouchEnd={() => setSelectedMenu(null)}
                          className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                            selectedMenu === "home" ? "bg-natD" : ""
                          }`}
                        >
                          ¡JUGAR!
                        </button>
                      )}
                    </MenuItem>
                    <hr className="w-full border border-zinc-200 my-1" />
                    {isLogged ? (
                      <MenuItem>
                        {({ active }) => (
                          <button
                            type="submit"
                            onClick={handleLogout}
                            onTouchStart={() => setSelectedMenu("logout")}
                            onTouchEnd={() => setSelectedMenu(null)}
                            className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                              selectedMenu === "logout" ? "bg-natD" : ""
                            }`}
                          >
                            Cerrar Sesión
                          </button>
                        )}
                      </MenuItem>
                    ) : (
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={() => router.push("/login")}
                            onTouchStart={() => setSelectedMenu("login")}
                            onTouchEnd={() => setSelectedMenu(null)}
                            className={`flex w-full rounded-md pl-4 py-1 text-sm font-ram font-normal gap-2 items-center hover:bg-natD ${
                              selectedMenu === "login" ? "bg-natD" : ""
                            }`}
                          >
                            Iniciar Sesión
                          </button>
                        )}
                      </MenuItem>
                    )}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
}
