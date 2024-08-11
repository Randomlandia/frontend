import React, { createContext, useState, useRef, useEffect } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musica, setMusica] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("music/randomMusic_out.mp3");

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (musica) {
      audioRef.current.play();
      audioRef.current.loop = true;
    } else {
      audioRef.current.pause();
    }
  }, [musica]);

  return (
    <MusicContext.Provider value={{ musica, setMusica }}>
      {children}
    </MusicContext.Provider>
  );
};
