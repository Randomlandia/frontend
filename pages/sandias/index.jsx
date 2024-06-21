import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import TemaContainer from "@/components/TemaContainer"
import MenuTemasSlider from "@/components/MenuTemasSlider"
import MenuTemasCircle from "@/components/MenuTemasCircle"
import { useEffect } from "react"

export default function MenuSandias() {
  return (
    <div className="relative h-screen overflow-hidden font-mont">
      <Navbar />
      <Background />
      <div className="absolute top-20 left-0 w-full z-20">
        <div className="bg-oldwhite/70 shadow-lg p-5 rounded-xl m-5">
        {/* Esta parte muestra el carusel si la pantalla es mobile */}
          <div className="flex flex-col sm:hidden justify-items-center">
            <TemaContainer bool={true} name="default" />
            <MenuTemasSlider />
          </div>
        {/* Esta parte se muestra para cualquier otro tamaño mayor a mobile */}
          <div>
            <MenuTemasCircle />
          </div>
        </div>
      </div>
    </div>
  )
}
