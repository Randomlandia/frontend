export default function RandyNotFound() {
  return (
    <div className="flex flex-col p-10">
      {/* TITULO DEL ERROR 404 */}
      <div className="flex-wrap justify-center p-3">
        <p className="font-mono text-black text-center font-extrabold text-6xl">
          ERROR
        </p>
        <p className="font-mono text-black text-center font-extrabold text-8xl">
          404
        </p>
        <p className="font-mono text-black text-center font-extrabold text-2xl">
          RANDY NOT FOUND
        </p>
      </div>
      {/* RANDY */}
      <div className="flex justify-center p-4">
        <img src="/randy_wink.svg" alt="" className="h-22 w-22" />
      </div>
    </div>
  );
}
