import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <div className=" flex text-orange-600 font-semibold justify-center mt-8 text-5xl">
        Home
      </div>
      <div></div>
    </main>
  );
}
