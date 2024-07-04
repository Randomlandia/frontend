
import { useMemo } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import TemaContainerCircle from "./TemaContainerCircle";
import TemporaryUser from "@/constants/TemporaryUser";


export default function MenuFavsCircle() {
  const router = useRouter();
  const [sandias, setSandias] = useState([]);
  const [vistos, setVistos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const isFavRoute = router.pathname.includes("/favs");
      const isAckRoute = router.pathname.includes("/ackn");
  
      try {
        if (isFavRoute) {
          const favsString = localStorage.getItem("favs");
          const favs = favsString ? JSON.parse(favsString) : [];
          setSandias(favs);
        } else if (isAckRoute) {
          const viewsString = localStorage.getItem("view");
          const views = viewsString ? JSON.parse(viewsString) : [];
          setVistos(views);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
        // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario o estableciendo un valor predeterminado.
      }
  
      setLoading(false);
    };
  
    if (typeof window !== "undefined") {
      fetchData();
    }
  }, [router.pathname]);

  const checkSandiaByTheme = (themeName) => {
    if (router.pathname.includes("/favs")) {
      return sandias.some((sandia) => sandia.topic.name === themeName);
    } else if (router.pathname.includes("/ackn")) {
      return vistos.some((visto) => visto.topic.name === themeName);
    }
    return false;
  };

  const temas = [
    "nerd",
    "mundo",
    "artes",
    "ciencias",
    "vida",
    "idiomas",
    "matematicas",
    "deportes"
  ];

  const checks = useMemo(() => {
    return temas.reduce((acc, tema) => {
      acc[tema] = checkSandiaByTheme(tema);
      return acc;
    }, {});
  }, [sandias, vistos]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="pt-4 mx-auto w-5/6 lg:w-3/4 xl:w-2/3 grid grid-cols-3">
      <div className="flex flex-col">
        <div className="flex justify-end items-end pt-7 pl-7">
          <TemaContainerCircle bool={checks.nerd} name="nerd" />
        </div>
        <div className="flex items-center py-3 pr-7">
          <TemaContainerCircle bool={checks.mundo} name="mundo" />
        </div>
        <div className="flex justify-end items-start pb-7 pl-7">
          <TemaContainerCircle bool={checks.artes} name="artes" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center pb-7 px-3">
          <TemaContainerCircle bool={checks.ciencias} name="ciencias" />
        </div>
        <div className="flex items-center justify-center">
          <TemaContainerCircle bool={true} name="default" />
        </div>
        <div className="flex items-end justify-center pt-7 px-3">
          <TemaContainerCircle bool={checks.vida} name="vida" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-end pt-7 pr-7">
          <TemaContainerCircle bool={checks.idiomas} name="idiomas" />
        </div>
        <div className="flex items-center justify-end py-3 pl-7">
          <TemaContainerCircle bool={checks.matematicas} name="matematicas" />
        </div>
        <div className="flex items-start pb-7 pr-7">
          <TemaContainerCircle bool={checks.deportes} name="deportes" />
        </div>
      </div>
    </div>
  );
}
