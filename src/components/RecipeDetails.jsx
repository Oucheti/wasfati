import { useParams } from "react-router-dom";
import header from "../assets/header.png";
import recipes from "../data/data.json";
export default function RecipeDetails() {
  const { id } = useParams();

  const recipe = recipes.content.find((rec) => rec.id === Number(id));
    return (
<div className="w-full min-h-screen flex flex-col">
  <header className="relative w-full h-24 md:h-32 overflow-hidden bg-gray-900">
    <img 
      src={header}
      alt="Header background"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
  </header>
  <main className="flex-grow container mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 items-stretch">
  <div className="p-6 rounded min-h-[300px] md:min-h-[400px] flex justify-center">
    {recipe.imgLink && (
      <img
        src={recipe.imgLink}
        alt={recipe.titre}
        className="w-full h-full object-cover rounded"
      />
    )}
  </div>
  <div className="p-6 rounded min-h-[300px] md:min-h-[400px] flex flex-col gap-4">

    <h1 className="text-4xl font-bold text-gray-900">
      {recipe.titre}
    </h1>
    <div>
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        Temps de préparation
      </h2>
      <span className="inline-block w-fit bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
        {recipe.tempsMinute} min
      </span>
    </div>
    <div>
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        Ingrédients
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {recipe.ingredients.slice(0, 12).map((ing, index) => (
          <div key={index}>
            <p className="text-[12px] font-medium text-[#1b1b1b]">
              {ing.nom}
            </p>
            <p className="text-[12px] text-[#7a7a7a]">
              {ing.quantite}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        Ustensiles nécessaires
      </h2>
      <span className="text-sm font-semibold text-gray-900 capitalize">
        {recipe.titre}
      </span>
    </div>
    <div>
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        Appareils nécessaires
      </h2>
      <span className="text-sm font-semibold text-gray-900 capitalize">
        {recipe.titre}
      </span>
    </div>
    <div>
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        Recette
      </h2>
      <p>{recipe.description}</p>
    </div>
    <div class="pt-4 border-t border-gray-200">
      <span class="text-sm text-gray-500">Pour 
        <span class="font-semibold text-gray-900"> 10 </span> 
        personnes
      </span>
    </div>
  </div>

</div>


  </main>
  <footer className="bg-gray-900 text-white py-6 mt-auto">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-sm text-gray-400">
        Copyright © 2026 - Les Petits Plats
      </p>
    </div>
  </footer>
</div>
  );
}