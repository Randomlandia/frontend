import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favs")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (sandia) => {
    const isAlreadyFavorite = favorites.some((fav) => fav._id === sandia._id);

    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter((fav) => fav._id !== sandia._id);
    } else {
      updatedFavorites = [...favorites, sandia];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favs", JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
};