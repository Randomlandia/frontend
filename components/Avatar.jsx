import ModalAvatar from "./modalAvatar";
import { Fragment } from "react";
import { useState } from "react";
export default function Avatar(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 place-items-center">
        {/* RANDY ICON FOR USER DEFAULT ONLY*/}
        <div className=" inline-flex gap-2">
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-32 w-32"
          />
          <button onClick={() => setShowModal(true)}>
            <div className="content-center">
              <img
                src="/icon_redsetting.svg"
                alt="setting"
                className="h-6 w-6"
              />
            </div>
          </button>
        </div>
        {/* USER AVATAR */}
        <ModalAvatar
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
        {/* USER NAME +  SETTING ICON */}
        <div className="inline-flex gap-2">
          <div className="bg-lorange p-2 rounded-lg w-fit">
            <span className="font-lucky text-black "> {props.userName}</span>
          </div>
          <div className="content-center">
            <img
              src="/icon_purplesetting.svg"
              alt="setting"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
