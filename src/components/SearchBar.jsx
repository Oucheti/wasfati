import { useState } from "react";

export default function SearchBar({ recipes, setFilteredRecipes }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    if (value.length >= 3) {
      const filtered = recipes.filter((recipe) =>
        recipe.titre.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Rechercher une recette..."
      className="w-full p-2 border rounded"
    />
  );
}
