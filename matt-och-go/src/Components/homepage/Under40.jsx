import { Cards } from "../cards";
import { useState } from "react";
import "../../CSS/home.css";

export function Under40({ levelImg, recipes }) {
  const [isPressed, setIsPressed] = useState(false); // state som håller koll på hur många kort som ska visas

  const fastList = recipes.filter(
    // sparar ner alla recept som uppfyller filtreringen
    (recipe) =>
      recipe.prepTimeMinutes + recipe.cookTimeMinutes < 40 &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
  );

  const fastSlice = fastList.slice(0, 4); // skapar en variabel som håller 4 recept

  if (isPressed) {
    // om visa alla knappen har blivit tryck på
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
    // om inte användaren tryckt på visa alla
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
