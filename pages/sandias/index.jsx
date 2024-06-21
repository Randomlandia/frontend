import Navbar from "@/components/Navbar"
import TemaContainer from "@/components/TemaContainer"
import MenuTemasSlider from "@/components/MenuTemasSlider"
import MenuTemasCircle from "@/components/MenuTemasCircle"
import RandyTextRight from "@/components/RandyTextRight"
import RandyTextLeft from "@/components/RandyTextLeft"
import { useState, useEffect } from "react"

export default function MenuSandias() {
  const [background, setBackground] = useState("bg-booksflying.webp")

  useEffect(() => {
    const bgNew = localStorage.getItem("bg")
    if (bgNew) {
      setBackground(bgNew)
    }
  }, [])

  return (
    <div className="w-full max-h-screen flex flex-col bg-white pb-8 ">
      <Navbar />
      <button className="h-10 px-6 flex justify-end items-center">
        <img src="/icon_edit.svg" alt="edit" className="h-8 w-8" />
      </button>
      <div
        className="h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat lg:mx-6 lg:rounded-2xl"
        style={{ backgroundImage: `url('/backgrounds/${background}')` }}
      >
        <div name="menu" className="absolute top-20 left-0 w-full z-20 flex justify-center h-5/6">
          <div className="lg:w-1/2 bg-oldwhite/70 shadow-lg pt-10 px-7 md:py-10 lg:py-3 rounded-xl my-5 md:my-12 mx-7">
            {/* Esta parte muestra el carusel si la pantalla es mobile */}
            <div className="flex flex-col md:hidden justify-items-center">
              <TemaContainer bool={true} name="default" />
              <MenuTemasSlider />
            </div>
            {/* Esta parte se muestra para cualquier otro tamaño mayor a mobile */}
            <div className="hidden md:flex justify-items-center">
              <MenuTemasCircle />
            </div>
          </div>
        </div>
        <div name="randy" className="absolute bottom-20 sm:bottom:10 sm:right-10 h-1/6 md:h-1/4">
          <div className="block md:hidden">
            <RandyTextRight
              img={"/RANDY_08.svg"}
              text="¡Vamo, vamo, elige uno!"
            />
          </div>
          <div className="hidden md:flex justify-end">
            <RandyTextLeft
              img={"/RANDY_08.svg"}
              text="¡Vamo, vamo, elige uno!"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
