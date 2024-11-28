import { Cards } from "../cards";
import { useState } from "react";
import "../../CSS/home.css";

export function EasyCook({ levelImg, recipes }) {
  const [isPressed, setIsPressed] = useState(false); // state som håller koll på hur många kort som ska visas

  const easyList = recipes.filter( // sparar ner alla recept som uppfyller filtreringen
    (recipe) =>
      recipe.difficulty.includes("Easy") &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
  );

  const easySlice = easyList.slice(0, 4); // skapar en variabel som håller 4 recept


  if (isPressed) { // om visa alla knappen har blivit tryck på
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
  } else { // om inte användaren tryckt på visa alla
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
