import { Under40 } from "../Components/homepage/Under40";
import { EasyCook } from "../Components/homepage/EasyCook";
import { AfterFood } from "../Components/homepage/After";
import { Drinks } from "../Components/homepage/Drinks";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import { SmallCards } from "../Components/homepage/Small-cards";
import { useState } from "react";

export function HomePage({ levelImg }) {
  const [recipes] = useRecoilState(recipeState); // state som innehåller alla recept
  const [smallValue, setSmallValue] = useState("");
  const [smallCards, setSmallCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const sortCards = (e) => {
    setIsOpen(true);
    e.preventDefault();

    const filterCards = recipes.filter(
      (recipe) =>
        recipe.name
          .toUpperCase()
          .includes(
            smallValue.toUpperCase()
          ) /*  || recipe.tags.map((tag) => tag.toUpperCase()).includes(smallValue.toUpperCase()) */
    );
    setSmallCards(filterCards);
  };

  if (!recipes) {
    return <p>Laddar...</p>; // om det inte finns några recept
  }

  return (
    <>
      <div className="home-container">
        <div className="hero">
          {/* <h2 className="hero-text">Vad är du sugen på?</h2> */}
          <form className="form-pop" onChange={sortCards}>
            <input
              className="input-search"
              value={smallValue}
              onChange={(event) => setSmallValue(event.target.value)}
              type="text"
              placeholder="Vad letar du efter?"
            />
          <div className={smallValue ? "drop-down-search" : "display-none"}>
            <div className="drop-box">
              {smallCards.map((short, index) => (
                <SmallCards key={index} short={short} levelImg={levelImg} />
              ))}
              {/*  <div className="show-more">Visa fler</div> */}
            </div>
          </div>
          </form>
        </div>
        <h2 className="h2-title">Färdigt på under 40 min!</h2>
        <Under40 levelImg={levelImg} recipes={recipes} />

        <h2 className="h2-title">Något Lättlagat?</h2>
        <EasyCook levelImg={levelImg} recipes={recipes} />

        <h2 className="h2-title">Något sött?</h2>
        <AfterFood levelImg={levelImg} recipes={recipes} />

        <h2 className="h2-title">Något att dricka?</h2>
        <Drinks levelImg={levelImg} recipes={recipes} />
      </div>
    </>
  );
}
