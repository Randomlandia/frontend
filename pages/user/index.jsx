import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";

export default function User() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* BODY */}
      <div className="flex m-6">
        <div className="bg-yellow-200 rounded-xl p-4 w-full flex-row">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <Avatar />
          <div className="bg-orange-500 rounded-lg text-center p-2">
            JuanElChato92
          </div>
          {/* SCORE */}
          <div className="border-4 rounded-lg border-orange-500 text-black">
            {" "}
            SCORE 2024
          </div>
          {/* BOTONES HACIA SUBMENUS */}
        </div>
      </div>

      {/* FOOTER CONTACTO */}
    </main>
  );
}
