export default function BackgroundCard({ img, onSelect }) {
  return (
    <div
      className="w-full h-52 flex justify-center items-center focus:outline-none focus:ring-8 focus:ring-lorange focus:rounded-md"
      tabIndex={0}
    >
      <img
        src={img}
        alt="background"
        className="object-cover w-full h-full rounded-lg border-4 border-natL"
        onClick={onSelect}
      />
    </div>
  );
}
