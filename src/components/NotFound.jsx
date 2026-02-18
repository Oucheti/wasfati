import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page introuvable</p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
