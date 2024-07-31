import React from "react";
import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favs");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    } else {
      setFavorites([]);
    }
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
