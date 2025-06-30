import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-black px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mirrored-Fragments</h1>

      <div className=" text-lg space-y-4 text-center mb-8">
        <p className="font-medium">Hey, My Dear Player—Welcome.</p>
        <p>
          This is a Text-Based RPG. It’s more of an Interactive Novel that gets affected by your choices.
          Here, your role can be assumed as a guide who guides—or the protagonist himself.
        </p>
      </div>
      <button
        onClick={() => navigate("/profile")}
        className="bg-stone-500 hover:bg-stone-600 text-white px-6 py-3 rounded-xl shadow-md transition-all"
      >
        Start
      </button>
    </div>
  );
}

export default Landing;
