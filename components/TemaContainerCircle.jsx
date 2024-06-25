import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function TemaContainerCircle({ bool, name }) {
  const router = useRouter();

  const badges = {
    default: {
      color: "/default_avatar.png",
      grey: "/default_avatar.png",
    },
    idiomas: {
      color: "/B_IDIOMAS.svg",
      grey: "/B_IDIOMASgrey.svg",
    },
    matematicas: {
      color: "/B_MATE.svg",
      grey: "/B_MATEgrey.svg",
    },
    ciencias: {
      color: "/B_CIENCIA.svg",
      grey: "/B_CIENCIAgrey.svg",
    },
    mundo: {
      color: "/B_MUNDO.svg",
      grey: "/B_MUNDOgrey.svg",
    },
    deportes: {
      color: "/B_DEPORTE.svg",
      grey: "/B_DEPORTEgrey.svg",
    },
    vida: {
      color: "/B_VIDA.svg",
      grey: "/B_VIDA.svg",
    },
    nerd: {
      color: "/B_NERD.svg",
      grey: "/B_NERDgrey.svg",
    },
    artes: {
      color: "/B_ARTE.svg",
      grey: "/B_ARTEgrey.svg",
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    router.push(`/sandias/${name}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const getHoverText = (name) => {
    switch (name) {
      case "default":
        return "dato random"
      case "matematicas":
        return "mates"
      default:
        return name
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      className={`relative cursor-pointer w-full h-full my-auto ${
        name === "default" ? "scale-115" : "w-4/5"
      }`}
    >
      {isHovered && (
        <div
          className="absolute inset-0 flex justify-center items-center bg-black/50 rounded-full transition-opacity duration-300"
        />
      )}
      <img
        src={bool ? badges[name].color : badges[name].grey}
        alt={name}
        className={`w-full`}
      />
      {isHovered && (
        <p
          className={`absolute inset-0 capitalize text-white text-lg lg:text-xl font-bold text-center flex items-center justify-center`}
        >
          {getHoverText(name)}
        </p>
      )}
    </div>
  );
}

TemaContainerCircle.propTypes = {
  bool: PropTypes.bool,
  name: PropTypes.string,
};

TemaContainerCircle.defaultProps = {
  bool: false,
  name: "default",
};
