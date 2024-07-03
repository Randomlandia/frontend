import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import TemaContainerSlider from "./TemaContainerSlider";
import TemporaryUser from "@/constants/TemporaryUser";


const prevSlides = [
  "nerd",
  "ciencias",
  "idiomas",
  "deportes",
  "deportes",
  "artes",
  "mundo",
  "matematicas"
];

export default function MenuFavsSlider() {

  const router = useRouter();
  const [sandias, setSandias] = useState([]);
  const [vistos, setVistos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const isFavRoute = router.pathname.includes("/favs");
      const isAckRoute = router.pathname.includes("/ackn");

      if (isFavRoute) {
        const favs = JSON.parse(localStorage.getItem("favs")) || [];
        setSandias(favs);
      } else if (isAckRoute) {
        const views = JSON.parse(localStorage.getItem("view")) || [];
        setVistos(views);
      }

      setLoading(false);
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, [router.pathname]);

  const checkSandiaByTheme = (themeName) => {
    if (router.pathname.includes("/favs")) {
      return sandias.some((sandia) => sandia.topic.name === themeName);
    } else if (router.pathname.includes("/ackn")) {
      return vistos.some((visto) => visto.topic.name === themeName);
    }
    return false;
  };

  const slides = prevSlides.map((name, index) => ({
    id: index,
    content: (
      <TemaContainerSlider
        key={index}
        bool={checkSandiaByTheme(name)}
        name={name}
      />
    )
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const slidesPerPage = 2;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
  );
}
