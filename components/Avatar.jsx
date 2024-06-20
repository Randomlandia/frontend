export default function Avatar() {
  return (
    <>
      <div className="flex flex-col justify-center">
        {/* RANDY ICON FOR USER DEFAULT ONLY + SETTING ICON */}
        <div className=" inline-flex gap-2 p-4">
          <div className="rounded-full bg-lifeL size-20"></div>
          <img src="/icon_redsetting.svg" alt="setting" className="h-6 w-6 " />
        </div>

        {/* CARD USER NAME + SETTING ICON */}
        <div className=" inline-flex gap-2 p-4">
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-10 align-middle text-center">
            <p className="font-lucky text-black">JuanElChato92</p>
          </div>

          <img
            src="/icon_purplesetting.svg"
            alt="setting"
            className="h-6 w-6 "
          />
        </div>
      </div>
    </>
  );
}
