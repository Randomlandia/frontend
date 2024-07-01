const ModalAvatar = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  if (!isVisible || !onClose || !children) {
    return (
      <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
    );
  }
  return (
    <div className="flex flex-col fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
      <div className="flex  w-full justify-end">
        <button
          onClick={() => onClose()}
          type="submit"
          className="bg-mathL p-1.5 w-20 font-lucky text-white text-xl tracking-wider rounded-full flex items-center justify-center mr-60 "
        >
          x
        </button>
      </div>
      {children}

      <br />
    </div>
  );
};

export default ModalAvatar;
