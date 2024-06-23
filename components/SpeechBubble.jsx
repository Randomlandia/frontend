// components/SpeechBubble.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SpeechBubble = ({ text, trianglePosition }) => {
  const triangleClasses = classNames({
    "absolute bottom-[-10px] w-0 h-0 border-t-[10px] border-t-cream border-x-[10px] border-x-transparent": true,
    "left-6": trianglePosition === "left",
    "right-6": trianglePosition === "right",
  });

  const randyClasses = classNames({
    "absolute bottom-[-106px] w-24 h-auto": true,
    "left-[-0.75rem]": trianglePosition === "left",
    "right-[-0.75rem]": trianglePosition === "right",
  });

  return (
    <div
      className="relative bg-cream text-black p-4 rounded-lg 
                    w-[332.25px] h-[329.34px]
                    sm:w-[510.52px] sm:h-[292.42px]
                    lg:w-[563.22px] lg:h-[273.25px]"
    >
      <div className="overflow-y-auto h-full speech-bubble">{text}</div>
      <div className={triangleClasses}></div>
      <img src="/randy.png" alt="Randy the cat" className={randyClasses} />
    </div>
  );
};

SpeechBubble.propTypes = {
  text: PropTypes.string.isRequired,
  trianglePosition: PropTypes.oneOf(["left", "right"]),
};

SpeechBubble.defaultProps = {
  trianglePosition: "left",
};

export default SpeechBubble;
