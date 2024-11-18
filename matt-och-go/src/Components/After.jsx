import { Cards } from "./cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import "../CSS/home.css";

export function AfterFood({setRecData, levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
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
          <Cards food={food} setRecData={setRecData} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
