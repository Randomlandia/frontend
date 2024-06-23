// components/SpeechBubble.js
import React from "react";
import PropTypes from "prop-types";

const SpeechBubble = ({ text }) => {
  return (
    <div
      className="relative bg-cream text-black p-4 rounded-lg 
                    w-[332.25px] h-[329.34px]
                    sm:w-[510.52px] sm:h-[292.42px]
                    lg:w-[563.22px] lg:h-[273.25px]"
    >
      <div className="overflow-y-auto h-full speech-bubble">{text}</div>
      <div className="absolute bottom-[-10px] left-6 w-0 h-0 border-t-[10px] border-t-cream border-x-[10px] border-x-transparent"></div>
    </div>
  );
};

SpeechBubble.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SpeechBubble;
