import "../CSS/category.css";
import { Cards } from "../Components/cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";

export function Categories({ setCatData, catData, setTitle, title, levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const catList = [];
  for (let recipe of recipes) {
    if (!catList.includes(recipe.cuisine)) { // Här filtreras alla dubbletter ut
      catList.push(recipe.cuisine);
    }
  }
  const filterCat = (category) => {
    setCatData(recipes.filter((value) => value.cuisine === category)); // Här filtreras alla recept ut som inte stämmer överräns med vald kategori
    setTitle(category); // Sätter titeln efter vald kategori
    return catData;
  };

  return (
    <>
      <div className="category-container">
        <h1 className="category-title">Välj en kategori</h1>
        <div className="category-container1">
          {catList.map((category) => (
            <div
              key={category}
              onClick={() => filterCat(category)}
              className="category-box"
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <h1 className="category-title">{title}</h1>
        <div className="cuisine-container">
          {catData.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
          ))}
        </div>
      </div>
    </>
  );
}
