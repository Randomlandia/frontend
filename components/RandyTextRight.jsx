import React from "react";
export default function RandyTextRight({ text, img }) {
  return (
    <div className="relative z-30 flex items-start lg:mx-auto p-3 ">
      <div className="flex items-end">
        <img src={img} alt="" className="w-40 md:w-44" />
      </div>
      <div
        className="relative flex items-start bg-contain bg-center bg-no-repeat p-2 w-40 -translate-y-7"
        style={{ backgroundImage: `url('/speech_bubble.png')` }}
      >
        <div className="relative p-3 flex items-start ">
          <p className="text-dgreen font-mont font-semibold text-lg leading-5 px-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
