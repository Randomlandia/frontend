// components/SpeechBubble.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SpeechBubble = ({ text, trianglePosition, width, height }) => {
  const triangleClasses = classNames({
    "absolute bottom-[-10px] w-0 h-0 border-t-[10px] border-t-cream border-x-[10px] border-x-transparent": true,
    "left-6": trianglePosition === "left",
    "right-6": trianglePosition === "right",
  });

  const bubbleStyles = {
    width: width,
    height: height,
  };

  return (
    <div
      className="relative bg-cream text-black p-4 rounded-lg"
      style={bubbleStyles}
    >
      <div className="overflow-y-auto h-full speech-bubble">{text}</div>
      <div className={triangleClasses}></div>
    </div>
  );
};

SpeechBubble.propTypes = {
  text: PropTypes.string.isRequired,
  trianglePosition: PropTypes.oneOf(["left", "right"]),
  width: PropTypes.string,
  height: PropTypes.string,
};

SpeechBubble.defaultProps = {
  trianglePosition: "left",
  width: "332.25px", // Default width
  height: "329.34px", // Default height
};

export default SpeechBubble;
