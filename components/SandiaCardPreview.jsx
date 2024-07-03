import React, { useState } from "react";

export default function SandiaCardPreview({
  sandia,
  isFavorite,
  onToggleFavorite
}) {
  const [showReference, setShowReference] = useState(false);

  const handleToggleReference = () => {
    setShowReference((prev) => !prev);
  };

  return (
    <div className="card flex flex-col justify-between gap-2 bg-oldwhite/80  pt-4 font-mont font-semibold text-center rounded-lg">
      <div className="card-content px-4">
        {showReference ? sandia.reference : sandia.content}
      </div>
      <div className="flex gap-1 justify-end items-baseline">
        <button onClick={handleToggleReference} className="py-3">
          <img src="/icon_turn.svg" alt="🔄️" className="w-10" />
        </button>
        <button onClick={onToggleFavorite}>
          {isFavorite ? (
            <img src="/RANDY_favs.svg" alt="❤️" className="w-20 h-20" />
          ) : (
            <img src="/RANDY_toggle.svg" alt="✅" className="w-20 h-20" />
          )}
        </button>
      </div>
    </div>
  );
}
