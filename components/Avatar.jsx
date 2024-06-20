export default function Avatar() {
  return (
    <div className="">
      {/* RANDY ICON FOR USER DEFAULT ONLY + SETTING ICON */}
      <div className="grid grid-cols-2">
        <div className="rounded-full bg-lifeL size-24"></div>
        <div className="content-end">
          <img src="/icon_redsetting.svg" alt="setting" className="h-6 w-6 " />
        </div>
      </div>

      {/* CARD USER NAME + SETTING ICON */}
      <div className="">
        <div className="bg-lorange rounded-lg p-2 w-fit">
          <p className="font-lucky text-black">JuanElChato92</p>
        </div>
        <div className="content-end">
          <img src="/icon_redsetting.svg" alt="setting" className="h-6 w-6 " />
        </div>
      </div>
    </div>
  );
}
