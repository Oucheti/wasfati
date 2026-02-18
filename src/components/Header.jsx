import banner from "../assets/header.png";

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto">
            <div
                className="
                    w-full
                    h-[200px]
                    sm:h-[250px]
                    md:h-[300px]
                    lg:h-[350px]
                    bg-cover
                    bg-center
                    flex
                    items-center
                    justify-center
                    text-center
                    relative
                "
                style={{ backgroundImage: `url(${banner})` }}
            >
                <nav class="header-nav absolute top-4 right-4">
                    <ul className="flex items-center space-x-4">
                      <li>
                        <a class="no-underline text-white px-5 py-2.5 border border-white rounded transition-colors duration-300"
                        href="http://localhost:5173/login" data-discover="true">Login</a>
                      </li>
                      <li>
                        <a class="bg-[#FFC312] text-black rounded px-5 py-3 cursor-pointer 
                        transition-colors duration-300 border-0 add-recipe-btn
                        no-underline text-white px-5 py-2.5 border border-white rounded transition-colors duration-300" 
                          href="http://localhost:5173/add-recipe" 
                          data-discover="true">Ajouter une recette
                        </a>
                      </li>
                    </ul>
                </nav>
                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

                <div className="relative z-10 flex flex-col items-center gap-4 px-4">
                    <h1 className="
                        text-yellow-400
                        font-bold
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        lg:text-3xl
                        max-w-2xl
                    ">
                        DECOUVEREZ NOS TENDANCES QUI FLAMBENT A TRAVERS NOS MEILLEURES RECETTES
                    </h1>
                    <div className="
                        flex
                        w-full
                        max-w-md
                        bg-white/90
                        rounded-lg
                        overflow-hidden
                        shadow-lg
                    ">
                        <input
                            type="text"
                            placeholder="Rechercher une recette..."
                            className="
                                flex-1
                                px-4
                                py-2
                                outline-none
                                text-gray-700
                            "
                        />
                        <button className="
                            bg-yellow-400
                            px-4
                            hover:bg-yellow-500
                            transition
                        ">
                          🔍
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}