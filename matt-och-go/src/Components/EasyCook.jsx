import "../CSS/home.css";
import { Cards } from "./cards";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import { Loading } from "./Loading";

export function EasyCook({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [isPressed, setIsPressed] = useState(false);

  if (!recipes) {
    return <p>Laddar...</p>;
  }
  const easyList = recipes.filter(
    (recipe) =>
      recipe.difficulty.includes("Easy") &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
  );

  const easySlice = easyList.slice(0, 4);

  if (isPressed) {
    return (
      <>
        <div className="easy-box">
          <h3 onClick={() => setIsPressed(!isPressed)} className="a-title">
            Visa färre
          </h3>

          {easyList.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
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

          {easySlice.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  }
}
