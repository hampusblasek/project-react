import { Cards } from "./cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import "../CSS/home.css";

export function AfterFood({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);

  if (!recipes) {
    return <p>Laddar...</p>;
  }
  const afterList = recipes.filter((recipe) =>
    recipe.mealType.includes("Dessert")
  );

  return (
    <>
      <div className="cold-box">
        {afterList.map((food) => (
          <Cards food={food} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
