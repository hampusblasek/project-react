import { useRecoilState } from "recoil";
import { recipeState, saveRecState } from "../App";
import { useParams } from "react-router-dom";
import { BasicRating } from "../Components/Rating";
import { useState } from "react";
import { MessurementConverter } from "../Components/Converter";
import { Loading } from "../Components/Loading";
import * as React from "react";
import List from "@mui/material/List";
import { CheckList } from "../Components/Divider";
import "../CSS/recipe.css";

export function RecipePage({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);
  const [open, setOpen] = useState(false);
  //Söker igenom URL:en efter ett id
  const params = useParams();
  const food = recipes.find(
    (recipe) => recipe.id === Number.parseInt(params.id)
  );
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
  //Styr vilken title hjärticonen ska ha
  let heartStatus;

  // ifall inte receptet hittas
  if (!food) {
    return <Loading />;
  }
  //Om användaren vill använda måttomvandlaren
  const isOpen = () => {
    if (open) {
      return <MessurementConverter setOpen={setOpen} open={open} />;
    }
  };
  //Funktion som lägger till eller tar bort recept i sparade recept
  const saveRecipe = (food) => {
    const saveRecipe = saveRec.find((save) => save.id == food.id);
    if (!saveRecipe) {
      setSaveRec([...saveRec, food]);
    } else {
      setSaveRec(saveRec.filter((item) => item.id !== food.id));
    }
  };
  //Funktion avgör om det ska visas ett rött eller grått hjärta
  const heartImg = (food) => {
    const savedRecipe = saveRec.find((save) => save.id === food.id);
    let image = "";
    if (savedRecipe) {
      image = "/heart.svg";
      heartStatus = "Ta bort";
      return image;
    } else {
      image = "/heart-grey.svg";
      heartStatus = "Spara recept";
      return image;
    }
  };

  return (
    <>
      <div className={open ? "blur" : "recipe-container"}>
        <div className="recipe-box">
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
            <h2 className="ingredients-title">Ingredienser</h2>
            <div className="ingredients-container">
              <List sx={style}>
                {food.ingredients.map((type, index) => (
                  <CheckList key={index} type={type} />
                ))}
              </List>
            </div>
            <div className="bottom-section">
              <div className="tag-wrapper">
                {food.tags.map((tag, index) => (
                  <span key={index} className="rec-type-2">
                    {tag}
                  </span>
                ))}
              </div>
              <img className="food-icon" src="/share.svg" alt="En dela-icon" />
              <img
                onClick={() => saveRecipe(food)}
                className="food-icon-2"
                src={heartImg(food)}
                alt="Ett hjärta"
                title={heartStatus}
              />
            </div>

            <div className="rating-star">
              <BasicRating food={food} />
            </div>
            <div className="converter-btn-box">
              <button className="converter-btn" onClick={() => setOpen(!open)}>
                Måttomvandlare
              </button>
            </div>
          </div>
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
      <div className="popup-box">{isOpen()}</div>
    </>
  );
}
