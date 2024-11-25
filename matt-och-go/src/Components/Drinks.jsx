import { Cards } from "./cards";
import "../CSS/home.css";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import { Loading } from "./Loading";

export function Drinks({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);

  if (!recipes) {
    return <Loading/>;
  }

  const drinkList = recipes.filter((recipe) =>
    recipe.mealType.includes("Beverage")
  );

  return (
    <>
      <div className="drink-box">
        {drinkList.map((food) => (
          <Cards food={food} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
