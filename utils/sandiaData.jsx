const url = "http://localhost:3005/sandias";

export const sandiasData = async () => {
  const localStorageData = localStorage.getItem("Sandias");
  if (localStorageData) {
    console.log("Datos encontrados en localStorage.");
    return JSON.parse(localStorageData);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const json = await response.json();
  localStorage.setItem("Sandias", JSON.stringify(json.data.sandias));
  console.log("Datos guardados en localStorage.");
  return json.data.sandias;
};
