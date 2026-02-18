import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./components/RecipeDetails";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}