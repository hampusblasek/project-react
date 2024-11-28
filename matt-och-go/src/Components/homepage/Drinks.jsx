import { Cards } from "../cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../../App";
import "../../CSS/home.css"

export function Drinks({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState); // state som innehåller alla recept

  if (!recipes) { 
    return <p>Laddar...</p>; // om det inte finns några recept
  }

  const drinkList = recipes.filter((recipe) => // sparar ner alla recept som uppfyller filtreringen
    recipe.mealType.includes("Beverage")
  );

  return (
    <>
      <div className="drink-box">
        {drinkList.map((food, index) => (
          <Cards key={index} food={food} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
