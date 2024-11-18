import { Cards } from "./cards";
import "../CSS/home.css";

export function Drinks({ recipes, setRecData, levelImg }) {
  const drinkList = [];
  for (let recipe of recipes) {
    if (recipe.mealType.includes("Beverage")) {
      drinkList.push(recipe);
    }
  }

  return (
    <>
      <div className="drink-box">
        {drinkList.map((food) => (
          <Cards food={food} setRecData={setRecData} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
