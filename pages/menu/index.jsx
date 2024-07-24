import Navbar from "@/components/Navbar";
import TemaContainer from "@/components/TemaContainerSlider";
import MenuTemasSlider from "@/components/MenuTemasSlider";
import MenuTemasCircle from "@/components/MenuTemasCircle";
import RandyTextRight from "@/components/RandyTextRight";
import RandyTextLeft from "@/components/RandyTextLeft";
import BackgroundModal from "@/components/BackgroundModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import { getCookieValueByName } from "@/components/utils/getCookieValueByName";

export default function Menu() {
  const [background, setBackground] = useState(null);
  const { isLoaded, user } = useUser([]);
  const router = useRouter();

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  useEffect(() => {
    updateBackground();
  }, []);
  //clerck
  useEffect(() => {
    if (isLoaded && user) {
      const saveClerkUserDataOnLocalHost = async () => {
        const response = await fetch("http://localhost:3005/users/email", {
          method: "POST",
          body: JSON.stringify({
            email: user.emailAddresses[0].emailAddress,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).catch((error) => {
          console.log("Error: ", error);
        });

        const data = await response?.json();
        if (data) {
          const cookieName = "__clerk_db_jwt";
          const cookieValue = getCookieValueByName(cookieName);
          const idUser = JSON.stringify(data?.data?._id);

          if (cookieValue && data) {
            localStorage.setItem("token", cookieValue);
            localStorage.setItem("userID", idUser.replaceAll('"', ""));
            localStorage.setItem("username", JSON.stringify(data.data.name));
            localStorage.setItem("avatar", JSON.stringify(data.data.avatar));
            localStorage.setItem(
              "favs",
              JSON.stringify(data.data.sandiasFavoritas)
            );
            localStorage.setItem(
              "view",
              JSON.stringify(data.data.sandiasVistas)
            );
            localStorage.setItem(
              "achieve",
              JSON.stringify(data.data.achievements)
            );
            localStorage.setItem("score", JSON.stringify(data.data.score));
          }
        }
      };

      saveClerkUserDataOnLocalHost();
    }
  }, [isLoaded, user, router]);
  return (
    <div className="w-full max-h-screen max-w-screen flex flex-col bg-white pb-8 overflow-hidden">
      <Navbar />
      <div className="flex justify-end">
        <BackgroundModal onClose={updateBackground} />
      </div>
      <div
        className="relative h-screen max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat lg:mx-6 lg:rounded-2xl"
        style={{
          backgroundImage: `url('${
            background
              ? `/backgrounds/${background}`
              : "/backgrounds/bg-booksflying.webp"
          }')`,
        }}
      >
        <div
          name="menu"
          className="w-full h-full z-10 flex justify-center py-5 lg:py-3 px-2"
        >
          <div className="sm:hidden relative lg:w-1/2 sm:h-full bg-oldwhite/70 shadow-xl p-5 rounded-xl lg:mx-7">
            {/* Esta parte muestra el carusel si la pantalla es mobile */}
            <div className="flex flex-col justify-items-center">
              <TemaContainer bool={true} name="default" />
              <MenuTemasSlider />
              <div className="mt-6">
                <RandyTextRight
                  img={"/RANDY_08.svg"}
                  text="¡Vamo, vamo, elige uno!"
                />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col w-4/5 lg:w-1/2 h-full bg-oldwhite/70 shadow-xl p-5 rounded-xl lg:mx-7 gap-5">
            {/* Esta parte se muestra para cualquier otro tamaño mayor a mobile */}
            <div className="lg:w-4/5 mx-auto">
              <MenuTemasCircle />
            </div>
            <div className="mt-6">
              <p> </p>
              <RandyTextLeft
                img={"/RANDY_08.svg"}
                text="¡Vamo, vamo, elige uno!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
