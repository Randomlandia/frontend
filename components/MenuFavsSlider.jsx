import { useState } from "react"
import TemaContainerSlider from "./TemaContainerSlider"

const slides = [
  { id: 1, content: <TemaContainerSlider bool={true} name="nerd" /> },
  { id: 2, content: <TemaContainerSlider bool={true} name="ciencias" /> },
  { id: 3, content: <TemaContainerSlider bool={true} name="idiomas" /> },
  { id: 4, content: <TemaContainerSlider bool={true} name="deportes" /> },
  { id: 5, content: <TemaContainerSlider bool={true} name="vida" /> },
  { id: 6, content: <TemaContainerSlider bool={true} name="artes" /> },
  { id: 7, content: <TemaContainerSlider bool={true} name="mundo" /> },
  { id: 8, content: <TemaContainerSlider bool={true} name="matematicas" /> }
]

export default function MenuFavsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length
  const slidesPerPage = 2

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="max-w-sm mx-auto w-auto">
      <div className="flex justify-between items-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesPerPage}%)`
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0 w-1/2 p-3">
                <div className="w-auto flex items-center justify-center">
                  {slide.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2 px-3 rounded-full bg-peach w-max mx-auto">
        {Array(Math.ceil(totalSlides / slidesPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * slidesPerPage)}
              className={`w-4 h-4 rounded-full ${
                index * slidesPerPage === currentSlide ? "bg-dgreen" : "bg-grey"
              } mx-1`}
            ></button>
          ))}
      </div>
    </div>
  )
}
