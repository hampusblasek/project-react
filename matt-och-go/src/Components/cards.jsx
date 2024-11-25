import { Navigate, useNavigate } from "react-router-dom";
import "../CSS/cards.css";

export function Cards({ food, levelImg }) {
  const navigate = useNavigate();

  if (!food) {
    return <p>Laddar...</p>;
  }

  const seeRecipe = (id) => {
    console.log(id);

    navigate("recipe/" + id);
  };

  return (
    <>
      <div key={food.id}>
        <div onClick={() => seeRecipe(food.id)} className="card-box">
          <div className="img-box">
            <img className="card-img" src={food.image} alt="Bild på maträtt" />
          </div>
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
            <img className="card-icon" src={levelImg(food.difficulty)} alt="" />
            {/*  <img className="card-icon" src="/hard.svg" alt="" /> */}
            <p>{food.difficulty}</p>
          </div>
        </div>
      </div>
    </>
  );
}
