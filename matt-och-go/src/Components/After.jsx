import { Cards } from "./cards";
import "../CSS/home.css";

export function AfterFood({ recipes, setRecData }) {
  const afterList = [];
  for (let recipe of recipes) {
    if (recipe.mealType.includes("Dessert")) {
      afterList.push(recipe);
    }
  }

  return (
    <>
      <div className="cold-box">
        {afterList.map((food) => (
          <Cards food={food} setRecData={setRecData} />
        ))}
      </div>
    </>
  );
}
