import Navbar from "../components/Navbar";
import CardSandiaBack from "@/backups/cards sandia/CardSandiaBack";
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <div className=" flex text-orange-600 font-semibold justify-center mt-8 text-5xl">
        Home
      </div>
    </main>
  );
}
