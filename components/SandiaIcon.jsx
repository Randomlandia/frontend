import PropTypes from "prop-types";
import Image from "next/image";

const SandiaIcon = ({ src, alt, width, height }) => (
  <div className="flex justify-center items-center w-[40px] h-[40px]">
    <button>
      <Image src={src} width={width} height={height} alt={alt} />
    </button>
  </div>
);

SandiaIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

SandiaIcon.defaultProps = {
  alt: "",
  width: 40,
  height: 40,
};

export default SandiaIcon;
