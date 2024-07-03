import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useFavorites } from "@/utils/useFavorites";
import SandiaCardPreview from "@/components/SandiaCardPreview";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

const SandiaList = () => {
  const router = useRouter();
  const { topic } = router.query;
  const { favorites, toggleFavorite } = useFavorites();
  const [sandias, setSandias] = useState([]);
  const [background, setBackground] = useState(null);

  const updateBackground = () => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    }
  };

  useEffect(() => {
    updateBackground();

    const storedSandias = (() => {
      if (router.pathname.includes("/favs")) {
        return JSON.parse(localStorage.getItem("favs")) || [];
      } else if (router.pathname.includes("/ackn")) {
        return JSON.parse(localStorage.getItem("view")) || [];
      } else {
        return [];
      }
    })();

    setSandias(storedSandias);
  }, [router.pathname]);

  const filteredSandias = useMemo(() => {
    if (!topic || topic === "default") {
      return sandias;
    }
    return sandias.filter((sandia) => sandia.topic.name === topic);
  }, [topic, sandias]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div
        className="relative h-screen max-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url('${
        //     background
        //       ? `/backgrounds/${background}`
        //       : "/backgrounds/bg-booksflying.webp"
        //   }')`
        // }}
      >
        <div className="bg-zinc-500/30 px-10 py-6 m-4 rounded-xl">
          <div>
            <h1 className="font-lucky text-dgreen">Randomteca</h1>
          </div>
          <div className="  grid grid-cols-1 sm:grid:cols-2 lg:grid-cols-4 gap-3">
            {Array.isArray(filteredSandias) && filteredSandias.length > 0 ? (
              filteredSandias.map((sandia) => (
                <SandiaCardPreview
                  key={sandia._id}
                  sandia={sandia}
                  isFavorite={favorites.some((fav) => fav._id === sandia._id)}
                  onToggleFavorite={() => toggleFavorite(sandia)}
                />
              ))
            ) : (
              <p>No hay nada que ver aqui</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandiaList;
