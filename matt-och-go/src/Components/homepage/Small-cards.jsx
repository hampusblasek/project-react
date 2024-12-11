import { Navigate, useNavigate } from "react-router-dom";
import levelImg from "../../functions/levelImg";
// Små kort i sökfältet på homepage
export function SmallCards({ short }) {
  const navigate = useNavigate();

  const seeRecipe = (id) => {
    // navigerar användaren till receptsidan och skickar med id via url parameters
    navigate("recipe/" + id);
  };

  return (
    <>
      <div onClick={() => seeRecipe(short.id)} className="card-drop">
        <img className="img-search" src={short.image} alt="" />
        <div>
          <p>{short.name}</p>
          <div className="card-bottom-search">
            <div className="bottom-section">
              <img
                className="card-icon"
                src="/time-green.svg"
                alt="En klocka"
              />
              <p className="card-time-search">
                {short.cookTimeMinutes + short.prepTimeMinutes} minuter
              </p>
            </div>
            <div className="bottom-section">
              <img
                className="card-icon"
                src={levelImg(short.difficulty)}
                alt=""
              />
              {/*  <img className="card-icon" src="/hard.svg" alt="" /> */}
              <p>{short.difficulty}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
