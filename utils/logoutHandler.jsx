import React from "react";


export const handleLogout = async () => {
  const keysToRemove = [
    "token",
    "username",
    "tested",
    "avatar",
    "score",
    "view",
    "favs",
    "achieve",
    "exp",
    "userID"
  ];
  try {
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    console.log("Sesión cerrada correctamente.");
  } catch (error) {
    console.log("Error durante el logout:", error);
  }
};
