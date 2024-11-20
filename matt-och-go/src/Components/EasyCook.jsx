import "../CSS/home.css";
import { Cards } from "./cards";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";

export function EasyCook({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [isPressed, setIsPressed] = useState(false);
  const easyList = [];

  for (let recipe of recipes) {
    if (
      recipe.difficulty.includes("Easy") &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
    ) {
      easyList.push(recipe);
    }
  }
  const easySlice = easyList.slice(0, 4);

  if (isPressed) {
    return (
      <>
        <div className="easy-box">
          <h3 onClick={() => setIsPressed(!isPressed)} className="a-title">
            Visa färre
          </h3>

          {easyList.map((food) => (
            <Cards food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="easy-box">
          <h3 onClick={() => setIsPressed(!isPressed)} className="a-title">
            Visa alla
          </h3>

          {easySlice.map((food) => (
            <Cards food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  }
}
