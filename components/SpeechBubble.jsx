// components/SpeechBubble.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SpeechBubble = ({ text, trianglePosition, width, height, children }) => {
  const triangleClasses = classNames({
    "absolute bottom-[-15px] w-0 h-0 border-t-[15px] border-t-cream border-x-[15px] border-x-transparent": true,
    "left-6": trianglePosition === "left",
    "right-6": trianglePosition === "right",
  });

  const bubbleStyles = {
    width: width,
    height: height,
  };

  return (
    <div
      className="relative speech-bubble bg-cream text-black p-4 rounded-3xl shadow-xl shadow-slate-300"
      style={bubbleStyles}
    >
      <div className="overflow-y-auto h-full text-center flex flex-col justify-center py-4 gap-3">
        <p className="w-auto text-center">
          {text}
          {children}
        </p>
      </div>
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
  isMenu: false,
};

export default SpeechBubble;
