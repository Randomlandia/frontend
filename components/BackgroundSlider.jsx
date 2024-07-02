import BackgroundsList from "@/constants/BackgroundsList";
import BackgroundCard from "./BackgroundCard";
import { useEffect, useState } from "react";

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBg, setSelectedBg] = useState(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BackgroundsList.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === BackgroundsList.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleBgSelect = (e) => {
    const newBg = BackgroundsList[currentIndex].bg;
    setSelectedBg(newBg);
  };

  useEffect(() => {
    if (selectedBg) {
      localStorage.setItem("bg2", selectedBg);
    }
  }, [selectedBg]);

  return (
    <div className="relative w-full max-w-lg mx-auto" name={selectedBg}>
      <BackgroundCard
        img={`/backgrounds/${BackgroundsList[currentIndex].bg}`}
        onSelect={handleBgSelect}
      />
      <button
        onClick={handlePrevClick}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full"
      >
        <img src="/icon_arrowleft.svg" alt="Previous" className="w-6 h-6" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full"
      >
        <img src="/icon_arrowright.svg" alt="Next" className="w-6 h-6" />
      </button>
    </div>
  );
}
