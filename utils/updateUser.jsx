import React from "react";
const handleUpdateUser = async (isLogged) => {
  const parseJSON = (item) => {
    try {
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error parsing JSON for item: ${item}`, error);
      return null;
    }
  };

  const views = parseJSON(localStorage.getItem("view")) || [];
  const favs = parseJSON(localStorage.getItem("favs")) || [];
  const username = localStorage.getItem("username") || "";
  const avatar = localStorage.getItem("avatar") || "0";
  const achieve = parseJSON(localStorage.getItem("achieve")) || {};

  const score = parseJSON(localStorage.getItem("score")) || "0";

  const tested = parseJSON(localStorage.getItem("tested")) || [];
  const userID = localStorage.getItem("userID") || "";
  const sandiasVistas = views.map((sandia) => sandia._id);
  const sandiasFavoritas = favs.map((sandia) => sandia._id);
  const sandiasTested = tested.map((sandia) => sandia._id);

  const requestBody = {
    sandiasVistas,
    name: username,
    avatar,
    achievements: achieve,
    sandiasFavoritas,
    score,
    sandiasTested,
  };

  if (isLogged) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}users/${userID}`,
        {
          method: "PUT",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = await response.json();
      // console.log("Usuario actualizado");
      return response.ok; 
    } catch (error) {
      console.log("Error", error);
      return false; 
    }
  }

  return false; 

};

export { handleUpdateUser };
