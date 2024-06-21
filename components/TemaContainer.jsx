import PropTypes from "prop-types"
import { useRouter } from "next/router"

export default function TemaContainer({ bool, name }) {
  const router = useRouter()
  
  const badges = {
    default: {
      color: "/default_avatar.svg",
      grey: "/default_avatar.svg"
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

  const handleClick = () => {
    router.push(`/sandias/${name}`)
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img
        src={bool ? badges[name].color : badges[name].grey}
        alt={name}
        className={badges[name] == "default" ? "h-40 w-40" : "h-32 w-32"}
      />
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
