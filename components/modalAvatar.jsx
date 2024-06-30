const ModalAvatar = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center ">
      <button
        onClick={() => onClose()}
        type="submit"
        className="bg-agreen p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full "
      >
        cerrar
      </button>
      <div>{children}</div>
      <br />
    </div>
  );
};

export default ModalAvatar;
