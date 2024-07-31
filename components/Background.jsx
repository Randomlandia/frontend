import React from "react";
import { useState, useEffect } from "react";

export default function Background() {
  const [background, setBackground] = useState("../backgrounds/3.png");

  useEffect(() => {
    const bgNew = localStorage.getItem("bg");
    if (bgNew) {
      setBackground(bgNew);
    } else {
      setBackground("../backgrounds/3.png");
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-left-bottom lg:bg-center lg:rounded-2xl bg-no-repeat flex flex-col gap-14 font-mont font-bold overflow-hidden -z-10"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    ></div>
  );
}
