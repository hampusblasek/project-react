import { useRecoilState } from "recoil";
import { saveRecState } from "../App";
import { Cards } from "../Components/cards";
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
    return <h1 className="h1-save">Här var det tomt!</h1>;
  }
}
