import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./components/RecipeDetails";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/not-found" element={<NotFound/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}