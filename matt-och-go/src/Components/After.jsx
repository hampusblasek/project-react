import { useNavigate } from "react-router-dom";
import "../CSS/home.css";

export function AfterFood({ recipes, setRecData }) {
  const navigate = useNavigate();

  const seeRecipe = (id) => {
    setRecData({ recipeId: id });
    navigate("recipe");
  };

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
          <div>
            <div onClick={() => seeRecipe(food.id)} className="card-box">
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
