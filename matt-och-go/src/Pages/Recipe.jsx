import { useRecoilState } from "recoil";
import levelImg from "../Functions/levelImg";
import { recipeState, saveRecState } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { BasicRating } from "../Components/Recipepage/Rating";
import { useState } from "react";
import { MessurementConverter } from "../Components/Recipepage/Converter";
import { Loading } from "../Components/Error-loading/Loading";
import * as React from "react";
import List from "@mui/material/List";
import { CheckList } from "../Components/Recipepage/Divider";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { HeartIcon } from "../Components/Recipepage/Save-recipe";
import { Navigate } from "react-router-dom";
import "../CSS/recipe.css";

export function RecipePage() {
  const [recipes] = useRecoilState(recipeState); // state som innehåller recepten
  const [saveRec] = useRecoilState(saveRecState); // state som lagrar sparade recept
  const [open, setOpen] = useState(false); // state som styr om modalen - måttkonverteraren ska visas
  const [snackState, setSnackState] = React.useState({
    // state som styr om snackbaren ska visas
    snackOpen: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, snackOpen } = snackState;

  const navigate = useNavigate();

  //Söker igenom URL:en efter ett id
  const params = useParams();
  const food = recipes.find(
    (recipe) => recipe.id === Number.parseInt(params.id)
  );
  //om inte receptet hittas.
  if (!food) {
    return <Loading />;
  }
  // style för ingredienser och instructioner
  const style = {
    py: 0,
    width: "100%",
    minWidth: 300,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  //Om användaren vill använda måttomvandlaren
  const isOpen = () => {
    if (open) {
      return <MessurementConverter setOpen={setOpen} open={open} />;
    }
  };

  // Funktion som styr vilket meddelande som ska visas i snackbaren
  const snackMessage = (food) => {
    const saveRecipe = saveRec.find((save) => save.id == food.id);

    if (!saveRecipe) {
      return "Receptet togs bort!"; // om receptet inte ligger i sparade recept
    } else {
      return "Receptet sparades!"; // om receptet ligger i sparade recept
    }
  };

  return (
    <>
      <div className={open ? "blur" : "recipe-container"}>
        <div className="recipe-box">
          {/* Här börjar sektionen information om maträtten--------------------------------------- */}
          <div className="rec-info">
            <h1 className="rec-title">{food.name}</h1>
            <div className="info">
              <img className="food-icon" src="/time-green.svg" alt="" />
              <span>{food.cookTimeMinutes + food.prepTimeMinutes} minuter</span>
              {food.mealType.map((type, index) => (
                <span key={index} className="rec-type">
                  {type}
                </span>
              ))}
              <div className="rating-box">
                <img className="star" src="/star.svg" alt="" />
                <span className="rec-rating">{food.rating}</span>
                <span className="rec-rating">({food.reviewCount})</span>
              </div>
            </div>
            <div className="info-2">
              <img
                className="food-icon"
                src={levelImg(food.difficulty)}
                alt=""
              />
              <p className="info-2-p">
                Svårighetsgrad: <span>{food.difficulty}</span>
              </p>
              <img className="food-icon" src="/calories.svg" alt="" />
              <p className="info-2-p">
                <span>{food.caloriesPerServing}</span> kalorier per portion
              </p>
            </div>

            {/* Här börjar sektionen ingredienserna för maträtten---------------------------------- */}
            <h2 className="ingredients-title">Ingredienser</h2>
            <div className="ingredients-container">
              <List sx={style}>
                {food.ingredients.map((type, index) => (
                  <CheckList key={index} type={type} />
                ))}
              </List>
            </div>

            {/* Här börjar sektionen för tags och spara recept-hjärtat-------------------- */}
            <div className="bottom-section">
              <div className="tag-wrapper">
                {food.tags.map((tag, index) => (
                  <span key={index} className="rec-type-2">
                    {tag}
                  </span>
                ))}
              </div>
              <HeartIcon setSnackState={setSnackState} food={food} />
            </div>

            {/* Här börjar sektionen för betyg och måttomvandlare------------------------- */}
            <div className="rating-star">
              <BasicRating food={food} />
            </div>
            <div className="converter-btn-box">
              <button className="converter-btn" onClick={() => setOpen(!open)}>
                Måttomvandlare
              </button>
            </div>

            <img
              onClick={() => navigate(-1)}
              className="arrow-back"
              src="/back-arrow.svg"
              alt="Tillbakapil"
              title="Tillbaka"
            />
          </div>

          {/* Här börjar sektionen bild och instruktioner-----------------------------------------*/}
          <div className="rec-img">
            <img className="food-img" src={food.image} alt="" />
            <div className="instruction-title">
              <img className="food-icon" src="/chef-hat.svg" alt="" />
              <h2 className="instruction-h2">Gör Såhär</h2>
            </div>
            <div className="instruction-box">
              <List sx={style}>
                {food.instructions.map((type, index) => (
                  <CheckList key={index} type={type} />
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>

      {/* Här börjar sektionen för popup, när ett recept sparas eller tas bort-------------------- */}
      <div className="popup-box">{isOpen()}</div>
      <Box sx={{ width: 500, bgcolor: "black" }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={snackOpen}
          message={snackMessage(food)}
          key={vertical + horizontal}
        />
      </Box>
    </>
  );
}
