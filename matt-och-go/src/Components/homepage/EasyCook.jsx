import { Cards } from "../cards";
import { useRef } from "react";
import { useState } from "react";
import "../../CSS/home.css";

export function EasyCook({ recipes }) {
  const [scrollState, setScrollState] = useState(0);
  const scroll = useRef();

  const easyList = recipes.filter(
    // sparar ner alla recept som uppfyller filtreringen
    (recipe) =>
      recipe.difficulty.includes("Easy") &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
  );
  const easySlice = easyList.slice(0,10)

  const scrollDirection = (direction) => { // funktion som styr karusellen för lättlagat på startsidan
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
          {easySlice.map((food, index) => (
            <Cards key={index} food={food} />
          ))}
        </div>
        {scrollState > easySlice.length - 5 ? (
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
