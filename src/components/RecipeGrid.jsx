import { Link } from "react-router-dom";

export default function RecipeGrid({ recipes = [] }) {
   return (
    <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
        ">
        {Array.isArray(recipes) && recipes.map((rec)=> (
          <Link to={`/recipe/${rec.id}`}>
            <div className="bg-white rounded-xl shadow p-4 relative"
            key ={rec.id}>
              <div className="bg-[#ffd15b] px-[20px] py-[5px] rounded-[14px] w-[63px] h-[26px] gap-[10px] flex items-center justify-center
              absolute right-7 font-manrope font-normal text-[12px] top-7">
                {rec.tempsMinute}min
              </div>
              <img alt={rec.titre} src={rec.imgLink} />
              <h2 className="font-anton font-normal text-[16px] leading-[20px] text-black left-[25px] pt-[20px] pb-[5px]"
              >
                {rec.titre}
              </h2>
              <p className="font-manrope font-bold text-[12px] leading-[16.39px] tracking-[0.09em] text-[rgb(122,122,122)] uppercase pt-[25px] pb-[15px]">
                Recette
              </p>
              <p className="font-manrope font-normal text-[10px] text-[rgb(27,27,27)] max-h-[76px] leading-normal not-italic overflow-hidden overflow-ellipsis">
                {rec.description}
              </p>
              <h3 className="font-manrope font-bold text-[12px] leading-[16.39px] tracking-[0.09em] text-[rgb(122,122,122)] uppercase pt-[25px] pb-[15px]">
                Ingrédients
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Array.isArray(rec.ingredients) && rec.ingredients.slice(0,8).map((ing, index) => (
                    <div className="box-border" key={index}>
                        <p className="w-[160px] text-[#1b1b1b] font-manrope text-[12px] font-medium m-0">
                            {ing.nom}
                        </p>
                        <p className="font-manrope font-normal text-[12px] text-[#7a7a7a] leading-normal m-[3px]">
                            {ing.quantite}
                        </p> 
                    </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}