import "../CSS/category.css";
import { Cards } from "../Components/cards";
import { useRecoilState } from "recoil";
import {
  recipeState,
  globalAllState,
  globalCuisineState,
  globalTypeState,
} from "../App";

export function Categories({
  setCatData,
  catData,
  setTitle,
  title,
  setTitle2,
  title2,
}) {
  const [recipes] = useRecoilState(recipeState);
  const [cuisineState, setCuisineState] = useRecoilState(globalCuisineState);
  const [typeState, setTypeState] = useRecoilState(globalTypeState);
  const [allState, setAllState] = useRecoilState(globalAllState);

  const cuisineList = [];
  for (let recipe of recipes) {
    if (!cuisineList.includes(recipe.cuisine)) {
      // Här filtreras alla dubbletter ut
      cuisineList.push(recipe.cuisine);
    }
  }
  const filterCuisine = (category) => {
    setCatData("");
    setCatData(recipes.filter((value) => value.cuisine === category)); // Här filtreras alla recept ut som inte stämmer överräns med vald kategori
    setTitle(category); // Sätter titeln efter vald kategori

    return catData;
  };
  const filterType = (type) => {
    setCatData("");
    setCatData(recipes.filter((value) => value.mealType.includes(type))); // Här filtreras alla recept ut som inte stämmer överräns med vald kategori
    if (type == "Dinner") {
      setTitle("Middag"); // Sätter titeln efter vald kategori
    } else if (type == "Beverage") {
      setTitle("Dryck");
    } else {
      setTitle(type);
    }

    return catData;
  };
  const mainFilter = (value) => {
    setCatData([]);
    setTitle("");
    if (value === "cuisine") {
      setCuisineState(true);
      setTypeState(false);
      setAllState(false);
      setTitle2("Vald kategori: Världens kök");
    } else if (value === "type") {
      setCuisineState(false);
      setTypeState(true);
      setAllState(false);
      setTitle2("Vald kategori: Måltid");
    } else {
      setCatData(recipes);
      setCuisineState(false);
      setTypeState(false);
      setAllState(true);
      setTitle("Alla recept");
      setTitle2("Vald kategori: Alla recept");
    }
  };

  return (
    <>
      <div className="category-container">
        <h1 className="category-title">Välj en kategori</h1>
        <h2 className="text-title2">{title2}</h2>
        <div className="category-btn-box">
          <button
            className="category-btn"
            onClick={() => mainFilter("cuisine")}
          >
            Världens kök
          </button>
          <button className="category-btn" onClick={() => mainFilter("type")}>
            Måltid
          </button>
          <button className="category-btn" onClick={() => mainFilter("all")}>
            Alla recept
          </button>
        </div>
        <div className="category-container1">
          {cuisineList.map((category, index) => (
            <div
              key={index}
              onClick={() => filterCuisine(category)}
              className={cuisineState ? "category-box" : "display-none"}
            >
              <p>{category}</p>
            </div>
          ))}

          <div className={typeState ? "category-box-1" : "display-none"}>
            <p onClick={() => filterType("Lunch")} className="type-meal">
              Lunch
            </p>
            <p onClick={() => filterType("Dinner")} className="type-meal">
              Middag
            </p>
            <p onClick={() => filterType("Dessert")} className="type-meal">
              Dessert
            </p>
            <p onClick={() => filterType("Beverage")} className="type-meal">
              Dryck
            </p>
          </div>
        </div>
        <h1 className="category-title">{title}</h1>
        <div className="cuisine-container">
          {catData.map((food, index) => (
            <Cards key={index} food={food} />
          ))}
        </div>
      </div>
    </>
  );
}
