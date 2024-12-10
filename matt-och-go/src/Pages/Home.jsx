import { Under40 } from "../components/homepage/Under40";
import { Cards } from "../components/Cards";
import { EasyCook } from "../components/homepage/EasyCook";
import { AfterFood } from "../components/homepage/After";
import { Drinks } from "../components/homepage/Drinks";
import { useRecoilState } from "recoil";
import { randomColdState, randomHotState, recipeState } from "../App";
import { SmallCards } from "../components/homepage/Small-cards";
import { useState } from "react";


export function HomePage({ levelImg }) {
  const [recipes] = useRecoilState(recipeState); // state som innehåller alla recept
  const [smallValue, setSmallValue] = useState("");
  const [smallCards, setSmallCards] = useState([]);
  const [randomHot, setRandomHot] = useRecoilState(randomHotState);
  const [randomCold, setRandomCold] = useRecoilState(randomColdState);
  const [isOpen, setIsOpen] = useState(false);

  const sortCards = (e) => {
    setIsOpen(true);
    e.preventDefault();

    const filterCards = recipes.filter((recipe) =>
      recipe.name.toUpperCase().includes(smallValue.toUpperCase())
    );
    setSmallCards(filterCards);
  };
  const hotFood = recipes.filter(
    (food) =>
      food.mealType.includes("Dinner") || food.mealType.includes("Lunch")
  );
  const coldFood = recipes.filter((food) => food.mealType.includes("Dessert"))
  console.log(coldFood);
  
  let food;
  const randomHotFood = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    food = hotFood.find((food, index) => index == randomNumber);
    setRandomHot(food);
  };
  const randomColdFood = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    food = coldFood.find((food, index) => index == randomNumber);
    setRandomCold(food);
  };

  if (!recipes) {
    return <p>Laddar...</p>; // om det inte finns några recept
  }

  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h2 className="hero-text">Vad är du sugen på?</h2>
          <form className="form-pop" onChange={sortCards}>
            <input
              className="input-search"
              value={smallValue}
              onChange={(event) => setSmallValue(event.target.value)}
              type="text"
              placeholder="Skriv in det här..."
            />
            <div className={smallValue ? "drop-down-search" : "display-none"}>
              <p
                className={smallCards.length > 0 ? "display-none" : "no-match"}
              >
                Inga resultat hittades
              </p>
              <div className="drop-box">
                {smallCards.map((short, index) => (
                  <SmallCards key={index} short={short} />
                ))}
              </div>
              <img
                className={smallCards.length > 5 ? "img-pop" : "display-none"}
                src="/arrow.svg"
                alt=""
              />
            </div>
          </form>
        </div>
        <h2 className="h2-title">Färdigt på under 40 min!</h2>
        <Under40 recipes={recipes} />

        <h2 className="h2-title">Något Lättlagat?</h2>
        <EasyCook recipes={recipes} />

        <h2 className="h2-title">Något sött?</h2>
        <AfterFood recipes={recipes} />

        <h2 className="h2-title">Något att dricka?</h2>
        <Drinks recipes={recipes} />

        <h2 className="h2-title">Vad ska vi äta?</h2>
        <div className="random-box">
          <div className="random-card-box">
            {randomHot ? <Cards food={randomHot} /> : <p className="random-text">Tryck på slumpa varmrätt för att få ett tips på Varmrätt! </p>}
            <button className="random-btn" onClick={() => randomHotFood()}>Slumpa Varmrätt</button>
          </div>
          <div className="random-card-box">
            {randomCold ? <Cards food={randomCold} /> : <p className="random-text">Tryck på slumpa dessert för att få ett tips på Dessert! </p>}
            <button className="random-btn" onClick={() => randomColdFood()}>Slumpa Dessert</button>
          </div>
        </div>
      </div>
    </>
  );
}
