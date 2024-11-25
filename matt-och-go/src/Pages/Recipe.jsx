import { useRecoilState } from "recoil";
import { recipeState, saveRecState } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BasicRating } from "../Components/Rating";
import "../CSS/recipe.css";
import { useState } from "react";
import { MessurementConverter } from "../Components/Converter";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/errorPage";

export function RecipePage({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);
  const [open, setOpen] = useState(false);

  const params = useParams();
  const food = recipes.find(
    (recipe) => recipe.id === Number.parseInt(params.id)
  );
  // ifall inte receptet hittas
  if (!food) {
    return <Loading/>
  }
  

  const isOpen = () => {
    if (open) {
      return <MessurementConverter setOpen={setOpen} open={open} />;
    }
  };

  const names = [];
  for (let save of saveRec) {
    names.push(save.name);
  }
  const saveRecipe = (food) => {
    if (!names.includes(food.name)) {
      setSaveRec([...saveRec, food]);
    } else {
      setSaveRec(saveRec.filter((item) => item.id !== food.id));
    }
  };
  const heartImg = (food) => {
    let image = "";
    console.log(names);
    if (names.includes(food.name)) {
      image = "/heart.svg";
      return image;
    } else {
      image = "/heart-grey.svg";
      return image;
    }
  };

  return (
    <>
      <div className={open ? "blur": "recipe-container"}>
        <div className="recipe-box">
          <div className="rec-info">
            <h1 className="rec-title">{food.name}</h1>
            <div className="info">
              <img className="food-icon" src="/time-green.svg" alt="" />
              <span>{food.cookTimeMinutes + food.prepTimeMinutes} minuter</span>
              {food.mealType.map((type) => (
                <span className="rec-type">{type}</span>
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
              <div className="ingredients-box">
                {food.ingredients.map((type) => (
                  <div className="ingredients-content">
                    <input className="check" type="checkbox" />
                    <span className="rec-ingredients">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bottom-section">
              <div className="tag-wrapper">
                {food.tags.map((tag) => (
                  <span className="rec-type-2">{tag}</span>
                ))}
              </div>
              <img className="food-icon" src="/share.svg" alt="En dela-icon" />
              <img
                onClick={() => saveRecipe(food)}
                className="food-icon-2"
                src={heartImg(food)}
                alt="Ett hjärta"
              />
            </div>

            <div className="rating-star">
              <BasicRating food={food} />
            </div>
            <div className="converter-btn-box">
              <button className="converter-btn" onClick={() => setOpen(!open)}>Måttomvandlare</button>
            </div>
          </div>
          <div className="rec-img">
            <img className="food-img" src={food.image} alt="" />
            <div className="instruction-title">
              <img className="food-icon" src="/chef-hat.svg" alt="" />
              <h2 className="instruction-h2">Gör Såhär</h2>
            </div>
            <div className="instruction-box">
              <ul>
                {food.instructions.map((how, index) => (
                  <li key={index} className="instruction-li">
                    {how}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="popup-box">{isOpen()}</div>
    </>
  );
}
