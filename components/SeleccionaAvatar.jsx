import React from "react";
export default function SeleccionaAvatar(props) {
  return (
    <div className="flex items-center justify-center">
      {props.avatar == 0 && (
        <img src="/randy_icon.svg" alt="randy_default" className="h-32 w-32 " />
      )}
      {props.avatar == 1 && (
        <img
          src="/avatars/A_RANDY_DED.svg"
          alt="RANDY_DED"
          className="h-32 w-32 "
        />
      )}
      {props.avatar == 2 && (
        <img
          src="/avatars/A_RANDY_OH.svg"
          alt="RANDY_OH"
          className="h-32 w-32 "
        />
      )}
      {props.avatar == 3 && (
        <img
          src="/avatars/A_RANDY_SAD.svg"
          alt="RANDY_SAD."
          className="h-32 w-32 "
        />
      )}
      {props.avatar == 4 && (
        <img
          src="/avatars/A_RANDY_SMILE.svg"
          alt="RANDY_SMILE"
          className="h-32 w-32 "
        />
      )}
      {props.avatar == 5 && (
        <img
          src="/avatars/A_RANDY-WINK.svg"
          alt="RANDY-WINK"
          className="h-32 w-32 "
        />
      )}
      {props.avatar == 6 && (
        <img
          src="/avatars/A_RANDY_ANGRY.svg"
          alt="RANDY_ANGRY"
          className="h-32 w-32 "
        />
      )}
    </div>
  );
}
