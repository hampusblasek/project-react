import { useRecoilState } from "recoil";
import { saveRecState } from "../App";
import { Cards } from "../components/Cards";
import Button from "@mui/material/Button";
import "../CSS/save.css";
// Sparade recept-sidan
export function SavedRecipes({ levelImg }) {
  const [saveRec, setSaveRec] = useRecoilState(saveRecState); //State som innehåller de sparade recepten

  const deleteFood = (id) => {
    setSaveRec(saveRec.filter((item) => item.id !== id)); // om användaren vill ta bort receptet från sparade recept
  };

  if (saveRec.length > 0) {
    //Om det finns några sparade recept
    return (
      <>
        <div className="save-container">
          <h1 className="save-title">Här kan du hitta dina sparade recept!</h1>
          <div className="save-box">
            {saveRec.map((food, index) => (
              <div key={index}>
                <Cards food={food} levelImg={levelImg} />
                <div className="btn-box">
                  <Button
                    onClick={() => deleteFood(food.id)}
                    variant="contained"
                    color="error"
                  >
                    Ta bort
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    // om det inte finns några sparade recept
    return (
      <div className="save-container">
        <div className="save-wrapper">
          <div className="save-text-box">
            <h1 className="h1-save">Här var det tomt!</h1>
            <p className="save-text">
              Tryck på hjärtat i ett recept för att spara ett recept
            </p>
            <div className="link-box"></div>
          </div>
          <img className="save-img" src="/Cooking.svg" alt="" />
        </div>
      </div>
    );
  }
}
