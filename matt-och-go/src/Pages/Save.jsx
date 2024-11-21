import { useRecoilState } from "recoil";
import { saveRecState } from "../App";
import { Cards } from "../Components/cards";
import { NavLink } from "react-router-dom";
import "../CSS/save.css";

export function SavedRecipes({ levelImg }) {
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);

  const deleteFood = (id) => {
    setSaveRec(saveRec.filter((item) => item.id !== id));
  };

  if (saveRec.length > 0) {
    return (
      <>
        <div className="save-container">
          <h1 className="save-title">Här kan du hitta dina sparade recept!</h1>
          <div className="save-box">
            {saveRec.map((food) => (
              <div>
                <Cards food={food} levelImg={levelImg} />
                <div className="btn-box">
                  <button
                    onClick={() => deleteFood(food.id)}
                    className="del-btn"
                  >
                    Ta bort
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
    <div className="save-container">
      <div className="save-wrapper">
        <div className="save-text-box">
          <h1 className="h1-save">Här var det tomt!</h1>
          <p className="save-text">Tryck på hjärtat i ett recept för att spara ett recept</p>
          {/* <div className="link-box">
            <NavLink className="save-link" to="category">
              Till ny inspiration!
            </NavLink>
          </div> */}
        </div>
        <img className="save-img" src="/Cooking.svg" alt="" />
      </div>
    </div>)
  }
}
