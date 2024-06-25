import { useState, useEffect, useRef } from "react"
import RandyTextRight from "./RandyTextRight"
import BackgroundSlider from "@/components/BackgroundSlider"

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [bg, setBg] = useState(null)
  const [stored, setStored] = useState(null)
  const activadorRef = useRef(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const saveHandler = (e) => {
    console.log("lo intento ama")
    e.preventDefault()
    if (bg) {
      setStored(true)
      localStorage.setItem("bg", bg) // Utiliza 'bg' en lugar de 'newBg'
      localStorage.removeItem("bg2") // Utiliza 'removeItem' en lugar de 'deleteItem'
      closeModal()
    }
    if (!bg) {
      const bg2 = localStorage.getItem("bg2")
      console.log("noworries, ya casi queda")
      setBg(bg2)
      setStored(true)
    }
  }

  // useEffect(() => {
  //   const handleMouseOver = (e) => {
  //     const activador = e.target.getAttribute("name")
  //     if (activador == "activador") {
  //       const bg2 = localStorage.getItem("bg2")
  //       console.log("noworries, ya casi queda")
  //       setBg(bg2)
  //       setStored(true)
  //     }
  //   }

  //   if (activadorRef.current) {
  //     activadorRef.current.addEventListener("mouseover", handleMouseOver)
  //   }

  //   return () => {
  //     if (activadorRef.current) {
  //       activadorRef.current.removeEventListener("mouseover", handleMouseOver)
  //     }
  //   }
  // }, [])

  return (
    <div className="max-h-screen">
      <button
        className="h-10 px-6 flex justify-end items-center"
        onClick={openModal}
      >
        <img src="/icon_edit.svg" alt="edit" className="h-8 w-8" />
      </button>

      {isOpen && (
        <div
          className={`fixed w-full h-6/7 inset-0 z-40 overflow-hidden flex justify-center items-start animated fadeIn faster mt-14 py-5`}
          style={{ background: "white" }}
        >
          <div className="border-lgreen border-2 shadow-lg h-full bg-oldwhite/70 w-11/12 md:max-w-md mx-auto rounded-lg z-50">
            <div className="relative py-2 text-left px-4 h-full">
              <div className="flex flex-col">
                <div
                  className="cursor-pointer flex justify-end"
                  onClick={closeModal}
                >
                  <img src="/close.svg" alt="X" className="w-5 h-5" />
                </div>
                <p className="text-5xl font-bold font-lucky text-center text-dgreen">
                  ¡ELIGE TU ESCENARIO!
                </p>
              </div>

              {/* Aquí estoy insertando el slider para páginas móviles y mapeo para tablets y desktop */}
              <div className="my-5 md:hidden" name="activador">
                <BackgroundSlider />
              </div>
              {/* Lógica botón save y Randy */}
              <div className="absolute bottom-0">
                <RandyTextRight
                  img={"/RANDY_08.svg"}
                  text="¿Cuál será mi hogar?"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={saveHandler}
                  className={
                    "focus:outline-none px-4 p-2 rounded-lg text-white font-lucky bg-pcyan hover:bg-sportL"
                  }
                >
                  Guardar
                </button>
                <p
                  className={`text-mathL font-mont text-xs font-medium ${
                    stored ? "hidden" : "block"
                  }`}
                >
                  Debes seleccionar <br /> un fondo primero
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
