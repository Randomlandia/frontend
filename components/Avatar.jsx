export default function Avatar() {
  return (
    <div className="">
      {/* RANDY ICON FOR USER DEFAULT ONLY + SETTING ICON */}
      <div className="inline-flex p-3">
        <div className="rounded-full bg-lifeL size-24"></div>
        <div className="content-end">
          <img src="/icon_redsetting.svg" alt="setting" className="h-6 w-6 " />
        </div>
      </div>

      {/* CARD USER NAME + SETTING ICON */}
      <div className="inline-flex">
        <div className="bg-lorange rounded-lg py-2 px-4 text-center">
          <p className="font-lucky text-black">JuanElChato92</p>
        </div>
        <div className="content-end">
          <img src="/icon_purplesetting.svg" alt="setting" />
        </div>
      </div>
    </div>
  );
}
