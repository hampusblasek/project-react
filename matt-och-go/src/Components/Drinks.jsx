import { Cards } from "./cards";
import "../CSS/home.css";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";

export function Drinks({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const drinkList = [];
  for (let recipe of recipes) {
    if (recipe.mealType.includes("Beverage")) {
      drinkList.push(recipe);
    }
  }

  return (
    <>
      <div className="drink-box">
        {drinkList.map((food) => (
          <Cards food={food} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
