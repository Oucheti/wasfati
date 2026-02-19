import { useState } from "react";
import Header from "../components/Header";
import RecipeGrid from "../components/RecipeGrid";
import recipes from "../data/data.json";

export default function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes.content);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value.length >= 3) {
      const lower = value.toLowerCase();
      const filtered = recipes.content.filter((recipe) => {
        if (recipe.titre.toLowerCase().includes(lower)) return true;

        if (recipe.description && recipe.description.toLowerCase().includes(lower)) return true;
        
        if (Array.isArray(recipe.ingredients)) {
          return recipe.ingredients.some((ing) => ing.nom.toLowerCase().includes(lower));
        }
        return false;
      });
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes.content);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#ededed]">
          <Header onSearch={handleSearch} />
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-right text-[#1b1b1b] text-[17px] mt-4 mb-2">
              {filteredRecipes.length} RECETTE(S)
            </div>
            {filteredRecipes.length > 0 ? (
              <RecipeGrid recipes={filteredRecipes} />
            ) : (
              <div className="text-center text-gray-700 bg-white rounded-lg p-8 my-8 shadow">
                Aucune recette ne contient '{searchValue}'.<br />
                Vous pouvez chercher 'tarte', 'poulet', etc.
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <nav aria-label="Pagination">
            <ul className="flex">
              <li>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  {recipes.page}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}