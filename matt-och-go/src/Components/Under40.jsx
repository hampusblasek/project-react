import { Cards } from "./cards";
import "../CSS/home.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";

export function Under40({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [isPressed, setIsPressed] = useState(false);

  const fastList = [];
  for (let recipe of recipes) {
    if (
      recipe.cookTimeMinutes + recipe.prepTimeMinutes < 40 &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
    ) {
      fastList.push(recipe);
    }
  }
  const fastSlice = fastList.slice(0, 4);

  if (isPressed) {
    return (
      <>
        <div className="quick-box">
          <h3 onClick={() => setIsPressed(!isPressed)} className="a-title">
            Visa färre
          </h3>

          {fastList.map((food) => (
            <Cards food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="quick-box">
          <a onClick={() => setIsPressed(!isPressed)} className="a-title">
            <h3>Visa alla</h3>
          </a>
          {fastSlice.map((food) => (
            <Cards food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  }
}
