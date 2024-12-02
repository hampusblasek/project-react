import { Cards } from "../cards";
import "../../CSS/home.css";
import { useRef } from "react";

export function Under40({ levelImg, recipes }) {
  const scroll = useRef();

  const fastList = recipes.filter(
    // sparar ner alla recept som uppfyller filtreringen
    (recipe) =>
      recipe.prepTimeMinutes + recipe.cookTimeMinutes < 40 &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
  );

  const scrollDirection = (direction) => {
    if (direction === "left") {
      scroll ? (scroll.current.scrollLeft -= 290) : null;
    } else {
      scroll ? (scroll.current.scrollLeft += 290) : null;
    }
  };
  return (
    <>
      <div className="under40-container">
        <button
          onClick={() => scrollDirection("left")}
          className="scroll-btn-next"
        >
          <img width="35px" src="/arrow-left.svg" alt="pil som pekar åt vänster" />
        </button>
        <div className="quick-box" ref={scroll}>
          {fastList.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
          ))}
        </div>
        <button
          onClick={() => scrollDirection("right")}
          className="scroll-btn-next"
        >
          <img width="35px" src="/arrow-right.svg" alt="pil som pekar åt höger" />
        </button>
      </div>
    </>
  );
}
