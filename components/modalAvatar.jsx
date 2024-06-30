import React from "react";

const ModalAvatar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center  items-center">
      <button
        onClick={() => onClose()}
        type="submit"
        className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full place-self-end"
      >
        cerrar
      </button>
    </div>
  );
};

export default ModalAvatar;
