import { Cards } from "../cards";
import { useRef } from "react";
import "../../CSS/home.css";

export function AfterFood({ levelImg, recipes }) {
  const scroll = useRef();

  const scrollDirection = (direction) => {
    if (direction === "left") {
      scroll ? (scroll.current.scrollLeft -= 290) : null;
    } else {
      scroll ? (scroll.current.scrollLeft += 290) : null;
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
        <div className="home-box" ref={scroll}>
          {afterList.map((food, index) => (
            <Cards key={index} food={food} levelImg={levelImg} />
          ))}
        </div>
        <button
          onClick={() => scrollDirection("right")}
          className="scroll-btn-next"
        >
          <img
            width="35px"
            src="/arrow-right.svg"
            alt="pil som pekar åt höger"
          />
        </button>
      </div>
    </>
  );
}
