import { Cards } from "../cards";
import "../../CSS/home.css";
import { useRef, useState } from "react";

export function Under40({ recipes }) {
  const [scrollState, setScrollState] = useState(0);
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
      setScrollState(scrollState - 1);
    } else {
      scroll ? (scroll.current.scrollLeft += 290) : null;
      setScrollState(scrollState + 1);
    }
  };
  return (
    <>
      <div className="under40-container">
        {scrollState > 0 ? (
          <button
            onClick={() => scrollDirection("left")}
            className="scroll-btn-next"
          >
            <img
              width="35px"
              src="/arrow-left.svg"
              alt="pil som pekar åt vänster"
            />
          </button>
        ) : (
          <button className="scroll-btn-off"></button>
        )}

        <div className="home-box" ref={scroll}>
          {fastList.map((food, index) => (
            <Cards key={index} food={food} />
          ))}
        </div>
        {scrollState > fastList.length - 5 ? (
          <button className="scroll-btn-off"></button>
        ) : (
          <button
            onClick={() => scrollDirection("right")}
            className="scroll-btn-next"
          >
            <img
              width="35px"
              src="/arrow-right.svg"
              alt="pil som pekar åt vänster"
            />
          </button>
        )}
      </div>
    </>
  );
}
