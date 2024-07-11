// components/TestBubble.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TestBubble = ({ text, trianglePosition, width, height }) => {
  const triangleClasses = classNames({
    "absolute bottom-[-15px] w-0 h-0 border-t-[15px] border-t-cream border-x-[15px] border-x-transparent": true,
    "left-6": trianglePosition === "left",
    "right-6": trianglePosition === "right"
  });

  const bubbleStyles = {
    width: width,
    height: height
  };

  return (
    <div
      className="relative speech-bubble bg-cream text-black p-4 rounded-3xl "
      style={bubbleStyles}
    >
      <div className="overflow-y-auto h-full text-center flex flex-col justify-center py-4 gap-3">
        <p className="w-auto flex text-center">{result}</p>
        <p className="w-auto flex text-center">{text}</p>
      </div>
      <div className={triangleClasses}></div>
    </div>
  );
};

TestBubble.propTypes = {
  text: PropTypes.string.isRequired,
  trianglePosition: PropTypes.oneOf(["left", "right"]),
  width: PropTypes.string,
  height: PropTypes.string,
  result: PropTypes.string
};

TestBubble.defaultProps = {
  trianglePosition: "left",
  width: "332.25px", // Default width
  height: "329.34px", // Default height
  result: null
};

export default TestBubble;
