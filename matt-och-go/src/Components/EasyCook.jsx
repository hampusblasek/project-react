import "../CSS/home.css";
import { Cards } from "./cards";
import { useState } from "react";

export function EasyCook({ recipes, setRecData, levelImg }) {
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
          <a onClick={() => setIsPressed(!isPressed)} className="a-title">
            <h3>Visa färre</h3>
          </a>
          {easyList.map((food) => (
            <Cards food={food} setRecData={setRecData} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="easy-box">
          <a onClick={() => setIsPressed(!isPressed)} className="a-title">
            <h3>Visa alla</h3>
          </a>
          {easySlice.map((food) => (
            <Cards food={food} setRecData={setRecData} levelImg={levelImg} />
          ))}
        </div>
      </>
    );
  }
}
