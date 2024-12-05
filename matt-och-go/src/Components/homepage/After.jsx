import { Cards } from "../cards";
import { useRef } from "react";
import { useState } from "react";
import "../../CSS/home.css";

export function AfterFood({ recipes }) {
  const [scrollState, setScrollState] = useState(0);
  const scroll = useRef();

  const scrollDirection = (direction) => {
    if (direction === "left") {
      scroll ? (scroll.current.scrollLeft -= 290) : null;
      setScrollState(scrollState - 1);
    } else {
      scroll ? (scroll.current.scrollLeft += 290) : null;
      setScrollState(scrollState + 1);
    }
  };
  const afterList = recipes.filter(
    (
      recipe // sparar ner alla recept som uppfyller filtreringen
    ) => recipe.mealType.includes("Dessert")
  );

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
          <button className="scroll-btn-off-3"></button>
        )}

        <div className="home-box" ref={scroll}>
          {afterList.map((food, index) => (
            <Cards key={index} food={food} />
          ))}
        </div>
        {scrollState > afterList.length - 5 ? (
          <button className="scroll-btn-off-3"></button>
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
