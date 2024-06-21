import PropTypes from "prop-types"
import { useRouter } from "next/router"
import { useState } from "react"

export default function TemaContainer({ bool, name }) {
  const router = useRouter()

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
      grey: "/B_VIDA.svg"
    },
    nerd: {
      color: "/B_NERD.svg",
      grey: "/B_NERDgrey.svg"
    },
    artes: {
      color: "/B_ARTE.svg",
      grey: "/B_ARTEgrey.svg"
    }
  }

  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    router.push(`/sandias/${name}`)
  }
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleTouchStart = () => {
    setIsHovered(true)
  }

  const handleTouchEnd = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="cursor-pointer flex items-center mx-auto"
    >
      {isHovered && name === "default" ? (
        <p className="text-white font-bold">dato random</p>
      ) : (
        <img
          src={bool ? badges[name].color : badges[name].grey}
          alt={name}
          className={name === "default" ? "h-36 w-36" : "h-32 w-32"}
        />
      )}
    </div>
  )
}

TemaContainer.propTypes = {
  bool: PropTypes.bool,
  name: PropTypes.string
}

TemaContainer.defaultProps = {
  bool: false,
  name: "default"
}
