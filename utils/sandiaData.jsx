import React from "react";
export const sandiasData = async () => {
  const localStorageData = localStorage.getItem("Sandias");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_RANDOM_API}sandias`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const json = await response.json();
  localStorage.setItem("Sandias", JSON.stringify(json.data.sandias));
  return json.data.sandias;
};
