import { Navigate, useNavigate } from "react-router-dom";
import { Loading } from "./error-loading/Loading";
import levelImg from "../functions/levelImg";
import "../CSS/cards.css";
//Receptkort som används inom i stort sätt alla sidor
export function Cards({ food }) {
  const navigate = useNavigate();

  const seeRecipe = (id) => {
    // navigerar användaren till receptsidan och skickar med id via url parameters
    navigate("recipe/" + id);
  };

  return (
    <>
      <div>
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
