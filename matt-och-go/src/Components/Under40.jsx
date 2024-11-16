import { Cards } from "./cards";
import "../CSS/home.css";
import { useState } from "react";

export function Under40({ recipes, setRecData }) {
  const [isPressed, setIsPressed] = useState(false);
  /* const levelImg = (food) => {
    const img = "";
    if (food === "Easy") {
      img = "/easy.svg";
      return img;
    } else if (food == "Medium") {
      img = "/medium.svg";
      return img;
    } else {
      img = "/hard.svg";
      return img;
    }
    return
  }; */

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
    console.log(isPressed);
    
    return (
      <>
        <div className="quick-box">
          <a onClick={() => setIsPressed(!isPressed)} className="a-title">
            <h3>Visa färre</h3>
          </a>
          {fastList.map((food) => (
            <Cards food={food} setRecData={setRecData} />
          ))}
        </div>
      </>
    );
  } else {
    console.log(isPressed);
    
    return (
      <>
        <div className="quick-box">
          <a onClick={() => setIsPressed(!isPressed)} className="a-title">
            <h3>Visa alla</h3>
          </a>
          {fastSlice.map((food) => (
            <Cards food={food} setRecData={setRecData} />
          ))}
        </div>
      </>
    );
  }
}
