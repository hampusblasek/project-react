import { useNavigate } from "react-router-dom";
import "../CSS/home.css";

export function Drinks({ recipes, setRecData }) {
  const navigate = useNavigate();

  const seeRecipe = (id) => {
    setRecData({ recipeId: id });
    navigate("recipe");
  };
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
          <div>
            <div onClick={() => seeRecipe(food.id)} className="card-box-last">
              <img src={food.image} width="300" alt="" />
              <p className="card-title">{food.name}</p>
              <div className="card-img-box">
                <img className="img-star" src="/star.svg" alt="En stjärna" />
                <p>
                  <span>{food.rating}</span> (<span>{food.reviewCount}</span>)
                </p>
              </div>
              <div className="card-bottom">
                <img
                  className="card-icon"
                  src="/time-green.svg"
                  alt="En klocka"
                />
                <p className="card-time">
                  {food.cookTimeMinutes + food.prepTimeMinutes} minuter
                </p>
                <img className="card-icon" src="/hard.svg" alt="" />
                <p>{food.difficulty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
