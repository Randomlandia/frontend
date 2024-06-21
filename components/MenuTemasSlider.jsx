import { useState } from 'react'
import TemaContainer from './TemaContainer'

const slides = [
  { id: 1, content: (<TemaContainer bool={true} name="nerd" />) },
  { id: 2, content: (<TemaContainer bool={true} name="ciencias" />) },
  { id: 3, content: (<TemaContainer bool={true} name="idiomas" />) },
  { id: 4, content: (<TemaContainer bool={true} name="deportes" />) },
  { id: 5, content: (<TemaContainer bool={true} name="vida" />) },
  { id: 6, content: (<TemaContainer bool={true} name="artes" />) },
  { id: 7, content: (<TemaContainer bool={true} name="mundo" />) },
  { id: 8, content: (<TemaContainer bool={true} name="matematicas" />) },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length
  const slidesPerPage = 2

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className='grid justify-items-center'>
      <div className="flex justify-between items-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100 / slidesPerPage}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-1/2 p-2"
              >
                <div className="h-32 flex items-center justify-center">
                  {slide.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 py-2 px-3 rounded-full bg-[#FBCF8E]">
        {Array(Math.ceil(totalSlides / slidesPerPage)).fill().map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * slidesPerPage)}
            className={`w-4 h-4 rounded-full ${index * slidesPerPage === currentSlide ? 'bg-dgreen' : 'bg-grey'}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
