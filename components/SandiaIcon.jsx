import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const SandiaIcon = ({ src, alt = "", width = 40, height = 40, onClick }) => (
  <div className="flex justify-center items-center w-[40px] h-[40px]">
    <button onClick={onClick}>
      <Image src={src} width={width} height={height} alt={alt} />
    </button>
  </div>
);

SandiaIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func,
};

export default SandiaIcon;
