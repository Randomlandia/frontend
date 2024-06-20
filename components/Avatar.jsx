export default function Avatar() {
  return (
    <div className="border border-black p-4 flex flex-col gap-3">
      {/* RANDY ICON FOR USER DEFAULT ONLY*/}
      <div className="relative ">
        <div className="p-4">
          <img
            src="/randy_icon.svg"
            alt="randy default icon"
            className="h-32 w-32"
          />
        </div>
        <div className="absolute bottom-0 right-0 ">
          <img src="/icon_redsetting.svg" alt="" className="h-6 w-6" />
        </div>
      </div>

      {/* USER NAME +  SETTING ICON */}
      <div className="inline-flex gap-3">
        <div className="bg-lorange p-2 rounded-lg">
          <p className="font-lucky text-black text-center">JuanElChato_92</p>
        </div>
        <div className="content-end">
          <img src="/icon_purplesetting.svg" alt="" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
