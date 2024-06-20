export default function Avatar() {
  return (
    <>
      {/* RANDY ICON FOR USER DEFAULT ONLY*/}
      <div className=" grid grid-cols-2 gap-2">
        <div className="p-2">
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-32 w-32"
          />
        </div>

        <div className="place-content-center ">
          <img src="/icon_redsetting.svg" alt="setting" className="h-6 w-6" />
        </div>
      </div>

      {/* USER NAME +  SETTING ICON */}
      <div className=" grid grid-cols-2  gap-2">
        <div className="p-1">
          <div className="bg-lorange p-2 rounded-lg w-fit ">
            <p className="font-lucky text-black text-center">JuanElChato_92</p>
          </div>
        </div>

        <div className="place-content-center">
          <img
            src="/icon_purplesetting.svg"
            alt="setting"
            className="h-6 w-6"
          />
        </div>
      </div>
    </>
  );
}
