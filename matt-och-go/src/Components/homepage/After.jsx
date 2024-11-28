import { Cards } from "../cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../../App";
import "../../CSS/home.css"

export function AfterFood({ levelImg }) {
  const [recipes] = useRecoilState(recipeState); // state som innehåller alla recept

  if (!recipes) {
    return <p>Laddar...</p>; // om det inte finns några recept
  }
  const afterList = recipes.filter((recipe) => // sparar ner alla recept som uppfyller filtreringen
    recipe.mealType.includes("Dessert")
  );

  return (
    <>
      <div className="cold-box">
        {afterList.map((food, index) => (
          <Cards key={index} food={food} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
