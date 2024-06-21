import PropTypes from 'prop-types'

export default function TemaContainer({ bool, name }) {
  const badges = {
    default: '/default_avatar.svg',
    idiomas: {
      color: '/B_IDIOMAS.svg',
      grey: '/B_IDIOMASgrey.svg'
    },
    matematicas: {
      color: '/B_MATE.svg',
      grey:'/B_MATEgrey.svg'
    },
    ciencias: {
      color: '/B_CIENCIA.svg',
      grey: '/B_CIENCIAgrey.svg'
    },
    mundo: {
      color: '/B_MUNDO.svg',
      grey: '/B_MUNDOgrey.svg',
    },
    deportes: {
      color: '/B_DEPORTE.svg',
      grey: '/B_DEPORTEgrey.svg',
    },
    vida: {
      color: '/B_VIDA.svg',
      grey: '/B_VIDA.svg',
    },
    nerd: {
      color: '/B_NERD.svg',
      grey: '/B_NERDgrey.svg',
    },
    artes: {
      color: '/B_ARTE.svg',
      grey: '/B_ARTEgrey.svg'
    }
  }

  return (
    <div>
      <img src={badges[name]} alt={name} className='h-40 w-40'/>
    </div>
  )
}

TemaContainer.propTypes = {
  bool: PropTypes.bool,
  name: PropTypes.string
}

TemaContainer.defaultProps = {
  bool: false,
  name: 'default'
}
