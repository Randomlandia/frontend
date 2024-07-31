export const handleUpdateLocal = (userJson, setShowSuccess) => {
  if (userJson?.data) {
    localStorage.setItem(
      "favs",
      JSON.stringify(userJson.data.users.sandiasFavoritas)
    );
    localStorage.setItem(
      "view",
      JSON.stringify(userJson.data.users.sandiasVistas)
    );
    localStorage.setItem(
      "achieve",
      JSON.stringify(userJson.data.users.achievements)
    );
    localStorage.setItem("score", JSON.stringify(userJson.data.users.score));
    localStorage.setItem("username", userJson.data.users.name);
    localStorage.setItem("avatar", userJson.data.users.avatar);
    setShowSuccess(true);
  } else {
    console.log("No se pudieron obtener los datos del usuario");
  }
};
