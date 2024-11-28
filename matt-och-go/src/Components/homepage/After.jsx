import { Cards } from "../cards";
import "../../CSS/home.css";

export function AfterFood({ levelImg, recipes }) {
  const afterList = recipes.filter(
    (
      recipe // sparar ner alla recept som uppfyller filtreringen
    ) => recipe.mealType.includes("Dessert")
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
