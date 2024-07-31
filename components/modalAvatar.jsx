import React from "react";
const ModalAvatar = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="flex flex-col fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
      <div className="flex  w-full justify-end"></div>
      {children}

      <br />
    </div>
  );
};

export default ModalAvatar;
