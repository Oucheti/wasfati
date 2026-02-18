import Header from "../components/Header";
import RecipeGrid from "../components/RecipeGrid";
import recipes from "../data/data.json";
export default function Home() {

  return (
    <>
    <div className="max-w-7xl mx-auto">
      <div className="bg-[#ededed]">
        <Header />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-right text-[#1b1b1b] text-[17px] mt-4 mb-2">
              {recipes.content.length} RECETTE(S)
          </div>
          <RecipeGrid recipes={recipes.content} />
        </div>
      </div>
      <div class="flex justify-center">
        <nav aria-label="Pagination">
          <ul class="flex">
            <li>
              <button
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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