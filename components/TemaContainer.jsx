import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function TemaContainer({ bool, name }) {
  const router = useRouter();

  const badges = {
    default: {
      color: "/default_avatar.png",
      grey: "/default_avatar.png"
    },
    idiomas: {
      color: "/B_IDIOMAS.svg",
      grey: "/B_IDIOMASgrey.svg"
    },
    matematicas: {
      color: "/B_MATE.svg",
      grey: "/B_MATEgrey.svg"
    },
    ciencias: {
      color: "/B_CIENCIA.svg",
      grey: "/B_CIENCIAgrey.svg"
    },
    mundo: {
      color: "/B_MUNDO.svg",
      grey: "/B_MUNDOgrey.svg"
    },
    deportes: {
      color: "/B_DEPORTE.svg",
      grey: "/B_DEPORTEgrey.svg"
    },
    vida: {
      color: "/B_VIDA.svg",
      grey: "/B_VIDAgrey.svg"
    },
    nerd: {
      color: "/B_NERD.svg",
      grey: "/B_NERDgrey.svg"
    },
    artes: {
      color: "/B_ARTE.svg",
      grey: "/B_ARTEgrey.svg"
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const isFavRoute = router.pathname.includes("/favs");
  const isAcknRoute = router.pathname.includes("/ackn");
  const isMenuRoute = router.pathname.includes("/menu")

  const handleClick = () => {

    if (isMenuRoute) {
      router.push(`/menu/${name}`);
    } else if (isFavRoute) {
      router.push(`/user/favs/${name}`);
    } else if (isAcknRoute) {
      router.push(`/user/ackn/${name}`);

    }
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
        return "dato random";
      case "matematicas":
        return "mates";
      default:
        return name;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      className="relative cursor-pointer flex justify-items-center w-full h-full mx-auto "
    >
      <img
        src={bool ? badges[name].color : badges[name].grey}
        alt={name}
        className={`max-h-full max-w-full ${isHovered && 'transform scale-125'}`}
      />
      {isHovered && (
        <div
          className={`absolute inset-0 flex justify-center items-centerrounded-full  ${
            name === "default" ? "w-1/2 mx-auto" : ""
          }`}
        >
          <p
            className={`max-h-full max-w-full capitalize ml-20 text-dgreen font-bold text-center text-xl`}
          >
            {" "}
            {getHoverText(name)}
          </p>
        </div>
      )}
    </div>
  );
}

TemaContainer.propTypes = {
  bool: PropTypes.bool,
  name: PropTypes.string,
};

TemaContainer.defaultProps = {
  bool: false,
  name: "default",
};
