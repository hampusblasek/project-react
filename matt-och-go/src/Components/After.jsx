import { Cards } from "./cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";
import { Loading } from "./Loading";
import "../CSS/home.css";

export function AfterFood({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);

  if (!recipes) {
    return <Loading/>;
  }
  const afterList = recipes.filter((recipe) =>
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
