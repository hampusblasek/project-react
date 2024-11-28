import { Cards } from "../cards";
import { useRecoilState } from "recoil";
import { recipeState } from "../../App";
import "../../CSS/home.css"

export function Drinks({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);

  if (!recipes) {
    return <p>Laddar...</p>;
  }

  const drinkList = recipes.filter((recipe) =>
    recipe.mealType.includes("Beverage")
  );

  return (
    <>
      <div className="drink-box">
        {drinkList.map((food, index) => (
          <Cards key={index} food={food} levelImg={levelImg} />
        ))}
      </div>
    </>
  );
}
