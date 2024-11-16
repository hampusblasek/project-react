import { Navigate, useNavigate } from "react-router-dom";

export function Cards({ food, setRecData }) {
  const navigate = useNavigate();

  const seeRecipe = (id) => {
    setRecData({ recipeId: id });
    navigate("recipe");
  };

  return (
    <>
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
            <img className="card-icon" src="/time-green.svg" alt="En klocka" />
            <p className="card-time">
              {food.cookTimeMinutes + food.prepTimeMinutes} minuter
            </p>
            {/* <img className="card-icon" src={() => levelImg(food.difficulty)} alt="" /> */}
            <img className="card-icon" src="/hard.svg" alt="" />
            <p>{food.difficulty}</p>
          </div>
        </div>
      </div>
    </>
  );
}
