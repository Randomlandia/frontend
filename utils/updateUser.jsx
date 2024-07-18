const handleUpdateUser = async () => {
  setLoading(true);
  const views = JSON.parse(localStorage.getItem("view")) || [];
  const favs = JSON.parse(localStorage.getItem("favs")) || [];
  const username = localStorage.getItem("username") || "";
  const avatar = localStorage.getItem("avatar") || "";
  const achieve = JSON.parse(localStorage.getItem("achieve")) || {};
  const score = JSON.parse(localStorage.getItem("score")) || {};
  const tested = JSON.parse(localStorage.getItem("tested")) || [];
  const userID = JSON.parse(localStorage.getItem("userID")) || "";

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
    sandiasTested
  };

  if (loggedUser) {
    try {
      const response = await fetch(`http://localhost:3005/users/${userID}`, {
        method: "PUT",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });
      const json = await response.json();
      console.log("Usuario actualizado", json);
    } catch (error) {
      console.log("Error", error);
    }
  }
  setTimeout(()=>{
    setLoading(false)
    router.push("/user/achv")
  },3000)
};