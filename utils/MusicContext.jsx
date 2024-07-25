import React, { createContext, useState, useEffect, useRef } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musica, setMusica] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const musicaPreference = localStorage.getItem("musicaPreference");
    if (musicaPreference !== null) {
      setMusica(musicaPreference === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("musicaPreference", musica);
  }, [musica]);

  useEffect(() => {
    audioRef.current = new Audio("music/18. The Flower Garden.mp3");

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Función para alternar el estado de `musica`
  const toggleMusica = () => {
    setMusica((prevMusica) => !prevMusica);
  };

  // Función para reproducir o pausar la música
  const toggleAudio = () => {
    if (audioRef.current) {
      if (musica) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <MusicContext.Provider value={{ musica, toggleMusica, toggleAudio }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
