import { Navigate, useNavigate } from "react-router-dom";
import "../CSS/home.css";

export function Under40({ recipes, setRecData, recData }) {
  const navigate = useNavigate();

  const levelImg = (food) => {
    const img = "";
    if (food === "Easy") {
      img = "/easy.svg";
      return img;
    } else if (food == "Medium") {
      img = "/medium.svg";
      return img;
    } else {
      img = "/hard.svg";
      return img;
    }
    return
  };

  const seeRecipe = (id) => {
    setRecData({ recipeId: id });
    navigate("recipe");
  };

  const fastList = [];
  for (let recipe of recipes) {
    if (
      recipe.cookTimeMinutes + recipe.prepTimeMinutes < 40 &&
      !recipe.mealType.includes("Dessert") &&
      !recipe.mealType.includes("Beverage")
    ) {
      fastList.push(recipe);
    }
  }
  const fastSlice = fastList.slice(0, 8);

  return (
    <>
      <div className="quick-box">
        <a className="a-title">
          <h3>Visa alla</h3>
        </a>
        {fastSlice.map((food) => (
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
                {/* <img className="card-icon" src={() => levelImg(food.difficulty)} alt="" /> */}
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
