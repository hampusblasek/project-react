import { Cards } from "./cards";
import "../CSS/home.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import { Loading } from "./Loading";

export function Under40({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [isPressed, setIsPressed] = useState(false);

  if (!recipes) {
    return <Loading/>;
  }
  const fastList = recipes.filter(
    (recipe) =>
      recipe.prepTimeMinutes < 40 &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
  );

  const fastSlice = fastList.slice(0, 4);

  if (isPressed) {
    return (
      <>
        <div className="quick-box">
          <h3 onClick={() => setIsPressed(!isPressed)} className="a-title">
            Visa färre
          </h3>

          {fastList.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="quick-box">
          <h3 onClick={() => setIsPressed(!isPressed)} className="a-title">
            Visa alla
          </h3>

          {fastSlice.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  }
}
